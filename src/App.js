import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import StatusPage from './pages/StatusPage';
import HomePage from "./components/HomePage";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <h1>Square Loan</h1>
      <HomePage />
      <Routes>
        <Route path='/'>
          <Login />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/register'>
          <Register /> 
        </Route>
        <Route path = '/status-page'>
            <StatusPage/>
        </Route>
        </Routes>
    </div>
  );
}

export default App;
