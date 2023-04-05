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

  /**Set add value input type number only */
  const handleNumberType = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!new RegExp("[0-9]").test(keyValue)) event.preventDefault();
    return;
  };

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
              {/* Import componet with icon end of textfield and number card type */}
              <TextFieldCustom
                name="card"
                valueType="card"
                label="Card number"
                pattern="[0-9]*"
                onKeyPress={handleNumberType}
                iconEnd={MasterCard}
              />
            </Grid>
            <Grid item md={2} sm={4} xs={6}>
              {/* Import componet dropdown and list data */}
              <Dropdown name="month" labelName="Exp. month" data={month} />
            </Grid>
            <Grid item md={2} sm={4} xs={6}>
              {/* Import componet dropdown and list data */}
              <Dropdown name="year" labelName="Exp. year" data={yearList} />
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
              {/* Import componet with number code type */}
              <TextFieldCustom
                type="text"
                valueType="code"
                label="CVC Code"
                maxLength="5"
                name="code"
                onKeyPress={handleNumberType}
              />
            </Grid>
          </Grid>
          <Grid className="bottom-form">
            <Grid item md={12} sm={12}>
              {/* Import componet with textfield */}
              <TextFieldCustom
                type="text"
                name="address"
                valueType="address"
                label="Billing address"
                placeholder="2118 Thornride Cir. Syracuse, Connecticut 35624"
              />
            </Grid>
          </Grid>
          <Button className="submit-btn" type="submit" variant="outlined">
            Submit
          </Button>
        </Container>
      </FormProvider>
    </div>
  );
}

export default App;
