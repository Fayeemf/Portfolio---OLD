FROM node:8.1.2-alpine

RUN npm install pm2 -g
COPY src/ /srv/
COPY docker/process.yml /srv/process.yml
COPY package.json yarn.lock /srv/

WORKDIR /srv/
RUN yarn install --production

CMD ["pm2-docker", "process.yml"]