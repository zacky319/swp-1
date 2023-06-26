import { RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { routers } from "./routes";

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={routers}/>
    </LanguageProvider>

  );
}

export default App;
