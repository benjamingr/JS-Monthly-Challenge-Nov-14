#!/usr/bin/env zsh

tsc -w src/*.ts --outDir dist/ &
stylus -w src/*.styl -o dist/ &
