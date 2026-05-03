import { createContext, useContext, useEffect , useState } from "react";
import { supabase } from "../index"
const AutoContext = createContext();


export const AutoContextProvider = ({children}) => {
    const[user, setUser] = useState([]);
    useEffect(() => {
        const  {data:authListener} = supabase.auth.
        onAuthStateChange((event, session)=> {
            async(event, session) => {

                console.log(event, session)

                if(session?.user == null){
                    setUser(null);

                }else {
                    setUser(session?.user)

                }
                }
        }
    })
    return () =>{
        authListener.subscription();
    }
    }, 

