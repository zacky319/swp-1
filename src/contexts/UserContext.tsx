
import { ReactNode, createContext } from 'react';
import { useStorage } from '../hooks/useLocalStorage';



type AuthContextType = {
    user: UserLocal;
    setUser: (user: UserLocal) => void;

};

export const AuthContext = createContext<AuthContextType | null>(null);
type AuthProviderProps = {
    children: ReactNode;
};

export type UserLocal = {
    profileToken: string;
    username: string;
};
export const userLocalDefault: UserLocal = {
    profileToken: '',
    username: '',
};
export type LoginResponse = {
    username?: string
    profileToken?: string
}
export const mapLoginResponseToUserLocal = (
    loginResponse: LoginResponse,
): UserLocal => {
    return {
        ...userLocalDefault,
        profileToken: loginResponse.profileToken ?? '',
        username: loginResponse.username ?? '',

    };
};
export type SessionTimeRemain = {
    time: number;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useStorage<UserLocal>('USER', userLocalDefault);


    const authContextValue: AuthContextType = {
        user,
        setUser,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};