# Date : 04.03.20
# Author Etienne Crespi
PWD=$(shell pwd)
DC=docker-compose
DB=docker build
DR=docker run
DE=docker exec
CONTAINER=mongo
HAS_DOCKER:=$(shell command -v $(DC) 2> /dev/null)

.DEFAULT_GOAL := help
.PHONY: help ## Generate list of targets with descriptions
help:
		@grep '##' Makefile \
		| grep -v 'grep\|sed' \
		| sed 's/^\.PHONY: \(.*\) ##[\s|\S]*\(.*\)/\1:\t\2/' \
		| sed 's/\(^##\)//' \
		| sed 's/\(##\)/\t/' \
		| expand -t14

.PHONY: start ## Start the project (Install in first place)
start: docker-compose.yml
	$(DC) pull || true
	$(DC) build
	$(DC) up -d

.PHONY: stop ## Stop the project
stop:
	$(DC) down

.PHONY: restart ## Restart the project
restart:
	make stop
	make start
	cd $(PWD)/backend && yarn start

.PHONY: exec ## Run bash in the mongodb container
exec:
	$(DE) -it $(CONTAINER) bash