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
    <div className="h-full bg-white rounded-4xl">
      <div className=" md:w-2xl mx-auto">
      <label
        htmlFor="search"
        className="flex flex-col p-2 sticky top-20 bg-slate-200 rounded-full px-6 mb-2 mx-2"
      >
        <h2 className="text-lg font-semibold text-center">Buscar perfiles</h2>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Nombre de usuario"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 rounded-full p-2 bg-white text-center"
        />
      </label>
      {
        users ? (
          <ListUsers users={users} />
        ) : (
          <div className="flex justify-center items-center h-full mt-10">
            <div className="size-10 border-4 border-violet-700 border-t-transparent rounded-full animate-spin ease-in-out" />
          </div>
        )
      }
      </div>
    </div>
  );
}