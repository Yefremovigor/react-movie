import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { RootState } from '@/store';

const RequireAuth = ({children}: { children: React.ReactNode }) => {
    const user = useSelector((s: RootState) => s.users.currentUser);
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default RequireAuth;