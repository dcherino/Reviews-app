# Product Review App

## Daniel Cherino Technical Test

Technical test asignment for the recruitment process for the position at the Hub (checkout.com)

![alt text](home.png "Home Page")

## Prerequisites

Before you continue, ensure you have met the following requirements:

* You have installed the latest version of [Docker](https://www.docker.com/get-started).
* You have a basic understanding of the terminal and command lines.

## Running the app locally in DEV mode
In order to run the application, this repository should be cloned on a local computer. Opening the computer terminal, the following command needs to be run from the app root folder:

`docker-compose up --build`

This command will build the development image and start the container where the app will run. If the installation is successful, the application should be accessible on http://localhost:3000. Please, keep in mind that the flag `--build` only is neccesary the first time running the container.

To stop and remove the container, execute the following command:

`docker-compose down`

Alternatively, if you don't want to use docker-compose, then you need to run the followign commands:

`docker build -t cherino_webapp:dev .`

Then, spin up the container once the build is done:

`$ docker run  -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true cherino_webapp:dev`

If you run into an <em>"ENOENT: no such file or directory, open '/app/package.json"</em> error, you may need to add an additional volume: `-v /app/package.json`.

## Running the app locally in PRODUCTION mode

To fire up the container in prodcution mode:

`docker-compose -f docker-compose.prod.yml up -d --build`

<em>Again, the `--build` flag should be used only the first time.</em>

Navigate to http://localhost:1337/ in your browser to view the app.

To build the image with the Dockerfile instead:

`docker build -f Dockerfile.prod -t cherino_webapp:prod .`

Then, spin up the container:

`docker run -it --rm -p 1337:80 cherino_webapp:prod`

# Technical details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The technologies used to develop this project are:

* ReactJS
* TypeScript
* Redux Toolkit

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


