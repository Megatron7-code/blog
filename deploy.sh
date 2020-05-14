# 确保脚本抛出遇到的错误
set -e

# 本地master代码push
git add . && git commit -m 'update blog' && git push

npm run docs:build

cd docs/.vuepress/dist

# 生成CNAME文件
echo 'blog.vm321.com' > CNAME

git init && git add -A && git commit -m 'deploy'

git push -f git@github.com:Megatron7-code/blog.git master:gh-pages
git push -f git@gitee.com:megatron7/blog.git master:gh-pages
git push -f git@git.coding.net:megatron7/blog.git master:coding-pages

cd -
