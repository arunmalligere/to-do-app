import { createGlobalStyle } from 'styled-components';
import { createMuiTheme, fade } from '@material-ui/core/styles';
import { amber, blue, green } from '@material-ui/core/colors';
import { deDE } from '@material-ui/core/locale';
import { normalize } from 'polished';

const primaryColor = '#474BFF';
export const theme = createMuiTheme(
    {
        // layout: {
        //     appBar: {
        //         height: 72,
        //     },
        //     drawer: {
        //         smWidth: 240,
        //         width: 355,
        //         xsWidth: 180,
        //     },
        //     modal: {
        //         minWidth: '40%',
        //     },
        // },
        overrides: {
            MuiTableCell: {
                head: {
                    borderBottom: `1px solid ${primaryColor}`,
                },
            },
            MuiButton: {
                outlinedPrimary: {
                    backgroundColor: fade(primaryColor, 0.1),
                    borderColor: fade(primaryColor, 0.05),
                },
                outlinedSecondary: {
                    borderColor: 'rgba(234, 234, 234, 0.5)',
                },
            },
        },
        palette: {
            error: {
                main: '#FF5645',
            },
            info: {
                main: blue[500],
            },
            primary: {
                main: primaryColor,
            },
            secondary: {
                light: '#515870',
                main: '#2D3142',
            },
            success: {
                main: green.A700,
            },
            warning: {
                main: amber[500],
            },
            background: {
                default: 'rgba(234, 234, 234, 0.5)',
            },
        },
        props: {
            MuiButtonBase: {
                disableRipple: true, // No more ripple, on the whole application - yay \o/
            },
        },
        shape: {
            borderRadius: 3,
        },
        typography: {
            fontFamily: [
                'Inter',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
            ].join(','),
            fontSize: 16,
            fontWeightRegular: 400,
            fontWeightLight: 300,
            fontWeightMedium: 600,
            fontWeightBold: 700,
            body1: {
                fontWeight: 400,
            },
            body2: {
                fontWeight: 400,
            },
            button: {
                fontSize: '0.9rem',
                fontWeight: 500,
                textTransform: 'none',
            },
            h1: {
                fontSize: '6rem',
                fontWeight: 300,
            },
            h2: {
                fontSize: '3.75rem',
                fontWeight: 300,
            },
            h3: {
                fontSize: '3rem',
                fontWeight: 400,
            },
            h4: {
                fontSize: '2.125rem',
                fontWeight: 400,
            },
            h5: {
                fontSize: '1.4rem',
                fontWeight: 400,
            },
            h6: {
                fontSize: '1.25rem',
                fontWeight: 400,
            },
            subtitle1: {
                fontSize: '1.0rem',
                fontWeight: 500,
            },
            subtitle2: {
                fontSize: '1.0rem',
                fontWeight: 300,
            },
            caption: {
                fontSize: '0.73rem',
                fontWeight: 600,
            },
        },
    },
    deDE,
);

const BaseStyles = createGlobalStyle`
  ${normalize()}

  .MuiInput-underline.Mui-disabled:before {
    content: none;
  }

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  .MuiPickersToolbarText-toolbarTxt.MuiTypography-h3 {
    font-size: 2.5rem;
  }

  .separator {
    opacity: 0.4;
    width: 75%;
    margin-top: 20px;
    margin-bottom: 15px;
  }
  }
`;

export default BaseStyles;