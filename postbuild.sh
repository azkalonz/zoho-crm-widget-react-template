#!/bin/bash
cd app
mv -v ./static/js/*.js ./
mv -v ./static/css/*.css ./
find . -type f -maxdepth 1 | LC_ALL=C xargs -I{} sed -i.backup -e 's,/static/js/,/,g' {}
find . -type f -maxdepth 1 | LC_ALL=C xargs -I{} sed -i.backup -e 's,/static/css/,/,g' {}
rm -r ./static robots.txt manifest.json logo512.png logo192.png favicon.ico asset-manifest.json
mv -v index.html widget.html
find . -name '*.backup' -type f -delete
cd ..
rm -r app.zip
zip -r app.zip app