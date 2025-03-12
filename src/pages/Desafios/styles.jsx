import styled from "styled-components"


export const Container = styled.div`
    @media (min-width: 768px) {
        padding: 2.5rem 3.5rem;
    }

    @media (min-width: 1440px) {
        padding: 2.5rem calc((100vw - 78rem) / 2);
    }
`