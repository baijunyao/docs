Clone laravel-bjyblog with git:
```bash
git clone https://github.com/baijunyao/laravel-bjyblog.git && cd laravel-bjyblog 
```
Rename the `.env.docker` file to `.env` :
```bash  
cp .env.docker .env  
```  
Into the php container
```bash
docker-compose exec php bash
```
Composer install: 
```bash  
composer install  
```  
Application Key:
```bash  
php artisan key:generate  
```  
Migrate: 
```bash  
php artisan migrate  
```  
Seed:
```bash  
php artisan db:seed  
```  
If you visit the site before `db:seed`, you need to clear cache:
```bash
php artisan cache:clear
```
To create the symbolic link:  
```bash
php artisan storage:link
```  
Add `laravel-bjyblog.test` to hosts file
```bash
127.0.0.1 laravel-bjyblog.test
```
Use a browser to open http://laravel-bjyblog.test
