import Slide from "@mui/material/Slide";
import { StoreProvider } from "easy-peasy";
import { SnackbarProvider } from "notistack";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import store from "./store";
import ThemeConfig from "./theme";

function App() {
  return (
    <StoreProvider store={store}>
      <HelmetProvider>
        <ThemeConfig>
          <SnackbarProvider
            maxSnack={5}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            autoHideDuration={5000}
            disableWindowBlurListener
            preventDuplicate
            TransitionComponent={(props) => (
              <Slide {...props} direction="right" />
            )}
          >
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </SnackbarProvider>
        </ThemeConfig>
      </HelmetProvider>
    </StoreProvider>
  );
}

export default App;
