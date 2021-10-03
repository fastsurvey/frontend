#!/bin/bash

export VITE_COMMIT_SHA="$(git rev-parse --short --verify HEAD)"
yarn build
docker build -t fastsurvey-frontend .
docker run -d -p 8080:8080 fastsurvey-frontend:latest
