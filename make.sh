#!/usr/bin/env zsh

tsc -w src/*.ts --outDir dist/ &
sibilant src/*.sibilant -o dist/ &
lsc -wbco dist/ src/*.ls &
stylus -w src/*.styl -o dist/ &
