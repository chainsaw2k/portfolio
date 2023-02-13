function SingleExperience(props: { coname: string, cotag: string, enddate: string, begdate: string, mytitle: string, jobdesc: string, description: string }) {
    return (
        <div className="relative z-20 ">
            <div className="flex flex-wrap items-center">
                <div className="p-4 md:w-1/4 ">
                    <span className="text-lg text-gray-700 dark:text-gray-400">{props.enddate}<hr />{props.begdate}</span>
                </div>
                <div className="flex-1 p-4 pr-4 border-l border-gray-300 dark:border-gray-700">
                    <p className="text-xl font-bold text-gray-600 dark:text-gray-400">     {props.coname}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-500">   {props.cotag}</p>
                    <p className="mt-2 text-md font-bold text-gray-600 dark:text-gray-400">{props.mytitle} </p>
                    <p className="text-sm text-gray-700 dark:text-gray-500">{props.jobdesc}</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-500">{props.description}</p>
                </div>
            </div>
        </div>

    )
}

export default SingleExperience