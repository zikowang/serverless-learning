# Leadning serverless with AWS

The project is using typescript.

## Serverless

### Develop and test locally

#### Install dynamodb locally

`sls dynamodb install`

#### Deploy locally

`sls offline start`

### Invoke locally

`sls invoke local -f <functionName>`

or

`sls invoke local -f <functionName> --watch`

### Deploy stack

`sls deploy`

### Deploy single function

`sls deploy -f <functionName>`
