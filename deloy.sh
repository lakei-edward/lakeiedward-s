# 打包
npm run build

#进入指定路径
cd docs/.vuepress/

# 上传到服务器
scp -r dist/* root@43.142.176.173:/usr/local/nginx/html/lakeiedward/

rimraf dist