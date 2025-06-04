import { QueryClient } from "@tanstack/react-query";

const queryClient =new QueryClient({
    defaultOptions:{
        queries:{
            staleTime:5*60*1000,
            gcTime:5*60*1000,
        },
        mutations:{

        }
    }
})

export default queryClient;