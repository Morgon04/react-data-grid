// React Router Import
import { BrowserRouter } from "react-router-dom";

// Material UI Import
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

// Routes Import
import ReactRoutes from "../routes/routes";

// Components Import
import Sidenav from "../sidenav/sidenav";

// SCSS Import
import './layout.scss';


const DataGridLayout = () => {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex", height: '100vh' }}>
        <Drawer
          sx={{
            width: 300,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 300,
              boxSizing: 'border-box',
              background: '#141126',
              transition: 'width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
              padding: '12px'
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Sidenav />
        </Drawer>

        <div className="main-container">
          <div className="main-container-body">
            <ReactRoutes />
          </div>
        </div>
      </Box>
    </BrowserRouter>
  )
}

export default DataGridLayout;