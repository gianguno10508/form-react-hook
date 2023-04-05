import { InputAdornment, TextField } from "@material-ui/core";
import { useFormContext } from "react-hook-form";

const TextFieldCustom = ({ iconStart, iconEnd, InputProps, ...props }) => {
  const { register } = useFormContext();
  return (
    <TextField
      variant="outlined"
      fullWidth
      {...register(props.name)}
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
