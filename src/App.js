import "./App.css";
import { FormProvider, useForm } from "react-hook-form";
import Dropdown from "./components/Dropdown";
import TextFieldCustom from "./components/TextField";
import { month, yearList } from "./assets/data/data";
import { Button, Container, TextField } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import MasterCard from "../src/assets/icons/Mastercard-Logo.wine.svg";


function App() {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="App">
      <FormProvider {...methods}>
        <Container
          maxWidth="md"
          component="form"
          autoComplete="off"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <h2>Billing information</h2>
          <Grid
            className="top-form"
            container
            spacing={1}
            sx={{ display: "flex", mb: "5" }}
          >
            <Grid item md={6} sm={12} xs={12}>
              <TextFieldCustom
                name="card"
                valueAsNumber="true"
                label="Card number"
                iconEnd={MasterCard}
              />
            </Grid>
            <Grid item md={2} sm={4} xs={6}>
              <Dropdown name="month" labelName="Exp. month" data={month} />
            </Grid>
            <Grid item md={2} sm={4} xs={6}>
              <Dropdown name="year" labelName="Exp. year" data={yearList} />
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
              <TextFieldCustom
                type="text"
                valueAsNumber="false"
                label="CVC Code"
                name="code"
              />
            </Grid>
          </Grid>
          <Grid className="bottom-form">
            <Grid item md={12} sm={12}>
              <TextFieldCustom
                type="text"
                name="address"
                valueAsNumber="false"
                label="Billing address"
                placeholder="2118 Thornride Cir. Syracuse, Connecticut 35624"
              />
            </Grid>
          </Grid>
          <Button className="submit-btn" type="submit" variant="outlined">Submit</Button>
          {/* <input type="submit" /> */}
        </Container>
      </FormProvider>
    </div>
  );
}

export default App;
