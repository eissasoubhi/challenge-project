# HF webCodingChallenge
It lists shops nearby the user location.

*this project is a simple web coding challenge with coding-best-practices in mind created as the second step for job application in hidden founders.*

See it in action http://hfwcc.eissa-soubhi.com

## Install
To set the application up and runing:

`git clone git@github.com:eissasoubhi/challenge-project.git`
### First the UI 
`cd challenge-project/frontend`

install dependencies

`npm install`

serve the UI with hot reload at http://localhost:8080

`npm run dev`
> If the port 8080 is unavailable the server will start at another port.


### Then the API
In another terminal go to `challenge-project/backend` folder


Install all the dependencies using composer

`composer install`

Copy the example env file and make the required configuration changes in the .env file

`cp .env.example .env`

Generate a new application key

`php artisan key:generate`

Generate a new JWT authentication secret key

`php artisan jwt:generate`

Run the database migrations (**after creating the database and setting the connection in .env before migrating**)

`php artisan migrate`

Database seeding with dummy data

`php artisan db:seed`

Start the local development server

`php artisan serve`

You can now access the API at http://localhost:8000


Now the application is accessible here http://localhost:8080

### Important note
**Make sure the UI is running at http://localhost:8080 and the Api at http://localhost:8000 otherwise it wont work or you'll have to change those default URLs in both [the UI configuration](https://github.com/eissasoubhi/challenge-project/tree/master/frontend#configuration "the UI configuration") and the [the Api configuration](https://github.com/eissasoubhi/challenge-project/tree/master/backend#configuration "the Api configuration").**

See [more about the UI here](https://github.com/eissasoubhi/challenge-project/tree/master/frontend "more about the UI here") and [more about the Api here](https://github.com/eissasoubhi/challenge-project/tree/master/backend "more about the Api here").

## Screenshots
### Home page
![HF webCodingChallenge](https://raw.githubusercontent.com/eissasoubhi/challenge-project/master/home.png "HF webCodingChallenge Home page")

### Nearby shops page
![HF webCodingChallenge](https://raw.githubusercontent.com/eissasoubhi/challenge-project/master/nearby.png "HF webCodingChallenge Nearby shops page")

### Favorited shops page
![HF webCodingChallenge](https://raw.githubusercontent.com/eissasoubhi/challenge-project/master/favorited.png "HF webCodingChallenge Favorited shops page")

## License
**MIT**
