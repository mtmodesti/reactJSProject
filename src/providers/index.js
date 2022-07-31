import { UserProvider } from "./user/user"

export function Providers({children}) {
    return (
      <UserProvider>
          {children}
      </UserProvider>
    )
  }