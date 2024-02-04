import {Navigate} from "react-router-dom"
const ProtectedRoute = ({user, children }) => {
    if (user.userName == 'admin' && user.password == 'ad12min34') {
      return <Navigate to="/"/>;
    }
  
    return children;
  };

  export default ProtectedRoute;