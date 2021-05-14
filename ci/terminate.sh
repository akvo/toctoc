#!/usr/bin/env bash

set -eu
IMAGE_NAME="eu.gcr.io/akvo-lumen/akvo-toctoc/frontend:latest"

docker rm "$(docker stop "$(docker ps -a -q --filter ancestor=$IMAGE_NAME --format="{{.ID}}")")"
