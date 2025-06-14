import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function AuthorPlug() {
    return (
            <div className="w-full text-[9px] mt-2 flex items-center gap-1">
                <span className="text-[rgb(150,150,150)]">MADE WITH ❤️ BY KANAK & MANYA,</span>
                
                <span className="text-[rgb(150,150,150)]">CLONE THE PROJECT ON</span>
                <Link
                    className="underline text-blue-500 hover:text-purple-500 transition"
                    href={"https://github.com/ManyaValecha/LINGOSWAP"}
                >
                    GITHUB
                </Link>
            </div>
    );
}
