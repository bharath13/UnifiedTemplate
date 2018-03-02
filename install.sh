#!/bin/sh
DIIR=$(pwd)
composer install
npm install
echo "PATCHING MUSTACHE ENGINE..."
cd vendor
patch -p1 < ../patches/patch-mustache-fix-special-char-fix-printing-array.patch
cd $DIIR
echo "DONE PATCHING PATCHING MUSTACHE ENGINE"
echo "PATCHING PRAGMA BLOCKS..."
cd $DIIR/vendor/pattern-lab/patternengine-mustache
echo $(pwd)
patch -p1 < $DIIR/patches/patch-patternlab-to-pragma-block.patch
cd $DIIR
echo "DONE PATCHING PRAGMA BLOCKS"
