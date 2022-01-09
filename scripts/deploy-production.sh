#!/bin/bash

yarn build:production

docker build --platform linux/amd64 -t gcr.io/fastsurvey-infrastructure/frontend .
docker push gcr.io/fastsurvey-infrastructure/frontend:latest

APP_COMMIT_SHA="$(git rev-parse --short --verify HEAD)"
DOCS_COMMIT_SHA="$(cd ../fastsurvey-docs && git rev-parse --short --verify HEAD && cd ../fastsurvey-frontend)"
gcloud run deploy frontend \
    --image=gcr.io/fastsurvey-infrastructure/frontend:latest \
    --platform managed --no-traffic \
    --tag "app-$APP_COMMIT_SHA-docs-$DOCS_COMMIT_SHA"