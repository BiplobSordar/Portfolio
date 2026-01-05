import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";

const socialData = [
  {
    title: "Youtube",
    icon: <Youtube width={20} height={20} />,
    link: "#",
  },
  {
    title: "Github",
    icon: <Github width={20} height={20} />,
    link: "https://github.com/BiplobSordar",
  },
  {
    title: "Linkedin",
    icon: <Linkedin width={20} height={20} />,
    link: "https://www.linkedin.com/in/biplob-sordar",
  },
  {
    title: "Facebook",
    icon: <Facebook width={20} height={20} />,
    link: "https://www.facebook.com/biplob.14133",
  },
  {
    title: "Instagram",
    icon: <Instagram width={20} height={20} />,
    link: "https://www.instagram.com/biplob.sordar",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {socialData.map((item) => (
        <a
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.title}
          className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full 
                     hover:bg-lightSky/10 hover:border-lightSky hover:text-lightSky hoverEffect"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
