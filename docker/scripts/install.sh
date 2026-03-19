#!/bin/sh
set -e

# Default APP_ENV if not provided
APP_ENV=${APP_ENV:-local}

if [ -f "./docker/env/.env.$APP_ENV.template" ]; then
    cp "./docker/env/.env.$APP_ENV.template" .env
    echo "Copied .env.$APP_ENV.template to .env"
else
    echo "Template .env.$APP_ENV.template not found!"
    exit 1
fi

task up

npm install
