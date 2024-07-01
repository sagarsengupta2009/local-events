import PorpTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AutoCompleteSearchData from '../../data/SearchData';
import ToggleButton from '../shared/ToggleButton';
import { useNavigate } from 'react-router-dom';

function Header({ text = 'Local Events', bgColor, txtColor }) {
  const navigate = useNavigate();
  const headerStyles = {
    backgroundColor: "#fff",
    color: "#5468ff"
  }

  const handleOnClick = () => {
    navigate('/'); // Navigate to landing page
  }

  return (
    <header style={headerStyles}>
      <div>
        <h2 onClick={handleOnClick} style={{ cursor: 'pointer' }}>{text}</h2>
      </div>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={AutoCompleteSearchData.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Stack>
      <ToggleButton />
    </header>
  )
}

// Header.defaultProps = {
//     text: "Local Events",
//     bgColor: "#fff",
//     txtColor: "#5468ff"
// }

// Header.propTypes = {
//     text: PorpTypes.string,
//     bgColor: PorpTypes.string,
//     txtColor: PorpTypes.string,
// }

export default Header;
