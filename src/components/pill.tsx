import styles from "./pill.module.scss"

export default function Pill(props) {


    let type = styles.primary;

    switch (props.color) {
        default: // default to primary colors when no color has been given
        case "primary": {
            type = styles.primary + " dark:border-gray-600 dark:text-white dark:hover:bg-gray-500 dark:bg-gray-700";
            break;
        }
        case "secondary": {
            type = styles.secondary;
            break;
        }
        case "danger": {
            type = styles.danger
            break;
        }
        case "warning": {
            type = styles.warning;
            break;
        }
        case "success": {
            type = styles.success;
            break;
        }
        case "info": {
            type = styles.info;
            break;
        }

    }

    return (
        <div className={type}>
            {props.children}
        </div>
    )
}