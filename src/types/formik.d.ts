import { FormikHandlers } from 'formik';

export type FormikFieldProps<V> = {
    id: string;
    name: string;
    label: string;
    placeholder: string;
    value: V;
    defaultValue?: V;
    error: string;
    status: 'valid' | 'invalid' | 'touched' | 'initial';
    required?: boolean;
    touched: boolean;
    disabled?: boolean;

    helperText?: string;

    onChange: FormikHandlers['handleChange'];
    onBlur: FormikHandlers['handleBlur'];
};

type FormikSelectFieldProps<V> = FormikFieldProps<V> & {
    options: any[];
};

export type FormikSwitchProps = FormikFieldProps<boolean> & {
    color?: 'primary' | 'secondary' | 'default';
    checked: boolean;
    leftLabel?: string;
    error?: string;
};
