import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import {
  AddTask,
  AllTasks,
  Profile,
  SharedLayout,
} from "./pages/dashboard/index";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="all-tasks" element={<AllTasks />}></Route>
          <Route path="add-task" element={<AddTask />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="/register" element={<Form />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
