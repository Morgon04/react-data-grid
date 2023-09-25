// React Import
import { useState } from 'react';

// Material UI Import
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CardContent from '@mui/material/CardContent';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// SCSS Import
import './search.scss';

const SearchInput = ({ placeholder = 'Search...', showHistory = true }) => {

  const [historyVisible, setHistoryVisible] = useState(false);
  const [isSearchHappening, setSearchHappening] = useState<boolean>(false);

  const handleKeyDown = (event: any) => {
    if (event.target.value) {
      setSearchHappening(true);
      setTimeout(() => {
        setSearchHappening(false);
      }, 3000);
    } else {
      setSearchHappening(false);
    }
  };

  return (<div>
    <p>Search Input, with Recent Search</p>

    <div className='search-input'>
      <TextField
        id="outlined-size-small"
        placeholder={placeholder}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onFocus={() => setHistoryVisible(true)}
        onBlur={() => setHistoryVisible(false)}
        onInput={handleKeyDown}
      />
      {showHistory && historyVisible &&
        <div className='search-recent-history-container'>
          <Card className="search-recent-history-container-body" elevation={3}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', ":last-child": { 'marginBottom': 0 }, marginBottom: '8px', overflow: 'auto' }}>
              {!isSearchHappening &&
                <>
                  <div className="search-history-list">
                    <div className='search-history-list-header'>
                      <p>Recent Search</p>

                    </div>
                    <div className="search-history-items">
                      <div className="search-history-item" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p>Transaction</p>
                        <Tooltip title="Clear">
                          <IconButton>
                            <CloseRoundedIcon />
                          </IconButton>
                        </Tooltip>
                      </div>
                      <div className="search-history-item" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p>Channel</p>
                        <Tooltip title="Clear">
                          <IconButton>
                            <CloseRoundedIcon />
                          </IconButton>
                        </Tooltip>
                      </div>
                      <div className="search-history-item" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <p>Agreement</p>
                        <Tooltip title="Clear">
                          <IconButton>
                            <CloseRoundedIcon />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                  <div className="search-history-list" >
                    <div className='search-history-list-header'>
                      <p>Recent Clients</p>
                    </div>
                    <div className="search-history-items" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                      <div className="search-history-item">
                        <img src='https://revediaDigital-Development.azureedge.net/digital-ui/svg/FAST_Logo.svg' alt='' />
                        <p className='text-center'>Fast Demo</p>

                      </div>
                      <div className="search-history-item">
                        <img src='https://revediaDigital-Development.azureedge.net/digital-ui/svg/SVOD_LOGO.svg' alt='' />
                        <p className='text-center'>Hearst Demo</p>

                      </div>
                      <div className="search-history-item">
                        <img src='https://revediadigital-development.azureedge.net/digital-ui/svg/TVOD_LOGO.svg' alt='' />
                        <p className='text-center'>TVOD Demo</p>

                      </div>
                      <div className="search-history-item">
                        <img src='https://revediaDigital-Development.azureedge.net/digital-ui/svg/AVOD_LOGO.svg' alt='' />
                        <p className='text-center'>AVOD Demo</p>

                      </div>
                    </div>
                  </div>
                </>}
              {isSearchHappening &&
                <>
                  <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <CircularProgress
                      size={40}
                      className={`material-circular-progress`}
                    />
                  </Box>
                </>
              }
            </CardContent>
          </Card>
        </div>

      }
    </div>
  </div>)
};

export default SearchInput;