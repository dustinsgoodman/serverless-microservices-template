# Serverless Template
This is a [Serverless](serverless.com) backend application template for usage across multiple projects. The goal is to provide an easy to use quick start for any new serverless projects you want to use in the future.

## Requirements
* Node 12.18.2
* [Serverless CLI](https://www.serverless.com/framework/docs/getting-started/)

## Setup
TBD

### Clone dotenv files
```
cp .env.development.example .env.development
cp .env.test.example .env.test
```

## Useful Commands
`npm run console`
Launches an interactive repl for testing your code.

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
