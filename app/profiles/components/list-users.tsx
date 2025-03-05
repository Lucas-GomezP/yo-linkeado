import { DataUser } from "@/app/api/api";
import Link from "next/link";

export default function ListUsers({ users }: { users: DataUser[] }) {
  return (
    <ul>
      {users.map((user) => {
        const slug = user["Nombre de usuario"].replace(/ /g, "-") + "@" + user["Dirección de correo electrónico"];
        return (
          <li key={slug}>
            <Link href={`/${slug}`}>{user["Nombre de usuario"]}</Link>
          </li>
        )})}
    </ul>
  )
}