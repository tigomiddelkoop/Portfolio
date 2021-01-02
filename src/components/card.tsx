export default function Card({children}) {
    return (
        <div className={"rounded-lg w-full border-gray-300 border shadow-lg"}>
            {children}
        </div>
    )

}