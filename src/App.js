import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { AuthNav } from './components/AuthNav';
import { ContactsPage } from './pages/ContactsPage';
const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthNav />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/contacts" element={<ContactsPage />}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;
