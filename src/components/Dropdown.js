import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useFormContext } from "react-hook-form";

import { ErrorMessage } from "@hookform/error-message";

const Dropdown = (props) => {
  const { register, errors } = useFormContext();

  return (
    // Form Controll Select option
    <FormControl fullWidth variant="outlined">
      <InputLabel id="demo-simple-select-label">{props.labelName}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue=""
        {...register(props.name, { required: "This field is required" })}
        label={props.labelName}
      >
        {/* Map to render data */}
        {props.data.map((e, i) => (
          <MenuItem key={i} value={e}>
            {e}
          </MenuItem>
        ))}
      </Select>
      {/* Show message if error */}
      <span className="error-message">
        <ErrorMessage name={props.name} errors={errors} />
      </span>
    </FormControl>
  );
};

export default Dropdown;
