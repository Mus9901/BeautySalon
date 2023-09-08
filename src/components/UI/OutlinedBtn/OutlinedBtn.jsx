import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';


const COutlinedButton = styled(Button)({
    '&.MuiButton-root': {
        background: 'white',
        color: 'var(--text-color)',
        fontFamily: 'inherit',
        fontWeight: '400',
        fonstSize: '14px',
        lineHeight: '17.5px',
        // letterSpacing: '4px',
        padding: '8px 12px',
        borderRadius: '0px',
        boxShadow: 'none',
        width: 'fit-content',
        border: '1.5px solid #5C8692',
        textTransform: 'none'
    }
   });

export default function OutlinedButton({text, type, ...props}) {
    return (
        <COutlinedButton
            variant="outlined"
            type={type}
            {...props}
        >
            {text}
        </COutlinedButton>
    )
}