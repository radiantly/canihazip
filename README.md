# canihazip

The unsophisticated CloudFlare Worker that does just one job: returns the client IP address.

### Usage

To retrieve the client ip, simply send a GET request to the worker.

```sh
$ curl https://canihazip.senorita.workers.dev
# 123.12.42.69
```

JSON is also supported. Add the `Accept: application/json` header for a valid JSON response.

```sh
$ curl -H "Accept: application/json" https://canihazip.senorita.workers.dev
# { "ip": "123.12.42.69" }
```

### License

MIT

### Misc

Feel free to open an issue/pull request. This project was in no way created to rival [ipify](https://github.com/chebro/ipify).
