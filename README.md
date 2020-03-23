# Pimcore 6 boilerplate based on Skeleton

## Features

### Pimcore
* Based on [Pimcore Skeleton](https://github.com/pimcore/skeleton">https://github.com/pimcore/skeleton)
* Auto rendering enabled using Twig
* Twig cache disabled for dev
* Configuration through .env files
* Symfony MakerBundle to generate code.

### Webpack
* Webpack preconfigured through Encore
* Support enabled for JS, SASS, VUE
* NPM scripts for build, watch and run a server with HMR
* Webpack notifier
* Support for Single File Vue Components
* Buefy
        

## Getting started 

Get the code
```bash
$ git clone {repo-url} {project-name}
```

Create a database

Copy .env.example to .env

run 




```bash
COMPOSER_MEMORY_LIMIT=-1 composer create-project pimcore/skeleton my-project
cd ./my-project
./vendor/bin/pimcore-install
```

- Point your virtual host to `my-project/web` 
- Open https://your-host/admin in your browser
- Done! 😎

## Docker

You can also use Docker to setup a new Pimcore Installation:

```bash
COMPOSER_MEMORY_LIMIT=-1 composer create-project pimcore/skeleton my-project
cd ./my-project
docker-compose run --rm php vendor/bin/pimcore-install --mysql-host-socket=db --mysql-username=pimcore --mysql-password=pimcore --mysql-database=pimcore
docker-compose run --rm php chown -R www-data:www-data var/*
docker-compose up -d
```
You can now navigate your browser to https://localhost or https://localhost/admin.
The default docker-compose comes with PHP 7.4 on debian-buster and mariadb 10.4.

## Other demo/skeleton packages
- [Pimcore Basic Demo](https://github.com/pimcore/demo)