FROM ubuntu:latest

USER root
WORKDIR /home/app
RUN apt-get update
RUN apt-get -y install curl gnupg unzip nodejs npm
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN curl --proxy-insecure  --tlsv1 -kv https://bun.sh/install | bash
COPY package*.json ./
RUN /root/.bun/bin/bun install
COPY . .

EXPOSE 3000

CMD ["/root/.bun/bin/bun", "run", "index.js"]
