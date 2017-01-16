# devops-test-task
#Rus Redis
docker run -p 6380:6379 -d redis
#Run MongoDB
docker run -p 27117:27017 -d mongo
#Run Node.js
docker run -p 3000:3000 -d app
#Run influxdb
docker run -p 8086:8086 -d influxdb
#Run Grafana
docker run -p 3001:3000 -d grafana/grafana
#Run cadvisor
docker run \
 --volume=/:/rootfs:ro \
 --volume=/var/run:/var/run:rw \
 --volume=/sys:/sys:ro \
 --volume=/var/lib/docker/:/var/lib/docker:ro \
 --publish=8080:8080 \
 --detach=true \
 --name=cadvisor \
 google/cadvisor:latest


