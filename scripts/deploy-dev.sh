#!/bin/bash

export VITE_COMMIT_SHA="$(git rev-parse --short --verify HEAD)"
yarn build

docker build -t gcr.io/fastsurvey-infrastructure/frontend-dev .
docker push gcr.io/fastsurvey-infrastructure/frontend-dev:latest

# https://codelabs.developers.google.com/codelabs/cloud-run-deploy/index.html
gcloud run deploy frontend-dev \
    --image=gcr.io/fastsurvey-infrastructure/frontend-dev:latest \
    --platform managed \
    --tag "commit-$VITE_COMMIT_SHA"
