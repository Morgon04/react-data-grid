import Button, { ButtonProps } from '@mui/material/Button';

// SCSS Import
import './revediabutton.scss'

const RevediaButton = (props: ButtonProps) => {
    return (<div className='revedia-button'>
        <Button {...props} />
    </div>)
}

export default RevediaButton;