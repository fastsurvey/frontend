#!/bin/bash

yarn build

docker build --platform linux/amd64 -t gcr.io/fastsurvey-infrastructure/frontend-dev .
docker push gcr.io/fastsurvey-infrastructure/frontend-dev:latest

VITE_COMMIT_SHA="$(git rev-parse --short --verify HEAD)"
gcloud run deploy frontend-dev \
    --image=gcr.io/fastsurvey-infrastructure/frontend-dev:latest \
    --platform managed --tag "commit-$VITE_COMMIT_SHA"