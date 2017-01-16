# devops-test-task
#
docker run -p 6380:6379 -d redis
#
docker run -p 27117:27017 -d mongo
#
docker run -p 3000:3000 -d app
#
docker run -p 8086:8086 -d influxdb
#
docker run -p 3001:3000 -d grafana/grafana
#
docker run \
 --volume=/:/rootfs:ro \
 --volume=/var/run:/var/run:rw \
 --volume=/sys:/sys:ro \
 --volume=/var/lib/docker/:/var/lib/docker:ro \
 --publish=8080:8080 \
 --detach=true \
 --name=cadvisor \
 google/cadvisor:latest

[root@CentOS6 ~]# docker ps
CONTAINER ID        IMAGE                    COMMAND                CREATED              STATUS              PORTS                      NAMES
40f42b628ed9        google/cadvisor:latest   "/usr/bin/cadvisor -   About a minute ago   Up About a minute   0.0.0.0:8080->8080/tcp     cadvisor
1aa2ce33b8fb        grafana/grafana          "/run.sh"              31 minutes ago       Up 31 minutes       0.0.0.0:3001->3000/tcp     clever_tesla
7f7d7e85ebf3        influxdb                 "/entrypoint.sh infl   About an hour ago    Up About an hour    0.0.0.0:8086->8086/tcp     evil_ardinghelli
ca0c96eac860        mongo                    "/entrypoint.sh mong   2 hours ago          Up 2 hours          0.0.0.0:27117->27017/tcp   boring_elion
2840523cbeff        redis                    "docker-entrypoint.s   2 hours ago          Up 2 hours          0.0.0.0:6380->6379/tcp     stoic_stallman
