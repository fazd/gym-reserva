FROM node

WORKDIR /opt/smart-fit-ui

COPY ./package-lock.json /opt/smart-fit-ui/package-lock.json
COPY ./package.json /opt/smart-fit-ui/package.json
COPY ./yarn.lock /opt/smart-fit-ui/yarn.lock

# Install dependecies
RUN npm install

# Copy source project
COPY ./public /opt/smart-fit-ui/public
COPY ./src /opt/smart-fit-ui/src


