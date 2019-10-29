#!/bin/bash

rm -rf dist/*
rm -rf src/*
rm index.html
rm single.html

cp -rf ~/Development/sharplaunch/app/View/Themed/Sharplaunch/webroot/dist/* ./dist
cp -rf ~/Development/sharplaunch/app/View/Themed/Sharplaunch/webroot/src/* ./src
cp -rf ~/Development/sharplaunch/app/View/Themed/Sharplaunch/webroot/index.html .
cp -rf ~/Development/sharplaunch/app/View/Themed/Sharplaunch/webroot/single.html .
