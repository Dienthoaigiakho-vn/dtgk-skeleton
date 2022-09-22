FROM node:alpine

COPY . /demo

WORKDIR /demo

RUN yarn install && apk --update --no-cache add busybox-extras

USER node

# expose the port to outside world
EXPOSE 8000

ENTRYPOINT ["/bin/sh", "-c", "yarn start" ]
