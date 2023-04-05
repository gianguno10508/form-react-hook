import { FormControl, InputAdornment, TextField } from "@material-ui/core";

const TextFieldCustom = ({ iconStart, iconEnd, InputProps, ...props }) => {
  // console.log({...props});
  return (
    <TextField
      variant="outlined"
      fullWidth
      // label={props.labelName}
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">
            <img className="icon" src={iconStart} alt="photo" srcSet="" />
          </InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">
            <img className="icon" src={iconEnd} alt="photo" srcSet="" />
          </InputAdornment>
        ) : null,
      }}
    />
  );
};
export default TextFieldCustom;
