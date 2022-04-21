install:	#установить зависимости
	npm ci

brain-games:	#запуск  brain-games
	node bin/brain-games.js

publish:	#publish dry run
	npm publish --dry-run

lint: 
	npx eslint .
