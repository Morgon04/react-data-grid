// Materila UI Import
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ImageIcon from '@mui/icons-material/Image';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

// Shared Component Import
import RevediaLeftSidebar,
{
    RevediaLeftSideBarLogo,
    RevediaLeftSideBarProduct,
    RevediaLeftSideBarContent,
    RevediaLeftSideBarFooter
}
    from '../../shared/revedialeftsidebar/revedialeftsidebar';

// logo Import
import smaiLogo from '../../assets/SVG/SAI-media-logo-horizontal-black.svg';
import smallSMAILogo from '../../assets/SVG/SAI-Media-Black.svg';

// SCSS Import
import './leftsidebar.scss';


const LeftSideBar = () => {
    return <div className='revedia-container'>
        <Stack justifyContent={'space-around'} direction={'row'}>

        <div className='leftsidebar-navigation'>
            <h3>Light Theme - Expanded</h3>
            <RevediaLeftSidebar>
                <RevediaLeftSideBarLogo>
                    <div className='logo flex space-between'>
                        <div className=''>
                            <img src={smaiLogo} alt="" />
                        </div>
                        <MenuOpenIcon />
                    </div>
                </RevediaLeftSideBarLogo>
                <RevediaLeftSideBarProduct>
                    <p className='no-margin'>Product Name</p>
                </RevediaLeftSideBarProduct>
                <RevediaLeftSideBarContent>
                    <div className='leftsidebar-search'>
                        <TextField
                            placeholder="Search For..."
                            size="small"
                            fullWidth
                        />
                    </div>
                    <div className="leftsidebar-menus">
                        <div className="menus-list">
                            <div className="menus-list-item active">
                                <ImageIcon />
                                <p className='no-margin'>Label</p>
                                <span></span>
                            </div>
                            <div className="menus-list-item">
                                <ImageIcon />
                                <p className='no-margin'>Label</p>
                            </div>
                            <div className="menus-list-item">
                                <ImageIcon />
                                <p className='no-margin'>Label</p>
                            </div>
                            <div className="menus-list-item">
                                <ImageIcon />
                                <p className='no-margin'>Label</p>
                            </div>
                            <div className="menus-list-item">
                                <ImageIcon />
                                <p className='no-margin'>Label</p>
                            </div>
                            <div className="menus-list-item">
                                <ImageIcon />
                                <p className='no-margin'>Label</p>
                            </div>
                        </div>
                        <div className="logged-menu">
                            <div className="menus-list">
                                <div className="menus-list-item">
                                    <NotificationsNoneIcon />
                                    <div className='notification'>
                                    <p className='no-margin'>Notifications</p>
                                    <span className='no-margin count'>1</span>
                                    </div>
                                </div>
                                <div className="menus-list-item">
                                    <SettingsOutlinedIcon />
                                    <p className='no-margin'>Settings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevediaLeftSideBarContent>
                <RevediaLeftSideBarFooter>
                    <div className='footer-menu'>
                        <div className='footer-menu-logo'>
                            <AccountCircleIcon />
                        </div>
                        <div className='footer-menu-details flex-column'>
                            <p className='no-margin user-name'>John Doe</p>
                            <p className='no-margin user-email'>johndoe@gmail.com</p>
                        </div>
                    </div>
                </RevediaLeftSideBarFooter>
            </RevediaLeftSidebar>
        </div>
        <div className='leftsidebar-navigation'>
            <h3>Light Theme - Collapsed</h3>
            <RevediaLeftSidebar width={'64px'} collapsed={true}>
                <RevediaLeftSideBarLogo>
                    <div className='logo flex space-between'>
                        <div className='logo-collapsed'>
                            <img src={smallSMAILogo} alt="" />
                        </div>
                        {/* <MenuOpenIcon /> */}
                    </div>
                </RevediaLeftSideBarLogo>
                {/* <RevediaLeftSideBarProduct>
                    <p className='no-margin'>Product Name</p>
                </RevediaLeftSideBarProduct> */}
                <RevediaLeftSideBarContent>
                    <div className='leftsidebar-search flex flex-center'>
                        <SearchOutlinedIcon
                        />
                    </div>
                    <div className="leftsidebar-menus">
                        <div className="menus-list flex-column-center">
                            <div className="menus-list-item active">
                                <ImageIcon />
                                <span></span>
                            </div>
                            <div className="menus-list-item">
                                <ImageIcon />
                            </div>
                            <div className="menus-list-item">
                                <ImageIcon />
                            </div>
                            <div className="menus-list-item">
                                <ImageIcon />
                            </div>
                            <div className="menus-list-item">
                                <ImageIcon />
                            </div>
                            <div className="menus-list-item">
                                <ImageIcon />
                            </div>
                        </div>
                        <div className="logged-menu">
                            <div className="menus-list flex-column-center">
                                <div className="menus-list-item">
                                    <NotificationsNoneIcon />
                                    <div className='notification'>
                                    </div>
                                </div>
                                <div className="menus-list-item">
                                    <SettingsOutlinedIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </RevediaLeftSideBarContent>
                <RevediaLeftSideBarFooter>
                    <div className='footer-menu flex-column-center'>
                        <div className='footer-menu-logo'>
                            <AccountCircleIcon />
                        </div>
                    </div>
                </RevediaLeftSideBarFooter>
            </RevediaLeftSidebar>
        </div>
        </Stack>
    </div>
}

export default LeftSideBar;