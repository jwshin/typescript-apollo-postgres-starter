APP_NAME = "api"
PORT = 4000

.PHONY: build run

build:
	docker build --tag ${APP_NAME} .

run:
	docker run -it --rm -p $(PORT):$(PORT) -e PGHOST=host.docker.internal -e PGPORT=$(PGPORT) -e PGDATABASE=$(PGDATABASE) -e PGUSER=$(PGUSER) -e PGPASSWORD=$(PGPASSWORD) --name="${APP_NAME}" $(APP_NAME)
