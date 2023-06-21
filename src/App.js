import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./sceens/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./sceens/dashbord";
import Team from "./sceens/Team";
import Contacts from "./sceens/Contacts";
import Invoices from "./sceens/Invoices";
import Form from "./sceens/Form";
import BarPage from "./sceens/BarPage";
import Pie from "./sceens/Pie";
import Line from "./sceens/Line";
import FAQ from "./sceens/FAQ";
import Geography from "./sceens/Geography";
import Calendar from "./sceens/Calendar";
import Sidebar from "./sceens/global/Sidebar";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<BarPage />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
