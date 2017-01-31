#!/bin/bash

if type convert >/dev/null 2>&1 ;
then
	echo "convert $1 -flatten -monochrome -gamma 0.8 $2"
	convert $1 -flatten -monochrome -gamma 0.8 $2
else
	exit 1
fi
