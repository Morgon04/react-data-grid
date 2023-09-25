// Components Import
import ButtonExample from "../button/button";
import DataGridDemo from "../data-grid/data.grid";
import SearchInput from "../search/search";

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
        // {
        //     link: `${searchInputComponentPath}`,
        //     Component: SearchInput,
        //     name: 'Search Input Demo',
        //     titleName:'React Search Input Demo'
        // }
    ]
};

export default RouteList;