import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  { path: "/login", element: <Login /> },
  { path: "/Dashboard", element: <Dashboard /> },
  { path: "/Profile", element: <Profile /> },
  { path: "/Admin", element: <AdminDashboard /> }

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
