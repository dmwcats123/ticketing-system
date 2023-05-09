import './LinkButton.css'
import {Link} from "react-router-dom"
interface Props {
    buttonText: string;
    linkPath: string;
}

const Button = ({buttonText, linkPath}: Props) => {

    return (
        <Link to={linkPath}>
            <button><p>{buttonText}</p></button>
        </Link>
    )
}

export default Button