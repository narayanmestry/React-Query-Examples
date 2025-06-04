import { Box } from "@mui/material";
import { userslist } from "../react-query/query/userQuery";
import { Link } from "react-router-dom";


function Home() {
  const { data: userList } = userslist();

  console.log("userList>>>>>>", userList);

  return (
    <Box>
      <table border={1} width={'100%'} cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {userList?.map((row: any) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <Link to={'user'}></Link>
                {row.name}
                </td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
}

export default Home;
