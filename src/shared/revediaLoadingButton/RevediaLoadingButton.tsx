// Material Import
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';

// SCSS Import
import './revediaLoadingButton.scss';

const RevediaLoadingButton = ({...rest}: LoadingButtonProps) => {
    return <div className='revedia-loading-button'>
        <LoadingButton {...rest}/>
    </div>
};


export default RevediaLoadingButton;