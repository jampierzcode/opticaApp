/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { OPTICA } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OPTICAUpdateFormInputValues = {
    nombre?: string;
    createdBy?: string;
    direction?: string;
    cp?: string;
    rfc?: string;
    contactPhone?: string;
    codSerial?: string;
};
export declare type OPTICAUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
    direction?: ValidationFunction<string>;
    cp?: ValidationFunction<string>;
    rfc?: ValidationFunction<string>;
    contactPhone?: ValidationFunction<string>;
    codSerial?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OPTICAUpdateFormOverridesProps = {
    OPTICAUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
    direction?: PrimitiveOverrideProps<TextFieldProps>;
    cp?: PrimitiveOverrideProps<TextFieldProps>;
    rfc?: PrimitiveOverrideProps<TextFieldProps>;
    contactPhone?: PrimitiveOverrideProps<TextFieldProps>;
    codSerial?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OPTICAUpdateFormProps = React.PropsWithChildren<{
    overrides?: OPTICAUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    oPTICA?: OPTICA;
    onSubmit?: (fields: OPTICAUpdateFormInputValues) => OPTICAUpdateFormInputValues;
    onSuccess?: (fields: OPTICAUpdateFormInputValues) => void;
    onError?: (fields: OPTICAUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OPTICAUpdateFormInputValues) => OPTICAUpdateFormInputValues;
    onValidate?: OPTICAUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OPTICAUpdateForm(props: OPTICAUpdateFormProps): React.ReactElement;
