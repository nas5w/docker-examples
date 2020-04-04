# Use the node v10 image
FROM node:10
# Copy contents of current directory into usr/app in image
COPY . /usr/app
# cd into /usr/app and install node modules
RUN cd /usr/app && yarn install
# Set the node server port to 3000
ENV NODE_SERVER_PORT=3000
# Containers start the app by running node /usr/app/index.js
ENTRYPOINT ["node", "/usr/app/index.js"]