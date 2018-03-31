# HF webCodingChallenge UI
This is the User Interface of the [HF webCodingChallenge](https://github.com/eissasoubhi/challenge-project "HF webCodingChallenge") project build with [Vue.js](https://vuejs.org "Vue.js").

The stack is built using [vue-cli webpack](https://github.com/vuejs-templates/webpack "vue-cli webpack") so to get started these are the steps:

## Install
``` bash
# download the project
> git clone git@github.com:eissasoubhi/challenge-project.git
# go to the project folder
> cd challenge-project/frontend
# install dependencies
> npm install
# serve with hot reload at http://localhost:8080
> npm run dev
```
> Note: the application expects the API to be running at http://localhost:8000 but that could be changed in the [configurations](#configuration "configurations")

## Configuration 
The webpack configurations, *(eg: the server default port 8080)*, are located in the `config` folder.

For the application configurations (eg: the API base URL), are placed in `src/common/config.js` file.

## API
The API used in this application can be found here https://github.com/eissasoubhi/challenge-project/tree/master/backend

## Specifications
Full specifications of this application can be found here https://github.com/hiddenfounders/web-coding-challenge

## Tests
The tests are placed in the folder `test/unit/specs`. to run them use

`npm run test`

or to set a watcher on them

`npm run watchtest`

## Deployment
To deploy the application run

`npm run build`

and the files will be generated in the `dist` folder

## To know
Arbitrary choices are:
- Vuex modules for store
- Vue-axios for ajax requests
- Standard for linting
- **hf** as prefix for components
