#!/bin/bash
new/compile_less.sh

if [[ `git status --porcelain` ]]; then
  git add -A
  git commit -am "auto-deploy commit"
fi

git push jessido8@jessicafung.com:www/jf-website.git
