const aws = require("aws-sdk");

const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-18",
});

const addToGroup = async ({ GroupName, UserPoolId, Username }) => {
  const groupParams = {
    GroupName,
    UserPoolId,
  };
  const addUserParams = {
    GroupName,
    UserPoolId,
    Username,
  };
  /**
   * Check if the group exists; if it doesn't, create it.
   */
  try {
    await cognitoidentityserviceprovider.getGroup(groupParams).promise();
    console.log(`[ADD-TO-USER] found the group ${GroupName}`);
  } catch (e) {
    console.log(`[ADD-TO-USER] creating the group ${GroupName}`);
    await cognitoidentityserviceprovider.createGroup(groupParams).promise();
    console.log(`[ADD-TO-USER] created the group ${GroupName}`);
  }
  /**
   * Then, add the user to the group.
   */
  await cognitoidentityserviceprovider
    .adminAddUserToGroup(addUserParams)
    .promise();
  console.log(`[ADD-TO-USER] added ${Username} the group ${GroupName}`);
};

const addAttribute = async ({ laboratoryId, UserPoolId, Username }) => {
  const updateParams = {
    UserAttributes: [
      {
        Name: "name",
        Value: laboratoryId, // ADD YOUR TENANT LOGIC HERE
      },
    ],
    UserPoolId,
    Username,
  };
  try {
    await cognitoidentityserviceprovider
      .adminUpdateUserAttributes(updateParams)
      .promise();
    console.log(`[ADD-TO-USER] added ${Username} laboratoryId ${laboratoryId}`);
  } catch (e) {
    console.log(
      `[ADD-TO-USER] failed to add ${Username} laboratoryId ${laboratoryId}`,
      e
    );
  }
};
/**
 * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
 */
exports.handler = async (event) => {
  let groupName = null;
  let laboratoryId = null;
  try {
    groupName = event.request.clientMetadata["groupName"];
    laboratoryId = event.request.clientMetadata["laboratoryId"];
  } catch {}
  if (groupName) {
    await addToGroup({
      GroupName: groupName,
      UserPoolId: event.userPoolId,
      Username: event.userName,
    });
    // await addToGroup({GroupName: `${groupName}--${laboratoryId}`, UserPoolId: event.userPoolId, Username: event.userName,});
    //await addAttribute({laboratoryId, UserPoolId: event.userPoolId, Username: event.userName,});
  }

  return event;
};
