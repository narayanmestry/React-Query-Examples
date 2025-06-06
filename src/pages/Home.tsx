import { Box, Button, Stack } from "@mui/material";
import { preFetchUserById, userslist,useDeleteUser } from "../react-query/query/userQuery";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const { data: userList } = userslist();
  const deleteUserMutation = useDeleteUser();
  const navigate = useNavigate();

  console.log("userList>>>>>>", userList);

  return (
    <Box>
      <table border={1} width={'100%'} cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userList?.map((row: any) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <Link to={`/user/${row.id}`} onMouseEnter={()=>{
                  preFetchUserById(row.id)
                }}>
                   {row.name}
                </Link>
                </td>
              <td>{row.age}</td>
              <td>
                <Stack direction={'row'} gap={1} justifyContent="center">
                  <Button variant="outlined" color="primary" onClick={()=>{
                    navigate(`/edit-user/${row.id}`);
                  }}>
                  Edit
                </Button>
                <Button variant="outlined" color="error" onClick={()=>{
                  deleteUserMutation.mutate(row.id);
                }}>
                  Delete
                </Button>
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
}

export default Home;
