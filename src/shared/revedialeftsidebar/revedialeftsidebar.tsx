// SCSS Import
import './revedialeftsidebar.scss';

const RevediaLeftSidebar = ({ children, width = '240px', collapsed=false, ...rest }: any) => {
    return (<div className={`revedia-left-sidebar ${collapsed && 'revedia-left-sidebarCollapsed'}`} style={{width: width}}>
        {children}
    </div>)
};

export const RevediaLeftSideBarLogo = ({ children, ...rest }: any) => {
    return (<div className='revedia-left-sidebar-logo'>
        {children}
    </div>)
};

export const RevediaLeftSideBarProduct = ({ children, ...rest }: any) => {
    return (<div className='revedia-left-sidebar-product'>
        {children}
    </div>)
};

export const RevediaLeftSideBarContent = ({ children, ...rest }: any) => {
    return (<div className='revedia-left-sidebar-content flex-column'>
        {children}
    </div>)
};

export const RevediaLeftSideBarFooter = ({ children, ...rest }: any) => {
    return (<div className='revedia-left-sidebar-footer'>
        {children}
    </div>)
};



export default RevediaLeftSidebar;