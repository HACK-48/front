import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "@mui/system";
import Login from "./components/LoginForm";
import Register from "./components/RegisterForm";
import PreviousProjects from "./pages/PreviousProjects";
import TeamManagementEventPage from "./pages/TeamManagementEvent";

function App() {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/old-projects" element={<PreviousProjects />} />
            <Route path='/manage' element={<TeamManagementEventPage />}></Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
