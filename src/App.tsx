import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { LoadingProvider } from "./layouts/LoadingContent";

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <AppRoutes></AppRoutes>
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
