#!/bin/bash

set -e
set -x

HUGO_VERSION="0.15"

# Install Hugo
if [ ! -e $CIRCLE_BUILD_DIR/bin/hugo ] || ! [[ `hugo version` =~ v${HUGO_VERSION} ]]; then
  wget https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_linux_amd64.tar.gz
  tar xvfz hugo_${HUGO_VERSION}_linux_amd64.tar.gz
  cp hugo_${HUGO_VERSION}_linux_amd64/hugo_${HUGO_VERSION}_linux_amd64 $CIRCLE_BUILD_DIR/bin/hugo
fi
