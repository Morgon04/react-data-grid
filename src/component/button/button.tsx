// React Import
import { useState, useEffect } from 'react';

// React Router Dom Import
import { useLocation } from 'react-router-dom';

// Material UI Import
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

// Shared Components Import
import RevediaStack from '../../shared/revediaStack/revediaStack';
import RevediaButton from '../../shared/revediabutton/revediabutton';
import RevediaIconButton from '../../shared/revediaIconButton/revediaIconButton';
import RevediaLoadingButton from '../../shared/revediaLoadingButton/RevediaLoadingButton';

// Data Import
import buttonRightNavDatas from './data'

// SCSS Import
import './button.scss';

const ButtonExample = () => {

    const buttonLocation = useLocation();
    const [navActiveElement, setNavActiveElement] = useState('');

    useEffect(() => {
        setNavActiveElement(`${buttonLocation.pathname}${buttonLocation.hash}`)
    }, [buttonLocation]);

    const getNavActiveChildName = (id: string): boolean => {
        console.log(navActiveElement)
        return navActiveElement === `${buttonLocation.pathname}#${id}`;
    };

    return (
        <div className='buttons-example'>
            <div className="button-example-content">
                <div className='button-example-content-body'>
                    <h2>Standard Buttons</h2>
                    <div className='button-example-container'>
                        <h3 className='text-primary' id='primary-brand'>Primary (Brand)</h3>
                        <h3 id='contained-brand'>Contained Buttons</h3>
                        <RevediaStack direction={"row"} alignItems={'center'} justifyContent={'center'} className='button-example-sample'>
                            <RevediaButton variant='contained'> I'm Contained </RevediaButton>
                        </RevediaStack>

                        <h3 id='primary-button-sizes'>Sizes</h3>
                        <p>Sizes varies from Small, Medium and to Large</p>
                        <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample'>
                            <RevediaButton variant='contained' size='small'> I'm Small </RevediaButton>
                            <RevediaButton variant='contained' size='medium'> I'm Medium </RevediaButton>
                            <RevediaButton variant='contained' size='large'> I'm Large </RevediaButton>
                        </RevediaStack>

                        <h3 id='primary-button-disabled'>Disabled</h3>
                        <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample'>
                            <RevediaButton variant='contained' disabled> I'm Disabled </RevediaButton>
                        </RevediaStack>

                        <h3 id='primary-button-icon-label'>Icons and Lables</h3>
                        <p>Buttons with Icon and Label</p>
                        <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample'>
                            <RevediaButton variant='contained' startIcon={<DeleteIcon />}> Delete </RevediaButton>
                            <RevediaButton variant='contained' endIcon={<SendIcon />}> Send </RevediaButton>
                        </RevediaStack>

                        <h3 id='primary-button-icons'>Icons</h3>
                        <p>Icon buttons are found in Table Actions</p>
                        <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample'>
                            <RevediaIconButton color='primary'> <DeleteIcon /></RevediaIconButton>
                            <RevediaIconButton> <SendIcon /></RevediaIconButton>
                        </RevediaStack>
                    </div>

                    <div className='button-example-container'>
                        <h3 className='text-primary' id='secondary-brand'>Secondary (Brand)</h3>
                        <p id='secondary-brand-outlined'>Outlined Buttons</p>
                        <RevediaStack direction={"row"} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                            {/* <RevediaButton> I'm Button </RevediaButton> */}
                            {/* <RevediaButton variant='contained'> I'm Contained </RevediaButton> */}
                            <RevediaButton variant='outlined'> I'm Outlined </RevediaButton>

                        </RevediaStack>
                        <h3 id='secondary-button-sizes'>Sizes</h3>
                        <p>Sizes varies from Small, Medium and to Large</p>
                        <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                            <RevediaButton variant='outlined' size='small'> I'm Small </RevediaButton>
                            <RevediaButton variant='outlined' size='medium'> I'm Medium </RevediaButton>
                            <RevediaButton variant='outlined' size='large'> I'm Large </RevediaButton>
                        </RevediaStack>

                        <h3 id='secondary-button-disabled'>Disabled</h3>
                        <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                            <RevediaButton variant='outlined' size='medium' disabled> I'm Medium </RevediaButton>
                        </RevediaStack>

                        <h3 id='secondary-button-icon-label'>Icons and Lables</h3>
                        <p>Buttons with Icon and Label</p>
                        <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample'>
                            <RevediaButton variant='outlined' startIcon={<DeleteIcon />}> Delete </RevediaButton>
                            <RevediaButton variant='outlined' endIcon={<SendIcon />}> Send </RevediaButton>
                        </RevediaStack>
                    </div>

                    <div className='button-example-container'>
                        <h3 className='text-primary' id='text-brand'>Text (Brand)</h3>
                        <p id='text-brand-buttons'>Text Buttons</p>
                        <RevediaStack direction={"row"} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                            <RevediaButton> I'm Button </RevediaButton>
                        </RevediaStack>
                        <h3 id='text-button-sizes'>Sizes</h3>
                        <p>Sizes varies from Small, Medium and to Large</p>
                        <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                            <RevediaButton size='small'> I'm Small </RevediaButton>
                            <RevediaButton size='medium'> I'm Medium </RevediaButton>
                            <RevediaButton size='large'> I'm Large </RevediaButton>
                        </RevediaStack>

                        <h3 id='text-button-disabled'>Disabled</h3>
                        <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                            <RevediaButton size='medium' disabled> I'm Disabled </RevediaButton>
                        </RevediaStack>

                        <h3 id='text-button-icon-label'>Icons and Lables</h3>
                        <p>Buttons with Icon and Label</p>
                        <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample'>
                            <RevediaButton startIcon={<DeleteIcon />}> Delete </RevediaButton>
                            <RevediaButton endIcon={<SendIcon />}> Send </RevediaButton>
                        </RevediaStack>
                    </div>
                    <div className="button-example-container">
                        <h2>Contrast Buttons</h2>
                        <p id='contrast-brand-buttons'>Primary, Secondary and Text</p>
                        <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic contrast'>
                            <RevediaButton white variant='contained'> I'm Contained </RevediaButton>
                            <RevediaButton white variant='outlined'> I'm Outlined </RevediaButton>
                            <RevediaButton white> I'm Text </RevediaButton>
                        </RevediaStack>
                    </div>

                    <div className="button-example-container">
                        <h2>Error Buttons</h2>
                        <p id='error-brand-buttons'>Primary, Secondary and Text</p>
                        <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                            <RevediaButton color='error' variant='contained'> I'm Contained </RevediaButton>
                            <RevediaButton color='error' variant='outlined'> I'm Outlined </RevediaButton>
                            <RevediaButton color='error'> I'm Text </RevediaButton>
                        </RevediaStack>
                    </div>

                    <div className="button-example-container">
                        <h2>Success Buttons</h2>
                        <p id='success-brand-buttons'>Primary, Secondary and Text</p>
                        <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                            <RevediaButton color='success' variant='contained'> I'm Contained </RevediaButton>
                            <RevediaButton color='success' variant='outlined'> I'm Outlined </RevediaButton>
                            <RevediaButton color='success'> I'm Text </RevediaButton>
                        </RevediaStack>
                    </div>
                    <div className="button-example-container">
                        <h2>Warning Buttons</h2>
                        <p id='Warning-brand-buttons'>Primary, Secondary and Text</p>
                        <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                            <RevediaButton color='warning' variant='contained'> I'm Contained </RevediaButton>
                            <RevediaButton color='warning' variant='outlined'> I'm Outlined </RevediaButton>
                            <RevediaButton color='warning'> I'm Text </RevediaButton>
                        </RevediaStack>
                    </div>
                    <div className="button-example-container">
                        <h2>Loading Buttons</h2>
                        <p id='loading-brand-buttons'>Loading, Loading Indication and Loading with text</p>
                        <RevediaStack direction={"row"} spacing={2} alignItems={'center'} justifyContent={'center'} className='button-example-sample basic'>
                            <RevediaLoadingButton loading> Loading </RevediaLoadingButton>
                            <RevediaLoadingButton loading loadingIndicator='Loading...' variant='outlined'> Fetch Data</RevediaLoadingButton>
                            <RevediaLoadingButton
                                loading
                                loadingPosition="start"
                                startIcon={<SaveIcon />} > 
                            Save 
                            </RevediaLoadingButton>
                        </RevediaStack>
                    </div>
                </div>
            </div>

            <nav className='nav-items'>
                <h4 className='text-primary mr-bt-12px'>Standard Buttons</h4>
                {/* <div className='nav-item'> */}
                {buttonRightNavDatas.map((data, dataIndex) => {
                    return (
                        <div className='nav-item' key={dataIndex}>
                            <p className='text-base relax-regular-bold nav-item-header'>{data.itemHeader}</p>
                            {data.items.map((item, index) => {
                                return <div className={`${getNavActiveChildName(item.id) ? 'active' : ''} nav-item-child`} key={index}>
                                    <span className={getNavActiveChildName(item.id) ? 'menu-span-border' : ''}></span>
                                    <a
                                        href={`${buttonLocation.pathname}#${item.id}`}
                                        key={index}
                                    >
                                        <p className='text-base relax-regular-500'>
                                            {item.name}
                                        </p>
                                    </a>
                                </div>
                            })}
                        </div>
                    )
                })}
            </nav>

        </div>
    )
};

export default ButtonExample;