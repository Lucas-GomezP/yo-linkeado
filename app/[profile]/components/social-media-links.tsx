import { SocialIcon } from "react-social-icons";
// https://react-social-icons.com/

type Link = {
  label: string;
  link: string;
}

export default function SocialMediaSection({ links }: { links: Link[] | undefined }) {
  console.log("links",links);
  if (!links) return null

  return (
    <section className="flex flex-row flex-wrap gap-4 mx-auto justify-center">
      {links.map((link) => (
        <SocialMediaLink key={link.label} link={link.link} />
      ))}
    </section>
  )
}

function SocialMediaLink({ link }: { link: string }) {

  if (link.length === 0) return

  return (
    <SocialIcon url={link} target="_blank" style={{ width: 52, height: 52 }} />
  );
}