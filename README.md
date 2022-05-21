## Github.io
https://xubeisi.github.io/pikpak -> https://xubeisi.github.io/a2

allow copy customize text for multiple files and folder
would be quicker then aria2c all since it doesn't post to your aria2 server and wait response. Normally < 1s per file. 

such as:
- aria2c "{{web_content_link}}" --out "{{parent}}{{name}}"
- aria2c "https://google.com" --out "google.html"
- aria2c "https://scholar.google.com" --out "googlesc.html"

could batch add to aria2c together with https://github.com/xubeisi/AriaNg

other template string: 
kind, id, parent_id, name, user_id, size, revision, file_extension, mime_type, starred, web_content_link, created_time, modified_time, icon_link, thumbnail_link, md5_checksum, hash, links, phase, audit, medias, trashed, delete_time, original_url, params, original_file_index, space, apps, writable, folder_type, collection, parent

Source https://github.com/xubeisi/pikpak

<img src="https://user-images.githubusercontent.com/1790841/169568832-c8b49b3a-c370-416b-9d30-0d96741a997d.png" width="80%" height="50%">
<img src="https://user-images.githubusercontent.com/1790841/169568839-130b11f3-5c84-400b-a760-207ec4d3820d.png" width="80%" height="50%">

## Docker version 
- https://hub.docker.com/r/xubeisi/pikpak
Support linux/386,linux/amd64,linux/arm32v6,linux/arm32v7,linux/arm64v8
- Source https://github.com/xubeisi/pikpak/tree/main/pikpak_docker 
- Modified from https://github.com/ykxVK8yL5L/pikpak

## PikPak 个人网页版
 * Source from https://github.com/mumuchenchen/pikpak

### 官方地址
 * [PikPak](https://mypikpak.com)

### Demo
 * [PikPak](https://mumuchenchen.github.io/pikpak/)

### 安装教程
 * [去年夏天版教程](https://www.tjsky.net/?p=201)

### Cloudflare Workers
 * [CF Workers实现反代](cf-worker)
