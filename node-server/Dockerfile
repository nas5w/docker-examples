# Use the node v10 image
FROM node:10
# Set working directory
WORKDIR /app
# Copy contents of current directory into working dir
COPY . .
# install node modules
RUN yarn install
# Set the node server port to 3000
ENV NODE_SERVER_PORT=3000
# Containers start the app by running node .
ENTRYPOINT ["node", "."]