#!/bin/bash

hyprpicker -r -z &
hyprpicker_pid=$!
sleep 0.1

grim -g "$(slurp)" "Pictures/Screenshots/Screenshot From $(date +'%Y-%m-%d %H-%M-%S').png"
wl-copy < "Pictures/Screenshots/Screenshot From $(date +'%Y-%m-%d %H-%M-%S').png"

kill $hyprpicker_pid

