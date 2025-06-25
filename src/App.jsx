import "./App.css";
import { PreferencesProvider } from "./context/PreferencesContext";
import Home from "./pages/Home";
function App() {
  return (
    <PreferencesProvider>
      <Home />
    </PreferencesProvider>
  );
}

export default App;
