# Use the node v10 image
FROM node:10
# Set working directory
WORKDIR /app
# Copy files into working dir
COPY . .
# install node modules
RUN yarn install
# Set the node server port and prod env variables
ENV NODE_SERVER_PORT=${NODE_SERVER_PORT} APP_URL=${APP_URL}
# Containers start the app by running node .
ENTRYPOINT ["node", "."]