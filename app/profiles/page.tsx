"use client";
import { useEffect, useState } from "react";
import { DataUser, getData } from "../api/api";
import ListUsers from "./components/list-users";

export default function Profiles() {
  const [allUsers, setAllUsers] = useState<DataUser[]>();
  
  const [users, setUsers] = useState<DataUser[]>();

  useEffect(() => {
    const getDataAsync = async () => {
      const data = await getData();
      setAllUsers(data);
      setUsers(data);
    }
    getDataAsync();
  }, []);

  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("search", search);
    if (!allUsers) return
    const newUsers = allUsers.filter((user) => user["Nombre de usuario"].toLowerCase().includes(search.toLowerCase()));
    setUsers(newUsers);
  }, [search]);

  return (
    <div>
      <h1>Profiles</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      {
        users ? (
          <ListUsers users={users} />
        ) : (
          <p>Loading</p>
        )
      }
    </div>
  );
}