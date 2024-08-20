import styled from "styled-components"

const Card = ({ children }) => {
    const CardContainer = styled.div`
        width: 100%;

        @media (min-width: 836px) {
            min-width: 30%;
            max-width: 50%;
        }

        @media (min-width: 936px) {
            // width: 200px;
        }

        @media (min-width: 1440px) {
            // max-width: 50%;
        }
    `

    return (
        <CardContainer className="shadow-5 col-4 flex flex-1 flex-column justify-content-between h-11rem p-4">
            {children}
        </CardContainer>
    )
}

export default Card