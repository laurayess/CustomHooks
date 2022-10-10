import { useEffect, useState } from "react";


export const useFetch = (url) => {
    const [datos, setDatos] = useState({
        data:null,
        isLoading:true,
    });
 
    const getFetch=async()=>{
        setDatos({
            ...datos,
            isLoading:true,
            hasError:false,
        }) 

        try {
            const resp=await fetch(url);
            const data=await resp.json();
            setDatos({
                ...datos,
                data,
                isLoading:false,
                hasError:false,
            }) 
        } catch (error) {
            setDatos({
                ...datos,
                isLoading:false,
                hasError:error,
            })
        }
        
    }

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: datos.data,
    isLoading: datos.isLoading,
    hasError: datos.hasError 
  }
}
