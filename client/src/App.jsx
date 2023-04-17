import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import 'react-toastify/dist/ReactToastify.css';
import ManageResources from "./pages/ManageResources/ManageResources";
import {  createHashRouter, RouterProvider } from "react-router-dom";
const router = createHashRouter([
  { path: "/", element: <Landing /> },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/Dashboard", element: <Dashboard /> },
  { path: "/Profile", element: <Profile /> },
  { path: "/Admin", element: <AdminDashboard /> },
  { path: "/ManageResources", element: <ManageResources /> }

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
