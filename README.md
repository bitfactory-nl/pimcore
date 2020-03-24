<p align="center">   
    <img src="https://pimcore.org/static/img/logo-claim.svg" width="200">
       
</p>

<p align="center">
    <img src="https://img.shields.io/badge/stable-1.0.x-orange?style=for-the-badge" alt="Stable">
    <img src="https://img.shields.io/badge/pimcore-%5E6.x-6E1ABB?style=for-the-badge" alt="Laravel">
    <img src="https://img.shields.io/badge/vue-%5E2.x-41B883?style=for-the-badge" alt="Vue.js">
    <img src="https://img.shields.io/badge/buefy-%5E0.8-7957D5?style=for-the-badge" alt="PHP">
</p>


# PimCore 6 boilerplate based on Skeleton

This package is simply a polluted version of [Pimcore Skeleton](https://github.com/pimcore/skeleton">https://github.com/pimcore/skeleton), matching our stack to create een APP, 
short for Awesome Pimcore Project.
  
* PimCore 6 / Symfony 4
* Vue.js 2
* Buefy

## So, what did we add you ask?
Pimcore and Symfony setup
* Auto rendering enabled using Twig
* Twig cache disabled for dev
* Configuration through .env files
* Symfony MakerBundle to generate code.

Frontend setup
* Webpack preconfigured with Symfony Encore
* Support enabled for JS, SASS, VUE
* Webpack notifier
* Support for Single File Vue Components
* Buefy
 
We bound it all together in an ExampleBundle. Easy to check as an Example, easy to get rid off since it's a Bundle. 
        

## Getting started 
 
1 - Get the code 
```bash
$ git clone https://github.com/bitfactory-nathan-waelkens/pimcore.git {projectname}
```

2 - Run composer install
```bash
$ cd {projectname}
$ COMPOSER_MEMORY_LIMIT=-1 composer install

```

3 - Create a database

4 - Copy the .env.example to .env
```bash
$ cp .env.example .env
```

5 - Edit .env and set the database credentials

6 - Run the installer
```bash
$ ./vendor/bin/pimcore-install
```

7 - Remove the installer config
```bash
$ rm app/config/installer.yml
```

8 - Run npm
```bash
$ npm install
$ npm run dev
```

8 - Point your virtual host to {projectname}/web

Good to go! Navigate to http://localhost for your project or http://localhost/admin for the PimCore admin area.

If you run into any problems, let me know! 
Nathan. 