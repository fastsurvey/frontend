#!/bin/bash

yarn build:development

docker build --platform linux/amd64 -t gcr.io/fastsurvey-infrastructure/frontend-dev .
docker push gcr.io/fastsurvey-infrastructure/frontend-dev:latest

APP_COMMIT_SHA="$(git rev-parse --short --verify HEAD)"
DOCS_COMMIT_SHA="$(cd ../fastsurvey-docs && git rev-parse --short --verify HEAD && cd ../fastsurvey-frontend)"
gcloud run deploy frontend-dev \
    --image=gcr.io/fastsurvey-infrastructure/frontend-dev:latest \
    --platform managed \
    --tag "app-$APP_COMMIT_SHA-docs-$DOCS_COMMIT_SHA"