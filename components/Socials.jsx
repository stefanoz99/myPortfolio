import { icons } from "lucide-react"
import Link from "next/link"
import {FaGithub, FaGithubAlt, FaGithubSquare, FaLinkedinIn, FaLinkedin, Fa, FaInstagram, FaInstagramSquare, FaWhatsapp} from "react-icons/fa"


const socials = [
    {icons: <FaGithub />, path:"https://github.com/manosebas?tab=repositories" },
    {icons: <FaLinkedin />, path:"" },
]


const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icons}
                </Link>
            );
        })}
    </div>
  )
}

export default Socials