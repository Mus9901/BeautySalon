import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';


const CButton = styled(Button)({
    '&.MuiButton-root': {
        background: '#7A9CA5',
        color: 'white',
        fontFamily: 'inherit',
        fontWeight: '700',
        fonstSize: '14px',
        lineHeight: '17.5px',
        letterSpacing: '4px',
        padding: '14px 33px',
        borderRadius: '0px',
        boxShadow: 'none',
        width: 'fit-content'
    }
   });

export default function MainButton({text, icon,type, fullWidth, ...props}) {
    return (
        <CButton
            fullWidth={fullWidth}
            variant="contained"
            type={type}
            startIcon={icon}
            {...props}
        >
            {text}
        </CButton>
    )
}