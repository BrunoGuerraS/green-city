import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  // const user = true
  const user = true
  if (user) return <Outlet />
  return <Navigate to="/" />
};

// import { Outlet } from "react-router-dom"

// export const ProtectedRoute = ({children}) => {
//     // console.log(user)
//     const user = true
//     if (user) return children
//     return <Outlet />

//     // return <Redirect to="/login" />

// }
