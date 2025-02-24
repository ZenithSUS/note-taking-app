import { createContext, useContext, useState } from "react";

type ContextType = {
    username?: string,
    token?: string,
    loading: boolean,
    setToken: (token: string) => void,
    setUsername: (username: string) => void,
    setLoading: (loading: boolean) => void
}

type Props = { 
    children: React.ReactNode 
}

const StateContext = createContext<ContextType>({
    username: '',
    token: '',
    loading: false,
    setToken: () => {},
    setUsername: () => {},
    setLoading: () => {},
});

export const ContextProvider = ({ children }: Props) => {
    const [username, setUsername] = useState<string>('');
    const [token, _setToken] = useState<string>(localStorage.getItem('token')!);
    const [loading, setLoading] = useState<boolean>(false);
    
    const setToken = (token: string) => {
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
