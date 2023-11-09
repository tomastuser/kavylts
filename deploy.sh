#!/bin/bash 

yarn build && curl --netrc -T build/index.html ftp://lesnikavyl.cz@hosting8.livebox.cz/www/ && curl --netrc -T build/index.js ftp://lesnikavyl.cz@hosting8.livebox.cz/www/