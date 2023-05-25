import "./Reset.scss";
import "./App.scss";
import "./Global.scss";
import LoginPage from "./pages/login/LoginPage";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Administration from "./pages/administration/Administration";
import PagesBuilder from "./pages/pagesBuider/PagesBuilder";
import Loader from "./components/common/Loader/Loader";
import { AdminProvider } from "./components/context/AdminProvider";
import Page from "./pages/Page";
function App() {
  return (
    <div className="App">
      <Loader />
      <Menu />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/page" element={<Page />} />
        <Route
          path="/admin"
          element={
            <AdminProvider>
              <Administration />
            </AdminProvider>
          }
        />
        <Route
          path="/admin/pageBuilder"
          element={
            <AdminProvider>
              <PagesBuilder />
            </AdminProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
