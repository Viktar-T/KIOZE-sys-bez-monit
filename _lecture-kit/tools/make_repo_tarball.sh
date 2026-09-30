#!/usr/bin/env bash
# Run on the lecturer's computer (device_bash), from anywhere:
#   bash $HOME/mnt/KIOZE-sys-bez-monit/_lecture-kit/tools/make_repo_tarball.sh [TAG]
# Writes _tmp/repo-src.tar.gz, or _tmp/repo-src-TAG.tar.gz when a TAG is given (git-ignored),
# with the repository minus node_modules, .git, build outputs and PDFs, for staging into the
# cloud container (see 04-environment.md A.3). Chats that run at the same time use different
# tags (e.g. W03, W01-rev) so they do not overwrite each other's archive while staging.
set -euo pipefail
cd "$(dirname "$0")/../.."
TAG=${1:-}
OUT=_tmp/repo-src${TAG:+-$TAG}.tar.gz
mkdir -p _tmp
tar czf "$OUT" \
  --exclude=./_tmp --exclude=node_modules --exclude=./.git \
  --exclude=build --exclude=.docusaurus --exclude='*.pdf' .
ls -la "$OUT"
echo "files: $(tar tzf "$OUT" | wc -l)"
