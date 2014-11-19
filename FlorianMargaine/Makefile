all:
	./node_modules/.bin/browserify -t brfs src/main.js | ./node_modules/.bin/uglifyjs2 -mc > bundle.js

debug:
	./node_modules/.bin/browserify -t brfs -d src/main.js > bundle.js
