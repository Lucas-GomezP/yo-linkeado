// https://docs.google.com/spreadsheets/d/e/2PACX-1vRSyyi9E0C91a-mWmD6lFHRuyrrHwPBeiphQtr7L2q8t1-9nGcJiI2F9qSy1Rv1J7UaCUZ5tbDuoHS7/pub?gid=1727768226&output=csv
import Papa from "papaparse";

export type DataUser = {
  "Marca temporal": string;
  "Dirección de correo electrónico": string;
  "Nombre de usuario": string;
  "Instagram (opcional)": string;
  "LinkedIn (opcional)": string;
  "YouTube (opcional)": string;
  "Título del PROYECTO Nº1": string;
  "Link del PROYECTO Nº1": string;
  "Título del PROYECTO Nº2": string;
  "Link del PROYECTO Nº2": string;
  "Título del PROYECTO Nº3": string;
  "Link del PROYECTO Nº3": string;
  "Título del PROYECTO Nº4": string;
  "Link del PROYECTO Nº4": string;
  "Título del PROYECTO Nº5": string;
  "Link del PROYECTO Nº5": string;
  "X / Twitter (opcional)": string;
  "TikTok (opcional)": string;
  "Twitch (opcional)": string;
  "Facebook (opcional)": string;
  "GitHub (opcional)": string;
  "Threads (opcional)": string;
  "Spotify (opcional)": string;
  "Resumen": string;
}

export async function getData() {
  const res = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRSyyi9E0C91a-mWmD6lFHRuyrrHwPBeiphQtr7L2q8t1-9nGcJiI2F9qSy1Rv1J7UaCUZ5tbDuoHS7/pub?gid=1727768226&output=csv")
  const data = await res.text()
  const parsed = await new Promise<DataUser[]>((resolve, reject) => {
    Papa.parse<DataUser>(data, {header: true, complete: (result) => resolve(result.data), error: reject})

  })
  console.log("parsed",parsed);
  return parsed
}

export async function getDataByUserNameMail({userName, mail}: {userName: string, mail: string}) {
  const res = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRSyyi9E0C91a-mWmD6lFHRuyrrHwPBeiphQtr7L2q8t1-9nGcJiI2F9qSy1Rv1J7UaCUZ5tbDuoHS7/pub?gid=1727768226&output=csv")
  const data = await res.text()
  const parsed = await new Promise<DataUser[]>((resolve, reject) => {
    Papa.parse<DataUser>(data, {header: true, complete: (result) => resolve(result.data), error: reject})

  })
  const filtered = parsed.filter((user) => user["Nombre de usuario"] === userName && user["Dirección de correo electrónico"] === mail)
  console.log("filtered",filtered);
  return filtered
}