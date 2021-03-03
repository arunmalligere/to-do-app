import React, { ReactNode, memo } from 'react';
import { InputAdornment, TextField as MuiTextField } from '@material-ui/core';
import { FormikFieldProps } from '../../types/formik';
import { JsxAttributes } from 'typescript';

type TextFieldProps = FormikFieldProps<string | number> & {
    type?: 'text' | 'number' | 'email' | 'password' | 'time';
    trailingIcon?: ReactNode;
    InputProps?: any;
    autoFocus?: boolean;
    fullWidth?: boolean;
    multiline?: boolean;
    rows?: number;
    variant?: any;
};

const TextField: React.FC<TextFieldProps> = ({
    id,
    name,
    type = 'text',
    value,
    touched,
    error,
    label,
    placeholder,
    helperText = '',
    trailingIcon,
    status,
    disabled,
    required,
    defaultValue,
    onChange,
    onBlur,
    InputProps,
    fullWidth = true,
    multiline = false,
    variant = "standard",
    rows,
    ...props
}) => (
    <MuiTextField
        id={id}
        name={name}
        type={type}
        value={value == null ? defaultValue : value}
        label={label}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        helperText={touched && error ? error : helperText}
        error={touched && status === 'invalid'}
        disabled={disabled}
        required={required}
        fullWidth={fullWidth}
        rows={rows}
        variant={variant}
        multiline
        {...props}
        InputProps={{
            ...InputProps,
            endAdornment: trailingIcon && <InputAdornment position="end">{trailingIcon}</InputAdornment>,
        }}
    />
);

export default memo(TextField, (prevProps, nextProps) => {
    const {
        value: prevValue,
        touched: prevTouched,
        error: prevError,
        helperText: prevHelperText = '',
        trailingIcon: prevTrailingIcon,
        disabled: prevDisabled,
        required: prevRequired,
    } = prevProps;
    const {
        value: nextValue,
        touched: nextTouched,
        error: nextError,
        helperText: nextHelperText = '',
        trailingIcon: nextTrailingIcon,
        disabled: nextDisabled,
        required: nextRequired,
    } = nextProps;
    return (
        prevValue === nextValue &&
        prevTouched === nextTouched &&
        prevError === nextError &&
        prevHelperText === nextHelperText &&
        prevTrailingIcon === nextTrailingIcon &&
        prevDisabled === nextDisabled &&
        prevRequired === nextRequired
    );
});
