# Property Art (MUD v2 DApp)
============

## Table of Contents

* [Features](#features)
* [Setup Development Environment](#setup-dev)
* [Links](#links)

### Features <a id="featues"></a>

* `@react-three-fiber` with multiple scenes for each property art listing
* `@react-three/drei` for scene controls and animations
* Generated component to import .glb format model using `gltfjsx`
* Updated to latest LatticeXYZ MUD v2 from `2.0.0-alpha` to `1.42.0` to resolve cache issues 

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

* Note: The .glb model file has not been uploaded to Github.

#### Restart Project

* Restart Docker.
* Restart Docker container `docker restart foundry`
* Enter the Docker container shell with `docker exec -it foundry /bin/bash`.
* Switch to the folder of your MUD v2 DApp and run it with:
  ```bash
  cd /opt/projects/property-art
  pnpm run dev
  ```
* Press CTRL+D to exit Docker container shell.

### Tools

* Convert .glb model to JSX component component file .jsx to import in React
    ```bash
    npx gltfjsx Bondi.glb
    ```
* Compression
  * https://threejs.org/docs/#examples/en/loaders/DRACOLoader
  * https://github.com/donmccurdy/glTF-Transform
    ```bash
    gltf-transform optimize ./projects/property-art/packages/client/public/Bondi.glb ./projects/property-art/packages/client/public/BondiCompressed.glb --texture-compress webp
    ```
  * https://meshoptimizer.org/gltf/

### Maintenance

* Update to latest version of MUD v2 canary. Run the following in both the client/ and contracts/ folders, or `pnpm mud:up`
  ```
  pnpm mud set-version -v canary
  ```
* Check space used by testnet
  ```
  du -sh /root/.foundry/anvil/
  ```
* Delete the testnet data
  ```
  rm -rf /root/.foundry/anvil/tmp
  ```

### Links <a id="links"></a>
* MUD v2 https://v2.mud.dev
* MUD 101 video https://www.youtube.com/watch?v=eaLv0FNEf8A
* three.js vanilla
    * examples
        * https://jsfiddle.net/dypoq394/
* React-three-fiber
    * examples
        * UI building example https://www.youtube.com/watch?v=5hhMamMgcIk
        * load models https://docs.pmnd.rs/react-three-fiber/tutorials/loading-models
        * multiple scene examples
            * https://codesandbox.io/s/multiple-views-with-uniform-controls-r9w2ob
            * https://codesandbox.io/s/view-tracking-bp6tmc
        * adding and removing mesh and bodies https://github.com/patrick-s-young/dynamic-react-three-fiber-example
    * `gltfjsx` to convert `.gltf` or `.glb` to a JSX component
        * https://blog.logrocket.com/configure-3d-models-react-three-fiber/
* EZKL video https://www.youtube.com/watch?v=tp22vStPVG8
* EZKL docs https://docs.ezkl.xyz/
