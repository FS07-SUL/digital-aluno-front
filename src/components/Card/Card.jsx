
import { CardContainer } from "./styles"

const Card = ({ children }) => {
    

    return (
        <CardContainer className="shadow-5 col-4 flex flex-1 flex-column justify-content-between h-11rem p-4">
            {children}
        </CardContainer>
    )
}

export default Card