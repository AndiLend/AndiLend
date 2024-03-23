#!/bin/bash

# Build image and tag it with image name and version
docker build . \
    --tag esteblock/nargo-linux
