FROM node:14
WORKDIR /usr/src/app

COPY . ./

# building the app
RUN npm i
RUN npm run build

# Running the app
CMD [ "npm", "start" ]

# for build docker image = docker build . -t my-next-js-app
# for run docker run -p 80:3000 my-next-js-app
# go localhost