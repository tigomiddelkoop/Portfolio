interface Props {
    children: any
}

export default function Grid(props: Props) {
    return (
        <div
            className={
                "xl:w-7/8 mt-5 grid w-full grid-flow-dense grid-cols-1 gap-4 p-2 text-center md:w-3/4 lg:w-5/6 lg:grid-cols-3 xl:p-0 2xl:w-4/6"
            }
        >
            {props.children}
        </div>
    )
}
