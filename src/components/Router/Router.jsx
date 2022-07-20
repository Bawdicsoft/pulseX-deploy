import React from 'react';
import { Routes, Route } from "react-router-dom";
import Faqs from '../Pages/FAQs/Faqs';
import Navbarr from "../Navbar/Navbar";
import Home from '../Pages/Home/Home';
import Sacrifice from '../Pages/Sacrifice/Sacrifice';




const RouteConfig = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/faqs" element={<Faqs />}></Route>
                <Route path="/donate" element={<Sacrifice />}></Route>
            </Routes>
        </div>
    );
}

export default RouteConfig;
