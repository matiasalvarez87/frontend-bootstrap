frontend-bootstrap
==================

Bootstrap application to start a new Front-End project using Bower and GruntJS 


## Set-up project

### Bower

- Install/upgrade Bower's last version:
	sudo npm install -g bower
	sudo npm update -g bower
	
- Check Bower version:
	bower -version

- Initialize Bower project
	bower init


### GruntJS

- Initialize NPM project
	npm init

- Install GruntJS dependency
	npm install grunt --save-dev

- Create GruntJS file
	Gruntfile.js


### Installing npm dependencies

- Install JSHint (to validate JS code)
	npm install grunt-contrib-jshint --save

- Install LessCss
	npm install grunt-contrib-less --save

- Install RequireJS
	npm install grunt-contrib-requirejs --save

- Install Connect Server
	npm install grunt-connect --save-dev

- Install Watch Plugin to compile CSS every time a LESS file changes
	npm install grunt-contrib-watch --save-dev


### Installing Bower dependencies

- Install RequireJS
	bower install requirejs --save

- Install JQuery
	bower install jquery --save

- Install UnderscoreJS
	bower install underscore --save
