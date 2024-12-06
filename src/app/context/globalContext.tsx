// import {createContext} from "node:vm";
// import {ReactNode, useContext, useState} from "react";
//
// type GlobalContextType = {
//     walletAddress: string | null;
//     setWalletAddress: (address: string) => void;
// };
//
// const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
//
// type Props = {
//     children: ReactNode;
// };
//
// export const GlobalProvider = ({ children }: Props) => {
//     const [walletAddress, setWalletAddress] = useState<string | null>(null);
//
//     return (
//         <GlobalContext.Provider value={{ walletAddress, setWalletAddress }}>
//             {children}
//         </GlobalContext.Provider>
//     );
// };
//
// export const useGlobalContext = () => {
//     const context = useContext(GlobalContext);
//     if (!context) {
//         throw new Error('useGlobalContext must be used within a GlobalProvider');
//     }
//     return context;
// };