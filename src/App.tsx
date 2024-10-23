import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/header/Header';
import RegistrationForm from './pages/RegistrationForm';

import './App.css';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RegistrationForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
