# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
    . /etc/bashrc
fi

# User specific environment
if ! [[ "$PATH" =~ "$HOME/.local/bin:$HOME/bin:" ]]; then
    PATH="$HOME/.local/bin:$HOME/bin:$PATH"
fi
export PATH

# Uncomment the following line if you don't like systemctl's auto-paging feature:
# export SYSTEMD_PAGER=

# User specific aliases and functions
if [ -d ~/.bashrc.d ]; then
    for rc in ~/.bashrc.d/*; do
        if [ -f "$rc" ]; then
            . "$rc"
        fi
    done
fi

PS1='\[\033[1;97m\]\[\033[1;107;30m\] \u \[\033[1;97;42m\]'
PS1=$PS1'\[\033[1;97;42m\] \h \[\033[0;32;44m\]'
PS1=$PS1'\[\033[1;44;97m\] \w \[\033[0;34m\]\n'
PS1=$PS1'$(if [ $? -eq 0 ]; then echo "\[\033[1;32m\]✔"; else echo "\[\033[1;31m\]✘\[\033m\] $?"; fi) '
PS1=$PS1'\[\033[0;1;32m\] 󰁔 \[\033[0m\]'

unset rc
unset SSH_ASKPASS
