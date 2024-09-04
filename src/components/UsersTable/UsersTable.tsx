import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { User } from "../../types/user";
import React, { useRef } from "react";
import { FilterUsersPayload, filterUsers } from "../../slices/users.slice";
import { useDispatch } from "react-redux";

interface UserTableProps {
  data: User[];
}

const UsersTable: React.FC<UserTableProps> = ({ data }) => {
  const filters = useRef<FilterUsersPayload>({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const dispatch = useDispatch();

  const handleFiltersChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    filters.current = { ...filters.current, [e.target.name]: e.target.value };
    dispatch(filterUsers(filters.current));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <TextField
                label="Filter by Name"
                name="name"
                onChange={(e) => handleFiltersChange(e)}
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Filter by Username"
                name="username"
                onChange={(e) => handleFiltersChange(e)}
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Filter by Email"
                name="email"
                onChange={(e) => handleFiltersChange(e)}
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Filter by Phone"
                name="phone"
                onChange={(e) => handleFiltersChange(e)}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontSize: "1.2rem" }}>Name</TableCell>
            <TableCell sx={{ fontSize: "1.2rem" }}>Username</TableCell>
            <TableCell sx={{ fontSize: "1.2rem" }}>Email</TableCell>
            <TableCell sx={{ fontSize: "1.2rem" }}>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id} sx={{ "&:last-child td": { border: 0 } }}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
