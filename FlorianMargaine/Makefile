all:
	browserify -t brfs src/main.js | uglifyjs -mc > bundle.js

debug:
	browserify -t brfs -d src/main.js > bundle.js
