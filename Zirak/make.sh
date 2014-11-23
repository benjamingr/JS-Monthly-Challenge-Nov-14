#!/usr/bin/env zsh

tsc src/*.ts --outDir dist/
sibilant src/*.sibilant -o dist/
lsc -bco dist/ src/*.ls
dogescript src/QuestionModel.djs > dist/QuestionModel.js

stylus src/*.styl -o dist/
