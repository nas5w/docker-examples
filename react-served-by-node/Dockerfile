# Multi-stage
# 1) Node image for building frontend assets
# 2) Node image for serving backend

# Name the node stage "builder"
FROM node:10 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY ./client .
# install node modules and build assets
RUN yarn install && yarn build

# Use the node v10 image
FROM node:10
# Set working directory
WORKDIR /app
# Copy contents of server directory into working dir
COPY ./server .
# Delete anything from public dir
RUN rm -r ./public/*
# Copy frontend assets into public dir
COPY --from=builder /app/build ./public
# install node modules
RUN yarn install
# Set the node server port to 3000 and prod env variables
ENV NODE_SERVER_PORT=3000 ENVIRONMENT=prod
# Containers start the app by running node .
ENTRYPOINT ["node", "."]