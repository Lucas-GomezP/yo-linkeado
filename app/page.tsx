import Link from "next/link";
// import { getData } from "./api/api";


export default async function Home() {
  // const data = await getData()
  return (
    <div className="">
      main
      <Link href={"/profiles"}>profiles</Link>
    </div>
  );
}

// {data.map((user) => {
//   const slug = user["Nombre de usuario"].replace(/ /g, "-") + "@" + user["Dirección de correo electrónico"];
//   return (
//     <Link href={`/${slug}`} key={slug}>{user["Nombre de usuario"]}</Link>
// )})}