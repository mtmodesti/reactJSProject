import "./App.css";
import Main from "./components/main";
import RoutesApp from "./routes";
import { UserProvider } from "./providers/user/user";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <RoutesApp />
      </UserProvider>
    </div>
  );
}

export default App;
