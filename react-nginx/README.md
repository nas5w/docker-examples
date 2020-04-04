# React App Served by nginx Dockerfile

This Dockerfile uses `yarn` to build the static assets for a React app and then serves them using nginx.

# Build Image

```bash
docker build -t react-nginx .
```

# Start a Container

```bash
docker run --rm -it -p 8080:80 react-nginx
```
