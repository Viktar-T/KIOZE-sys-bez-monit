#!/usr/bin/env bash
# Build the course site in the cloud container and serve it on port 3100.
#
# Usage:  bash build_site.sh [lecture_dir ...]
#   lecture_dir  a finished lecture folder (e.g. /mnt/user-data/outputs/lecture/wyklad-03-architektura-monitoringu);
#                it is copied into bezp-monit/docs/wyklady-bezp/ of the snapshot before building.
# Env:    REPO     snapshot root (default /home/claude/repo)
#         INSTALL  folder with files mirroring repo paths that are overlaid first
#                  (default /mnt/user-data/outputs/install, skipped if missing)
#         PORT     serve port (default 3100)
#
# Never run this on the lecturer's computer: it installs Linux node_modules.
set -euo pipefail
REPO=${REPO:-/home/claude/repo}
INSTALL=${INSTALL:-/mnt/user-data/outputs/install}
PORT=${PORT:-3100}
SITE="$REPO/bezp-monit"
[ -f "$SITE/package.json" ] || { echo "no site at $SITE (snapshot missing? see 04-environment.md A.3)"; exit 1; }

if [ -d "$INSTALL" ]; then
  cp -r "$INSTALL/." "$REPO/"
  echo "overlaid $INSTALL"
fi
for d in "$@"; do
  name=$(basename "${d%/}")
  rm -rf "$SITE/docs/wyklady-bezp/$name"
  cp -r "${d%/}" "$SITE/docs/wyklady-bezp/$name"
  echo "copied lecture $name"
done

cd "$SITE"
if [ ! -d node_modules ]; then
  echo "npm ci …"
  npm ci --no-audit --no-fund > /tmp/npmci.log 2>&1 || { tail -30 /tmp/npmci.log; echo "NPM CI FAILED"; exit 1; }
fi
echo "npm run build …"
if ! npm run build > /tmp/build.log 2>&1; then
  tail -60 /tmp/build.log
  echo "BUILD FAILED (full log: /tmp/build.log)"
  exit 1
fi
if grep -nE "\[WARNING\]|Warning:|warn " /tmp/build.log; then
  echo "BUILD HAS WARNINGS (full log: /tmp/build.log)"
  exit 1
fi
grep -q "\[SUCCESS\]" /tmp/build.log || { echo "no [SUCCESS] line in /tmp/build.log"; exit 1; }

# stop a previous server started by this script (by process group, never by name:
# pkill -f would also match the shell that called this script)
bash "$(dirname "$0")/stop_site.sh" >/dev/null 2>&1 || true
setsid nohup npm run serve -- --port "$PORT" --no-open > /tmp/serve.log 2>&1 < /dev/null &
echo $! > /tmp/lecture-serve.pid
for i in $(seq 1 20); do
  sleep 1
  if curl -s -o /dev/null "http://localhost:$PORT/"; then break; fi
done
curl -s -o /dev/null -w "serve: HTTP %{http_code} on port $PORT\n" "http://localhost:$PORT/"
echo "BUILD OK (stop the server with: bash $(dirname "$0")/stop_site.sh)"
