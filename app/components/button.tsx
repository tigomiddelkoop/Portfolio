import styles from "./button.module.scss"

interface Props {
    onClick?: any
    className?: any;
    children: any;
    color?: "primary" | "secondary" | "danger" | "warning" | "success" | "info" | "purple";
    onClickButton?: Function;
}


export default function Button(props: Props) {

    let type = styles.primary;

    switch (props.color) {
        default: // default to primary colors when no color has been given
        case "primary": {
            type = styles.primary + " dark:border-slate-600 dark:text-white dark:hover:bg-white/[0.1]";
            break;
        }
    }

    let classNames = ""
    if (props.className !== undefined) classNames = props.className;


    return (
        <div onClick={props.onClick} className={`${type} ${classNames}`}>
            {props.children}
        </div>
    )
}