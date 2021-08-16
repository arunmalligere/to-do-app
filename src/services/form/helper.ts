export const getFormFieldStatus = (touched: any, error: any) => {
    if (touched && !error) return 'valid';
    if (touched && !!error) return 'invalid';
    if (touched) return 'touched';
    return 'initial';
};