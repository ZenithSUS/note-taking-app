import { createContext, useContext, useState } from "react";

type ContextType = {
    username: string | null,
    token: string | null,
    loading: boolean,
    setToken: (token: string | null) => void,
    setUsername: (username: string | null) => void,
    setLoading: (loading: boolean) => void
}

type Props = { 
    children: React.ReactNode 
}

const StateContext = createContext<ContextType>({
    username: null,
    token: null,
    loading: false,
    setToken: () => {},
    setUsername: () => {},
    setLoading: () => {},
});

export const ContextProvider = ({ children }: Props) => {
    const [username, setUsername] = useState<string | null>(null);
    const [token, _setToken] = useState<string | null>(localStorage.getItem('token'));
    const [loading, setLoading] = useState<boolean>(false);
    
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
            loading,
            setLoading
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext as React.Context<ContextType>);
