FROM nginx

WORKDIR /usr/share/nginx/html/
#以root用户运行nginx服务器
USER root

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist  /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
