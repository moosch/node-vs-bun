# Bun in Docker

Build: (with `--platform` if you're on an M1)

```shell
docker build . -t node-test/bun-app --platform linux/arm64/v8
```

Run:

```shell
docker run -p 3000:3000 -d node-test/bun-app
```
