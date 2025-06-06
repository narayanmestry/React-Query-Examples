import { Box, Stack } from "@mui/material"
import { useParams } from "react-router-dom"
import { fetchUserById } from "../react-query/query/userQuery"

function UserDetails() {
  const {id} = useParams()
  const {data:userData} = fetchUserById(id!)
  
  console.log("Data",userData);
  
  return (
    <Box>
      <Stack direction={'row'}>
        <h1>Name: {userData?.name}</h1> 
      </Stack>
      <Stack direction={'row'}>
        <h1>Age : {userData?.age}</h1> 
      </Stack>
         
         
    </Box>
  )
}

export default UserDetails