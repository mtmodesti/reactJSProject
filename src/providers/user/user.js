import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({name:'user'});
  const [logged, setLogged] = useState(false);

  const infoUser = (key, value) => {
    setUser((user[key] = value));
  };

  const showUser = () => {
    console.log(user);
  };

  return (
    <UserContext.Provider value={{ infoUser, showUser, user }}>
      {children}
    </UserContext.Provider>
  );
};
