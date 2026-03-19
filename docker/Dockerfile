#———————————————————————————————————————————#
# BASE                                      #
#———————————————————————————————————————————#
FROM node:24-alpine AS base

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE ${APP_PORT}

#———————————————————————————————————————————#
# DEV                                       #
#———————————————————————————————————————————#
FROM base AS development

CMD ["npm", "run", "dev"]

#———————————————————————————————————————————#
# PROD                                      #
#———————————————————————————————————————————#
FROM base AS build
RUN npm run build

FROM build AS production
USER node

CMD ["npm", "run", "start"]
