import { CProviders } from "components/CProviders/CProviders";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "router/AppRoutes";

const App = () => {

  return (
    <CProviders>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CProviders>
  );
};

export default App;
