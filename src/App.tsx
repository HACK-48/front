import React from "react";
import logo from "./assets/logo_temporary.png";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to hackaton</p>
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
