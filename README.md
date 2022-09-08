This README file describe the task of test (part 1) and running of the application (part 2).

# Part 1. Description of requirements:

## Node.js Onix Internship 2022

Your task is create server with one route, that will return current USD rate for cryptocurrency provided as parameter.

### Example:

```
http://localhost:3000/rates?currency=bitcoin
http://localhost:3000/rates?currency=ethereum
```

### Response 
```
{
    "usd": "1536.8376043904155762"
}
```

### Additional information:
* Cryptocurrency API for rates: https://docs.coincap.io/
* As parameter we can pass any cryptocurrency that provided with coincap API.
* If pass not existing value, need to show error message, and change response status to 404.

### When you finish task, send link with your github repo to [HR manager](mailto:tatiana.gdeshinskaya@onix-systems.com).

<br>

# Part 2. Running of the application:
- 2.1.1 Install [NodeJS 18.8.0](https://nodejs.org/en/download/current/)
- 2.1.2 Open a folder with this project, run a terminal command `npm install & node app.js`
- 2.1.3 Open your browser and type `http://localhost:3000/rates`
- 2.1.4 For stopping type CTRL+C on the terminal window

OR Run this application via Docker
- 2.2.1 Install [Docker](https://www.docker.com/)
- 2.2.2 Open a folder with this project, and build the app via running a terminal command (with dot at the end) `docker build -t onix/internship2022 .`
- 2.2.3 Start the container `docker run --rm -p 3000:3000 -it onix/internship2022`
- 2.2.4 Open your browser and type `http://localhost:3000/rates`
- 2.2.5 For stopping type CTRL+C on the terminal window