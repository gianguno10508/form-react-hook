import { InputAdornment, TextField } from "@material-ui/core";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

//Component for text field
const TextFieldCustom = ({
  iconStart,
  iconEnd,
  InputProps,
  valueType,
  ...props
}) => {
  const { register, errors, setValue } = useFormContext();

  // Check type components
  var type;
  if (valueType === "card") {
    type = {
      ...register(props.name, {
        required: "This field is required",
        minLength: 16,
        onChange: (e) => setValue(props.name, cc_format(e.target.value)),
      }),
    };
  } else if (valueType == "code") {
    type = {
      ...register(props.name, {
        required: "This field is required",
        minLength: {
          value: 3,
        },
        maxLength: {
          value: 3,
        },
        onChange: (e) => setValue(props.name, code_format(e.target.value)),
      }),
    };
  } else {
    type = {
      ...register(props.name, {
        required: "This field is required",
        minLength: 1,
      }),
    };
  }
  return (
    <>
      {/* Set type input and check icon */}
      <TextField
        variant="outlined"
        fullWidth
        {...type}
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
      {/* Show message if error */}
      <span className="error-message">
        <ErrorMessage name={props.name} errors={errors} />
      </span>
    </>
  );
};

//Format number to credit card #### #### #### ####
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

//Format number to CVC Code ###
function code_format(value) {
  const v = value.substr(0, 3);
  return v;
}

export default TextFieldCustom;
