# React App Served from Node Backend

This Dockerfile uses `yarn` to build the static assets for a React app and then serves them using the node backend. The node backend also provides a sample data api

# Build Image

```bash
docker build -t react-served-by-node .
```

# Start a Container

```bash
docker run --rm -it -p 3000:3000 react-served-by-node
```
