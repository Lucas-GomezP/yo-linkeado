import Link from "next/link";

export default function Create() {
  return (
    <div className="h-full rounded-4xl py-10 bg-white flex flex-col items-center px-2">
      <div className="md:w-2xl mx-auto flex flex-col">
        <h1 className="text-3xl font-bold">Crear perfil</h1>
        <p className="text-center mt-4">Para crear un perfil en Yo Linkead, ingrese en el siguiente formulario y complete todos los campos.</p>
        <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfZtpK2EsJddupIQt8jhL62lSQYXdAwLDJ5FipDoHG0zHkMww/viewform?usp=dialog"} target="_blank" className="bg-slate-800 text-white active:bg-slate-600 active:scale-95 transition-all px-4 py-2 rounded-full mt-4 text-center">Crear perfil</Link>
        <p className="text-center mt-4">Para ver su perfil luego ingrese a la seccion de perfiles y busque su perfil por su nombre de usuario</p>
        <Link href={"/profiles"} className="bg-slate-800 text-white active:bg-slate-600 active:scale-95 transition-all px-4 py-2 rounded-full mt-4 text-center">Ver perfiles</Link>
      </div>
    </div>
  );
}