#!/bin/bash

export VITE_COMMIT_SHA="$(git rev-parse --short --verify HEAD)"
VITE_MAINTENANCE="true"
yarn build

docker build -t gcr.io/fastsurvey-infrastructure/maintenance .
docker push gcr.io/fastsurvey-infrastructure/maintenance:latest

gcloud run deploy frontend \
    --image=gcr.io/fastsurvey-infrastructure/maintenance:latest \
    --platform managed --no-traffic --tag "maintenance-$VITE_COMMIT_SHA"

gcloud run deploy console \
    --image=gcr.io/fastsurvey-infrastructure/maintenance:latest \
    --platform managed --no-traffic --tag "maintenance-$VITE_COMMIT_SHA"
