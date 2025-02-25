# Django-Vue Integration

## Project Setup

### 1. Clone this repository
```sh
git clone <repository_url>
cd <repository_directory>
```


### 2. Backend initialization (Django)
```sh
poetry install
poetry run python manage.py makemigrations
poetry run python manage.py migrate
poetry run python manage.py createsuperuser
```


### 3. Run the Backend
```sh
poetry run python manage.py runserver
```


### 4. Frontend initialization (VueJS 3.0)
```sh
cd frontend
npm install
```


### 5. Run the Frontend (VueJS 3.0)
```sh
cd frontend
npm run dev
```


### 6. Verify the Deployment
Navigate to your server address in your preferred browser:
```sh
http://127.0.0.1:8000
OR
http://localhost:8000
```

## Acknowledgments

[Inspirations](https://medium.com/@anykate/integrate-django-with-vue-js-3-0-or-later-603d595e61f5)

# Enjoy!