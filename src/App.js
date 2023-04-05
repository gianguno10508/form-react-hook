import "./App.css";
import { useForm } from "react-hook-form";
import Dropdown from "./components/Dropdown";
import TextFieldCustom from "./components/TextField";
import { month, yearList } from "./assets/data/data";
import { Container, TextField } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import MasterCard from "../src/assets/icons/Mastercard-Logo.wine.svg";

function App() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isDirty,
      isSubmitting,
      isSubmitted,
      submitCount,
      isValid,
      isValidating,
    },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <Container
        maxWidth="md"
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Billing information</h2>
        {/* <input {...register("test")} /> */}
        <Grid
          className="top-form"
          container
          spacing={1}
          sx={{ display: "flex", mb: "5" }}
        >
          <Grid item md={6}>
            <input defaultValue="test" {...register("example")} />
            <TextFieldCustom
              {...register("rewrwer")}
              label="Card number"
              iconEnd={MasterCard}
            />
          </Grid>
          {/* <Grid item md={2}>
            <Dropdown labelName="Exp. month" data={month} />
          </Grid>
          <Grid item md={2}>
            <Dropdown labelName="Exp. year" data={yearList} />
          </Grid>
          <Grid item md={2}>
            <TextFieldCustom label="CVC Code" />
          </Grid> */}
        </Grid>
        {/* <Grid>
          <Grid item md={12}>
            <TextFieldCustom
              labelName="Billing address"
              placeholder="2118 Thornride Cir. Syracuse, Connecticut 35624"
            />
          </Grid>
        </Grid> */}
        <input type="submit" />
      </Container>
    </div>
  );
}

export default App;
