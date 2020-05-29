# homepage

My homepage - check it out at http://julius.laita.la/ !

## Running locally in dev mode

1. Make sure you have node and yarn installed
2. Clone this repo
3. Do a `yarn install`
4. `yarn start`, and you are good to go!

## Running locally in production mode

This app runs on [pm2](https://pm2.keymetrics.io/) in production,
due to it being readily available in Azure's App Service
(where this is hosted).
To try the production mode yourself,

1. Clone the repo and do a `yarn install`
2. Install pm2: `yarn global add pm2`
3. Do a production build with `yarn build`
4. Start the app with pm2: `pm2 start ecosystem.config.js`
