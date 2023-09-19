import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer"
import DataGridDemo from "../data-grid/data.grid";

// SCSS Import
import './layout.scss';


const DataGridLayout = () => {
    return (
        <Box sx={{display:"flex", height: '100vh'}}>
            <Drawer
            sx={{
              width: 210,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 210,
                boxSizing: 'border-box',
                background: '#141126',
                transition: 'width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
              },
            }}
            variant="permanent"
            anchor="left"
          >
          </Drawer>

            <div className="main-container">
                <div className="main-container-body">
                    <DataGridDemo />
                </div>
            </div>
        </Box>
    )
}

export default DataGridLayout;