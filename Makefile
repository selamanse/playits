FOLDER ?= sounds

.PHONY: build
build:
	@echo "building sounds.json"
	PREFIX="var sounds = " && \
	SOUND_LIST=$$(find $(FOLDER) -iname *.m4a -type f | jq -R -s -c '(split("\n")[:-1]) | .[] |= (sub(".m4a";""))') && \
	SOUNDS_COUNT=$$(echo "$$SOUND_LIST" | jq length) && \
	echo "$$PREFIX$$SOUND_LIST" > js/sounds.js && \
	echo "added $$SOUNDS_COUNT sounds"