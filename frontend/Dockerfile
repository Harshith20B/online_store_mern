# Build stage
FROM node:20-alpine as builder

WORKDIR /app
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm install
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
