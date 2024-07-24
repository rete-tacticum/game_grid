FROM node:20-alpine AS base
RUN npm install \
	npm@latest \
	typescript \
	ts-loader \
	@types/react \
	react-dom@latest \
	react@latest \
	-g --silent

FROM base AS main

ENV PATH /opt/app/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY ./app/package*.json /opt/app/
RUN npm i
COPY . .
RUN chown -R node:node /opt/app
USER node
EXPOSE 3000

CMD ["sh", "/opt/entrypoint.sh"]
