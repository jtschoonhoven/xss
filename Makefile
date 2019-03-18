#!/usr/bin/env bash

.PHONY: start
start:
	FLASK_APP=xss/wsgi.py pipenv run flask run;

.PHONY: start-dev
start-dev:
	FLASK_ENV=development make start
