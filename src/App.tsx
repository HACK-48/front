import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PreviousProjects from "./pages/PreviousProjects";
import TeamManagementEventPage from "./pages/TeamManagementEvent";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./providers/AuthProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/old-projects" element={<PreviousProjects />} />
            <Route path="/user-profile" element={<Profile />} />
            <Route path="/projectEventManager" element={<TeamManagementEventPage />}></Route>
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
