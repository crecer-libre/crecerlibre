import { useState } from 'react';
import { CrecerLibreContext } from './crecerlibreContext';
import Cookies from 'js-cookie';

export const CrecerLibreProvider = ({ children }) => {

    const id = Cookies.get('id');
    const username = Cookies.get('username');
    const role = Cookies.get('role');
    const accessToken = Cookies.get('accessToken');
    const isAuthenticated = Cookies.get('isAuthenticated');

    const [user, setUser] = useState({
        id: id ? JSON.parse(id) : null,
        username: username ? JSON.parse(username) : null,
        role: role ? JSON.parse(role) : null,
        accessToken: accessToken ? JSON.parse(accessToken) : null,
        isAuthenticated: isAuthenticated ? JSON.parse(isAuthenticated) : false
    });

    return (
        <CrecerLibreContext.Provider value={{user, setUser}}>
            {children}
        </CrecerLibreContext.Provider>
    )
}
