import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

// SCSS Import
import './revediabutton.scss';

export interface RevediaButtonProps extends MuiButtonProps {
    white?: boolean
}


const RevediaButton = ({ white = false, disableTouchRipple = true, ...rest }: RevediaButtonProps) => {
    return (
        <div className={`revedia-button ${white ? 'white' : ''}`}>
            <Button {...rest} disableTouchRipple />
        </div>
    )
}

export default RevediaButton;