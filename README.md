## update your main branch
git checkout main
git pull --rebase upstream main
git push origin main

## start work on a feature
git checkout -b feature-branch

## write code, commit, repeat
git add .
git commit 

## rebase before pull request
git pull --rebase upstream master

## push to a feature branch on YOUR fork
git push origin feature-branch

## make a pull request on GitHub

## if pull request is rejected
## fix bugs, commit
git add .
git commit
git pull --rebase upstream master
git push origin feature-branch

## make a pull request on GitHub

## if pull request is accepted
git checkout master
git pull --rebase upstream master
git branch -d feature-branch

