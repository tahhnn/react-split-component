import { RouterProvider } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { router } from "./routes";
const App = () => {
    return <div>
        <RouterProvider router={router} />
    </div>;
};
export default App;