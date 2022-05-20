echo linux/386,linux/amd64,linux/arm32v6,linux/arm32v7,linux/arm64v8 | tr "," "\n" | while read l;
do
    docker buildx build . --platform $l --output "type=image,push=true" --file Dockerfile --tag xubeisi/pikpak:${l//\//_} &
done
