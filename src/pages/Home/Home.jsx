import { Button, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Page from "src/components/Page";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Page title="Home">
      <Container maxWidth="sm">
        <Grid container>
          <Grid
            item
            xs={12}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Button onClick={() => console.log('Hello')}>Hello</Button>
            <Button variant="contained" onClick={() => navigate("/sign-in")}>
              Sign In
            </Button>
            <Button variant="contained" onClick={() => navigate("/sign-up")}>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Home;
