#!/bin/bash
#usage: ./build.sh
#if package.json doesn't exist, copy it in
FILE="package.json"
if [ -f $FILE ];
then
   echo "File $FILE exists."
else
   echo "File $FILE does not exist, copying..."
	 cp ../npm/$FILE $FILE
fi
#copy in package json if it is different
cmp -s package.json ../npm/package.json > /dev/null
if [ $? -eq 1 ]; then
	echo "package.json has updated... copying...";
    cp ../npm/package.json .
else
    echo "package.json is unchanged.";
fi
echo "Building todo container...";
docker build -t todo .
