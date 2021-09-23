#!/bin/bash

docker run -d -p 8080:8080 \
    gcr.io/fastsurvey-infrastructure/frontend:latest
