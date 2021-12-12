import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import StatusPage from './pages/StatusPage';
import Register from "./pages/Register";
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <br></br>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/status-page'>
          <StatusPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
