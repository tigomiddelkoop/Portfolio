export default function CardTitle({children}) {
    return (
        <div>
            <div
                className={"py-1 px-2 border-b mb-1 border-b-1 text-lg border-gray-300 dark:border-gray-600 font-semibold"}>

                {children}
            </div>
        </div>
    )

}