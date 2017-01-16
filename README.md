# devops-test-task

docker run -p 6380:6379 -d redis
docker run -p 27117:27017 -d mongo
docker run -p 3000:3000 -d app
docker run -p 8086:8086 -d influxdb
docker run -p 3001:3000 -d grafana/grafana
docker run \
 --volume=/:/rootfs:ro \
 --volume=/var/run:/var/run:rw \
 --volume=/sys:/sys:ro \
 --volume=/var/lib/docker/:/var/lib/docker:ro \
 --publish=8080:8080 \
 --detach=true \
 --name=cadvisor \
 google/cadvisor:latest

