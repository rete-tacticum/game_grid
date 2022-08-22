.DEFAULT_GOAL := help
APP_NAME=blackshell

ifeq (run,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif

start:  ## start dev
	@docker-compose up -d --force-recreate

stop:  ## full stop
	@docker-compose down --remove-orphans

sh:  ## get shell inside app container
	@docker-compose exec ${APP_NAME} sh

run:  ## start service with argument passed to npm run (make run start | make run build)
	@docker-compose run --rm --service-ports ${APP_NAME} sh -c "npm run $(RUN_ARGS)"

docker-build:  ## rebuild docker image (no cache)
	@docker-compose down -v
	@docker-compose build --no-cache

help:
	@echo "\nblackshell make commands:\n"
	@grep -E '^[a-zA-Z.%_-]+:.*?## .*$$' $(firstword $(MAKEFILE_LIST)) | awk 'BEGIN {FS = ":.*?## "}; {printf "%2s$(ACCENT)%-20s${RESET} %s\n", " ", $$1, $$2}'
	@echo ""
