import IconButton, { IconButtonProps } from '@mui/material/IconButton';

// SCSS Import
import './revediaIconButton.scss';

export interface RevediaIconButtonProps extends IconButtonProps {
    white? : boolean;
}

const RevediaIconButton = ({ white, ...rest }: RevediaIconButtonProps) => {
    return (<div className={`revedia-icon-button ${white ? 'white': ''}`}>
        <IconButton {...rest} />
    </div>)
}

export default RevediaIconButton;