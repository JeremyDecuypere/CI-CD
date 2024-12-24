FROM nginx
COPY . /usr/share/nginx/html
EXPOSE 80
CMD sh -c "echo 'window.BACKEND_URL=\"${BACKEND_URL}\";' > /usr/share/nginx/html/env-config.js && nginx -g 'daemon off;'"