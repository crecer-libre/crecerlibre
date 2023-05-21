import { useState } from 'react';
import { CrecerLibreContext } from './crecerlibreContext';

export const CrecerLibreProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: null,
        username: '',
        role: ''
    });

    return (
        <CrecerLibreContext.Provider value={{user, setUser}}>
            {children}
        </CrecerLibreContext.Provider>
    )
}
