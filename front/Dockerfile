# Stage 1 - Build React app
FROM node:18 as build
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tailwindcss -i ./src/index.css -o ./dist/output.css
RUN npm run build

# Stage 2 - Serve the React app with Nginx
FROM nginx:1.21.3-alpine
COPY --from=build /dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
