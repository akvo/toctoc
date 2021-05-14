#!/usr/bin/env bash
#shellcheck disable=SC2039

set -euo pipefail


yarn install --no-progress --frozen-lock
yarn run eslint --ext .js --ext .jsx src/
# yarn prettier --check src/
yarn run prettier "public/**/*" --check --ignore-unknown
yarn run prettier "src/**/*" --check --ignore-unknown
 yarn run build
