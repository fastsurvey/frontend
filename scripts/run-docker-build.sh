#!/bin/bash

yarn build
docker build -t gcr.io/fastsurvey-infrastructure/frontend-dev .
docker run -d -p 8080:8080 gcr.io/fastsurvey-infrastructure/frontend-dev:latest