FROM node:10 AS builder
COPY . /usr/app
RUN cd /usr/app && yarn install && yarn build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/app/build /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]