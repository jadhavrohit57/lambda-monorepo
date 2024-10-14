# lambda-monorepo

Implementaion of monorepo using lambda workspaces. Includes packages of lambda-functions and serverless infrastructure code for lambda functions deployment.

## For linting
    - run cmd "yarn lint"

## Run unit tests
    - cmd "yarn workspace lambda-functions test"

## How to run on local
    - from root directory run "yarn install" to install all dependencies.
    
    - to test lambda function using serverless-offline run cmd "yarn workspace infrastructure run sls-off". Then go to http://localhost:3000/dev/test
![sls-off](public/sls-off.png)

<p>
    <img src="public/sls-off.png">
</p>
    
    - To open Swagger documentaion run cmd "yarn workspace lambda-functions run swagger".
    for swagger go to http://localhost:3001/api-docs
![swagger](public/swagger.png)

## Deploy aws lambda and api-gateway using serverless
    - compile lambda to javascript
    run cmd "yarn workspace lambda-functions build"
   
    - deploy using serverless
    run cmd "yarn workspace infrastructure run sls-deploy"

    - this will deploy lambda function and attach api gateway trigger to the function

![lambda-view](public/lambda.png)

    - Test example
![api](https://github.com/jadhavrohit57/lambda-monorepo/blob/main/public/api-gateway.png)


<p>
    <img src="https://github.com/jadhavrohit57/lambda-monorepo/blob/main/public/api-gateway.png">
</p>