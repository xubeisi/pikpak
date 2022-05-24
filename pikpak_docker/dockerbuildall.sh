DOCKER_USER=$1
DOCKER_PASSWORD=$2
if ! docker info | grep Username > /dev/null
then
    docker login -u $DOCKER_USER -p $DOCKER_PASSWORD
fi

if docker info | grep Username > /dev/null
then
    dockertar=xubeisi/pikpak
    echo linux/386,linux/amd64,linux/arm32v6,linux/arm32v7,linux/arm64v8 | tr "," "\n" | while read l;

    do
        docker buildx build . --platform $l --output "type=image,push=true" --file Dockerfile --tag ${dockertar}:${l//\//_} &
    done
    docker tag ${dockertar}:linux_386 ${dockertar}:latest
    docker push ${dockertar}:latest
    docker system prune -a
else
    echo "docker not login"
fi
