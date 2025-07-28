# Step 1: Build the React app using Node.js

FROM node:20-alpine AS build
WORKDIR /app



COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Step 2: Serve the build with nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
