#!/bin/bash
new/compile_less.sh

if [[ `git status --porcelain` ]]; then
  git add -A
  git commit -am "auto-deploy commit"
fi

git push ec2-user@jessicafung.com:/srv/servers/jessica/jessica.git
