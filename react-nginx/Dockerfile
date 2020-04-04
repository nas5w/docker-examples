# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets 

# Name the node stage "builder"
FROM node:10 AS builder
# Copy all files from current directory to /usr/app in image
COPY . /usr/app
# cd into /usr/app, install node modules, and build assets
RUN cd /usr/app && yarn install && yarn build

# nginx state for serving content
FROM nginx:alpine
# Copy nginx config into config directory
COPY nginx.conf /etc/nginx/nginx.conf
# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*
# Copy static assets from builder stage
COPY --from=builder /usr/app/build /usr/share/nginx/html
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]