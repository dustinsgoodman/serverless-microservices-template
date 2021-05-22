# Serverless Template

This project is intended to be a quick start for the [Serverless Framework](serverless.com). It is intended to act as a microservices architecture with a public facing GraphQL API. This template employs the following libraries:

- Apollo GraphQL
- Webpack 5
- TypeScriprt (Coming Soon)
- Jest

## Requirements
* node 12.18.2
* npm 6.14.5
* [Serverless CLI](https://www.serverless.com/framework/docs/getting-started/)

## Setup

1. Clone the repo
2. `npm i`
3. Generate dotenv files
4. Configure profile, region, and other serverless values in `serverless.common.yml`. See [docs](https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml/) for configuration

### Clone dotenv files
```
cp .env.development.example .env.development
cp .env.test.example .env.test
```

## Getting Started

### Running a service

1. `cd services/<service>`, e.g. `cd services/public-api`
2. `sls offline`
3. Connect to the URL provided in the output

### Creating a new service

1. Create new directory in `services`
2. Generate new `serverless.yml` in your new service's directory
3. Modify your `serverless.yml` to reflect your service's API
4. Add your service to the ports list in `serverless.common.yml` and `invoke.js`

Example:
```
cd services
mkdir user-api
cd user-api
cp ../public-api/serverless.yml ./serverless.yml
# edit serverless.yml
# edit serverless.common.yml
# edit invoke.js
```

### Extending an existing service

1. Open `serverless.yml` in your service's directory
2. Add a new function to the yml
3. Add your handler file

## Useful Commands
`npm run console`
Launches an interactive repl for testing your code. If you're familiar with Ruby on Rails, this is similar to the Rails' console.

`npm run lint`
Project configured `eslint` command. Accepts all CLI options from eslint. Must specify file to act upon.

`npm run lint:ci`
Runs linting against entire project in error-only mode.

`npm run lint:errors`
Runs linting in error-only mode. Must specify file to act upon.

`npm run test`
Runs jest test suite. All jest CLI options are available.

`npm run test:ci`
Runs full jest test suite in CI mode. All tests are run sequentially.

`npm run test:debug`
Run tests in debuggable mode for your editor.
