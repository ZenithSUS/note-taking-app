import { createContext, useContext, useState } from "react";

type ContextType = {
    username: string | null,
    token: string | null,
    setToken: (token: string | null) => void,
    setUsername: (username: string | null) => void,
}

const StateContext = createContext<ContextType>({
    username: null,
    token: null,
    setToken: () => {},
    setUsername: () => {},
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [username, setUsername] = useState<string | null>(null);
    const [token, _setToken] = useState<string | null>(localStorage.getItem('token'));

    
    const setToken = (token: string | null) => {
        _setToken(token);
        if(token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }

    return (
        <StateContext.Provider value={{ 
            username,
            setUsername, 
            token, 
            setToken,
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext as React.Context<ContextType>);
