import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageContainer from "./containers/HomePage/HomePageContainer"
import AuthContainer from "./containers/strava/AuthContainer"

function App() {
  return (
    <BrowserRouter>
      <div>
      <Routes>
        <Route path="/" element={<HomePageContainer/>}/>
        <Route path="/auth/strava" element={<AuthContainer/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
