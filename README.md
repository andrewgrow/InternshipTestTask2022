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
- 2.1 Install [NodeJS 18.8.0](https://nodejs.org/en/download/current/)
- 2.1 Open a folder with this project, run a terminal command `npm install & node app.js`
- 2.3 For stopping type CTRL+C
- 2.4 Open your browser and type `http://localhost:3000/rates`