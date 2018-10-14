FROM node:10.12.0-slim

# 1. Transfer source files to the image
ADD src /src
ADD public /public
ADD package.json /package.json

# 2. Install dependencies defined in package.json
RUN npm install

# When running the image, use node to run app.js
CMD npm start