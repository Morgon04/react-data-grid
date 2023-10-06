// Components Import
import SearchInput from "../search/search";
import ButtonExample from "../button/button";
import DataGridDemo from "../data-grid/data.grid";
import ButtonGroup from "../buttonGroup/buttonGroup";
import LeftSideBar from "../leftsidebar/leftsidebar";

interface Route {
    link: string;
    Component: any;
    name?: string;
    titleName: string;
}

const componentsBasePath = '/Components';
export const dataGridComponentPath = `${componentsBasePath}/data-grid`;
export const searchInputComponentPath = `${componentsBasePath}/search-input`;
export const buttonComponentPath = `${componentsBasePath}/button`;
export const buttonGroupComponentPath = `${componentsBasePath}/button-group`;
export const leftSideBarComponentPath = `${componentsBasePath}/left-sidebar`;


export const RouteList  = () : Route[] => {
    return [ 
        {
            link: `${dataGridComponentPath}`,
            Component: DataGridDemo,
            name: 'Data Grid Demo',
            titleName:'React Data Grid Demo'
        },
        {
            link: `${searchInputComponentPath}`,
            Component: SearchInput,
            name: 'Search Input Demo',
            titleName:'React Search Input Demo'
        },
        {
            link: `${buttonComponentPath}`,
            Component: ButtonExample,
            name: '`Button Demo`',
            titleName:'React Button Demo'
        },
        {
            link: `${buttonGroupComponentPath}`,
            Component: ButtonGroup,
            name: '`Button Group Demo`',
            titleName:'React Button Group Demo'
        },
        {
            link: `${leftSideBarComponentPath}`,
            Component: LeftSideBar,
            name: '`Button Group Demo`',
            titleName:'React Button Group Demo'
        },
        // {
        //     link: `${searchInputComponentPath}`,
        //     Component: SearchInput,
        //     name: 'Search Input Demo',
        //     titleName:'React Search Input Demo'
        // }
    ]
};

export default RouteList;