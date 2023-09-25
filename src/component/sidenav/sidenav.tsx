// React Router Dom Import
import { Link } from 'react-router-dom';

// Materila UI Import
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

// Route List Import
import { dataGridComponentPath, searchInputComponentPath, buttonComponentPath } from '../routes/routeList';

// SCSS Import
import './sidenav.scss';

const Sidenav = () => {
    return (
        <div className='react-side-nav'>
            <Accordion expanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='rotate-90' />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className='header-name'>Components</Typography>
                </AccordionSummary>
                <AccordionDetails className={'component-child'}>
                    <Link
                        to={dataGridComponentPath}
                        className={'component-child-link'}
                        key={1}
                    >
                        <p className={'component-child-link-name'}>{'Data Grid'}</p>
                    </Link>
                    <Link
                        to={searchInputComponentPath}
                        className={'component-child-link'}
                        key={1}
                    >
                        <p className={'component-child-link-name'}>{'Search'}</p>
                    </Link>
                    <Link
                        to={buttonComponentPath}
                        className={'component-child-link'}
                        key={1}
                    >
                        <p className={'component-child-link-name'}>{'Button'}</p>
                    </Link>
                </AccordionDetails>
            </Accordion>
        </div>
    )
};

export default Sidenav;