// import {
//   createContext,
//   useContext,
//   ReactNode,
//   useEffect,
//   FC,
//   useState,
// } from "react";
// import Cookies from "js-cookie";
// import { DecodedTokenProps } from "../types/typeUsers";
// import { decodedToken } from "../services/user";

// interface DecodedContextProps {
//   decoded: DecodedTokenProps | null;
//   updateDecoded: () => void;
// }

// const DecodedContext = createContext<DecodedContextProps | undefined>(
//   undefined
// );

// interface DecodedProviderProps {
//   children: ReactNode;
// }

// export const DecodedProvider: FC<DecodedProviderProps> = ({ children }) => {
//   const token = Cookies.get("token");
//   const decoded = token ? decodedToken(token) : null;

//   const [decodedState, setDecoded] = useState<DecodedTokenProps | null>(
//     decoded
//   );

//   const updateDecoded = () => {
//     const newToken = Cookies.get("token");
//     const newDecoded = newToken ? decodedToken(newToken) : null;
//     setDecoded(newDecoded);
//   };

//   useEffect(() => {
//     // Chame updateDecoded apenas depois de setDecoded
//     updateDecoded();
//   }, []);

//   return (
//     <DecodedContext.Provider value={{ decoded: decodedState, updateDecoded }}>
//       {children}
//     </DecodedContext.Provider>
//   );
// };

// export const useDecoded = (): DecodedContextProps => {
//   const context = useContext(DecodedContext);
//   if (!context) {
//     throw new Error("useDecoded deve ser utilizado dentro de DecodedProvider");
//   }
//   return context;
// };
