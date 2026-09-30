#!/usr/bin/env bash
# Stop the server started by build_site.sh (kills its whole process group).
PIDFILE=/tmp/lecture-serve.pid
if [ -f "$PIDFILE" ]; then
  PGID=$(cat "$PIDFILE")
  kill -- "-$PGID" 2>/dev/null && echo "server stopped (process group $PGID)" || echo "no running server"
  rm -f "$PIDFILE"
else
  echo "no running server"
fi
