/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { OPTICA } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function OPTICACreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombre: "",
    createdBy: "",
    direction: "",
    cp: "",
    rfc: "",
    contactPhone: "",
    codSerial: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [createdBy, setCreatedBy] = React.useState(initialValues.createdBy);
  const [direction, setDirection] = React.useState(initialValues.direction);
  const [cp, setCp] = React.useState(initialValues.cp);
  const [rfc, setRfc] = React.useState(initialValues.rfc);
  const [contactPhone, setContactPhone] = React.useState(
    initialValues.contactPhone
  );
  const [codSerial, setCodSerial] = React.useState(initialValues.codSerial);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombre(initialValues.nombre);
    setCreatedBy(initialValues.createdBy);
    setDirection(initialValues.direction);
    setCp(initialValues.cp);
    setRfc(initialValues.rfc);
    setContactPhone(initialValues.contactPhone);
    setCodSerial(initialValues.codSerial);
    setErrors({});
  };
  const validations = {
    nombre: [{ type: "Required" }],
    createdBy: [{ type: "Required" }],
    direction: [],
    cp: [],
    rfc: [],
    contactPhone: [],
    codSerial: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nombre,
          createdBy,
          direction,
          cp,
          rfc,
          contactPhone,
          codSerial,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new OPTICA(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "OPTICACreateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={true}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              createdBy,
              direction,
              cp,
              rfc,
              contactPhone,
              codSerial,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label="Created by"
        isRequired={true}
        isReadOnly={false}
        value={createdBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              createdBy: value,
              direction,
              cp,
              rfc,
              contactPhone,
              codSerial,
            };
            const result = onChange(modelFields);
            value = result?.createdBy ?? value;
          }
          if (errors.createdBy?.hasError) {
            runValidationTasks("createdBy", value);
          }
          setCreatedBy(value);
        }}
        onBlur={() => runValidationTasks("createdBy", createdBy)}
        errorMessage={errors.createdBy?.errorMessage}
        hasError={errors.createdBy?.hasError}
        {...getOverrideProps(overrides, "createdBy")}
      ></TextField>
      <TextField
        label="Direction"
        isRequired={false}
        isReadOnly={false}
        value={direction}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              createdBy,
              direction: value,
              cp,
              rfc,
              contactPhone,
              codSerial,
            };
            const result = onChange(modelFields);
            value = result?.direction ?? value;
          }
          if (errors.direction?.hasError) {
            runValidationTasks("direction", value);
          }
          setDirection(value);
        }}
        onBlur={() => runValidationTasks("direction", direction)}
        errorMessage={errors.direction?.errorMessage}
        hasError={errors.direction?.hasError}
        {...getOverrideProps(overrides, "direction")}
      ></TextField>
      <TextField
        label="Cp"
        isRequired={false}
        isReadOnly={false}
        value={cp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              createdBy,
              direction,
              cp: value,
              rfc,
              contactPhone,
              codSerial,
            };
            const result = onChange(modelFields);
            value = result?.cp ?? value;
          }
          if (errors.cp?.hasError) {
            runValidationTasks("cp", value);
          }
          setCp(value);
        }}
        onBlur={() => runValidationTasks("cp", cp)}
        errorMessage={errors.cp?.errorMessage}
        hasError={errors.cp?.hasError}
        {...getOverrideProps(overrides, "cp")}
      ></TextField>
      <TextField
        label="Rfc"
        isRequired={false}
        isReadOnly={false}
        value={rfc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              createdBy,
              direction,
              cp,
              rfc: value,
              contactPhone,
              codSerial,
            };
            const result = onChange(modelFields);
            value = result?.rfc ?? value;
          }
          if (errors.rfc?.hasError) {
            runValidationTasks("rfc", value);
          }
          setRfc(value);
        }}
        onBlur={() => runValidationTasks("rfc", rfc)}
        errorMessage={errors.rfc?.errorMessage}
        hasError={errors.rfc?.hasError}
        {...getOverrideProps(overrides, "rfc")}
      ></TextField>
      <TextField
        label="Contact phone"
        isRequired={false}
        isReadOnly={false}
        value={contactPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              createdBy,
              direction,
              cp,
              rfc,
              contactPhone: value,
              codSerial,
            };
            const result = onChange(modelFields);
            value = result?.contactPhone ?? value;
          }
          if (errors.contactPhone?.hasError) {
            runValidationTasks("contactPhone", value);
          }
          setContactPhone(value);
        }}
        onBlur={() => runValidationTasks("contactPhone", contactPhone)}
        errorMessage={errors.contactPhone?.errorMessage}
        hasError={errors.contactPhone?.hasError}
        {...getOverrideProps(overrides, "contactPhone")}
      ></TextField>
      <TextField
        label="Cod serial"
        isRequired={false}
        isReadOnly={false}
        value={codSerial}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              createdBy,
              direction,
              cp,
              rfc,
              contactPhone,
              codSerial: value,
            };
            const result = onChange(modelFields);
            value = result?.codSerial ?? value;
          }
          if (errors.codSerial?.hasError) {
            runValidationTasks("codSerial", value);
          }
          setCodSerial(value);
        }}
        onBlur={() => runValidationTasks("codSerial", codSerial)}
        errorMessage={errors.codSerial?.errorMessage}
        hasError={errors.codSerial?.hasError}
        {...getOverrideProps(overrides, "codSerial")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
