# 回到本地仓库，先删除名为origin的远程分支：
git remote rm origin
git remote rm GitHub
git remote rm Gitee

git add -A

# 获取命令行的第一个参数作为提交信息
git commit -m "$1"

# 添加多个远程仓库
git remote add GitHub  https://github.com/lakei-edward/lakeiedward-s.git
git remote add Gitee  https://gitee.com/lakeiedward/lakeiedward-s.git

# 上传到仓库主分支
git push GitHub master
git push Gitee master