# 确保脚本抛出遇到的错误
set -e

npm run docs:build

cd docs/.vuepress/dist

# 生成CNAME文件
echo 'blog.vm321.com' > CNAME

git init && git add -A && git commit -m 'deploy'

git push -f git@github.com:Megatron7-code/blog.git master:gh-pages

cd -