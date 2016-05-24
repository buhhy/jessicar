#!/bin/bash
for lessfile in $(find . -name "*.less" | grep -v "/_"); do
  cssfile=$(echo $lessfile | sed 's/\.less$/.css/' | sed 's:\/less/:/css/:')
  echo "Compiling $lessfile to $cssfile";
  rm -f $cssfile;
  lessc --autoprefix="last 20 versions" $lessfile > $cssfile;
done;
