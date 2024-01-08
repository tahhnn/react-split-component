import LayoutWebsite from "./layouts/LayoutWebsite";
import LayoutAdmin from "./layouts/LayoutAdmin";

import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWebsite />,
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
  },
]);
