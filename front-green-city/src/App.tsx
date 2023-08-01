import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { PrivateRoute } from "./routes/PrivateRoute";

const Test = () => {
  return <h1>Test (Private)</h1>;
};

const listRoutesPublic = [
  { label: "home", path: "/", component: Home },
  { label: "login", path: "/login", component: Login },
];

const listRoutesProtected = [
  { label: "dashboard", path: "/dashboard", component: Dashboard },
  { label: "test", path: "/test", component: Test },
];

const NavBar = () => {
  const listRoutes = [...listRoutesPublic, ...listRoutesProtected];
  return (
    <nav>
      <ul>
        {listRoutes.map((route, index) => {
          return (
            <li key={index}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        {listRoutesPublic.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
        
        <Route element={<PrivateRoute />}>
          {listRoutesProtected.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
