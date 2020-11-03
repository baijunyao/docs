```bash
git clone https://gitee.com/baijunyao/laravel-bjyblog.git && cd laravel-bjyblog 
```
我们需要复制跟目录下的 `.env.docker` 文件并重命名为 `.env` ；  
```bash  
cp .env.docker .env  
```  
进入到 PHP 容器中
```bash
docker-compose exec php bash
```
使用 安装依赖 ；  
```bash  
composer install  
```  
生成 key ；  
```bash  
php artisan key:generate  
```  
生成数据表；  
```bash  
php artisan migrate  
```  
生成初始化的数据；  
```bash  
php artisan db:seed  
```  
如果在 `db:seed` 之前迫不及待的访问了项目；  
因为缓存的问题再填充文件不会及时刷新；  
这时候可以使用清除缓存的命令;  
```bash
php artisan cache:clear
```
创建软连接：
```bash
php artisan storage:link
```
添加 `laravel-bjyblog.test` 到 hosts 文件中
```bash
127.0.0.1 laravel-bjyblog.test
```
使用浏览器打开 laravel-bjyblog.test
