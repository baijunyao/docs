FROM baijunyao/nginx:1.19

WORKDIR /app

COPY dist/assets /app/docs/assets
COPY dist/index.html /app/docs/index.html

COPY dist/laravel-bjyblog /app/docs/laravel-bjyblog
COPY dist/laravel-scout-elasticsearch /app/docs/laravel-scout-elasticsearch
COPY dist/thinkphp-bjyblog /app/docs/thinkphp-bjyblog
