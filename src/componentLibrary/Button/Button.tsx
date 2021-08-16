import React, { ReactNode } from 'react';

import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
} from '@material-ui/core';

type ButtonProps = {
    filled?: boolean;
    secondary?: boolean;
    fullWidth?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
    to?: string;
    isPending?: boolean;
    onClick?: (event?: React.MouseEvent<Element, MouseEvent>) => void;
} & MuiButtonProps;

const Button: React.FC<ButtonProps> = ({
    children,
    filled,
    secondary,
    icon: Icon,
    fullWidth = false,
    isPending,
    color = secondary ? 'secondary' : 'primary',
    onClick,
    ...props
}) => (
    <MuiButton
        color={secondary ? 'secondary' : 'primary'}
        startIcon={Icon}
        variant={filled ? 'contained' : 'text'}
        style={{ width: fullWidth ? '100%' : 'auto' }}
        component='button'
        onClick={(event?: React.MouseEvent<Element, MouseEvent>) => {
            if (isPending) {
                event?.preventDefault();
            } else if (onClick && event) {
                onClick(event);
            }
        }}
        {...props}
    >
        {children}
    </MuiButton>);

export default Button;
