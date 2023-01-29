import React from "react";
import logo from "./assets/logo_temporary.png";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import Contact from "./pages/Contact/";

function App() {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
