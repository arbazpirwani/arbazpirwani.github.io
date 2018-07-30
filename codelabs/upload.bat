echo off

echo "UPLOAD STARTED!"

set docId=%1
set commitMessage=%2
claat export %docId% -f

git add .

git commit -m %commitMessage%
git push origin master

echo "UPLOAD ENDED!"		