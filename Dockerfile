# Will create an nginx hros_screening
# 1.0 npm run build


FROM nginx:alpine
COPY public /usr/share/nginx/html

# RUN rm /etc/nginx/conf.d/*
RUN chmod -R 775 /usr/share/nginx/html
COPY /etc/nginx.conf /etc/nginx/nginx.conf
