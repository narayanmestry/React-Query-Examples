import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserByID, getUsers, addUser, updateUser, deleteUser } from "../../services/userService";
import queryClient from "../client";

//get all users
export const userslist = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};

//get user by id
export const fetchUserById = (id: string) => {
  console.log("sdsdsdsd",id);
  
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => getUserByID(id),
    enabled: !!id, // Only run this query if id is truthy
  });
};


// add user
export const useSubmitUser  = () => {
  return useMutation({
    mutationFn:addUser,
    onSuccess: () => {  
      // Invalidate 
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Error adding user:", error);
    },
  });
};

// update user
export const useUpdateUser = () => {
  return useMutation({
    mutationFn:updateUser,
    onSuccess: (data) => {  
      console.log("Eddited  ",data);
      // Invalidate 
      queryClient.invalidateQueries({ queryKey: ["users"] });
    
    },
    onError: (error) => {
      console.error("Error adding user:", error);
    },
  })
}

// delete user
export const useDeleteUser = () => {
  return useMutation({
    mutationFn:deleteUser,
    onSuccess: () => {  
      alert("User deleted successfully");
      // Invalidate 
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
    },
  })
}

// prefetch Query
export const preFetchUserById = async (id: string) => {
  return await queryClient.prefetchQuery({
    queryKey: ["user", id],
    queryFn: () => getUserByID(id),
  });
};
