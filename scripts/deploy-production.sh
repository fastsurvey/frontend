#!/bin/bash

yarn build

docker build --platform linux/amd64 -t gcr.io/fastsurvey-infrastructure/frontend .
docker push gcr.io/fastsurvey-infrastructure/frontend:latest

VITE_COMMIT_SHA="$(git rev-parse --short --verify HEAD)"
gcloud run deploy frontend \
    --image=gcr.io/fastsurvey-infrastructure/frontend:latest \
    --platform managed --no-traffic --tag "commit-$VITE_COMMIT_SHA"