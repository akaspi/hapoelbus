#!/bin/bash

PUBLIC_DIR="./client/public"
RESOURCES_DIR="./client/resources"

mkdir -p $PUBLIC_DIR/ && cp $RESOURCES_DIR/index.html $PUBLIC_DIR/ && cp $RESOURCES_DIR/favicon.ico $PUBLIC_DIR/