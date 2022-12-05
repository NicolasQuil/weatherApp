import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../components/home'
import Layout from '../layout/layout'
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

const Approuters = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/page1' element={<Page1 />} />
                    <Route path='/page2' element={<Page2 />} />
                    <Route path='/page3' element={<Page3 />} />

                </Route>
                <Route path='/*' element={<h1>Not found 404</h1>} />

            </Routes>
        </Router>
    )
}

export default Approuters