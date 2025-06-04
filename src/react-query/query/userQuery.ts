import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../../services/userService"

export const userslist = () =>{
    return useQuery({
        queryKey:['users'],
        queryFn:getUsers
    })
};