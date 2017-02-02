#!/bin/bash

VERSION_PATH="/opt/app/.PKG_VERSION"

download_index() {
	local cdn="$1"
	local version="$2"
	local index_uri="$cdn/$version/index.html"
	echo "downloading $index_uri"
	curl --show-error \
		--silent \
		--location \
		--fail "$index_uri" \
		--output /usr/share/nginx/html/index.html
}

start_nginx() {
	echo "starting nginx"
  nginx -g 'daemon off;'
}

main() {
  if [ -z "$CDN" ]; then
    echo 'Missing CDN env'
    exit 1
  fi

  if [ ! -f "$VERSION_PATH" ]; then
    echo "Missing ${VERSION_PATH} file"
    exit 1
  fi
	local version="v$(cat $VERSION_PATH)"
  download_index "$CDN" "$version" && \
    start_nginx
}

main "$@"
