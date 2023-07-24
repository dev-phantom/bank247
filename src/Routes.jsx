import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App";
import Landing from "./pages/landing";
import Personal from "./pages/personal";
import Business from "./pages/business";
import FinancialInstitution from "./pages/financialInstitution";


// creates routes and returns router object for app
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Landing />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/business" element={<Business />} />
      <Route path="/financial-institution" element={<FinancialInstitution />} />
    </Route>
  )
);
export default router;
