import './css/App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './components/context/AuthProvider';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{backgroundColor: '#F7D9AE'}}>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={3}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
