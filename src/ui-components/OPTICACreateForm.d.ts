/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OPTICACreateFormInputValues = {
    nombre?: string;
    createdBy?: string;
};
export declare type OPTICACreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OPTICACreateFormOverridesProps = {
    OPTICACreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OPTICACreateFormProps = React.PropsWithChildren<{
    overrides?: OPTICACreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OPTICACreateFormInputValues) => OPTICACreateFormInputValues;
    onSuccess?: (fields: OPTICACreateFormInputValues) => void;
    onError?: (fields: OPTICACreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OPTICACreateFormInputValues) => OPTICACreateFormInputValues;
    onValidate?: OPTICACreateFormValidationValues;
} & React.CSSProperties>;
export default function OPTICACreateForm(props: OPTICACreateFormProps): React.ReactElement;
