import { InputAdornment, TextField } from "@material-ui/core";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const TextFieldCustom = ({ iconStart, iconEnd, InputProps, ...props }) => {
  const { register, errors } = useFormContext();
  return (
    <>
      <TextField
        variant="outlined"
        fullWidth
        {...(props.valueAsNumber == "true"
          ? {
              ...register(props.name, {
                required: "This field is required",
                pattern: {
                  value: /^(0|[1-9]\d*)(\.\d+)?$/,
                  message: "Please enter card number",
                },
                min: {
                  value: 0,
                  message: "Card number is not valid",
                },
              }),
            }
          : {
              ...register(props.name, {
                required: "This field is required",
              }),
            })}
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
      <span className="error-message">
        <ErrorMessage name={props.name} errors={errors} />
      </span>
    </>
  );
};
function cc_format(value) {
  const v = value
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "")
    .substr(0, 16);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4));
  }

  return parts.length > 1 ? parts.join(" ") : value;
}
export default TextFieldCustom;
