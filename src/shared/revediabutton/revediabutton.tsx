import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

// SCSS Import
import './revediabutton.scss';

export interface ButtonProps extends MuiButtonProps {
    label?: string
}

const RevediaButton = ({ label, ...rest }: ButtonProps) => {
    return (
        <div className='revedia-button'>
            <Button {...rest} >{label} </Button>
        </div>
    )
}

export default RevediaButton;