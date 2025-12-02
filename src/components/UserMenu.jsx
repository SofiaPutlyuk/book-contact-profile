import { useSelector } from "react-redux"
import { selectInfo } from "../redux/selectors/selectors"
export const UserMenu = () => {
const info = useSelector(selectInfo)
    return(
        <div>
            <p>Ім'я: {info.user.name}</p>
            <button>Log out</button>
        </div>
    )
}