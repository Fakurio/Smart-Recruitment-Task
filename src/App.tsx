import { useSelector } from "react-redux";
import "./App.css";
import UsersTable from "./components/UsersTable/UsersTable";
import { useGetUsersQuery } from "./api/users.api";
import { RootState } from "./store";
import { CircularProgress, Container } from "@mui/material";
import AlertBox from "./components/AlertBox/AlertBox";

function App() {
  const { error, isLoading } = useGetUsersQuery();
  const filteredUsers = useSelector(
    (state: RootState) => state.users.filteredUsers
  );

  return (
    <Container
      sx={{ maxWidth: 1400, display: "flex", justifyContent: "center" }}
    >
      {isLoading && <CircularProgress size={60} />}
      {error && <AlertBox text="Error while fetching users" />}
      {filteredUsers && <UsersTable data={filteredUsers} />}
    </Container>
  );
}

export default App;
