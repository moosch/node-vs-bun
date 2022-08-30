# Node in Docker

Build:

```shell
docker build . -t node-test/node-app
```

Run:

```shell
docker run -p 4000:4000 -d node-test/node-app
```

Limit CPU & Memory

```shell
docker run -p 4000:4000 -m 256m --cpus=1 -d node-test/node-app
```


## Testing

```shell
npx artillery run test.yml
```

### Results

**Unrestricted**

errors.EPROTO: ................................................................. 100

http.request_rate: ............................................................. 17/sec

http.requests: ................................................................. 100

vusers.created: ................................................................ 100

vusers.created_by_name.Test Node: .............................................. 100

vusers.failed: ................................................................. 100


**Restricted**

errors.EPROTO: ................................................................. 100

http.request_rate: ............................................................. 17/sec

http.requests: ................................................................. 100

vusers.created: ................................................................ 100

vusers.created_by_name.Test Node: .............................................. 100

vusers.failed: ................................................................. 100
