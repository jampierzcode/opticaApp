export type AmplifyDependentResourcesAttributes = {
  "api": {
    "opticaapp2": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "opticafilmoraapi": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "gerenteGroupRole": "string",
      "superadminGroupRole": "string",
      "vendedorGroupRole": "string"
    }
  },
  "function": {
    "opticafilmoraapiPostConfirmation": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "imagesoptica": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}