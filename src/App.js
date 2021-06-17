import Dashboard from "./components/Dashboard";
import Alerts from "./components/Alerts";
import { useState } from "react";

function App() {
  const [dashboardMini, setDashboardMini] = useState(false);

  return (
    <div className="App">
      <Dashboard
        dashboardMini={dashboardMini}
        setDashboardMini={setDashboardMini}
      />
      <Alerts dashboardMini={dashboardMini} />
    </div>
  );
}

export default App;
