import { cloneElement } from "react";
import { useSelector } from "react-redux";

//u can handle with guard with diffrent aproches like you can nevigate to another page or
// for example render another ui like div in this case

const WithGuard = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const newComponent = cloneElement(children,{title:"sad"})
// approach 1 useig navigate 

  //   useEffect(() => {
  //     if (!isLoggedIn) navigate("/");
  //   }, [navigate, isLoggedIn]);

  // approach 2 useing different ui 
  return isLoggedIn ? newComponent : <div>please log in first</div>;
};

export default WithGuard;
