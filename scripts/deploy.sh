#!/bin/bash

# https://codelabs.developers.google.com/codelabs/cloud-run-deploy/index.html

docker push gcr.io/fastsurvey-infrastructure/frontend:latest

gcloud run deploy frontend \
    --image=gcr.io/fastsurvey-infrastructure/frontend:latest \
    --platform managed
