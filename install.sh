#!/bin/sh
composer install
npm install
cd vendor
patch -p1 < ../patches/patch-mustache-fix-special-char-fix-printing-array.patch
