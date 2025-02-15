FROM node:22-alpine AS base
LABEL fly_launch_runtime="Node.js"
WORKDIR /usr/src/app

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat


# Install dependencies only when needed
FROM base AS deps

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN npm ci
RUN npm i @rollup/rollup-linux-x64-musl

# Rebuild the source code only when needed
FROM base AS builder

ENV NODE_ENV production

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .

RUN npm run build 


# Final stage for app image
FROM base as runner

# Setting NODE_ENV=production requires secure cookie (https only access)
ENV NODE_ENV production
ENV PORT 9000
ENV HOST 0.0.0.0

# Copy config file
COPY ./medusa-config.js ./

# Copy built application
#COPY --from=builder /usr/src/app/package.json ./package.json
#COPY ./instrumentation.ts .
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.medusa/server/public .
COPY --from=builder /usr/src/app/.medusa .
COPY  ./medusa-config.js .
COPY  ./package.json .


# Run application
EXPOSE 9000
CMD ["npm", "run", "dev"]
