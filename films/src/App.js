import './css/App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './components/context/AuthProvider';
import AppRoutes from './AppRoutes';
import { HashRouter } from 'react-router-dom';

function App() {
  const gradientStyle = {
    background: 'linear-gradient(180deg, #FBC26F 0%, #F7D9AE 100vh)'
  };

  return (
    <HashRouter>
      <div className="App" style={gradientStyle}>
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
    </HashRouter>
  );
}

export default App;
