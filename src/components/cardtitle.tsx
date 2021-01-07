export default function CardTitle({children}) {
    return (
        <div className={"mb-1 border-b-1 text-lg bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 font-semibold"}>
                {/*<div className={"flex m-1"}>*/}
                {/*    <div className={"w-3.5 mr-1 h-3.5 bg-red-700 rounded-full"}/>*/}
                {/*    <div className={"w-3.5 h-3.5 bg-yellow-500 rounded-full"}/>*/}
                {/*    <div className={"w-3.5 ml-1 h-3.5 bg-green-600 rounded-full"}/>*/}
                {/*    <div className={"flex-1 text-xs text-center"}>{children}</div>*/}
                {/*</div>*/}

            {children}
        </div>
    )

}