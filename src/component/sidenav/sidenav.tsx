// React Import
import { useEffect, useState } from 'react';

// React Router Dom Import
import { Link, useLocation } from 'react-router-dom';

// Materila UI Import
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

// Route List Import
import {
    buttonComponentPath,
    dataGridComponentPath,
    searchInputComponentPath,
    buttonGroupComponentPath,
    leftSideBarComponentPath
} from '../routes/routeList';

// logo Import
import smaiLogo from '../../assets/SVG/SAI-media-logo-horizontal-black.svg'

// SCSS Import
import './sidenav.scss';

const componentsArray = [
    {
        to: dataGridComponentPath,
        name: 'Data Grid',
    }, 
    {
        to: searchInputComponentPath,
        name: 'Search'
    },
    {
        to: buttonComponentPath,
        name: 'Button'
    },
    {
        to: buttonGroupComponentPath,
        name: 'Button Group'
    },
    {
        to: leftSideBarComponentPath,
        name: 'Left Side Bar'
    }
];

const Sidenav = () => {

    const location = useLocation();

    const [isExpanded, setExpaned] = useState(true);
    const [activeElement, setActiveElement] = useState('')

    useEffect(() => {
        setActiveElement(location.pathname);
    }, [location])

    const components = () => {
        return componentsArray.map((component, index) => {
            return <Link
                to={component.to}
                className={`component-child-link ${component.to === activeElement ? 'active-element' : ''}`}
                key={index}
            >
                <p className={'component-child-link-name'}>
                    {activeElement && <span></span>}
                    {component.name}
                </p>
            </Link>
        })
    };
    return (
        <div className='react-side-nav'>
            <div className="revedia-logo">
                <img src={smaiLogo} alt='' />
            </div>
            <Accordion expanded={isExpanded} onChange={() => setExpaned(!isExpanded)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='rotate-90' />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className='header-name'>Components</Typography>
                </AccordionSummary>
                <AccordionDetails className={'component-child'}>
                    {components()}
                </AccordionDetails>
            </Accordion>
        </div>
    )
};

export default Sidenav;