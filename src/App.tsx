import React from "react";
import logo from "./assets/logo_temporary.png";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
