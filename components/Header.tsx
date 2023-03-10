import Image from "next/image"
import Link from "next/link"
import { SocialIcon } from 'react-social-icons';

const Header = () => {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div className="flex items-center space-x-2">
                <h1><Link href="/">Home</Link></h1>
                {/* <h1 className="inline-flex items-center px-6"><Link href="/blog">Blog</Link></h1> */}
            </div>
            <div>
                <SocialIcon className="mr-2" target="_blank" style={{ height: 35, width: 35 }} url="https://linkedin.com/in/wtmccollough" />
                <SocialIcon className="mr-2" target="_blank" style={{ height: 35, width: 35 }} url="https://twitter.com/wtmccollough" />
                <SocialIcon className="mr-2" target="_blank" style={{ height: 35, width: 35 }} url="https://github.com/chainsaw2k" />
            </div>
        </header>
    )
}

export default Header