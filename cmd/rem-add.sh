dir=$(pwd)
str=${dir: -4}
echo $str

git remote add origin https://github.com/user/$str.git

