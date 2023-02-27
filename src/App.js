import { RouterProvider } from "react-router-dom";
import Login from "./Pages/Shared/Login/Login";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
