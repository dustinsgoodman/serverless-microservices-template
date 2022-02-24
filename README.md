# Serverless Microservices Demo

This application serves as a demonstration of how one might architect an enterprise level application using the Serverless Framework. It provides the following services out of the box:

- [Public API](./services/public-api): Provides a GraphQL API and other endpoints for public interactions.
- [Background Jobs](./services/background-jobs): Handles background processing based jobs.

## Technologies Used

- Serverless Framework v3
- ESBuild - Fast, light-weight bundler
- TypeScript

## Serverless Things

### Running Locally

We use the [`serverless-offline`](https://github.com/dherault/serverless-offline) package to allow you to develop your application locally. To run a particular service, `cd` into that directory and run the `sls offline` command. Your terminal will tell you what port you're running on. If you're adding a new service, you'll need to configure its ports in the [`serverless.common.yml`](./serverless.common.yml). This is so all port configurations are hosted in one place to avoid runtime conflicts for port 3000. Here's the current port lookup table:

| Service    | HTTP Port | Lambda Port |
| ---------- | --------- | ----------- |
| Public API | 3000      | 3002        |

### Deploying

`cd` into the directory of the service you want to deploy and run:

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Deploying public-api to stage dev (us-east-1)

✔ Service deployed to stack public-api-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  healthcheck: public-api-dev-healthcheck (1.9 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).
