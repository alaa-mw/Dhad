import { createTheme } from '@mui/material/styles';
import theme from './theme';

const secondaryTheme = createTheme(theme,{
    components: {
     MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            right: 30,
            left: "auto",
            transformOrigin: "right center",
          },
          "& .MuiOutlinedInput-root": {
             "& fieldset": {
              transform: "scaleX(-1)", // Flip only the border
            },
            borderRadius: "25px",
            "&:hover fieldset": {
              borderColor: "primary.light",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.light",
              borderWidth: "2px",
            },
          },
          "& input": {
            direction: "rtl",       // Force RTL text direction
            textAlign: "right",      // Align text to right
            padding: "16.5px 25px",
          },
          "& textarea": {           // For multiline inputs
            direction: "rtl",
            textAlign: "right",
            unicodeBidi: "plaintext",
          },
        },
      },
    },
    },
});

export default secondaryTheme;