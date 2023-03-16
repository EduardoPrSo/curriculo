import styled from "styled-components"
import Layout from "./components/Layout"
import { useState, useEffect } from "react"

export default function Home() {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    return (
        <MainPage>
            {windowWidth < 1024 ? <h1 style={{textAlign: 'center'}}>Visualize em um Computador</h1> : <Layout />}
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
