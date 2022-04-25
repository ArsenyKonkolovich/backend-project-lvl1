install:	#установить зависимости
	npm ci

brain-games:	#запуск  brain-games
	node bin/brain-games.js

brain-even:	#запуск brain-even
	node bin/brain-even.js

brain-calc:	#запуск brain-calc
	node bin/brain-calc.js

publish:	#publish dry run
	npm publish --dry-run

lint: 
	npx eslint .
