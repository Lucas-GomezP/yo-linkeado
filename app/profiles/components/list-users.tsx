import { DataUser } from "@/app/api/api";
import Link from "next/link";

export default function ListUsers({ users }: { users: DataUser[] }) {
  return (
    <ul className="flex flex-col p-2 gap-2 mt-4">
      {users.map((user) => {
        const slug = user["Nombre de usuario"].replace(/ /g, "-") + "@" + user["Dirección de correo electrónico"];
        return (
          <Link
            href={`/${slug}`}
            key={slug}
            className="bg-slate-200 active:bg-slate-300 py-2 px-6 rounded-full flex flex-col text-center active:scale-95 transition-all"
          >
            <p className="font-bold text-lg">{user["Nombre de usuario"]}</p>
            <p>{user["Resumen"]}</p>
          </Link>
        )})}
    </ul>
  )
}