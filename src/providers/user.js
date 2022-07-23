import { createContext, useState } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const infoUser = (key,value) => {
        setUser(user[key] = value);
      };

      return (
        <UserContext.Provider value={{ user, infoUser }}>
          {children}
        </UserContext.Provider>
      );

}