import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./containers/Dashboard/Dashboard";
import HomePageContainer from "./containers/HomePage/HomePageContainer"
import AuthContainer from "./containers/strava/AuthContainer"
import { AuthProvider } from "./hooks/useAuth";
import { darkTheme } from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <AuthProvider>
        <BrowserRouter>
          <div>
          <Routes>
            <Route path="/" element={<HomePageContainer/>}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/auth/strava" element={<AuthContainer/>}/>
          </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
