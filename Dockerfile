# ---------- Stage 1: Build (Node se React ka production build) ----------
FROM node:20-alpine AS build
WORKDIR /app

# Pehle sirf package files copy -> dependency layer cache ho jaati hai
COPY package.json package-lock.json ./
RUN npm ci

# Baaki code copy karke build
COPY . .
RUN npm run build

# ---------- Stage 2: Serve (sirf nginx + build output, Node nahi) ----------
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
