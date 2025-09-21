build:
	docker compose -f local.yml build

up:
	docker compose -f local.yml up

down:
	docker compose -f local.yml down

shell:
	docker compose -f local.yml exec django /bin/bash

migrate:
	docker compose -f local.yml exec django python manage.py migrate

migrations:
	docker compose -f local.yml exec django python manage.py makemigrations

createsuperuser:
	docker compose -f local.yml exec django python manage.py createsuperuser

createapp:
	docker compose -f local.yml exec django python manage.py startapp $(name)