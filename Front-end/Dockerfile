FROM node:12


# Installing dependencies
COPY package*.json .
COPY yarn.lock .
RUN yarn install

# Copying source files
COPY . .

# Building app
RUN yarn build

# Running the app
CMD ["yarn", "dev"]