# Property Art (MUD v2 DApp)
============

## Table of Contents

  * [Setup Development Environment](#setup-dev)

### Setup Development Environment <a id="setup-dev"></a>

* Install [Docker](https://docs.docker.com/get-docker/)
* Fork and/or clone repo.
  ```bash
  git clone https://github.com/ltfschoen/property-art && cd property-art
  ```
* Fetch just the ./docker & ./snippets folders and .dockerignore file from template project https://github.com/ltfschoen/MUDTemplate
* Generate .env file based on instructions in .env.example file, if desired.
* Build a Docker image and container `./docker/docker.sh`
* Wait... until terminal logs output `[client] Local: http://localhost:3000/`
* Open http://localhost:3000 in web browser to load MUD v2 DApp.

#### Restart Project

* Enter the Docker container shell with `docker exec -it foundry /bin/bash`.
* Switch to the folder of your MUD v2 DApp and run it with:
  ```bash
  cd /opt/projects/property-art
  pnpm run dev
  ```
* Press CTRL+D to exit Docker container shell.
