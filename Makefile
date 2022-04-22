install:	#установить зависимости
	npm ci

brain-games:	#запуск  brain-games
	node bin/brain-games.js

brain-even:	#запуск brain-even
	node bin/brain-even.js

publish:	#publish dry run
	npm publish --dry-run

lint: 
	npx eslint .
