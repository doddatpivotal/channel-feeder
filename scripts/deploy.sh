riff service delete notifier

riff function create node channel-feeder \
    --git-repo https://github.com/doddatpivotal/channel-feeder.git \
    --artifact channel-feeder.js \
    --image $DOCKER_ID/channel-feeder \
    --verbose
