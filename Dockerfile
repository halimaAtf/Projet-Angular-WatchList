# Étape 1 : Build Angular
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Étape 2 : Serveur Nginx
FROM nginx:alpine
# Supprimer la page par défaut
RUN rm -rf /usr/share/nginx/html/*
# Copier uniquement le build Angular (browser)
COPY --from=build /app/dist/atelier1-angular/browser /usr/share/nginx/html
# Ajouter une config Nginx adaptée au routage Angular
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
