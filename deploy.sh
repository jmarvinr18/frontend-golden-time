#!/bin/bash

# Login to Git
echo "#############################################"
echo "Logging in to GIT"
echo "#############################################"
eval `ssh-agent -s`
ssh-add ~/.ssh/golden-time-ssh-key
echo

# Pulling update from GIT
echo "#############################################"
echo "Pulling update from GIT"
echo "#############################################"
cd /var/repo/frontend-golden-time.git/
GIT_WORK_TREE=/var/www/golden-time-ui git fetch --update-head-ok
GIT_WORK_TREE=/var/www/golden-time-ui git reset --hard HEAD
echo

# Pulling update from GIT
echo "#############################################"
echo "Building the js file..."
echo "#############################################"
cd /var/www/golden-time-ui/
npm install
NITRO_PRESET=node-server npm run build
pm2 restart 0

# Finished
echo "#############################################"
echo "Deployment done."
echo "#############################################"