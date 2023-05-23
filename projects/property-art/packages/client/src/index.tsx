import ReactDOM from "react-dom/client";
import { mount as mountDevTools } from "@latticexyz/dev-tools";
import { App } from "./App";
import MUDSetup from "./MUDSetup";
import WalletConnection from "./WalletConnection";
import "./styles.css";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f0f0f0',
    },
  },
});

const rootElement = document.getElementById("react-root");
if (!rootElement) throw new Error("React root not found");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <WalletConnection>
        <MUDSetup>
          <App />
        </MUDSetup>
      </WalletConnection>
    </ThemeProvider>
  </>
)
mountDevTools();
