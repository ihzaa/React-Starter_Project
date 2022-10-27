import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'

export default function Routers() {
    return (
        <Routes>
            <Route path='/login' element={<Login />}></Route>
        </Routes>
    );
}
