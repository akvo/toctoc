#!/usr/bin/env bash

set -eu
IMAGE_NAME="eu.gcr.io/akvo-lumen/akvo-toctoc/frontend:latest"

docker run --name akvo-toctoc -d -p 8040:80 $IMAGE_NAME
