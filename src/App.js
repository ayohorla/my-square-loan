import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/Homepage';
import StatusPage from './pages/StatusPage';
import Login from "./components/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <h1>Square Loan</h1>
      <Login/>
      <Register/>
      <Route path = '/'>

      </Route>
    </div>
  );
}

export default App;
