import { Auth } from "aws-amplify";

export const signUp = async ({
  userName,
  email,
  nombres,
  phoneNumber,
  profile,
  address,
  groupName,
  password,
}) => {
  await Auth.signUp({
    username: userName,
    // password: Math.random().toString(36).slice(2, 10),
    password: password,
    attributes: {
      email,
      name: nombres,
      phone_number: phoneNumber,
      profile,
      address,
    },
    clientMetadata: {
      groupName,
    },
  })
    .then((data) => {
      console.log("Se ha creado correctamente al usuario");
    })
    .catch((error) => {
      console.log("Error al registrar el usuario:", error);
    });
};
