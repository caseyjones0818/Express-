Git 命令使用
git checkout -b dev     创建分支
git branch          查看当前分支
git branch dev   切换到dev分支
git add  readme.txt      暂存文件
git commit -m "branch test"  提交
git merge dev     把dev合并到master分支 （首先要切到master）
git push origin master    推送到远程master
git log     查看提交日志


cd existing_folder
git init
git remote rm origin
git remote add origin https://git.code.tencent.com/fushen-product/product-design.git
git add .
git commit
git push -u origin master


客户端拉取：
第一种方法
   git fetch --all
   git reset --hard origin/master
   git fetch  下载远程最新的。
   git reset master  分支重置
第二种方法
   git reset --hard HEAD
   git pull

github 的分支操作
https://www.cnblogs.com/51kata/p/5965791.html   

git rm -r --cached node_modules
git commit -m '移除node_modules文件夹'
git push origin master
