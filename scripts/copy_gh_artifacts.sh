#!/usr/bin/env bash

# Copy all available examples into root build folder for publishing to GH-pages

mkdir -p build && rm -Rf build/*

# Devcon examples
cp -R hotel-bogota-passive-negotiation-website/build build/hotel-bogota-passive-negotiation-website
cp -R hotel-bogota-active-negotiation-website/build build/hotel-bogota-active-negotiation-website
cp -R ticket-issuer-url-website/build build/ticket-issuer-url-website
cp -R token-outlet-website/build build/token-outlet-website

# Ecommerce example
cp -R ecommerce-store-website/out build/ecommerce-store-website

# Bare-bones example
cp -R typescript-bare-bones-demo/build build/typescript-bare-bones-demo

# Art gallery example
cp -R art-gallery-medium-article-website/build build/art-gallery-medium-article-website

# Vue Js example 1
cp -R vue-boilerplate/dist build/vue-boilerplate

# Vue Js example 2 (VITE + UMD)
cp -R vue-boilerplate/dist build/vue-boilerplate

# Examples index
cp index.html build/