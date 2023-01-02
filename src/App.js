import Home from "./feather/booking/utlis/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailMovie from "feather/booking/utlis/DetailMovie";
import Login from "feather/login/utlis/Login";
import Sign from "feather/login/utlis/Sign";
import Booking from "feather/booking/utlis/Booking";
import HeaderMovie from "feather/booking/component/HeaderMovie";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProfileAction } from "feather/login/redux/action";
import Admin from "feather/admin/utils/Admin";
import AdminUser from "feather/admin/utils/AdminUser";
import AdminFilm from "feather/admin/utils/AdminFilm";
import Addflim from "feather/admin/utils/Addflim";


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProfileAction)
  }, [])
  return (
    <BrowserRouter >
      <HeaderMovie />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailMovie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/adminuser" element={<AdminUser />} />
          <Route path="/admin/adminfilm" element={<AdminFilm />} />
          <Route path="/admin/addfilm" element={<Addflim />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
