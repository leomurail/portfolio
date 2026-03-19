#!/bin/sh
set -e

task clean

rm -rf node_modules

if [ -f ".env" ]; then
    rm .env
fi
