import React from "react";
import { useSelector } from "react-redux";

const WithGuard = (Component) => {
    
    const Wrapper = (props) => {
        const {isLoggedIn} = useSelector(state=>state.auth)
    return isLoggedIn?<Component {...props} />:<div>please log in first </div>;
  };
  return Wrapper
};

export default WithGuard;
