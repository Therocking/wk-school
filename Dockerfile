ARG NODE_VERSION=18.13.0
ARG PNPM_VERSION=8.15.4

FROM node:${NODE_VERSION}-alpine as base

EXPOSE 4200

WORKDIR /usr/src/app

# Install pnpm.
RUN npm install -g pnpm@${PNPM_VERSION}

FROM base as deps

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base as build

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN pnpm run build

FROM nginx:1.17-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json

CMD ["nginx", "-g", "daemon off;"]