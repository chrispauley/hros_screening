# Dockerized hros_screening

## Build the docker image
docker build -t nginx-hrosscreening .

## Create and run a container
docker run -d --rm -p 8002:80  --name nginx-hrosscreening-app nginx-hrosscreening

## To inspect the contents of the running container
docker exec -it nginx-hrosscreening-app sh

# View the logs
docker logs nginx-hrosscreening-app

## To kill the running container
docker kill nginx-hrosscreening-app

## To remove the image created by the Dockerfile
docker rmi nginx-hrosscreening-app

To tag and commit
```
docker tag nginx-hrosscreening chrispauley/nginx-hrosscreening
 - create the repo at docker hub
docker push chrispauley/nginx-hrosscreening

- login to aws
docker pull chrispauley/nginx-hrosscreening

docker run -d --rm -p 8008:80  --name nginx-hrosscreening-app chrispauley/nginx-hrosscreening

http://ec2-54-210-221-125.compute-1.amazonaws.com:8008/index.html

http://screening.hrsres.com:8008/jschemaframe.html
```
