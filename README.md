# Channel feeder
This sample requires riff v0.1.3 or later.

>To push to GCR set $DOCKER_ID to gcr.io/<project_id>

#### create from git repo, pushing image to DockerHub
```sh
riff function create node channel-feeder \
    --git-repo https://github.com/doddatpivotal/channel-feeder.git \
    --artifact channel-feeder.js \
    --image $DOCKER_ID/channel-feeder \
    --verbose
```
To set `$DOCKER_ID` do `export DOCKER_ID=your-docker-id`

#### invoke
```
riff service invoke channel-feeder --json -- -d '{"channelUrl":"http://redis-chat-plus-events-channel.default.svc.cluster.local", "message": {"eventName": "messageSent", "eventBody": {"date": 1540744601468, "username": "fuzzybunnyslippers", "avatar": "//api.adorable.io/avatars/30/fuzzybunnyslippers.png", "message": "hello world!"}}}'
riff service invoke channel-feeder --json -- -d '{"channelUrl":"http://messages-channel.default.svc.cluster.local", "message": {"eventName": "messageSent", "eventBody": {"date": 1540744601468, "username": "fuzzybunnyslippers", "avatar": "//api.adorable.io/avatars/30/fuzzybunnyslippers.png", "message": "This is a potty message"}}}'
```
