// Material UI Import
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

// Shared Components Import
import RevediaStack from '../../shared/revediaStack/revediaStack';
import RevediaButton from '../../shared/revediabutton/revediabutton';
import RevediaIconButton from '../../shared/revediaIconButton/revediaIconButton';

// SCSS Import
import './button.scss';

const ButtonExample = () => {
    return (
        <>
            <h1>Standard Buttons</h1>
            <div className='button-example-container'>
                <h2 className='text-primary'>Primary (Brand)</h2>
                <p>Contained Buttons</p>
                <RevediaStack direction={"row"} alignItems={'center'} justifyContent={'center'} className='button-example-sample'>
                    <RevediaButton variant='contained'> I'm Contained </RevediaButton>
                </RevediaStack>

                <h3>Sizes</h3>
                <p>Sizes varies from Small, Medium and to Large</p>
                <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample'>
                    <RevediaButton variant='contained' size='small'> I'm Small </RevediaButton>
                    <RevediaButton variant='contained' size='medium'> I'm Medium </RevediaButton>
                    <RevediaButton variant='contained' size='large'> I'm Large </RevediaButton>
                </RevediaStack>

                <h3>Disabled</h3>
                <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample'>
                    <RevediaButton variant='contained' disabled> I'm Disabled </RevediaButton>
                </RevediaStack>

                <h3>Icons and Lables</h3>
                <p>Buttons with Icon and Label</p>
                <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample'>
                    <RevediaButton variant='contained' startIcon={<DeleteIcon />}> Delete </RevediaButton>
                    <RevediaButton variant='contained' endIcon={<SendIcon />}> Send </RevediaButton>
                </RevediaStack>

                <h3>Icons</h3>
                <p>Icon buttons are found in Table Actions</p>
                <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample'>
                    <RevediaIconButton color='primary'> <DeleteIcon /></RevediaIconButton>
                    <RevediaIconButton> <SendIcon /></RevediaIconButton>
                </RevediaStack>
            </div>

            <div className='button-example-container'>
                <h2 className='text-primary'>Secondary (Brand)</h2>
                <p>Outlined Buttons</p>
                <RevediaStack direction={"row"} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                    {/* <RevediaButton> I'm Button </RevediaButton> */}
                    {/* <RevediaButton variant='contained'> I'm Contained </RevediaButton> */}
                    <RevediaButton variant='outlined'> I'm Outlined </RevediaButton>

                </RevediaStack>
                <h3>Sizes</h3>
                <p>Sizes varies from Small, Medium and to Large</p>
                <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                    <RevediaButton variant='outlined' size='small'> I'm Small </RevediaButton>
                    <RevediaButton variant='outlined' size='medium'> I'm Medium </RevediaButton>
                    <RevediaButton variant='outlined' size='large'> I'm Large </RevediaButton>
                </RevediaStack>

                <h3>Disabled</h3>
                <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                    <RevediaButton variant='outlined' size='medium' disabled> I'm Medium </RevediaButton>
                </RevediaStack>

                <h3>Icons and Lables</h3>
                <p>Buttons with Icon and Label</p>
                <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample'>
                    <RevediaButton variant='outlined' startIcon={<DeleteIcon />}> Delete </RevediaButton>
                    <RevediaButton variant='outlined' endIcon={<SendIcon />}> Send </RevediaButton>
                </RevediaStack>
            </div>

            <div className='button-example-container'>
                <h2 className='text-primary'>Text (Brand)</h2>
                <p>Text Buttons</p>
                <RevediaStack direction={"row"} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                    <RevediaButton> I'm Button </RevediaButton>
                </RevediaStack>
                <h3>Sizes</h3>
                <p>Sizes varies from Small, Medium and to Large</p>
                <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                    <RevediaButton size='small'> I'm Small </RevediaButton>
                    <RevediaButton size='medium'> I'm Medium </RevediaButton>
                    <RevediaButton size='large'> I'm Large </RevediaButton>
                </RevediaStack>

                <h3>Disabled</h3>
                <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                    <RevediaButton size='medium' disabled> I'm Disabled </RevediaButton>
                </RevediaStack>

                <h3>Icons and Lables</h3>
                <p>Buttons with Icon and Label</p>
                <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample'>
                    <RevediaButton startIcon={<DeleteIcon />}> Delete </RevediaButton>
                    <RevediaButton endIcon={<SendIcon />}> Send </RevediaButton>
                </RevediaStack>
            </div>

        </>
    )
};

export default ButtonExample;