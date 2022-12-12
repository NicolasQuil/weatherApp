import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../components/home'
import LayoutUser from '../layout/layoutUser/layout'
import LayoutAdmin from"../layout/layoutAdmin/layoutAdmin"
import HomeAdmin from '../components/admin/homeadmin'
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

const Approuters = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LayoutUser />}>
                    <Route index element={<Home />} />
                    <Route path='/page1' element={<Page1 />} />
                    <Route path='/page2' element={<Page2 />} />
                    <Route path='/page3' element={<Page3 />} />
                    {/* admin layout */}
                </Route>
                <Route path='/admin' element={<LayoutAdmin />}>
                    <Route path='/admin' element={<HomeAdmin />} />

                </Route>
                {/* Not found */}
                <Route path='/*' element={<h1>Not found 404</h1>} />

            </Routes>
        </Router>
    )
}

export default Approuters