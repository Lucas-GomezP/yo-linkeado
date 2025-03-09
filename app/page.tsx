import Link from "next/link";

export default async function Home() {
  // const data = await getData()
  return (
    <div className="h-full bg-white rounded-4xl py-10">
      <div className="md:w-2xl mx-auto px-2 flex flex-col justify-center">
        <p className="text-center mb-4">Yo Linkeado es un proyecto que te permite almacenar y compartir tus distintos proyectos y redes sociales en un solo lugar.</p>
        <p className="text-center mb-4">Pensado para desarrolladores, artistas, emprendedores y cualquier persona que quiera mostrar sus proyectos.</p>
        <p className="text-center mb-4">¡Comparte tu perfil con el mundo!</p>
        <Link href={"/create"} className="bg-slate-800 text-white active:bg-slate-600 active:scale-95 transition-all px-4 py-2 rounded-full mt-4 text-center">Crear perfil</Link>
      </div>
    </div>
  );
}
