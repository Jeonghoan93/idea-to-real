import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "src/layouts/RootLayout";
import Home from "src/pages/Home";
import Profile from "src/pages/User/Profile";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* For RootLayout routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />

          {/* User */}
          <Route path="profile/:email" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
