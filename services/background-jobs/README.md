# Background Jobs Service

This service is to handle any background processing needed by the rest of the application. If you're using SQS, this service can contain the lambdas for managing the SQS queues.

If you're using DynamoDB triggers or other async processing, you can choose to use this service or delegate it to the appropriate domain service as you see fit.

## Architecture

TBD
