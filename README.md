# Akvo TocToc
Nimble theory of change.

## Development
Run local docker compose environment
### Start system
App available at localhost:3040
``` sh
./dc.sh up -d --build
```

### Stop system
``` sh
./dc.sh down
```

### Run yarn inside the frontend container
``` sh
./dc.sh exec frontend yarn --version
```

### Add frontend dev dependency
``` sh
./dc.sh exec frontend yarn add @snowpack/plugin-sass --dev
```

## Production (local)

### Build production container
``` sh
./ci/build.sh
```

## Run production container
App available at localhost:8040
``` sh
./ci/run.sh
```

## Stopa and remove production container
App available at localhost:8040
``` sh
./ci/terminate.sh
```
