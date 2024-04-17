.PHONY: build



build:
	@echo "building sounds.json"
	PREFIX="var sounds = " && \
	find sounds -iname *.m4a -type f | jq -R -s -c '(split("\n")[:-1]) | .[] |= (sub(".m4a";""))' && \
	SOUND_LIST=$$(find sounds -iname *.m4a -type f | jq -R -s -c '(split("\n")[:-1]) | .[] |= (sub(".m4a";""))') && \
	echo "$$PREFIX$$SOUND_LIST" > js/sounds.js