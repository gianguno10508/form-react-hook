import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useState } from "react";

const Dropdown = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="demo-simple-select-label">{props.labelName}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={props.labelName}
        onChange={handleChange}
      >
        {props.data.map((e,i)=>(
            <MenuItem key={i} value={e}>{e}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;