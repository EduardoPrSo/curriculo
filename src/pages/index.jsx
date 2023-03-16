import styled from "styled-components"
import Layout from "./components/Layout"

export default function Home() {
    return (
        <MainPage>
            <Layout />
        </MainPage>
    )
}

const MainPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #a5a5a5;
`
