
# Serein Laravel 11 with Inertia and React 18

TechStudent is an online teaching and exchange platform.




## Authors

- [@phuc1903](https://github.com/phuc1903)


## 🛠 Skills
This project is built using the following technologies:

- **Laravel 11**: A PHP framework for building robust web applications.
- **Inertia.js**: A framework that allows you to create modern single-page applications (SPAs) using classic server-side routing and controllers.
- **React 18**: A JavaScript library for building user interfaces, providing fast and interactive components.
- **Vite**: A modern build tool that offers fast development and optimized production builds.
- **TailwindCSS**: A utility-first CSS framework that enables fast styling of user interfaces with a highly customizable design system.
## Requirements
- Generated ssh key

- PHP min v.8.2

- DB server (Recommended:MySQL)

- [composer min v.2](https://getcomposer.org/download/)

- [nodejs min v.20](https://nodejs.org/en/download/prebuilt-installer)

- Please also check [Laravel](https://laravel.com/docs/11.x) and [Inertia](https://inertiajs.com/) requirements


## Run Locally

Clone the project

```bash
git clone git@github.com:phuc1903/techstudent.git
```

Go to the project directory

```bash
cd techstudent
``` 

Install dependencies

```bash
npm install
composer install
```

Add .env

```bash
cp .env.example .env
php artisan key:generate
```

Run Migrate

```bash
php artisan migrate
```

## Start the server

```bash
npm run dev
```

```bash
php artisan server
```
## Build Applications

```bash
npm run build
```
