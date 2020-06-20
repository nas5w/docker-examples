# Node Server Dockerfile

This is a basic node server with associated Dockerfile.

## Build the Docker Image

- Build with tag (i.e., `-t`) `node-server`.
- Path for build context is current directory (i.e., `.`).

```bash
docker build -t node-server .
```

## Run a Container

- `--rm` to cleanup old instances
- `-it` flags for terminal behavior
- Expose container port `3000` on port `3000`
- Run the `node-server` image

```bash
docker run --rm -it -p 3000:3000 node-server
```
