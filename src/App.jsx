import { RouterProvider } from 'react-router-dom';
import AuthProvider from './app/components/AuthContext/AuthProvider';
import router from './app/router/router/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster position="top-left" />
    </div>
  );
}

export default App;
