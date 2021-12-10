import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../routes/Loading.js'

const UserRoute = ({children}) => {
    const { user } = useSelector((state) => ({ ...state }));

    return user && user.id
    ? children
    : <Loading />;
}

export default UserRoute