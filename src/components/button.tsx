export default function Button({children}) {


    return (
        <div className={"shadow bg-gray-100 border-gray-300 border mr-1 font-semibold hover:bg-gray-200 px-4 py-1.5 rounded-lg"}>
            {children}
        </div>
    )
}