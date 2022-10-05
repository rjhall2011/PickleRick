# Example of ExpressJS app running in Docker

## Step 1: Building

`docker build .`

### OR

`docker-compose build app`

---

## Step 2: Running (in development mode)

`docker-compose run app`

Also launches a container with a Postgres DB with some default settings, i.e. **NOT MEANT FOR PRODUCTION**. See the `docker-compose.yml` file for credentials and DB name.

---

## Step 3: Stopping

`CTRL+C` in the terminal will kill the running process

`docker ps` will list currently running containers

`docker stop $ENTER_CONTAINER_ID_HERE` will stop that container

`docker-compose stop $SERVICE_NAME` will stop a container that was started with docker-compose
