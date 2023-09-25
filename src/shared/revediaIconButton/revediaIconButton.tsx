import IconButton, { IconButtonProps } from '@mui/material/IconButton';

// SCSS Import
import './revediaIconButton.scss'

const RevediaIconButton = (props: IconButtonProps) => {
    return (<div className='revedia-icon-button'>
        <IconButton {...props} />
    </div>)
}

export default RevediaIconButton;