## Typescript Node Server Starter

A starter project for developing a node server in Typescript using Docker only.

### Prerequisites

1. Docker

    + [Windows](https://docs.docker.com/docker-for-windows/install/)
    + [Mac](https://download.docker.com/mac/stable/Docker.dmg)

### Up & Running

One way to get started,

```
git clone git@github.com:aedenj/typescript-node-starter.git ~/projects/my-node-server
cd ~/projects/my-node-server;docker run -it --rm node:alpine "npm run setup"
```

The `npm run setup` command will remove the git directory and run npm install.

Running the server under tsc-watch is done by running `docker-compose run app sh -c "npm run dev"`

Continuous testing is supported by running `docker-compose run test sh -c "npm test"`
