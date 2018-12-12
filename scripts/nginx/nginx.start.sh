# start
ps -ef|grep nginx

## secend start
# /usr/local/Cellar/nginx/1.8.0/bin/nginx -c /usr/local/etc/nginx/nginx.conf

# See process
# ps -ef|grep nginx

# kill main process
# kill -QUIT 22027

# reload
./nginx -s reload

# 启动
sudo nginx

# 停止
sudo nginx -s stop
