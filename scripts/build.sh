#!/bin/bash

yarn build
docker build -t gcr.io/fastsurvey-infrastructure/frontend-dev .
