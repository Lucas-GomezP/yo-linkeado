import { notFound } from "next/navigation";
import { getDataByUserNameMail } from "../api/api";
import SocialMediaSection from "./components/social-media-links";
import ProjectsSection from "./components/project-container";
import "./colors.css"

type Props = {
  params: {
    profile: string;
  }
}

export default async function Profile({ params: {profile} }: Props) {
  const actualName = profile.split("%40")[0].replace(/-/g, " ");
  const actualMail = profile.split("%40")[1] + "@" + profile.split("%40")[2];

  const user = await getDataByUserNameMail({userName: actualName, mail: actualMail});
  if (user.length === 0) {
    return notFound()
  };

  const actualUser = user[0];
  const socialLinks = [
    {label: "Instagram", link: actualUser["Instagram (opcional)"]},
    {label: "LinkedIn", link: actualUser["LinkedIn (opcional)"]},
    {label: "YouTube", link: actualUser["YouTube (opcional)"]},
    {label: "Twitter", link: actualUser["X / Twitter (opcional)"]},
    {label: "TikTok", link: actualUser["TikTok (opcional)"]},
    {label: "Twitch", link: actualUser["Twitch (opcional)"]},
    {label: "Facebook", link: actualUser["Facebook (opcional)"]},
    {label: "GitHub", link: actualUser["GitHub (opcional)"]},
    {label: "Threads", link: actualUser["Threads (opcional)"]},
    {label: "Spotify", link: actualUser["Spotify (opcional)"]},
  ].filter((link) => link.link.length > 0);
  const proyects = [
    {title: actualUser["Título del PROYECTO Nº1"], link: actualUser["Link del PROYECTO Nº1"]},
    {title: actualUser["Título del PROYECTO Nº2"], link: actualUser["Link del PROYECTO Nº2"]},
    {title: actualUser["Título del PROYECTO Nº3"], link: actualUser["Link del PROYECTO Nº3"]},
    {title: actualUser["Título del PROYECTO Nº4"], link: actualUser["Link del PROYECTO Nº4"]},
    {title: actualUser["Título del PROYECTO Nº5"], link: actualUser["Link del PROYECTO Nº5"]},
  ]

  const colors = actualUser["Estilo de colores"].toLowerCase();

  console.log("colors",colors);

  return (
    <div className={`h-full max-w-screen ${colors} rounded-4xl py-10 flex flex-col justify-center`}>
      <div className="md:w-2xl mx-auto">
        <header className="flex flex-col gap-4 mb-10">
          <h1 className="text-4xl text-center">{actualUser["Nombre de usuario"]}</h1>
          {
            actualUser["Resumen"] && (
              <p className="text-center">{actualUser["Resumen"]}</p>
            )
          }
        </header>
        {
          socialLinks && (
            <div className="mx-10 mb-10">
              <SocialMediaSection links={socialLinks} />
            </div>
          )
        }
        <ProjectsSection projects={proyects} />
      </div>
    </div>
  );
}