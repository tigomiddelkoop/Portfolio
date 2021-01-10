export default function Macwindowtitle({children}) {
    return (
        <div
            draggable={"true"}
            className={"rounded-t-lg w-full bg-gray-50 border-gray-300 border shadow-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"}>
            <div className={"flex pl-2 py-1 border-b items-center"}>
                <div className={"w-3.5 mr-1 h-3.5 bg-red-700 rounded-full hover:bg-red-600"}/>
                <div className={"w-3.5 h-3.5 bg-yellow-500 rounded-full hover:bg-yellow-600"}/>
                <div className={"w-3.5 ml-1 h-3.5 bg-green-600 rounded-full hover:bg-green-500"}/>
                <div className={"flex-1 text-xs text-center"}>{children}</div>
            </div>
        </div>
    )
}