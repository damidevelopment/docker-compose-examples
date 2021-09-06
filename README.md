# Development in Docker

## How to start

1. You need to add all domains from docker-compose.yml to your `/etc/hosts` file, you can find all domains under `VIRTUAL_HOST` environment variable for each service.
    ```bash
    127.0.0.1   basic-web.local
    127.0.0.1   extra-web.local
    127.0.0.1   advanced-web.local
    ```

2. Now just run `docker-compose up -d` and try any of local domains.

## How to use

Because you are running whole development in container, you often needs to see logs from your service. For this you have 2 options.

1. use [docker logs](https://docs.docker.com/engine/reference/commandline/logs/#options)
    ```bash
    docker logs -fn0 web_server
    ```
2. run service on foreground
    ```bash
    docker-compose up web_server
    ```

Here a 3 examples nginx-proxy usage.

# Basic

Simple configuration of web server with almost zero configuration. Variable `VIRTUAL_HOST` is only required for setting the proxy config. `VIRTUAL_PORT` is by default 80, but our example service is listening on port 8080.

# Basic extra

It's the basic example but with solution for between services http requests.

When you need to make internal http requests between services, you need to define `extra_hosts` variable and declare all domains against IP. Downside of this is, that you must define IP pool for network, becouse `extra_hosts` accepts only domain:IP pairs.

# Advanced & Advanced2

These two examples do the same, but with slightly different approach. In `advanced` example you can see that we are running 2 server inside single container but under single domain.

Example `advanced2` does the same, but both servers have separate containers. You can see that, we define `VIRTUAL_HOST` only for one container, rest is defined inside `advanced2/docker/nginx/vhost.d/advanced-web.local`

## Profiles

Also advanced examples shows how to use profiles. When you have multiple services inside one `docker-compose` you can group them inside profiles. That way you can see which services must run together. For running advanced examples you just run:

```bash
docker-compose --profile web_server up -d
```

and see which services will start.

Be aware, when you does not define `profiles` priperty for service, it will start every time you call `up` command. When you need to start multiple profiles, just add multiple `--profile` props to bash command, like so:

```bash
docker-compose --profile web_server --profile next_server up -d
```

For more info see the docs:
- [Docker profiles](https://docs.docker.com/compose/profiles/)
- [nginx-proxy](https://registry.hub.docker.com/r/jwilder/nginx-proxy)
- [Extra hosts](https://stackoverflow.com/questions/29076194/using-add-host-or-extra-hosts-with-docker-compose)
