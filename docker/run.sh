#!/bin/bash
startCommand="/usr/bin/npm start";
#local html directory
app="${PWD}/../../";
#remove existing container
docker rm -f "todo"
#run
docker run --name="todo" -p 55556:55556 -e startCommand="$startCommand" -v $app:/root/app -d todo
