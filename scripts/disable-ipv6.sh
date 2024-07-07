#!/bin/bash
# Disable IPv6
# Reference: https://itsfoss.com/disable-ipv6-ubuntu-linux/

sudo sysctl -w net.ipv6.conf.all.disable_ipv6=1
sudo sysctl -w net.ipv6.conf.default.disable_ipv6=1
sudo sysctl -w net.ipv6.conf.lo.disable_ipv6=1

# EOF
