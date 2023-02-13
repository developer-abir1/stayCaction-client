import { RouterProvider } from 'react-router-dom';
import AuthProvider from './app/components/AuthContext/AuthProvider';
import router from './app/router/router/router';
function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;
