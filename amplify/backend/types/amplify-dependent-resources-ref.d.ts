export type AmplifyDependentResourcesAttributes = {
  "api": {
    "optica": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "opticaapi": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "clienteGroupRole": "string",
      "gerenteGroupRole": "string",
      "superadminGroupRole": "string",
      "vendedorGroupRole": "string"
    }
  },
  "function": {
    "opticaapiPostConfirmation": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "opticaImages": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}