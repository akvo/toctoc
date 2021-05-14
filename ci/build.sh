#!/usr/bin/env bash
#shellcheck disable=SC2039

set -exuo pipefail

CI_COMMIT="${SEMAPHORE_GIT_SHA:=local}"
CI_COMMIT="${CI_COMMIT:0:7}"
export CI_COMMIT

image_prefix="eu.gcr.io/akvo-lumen/akvo-toctoc"

dc () {
    docker-compose \
        --ansi never \
        "$@"
}
export -f dc

frontend_build () {
    dc run \
       --rm \
       --no-deps \
       frontend \
       bash release.sh

    docker build \
           --tag "${image_prefix}/frontend:latest" \
           --tag "${image_prefix}/frontend:${CI_COMMIT}" frontend
}

frontend_build
