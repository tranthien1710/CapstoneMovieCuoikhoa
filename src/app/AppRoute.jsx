import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AppRoute = ({ component: Comp, isPrivate, isAuth }) => {
    const token = localStorage.getItem('token');
    const profile = useSelector(state => state.user.profile);
    if (isPrivate) {
        if (token) return <Comp />;
        return <Navigate to={'/login'} replace />
    }
    if (isAuth) {
        if (!profile) return <Comp />
        return <Navigate to={'/'} />
    }
    return <Comp />

}

export default AppRoute
