export default function Card({children}) {
    return (
        <div className={"rounded border-gray-300 border px-2 py-2"}>
            {children}
        </div>
    )

}