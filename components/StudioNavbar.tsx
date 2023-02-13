import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

const StudioNavbar = (props: any) => {
    return (
        <div>
            <div className="flex items-centered justify-between p-5">
                <Link href="/" className="text-[#26a69a] flex items-center">
                    <ArrowUturnLeftIcon className="h-6 w-6 text-[#26a69a] mr-2" />
                    Go to Website</Link>

                <div className="hidden md:flex p-5 rounded-lg justify-center border-2">
                    <h1 className="font-bold text-[#26a69a]">Check it out.....</h1>
                </div>
            </div>

            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavbar