#!/bin/zsh

IFS=$'\n'
for i in $(cat newlist.txt) 
do
	FILENAME=$(echo $i | tr '[:upper:]' '[:lower:]' | sed 's/ /_/g'|awk -F '.' '{print $1}')

	cp template.json ./vendors/$FILENAME.json

	sed -i '' "s/VenderName/$i/g" ./vendors/$FILENAME.json
	sed -i '' "s/vendername/$FILENAME/g" ./vendors/$FILENAME.json

done