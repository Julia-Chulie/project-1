import "./Reset.scss";
import "./App.scss";
import "./Global.scss";
import LoginPage from "./pages/login/LoginPage";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Administration from "./pages/administration/Administration";
import PagesBuilder from "./pages/pagesBuider/PagesBuilder";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<Administration />} />
        <Route path="/admin/pageBuilder" element={<PagesBuilder />} />
      </Routes>
    </div>
  );
}

export default App;
