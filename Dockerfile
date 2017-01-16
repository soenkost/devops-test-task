FROM node:argon

ENV APP_REDIS_URI redis://docker.local:6380
ENV APP_MONGO_URI mongodb://docker.local:27117/app

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --production

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000 
CMD [ "npm", "start" ]

