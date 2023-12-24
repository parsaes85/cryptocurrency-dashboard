import { useRoutes } from "react-router-dom";
import routes from "./routes";

import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="flex min-h-[100vh] font-poppins">
      <Sidebar />
      <div className="flex-[4] bg-bg-1 px-6 sm:px-10 pt-4 pb-20 sm:pb-4">
        <Topbar />
        {router}
      </div>
    </div>
  );
}

export default App;
