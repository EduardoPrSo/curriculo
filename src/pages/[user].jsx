import Layout from "../components/Layout"
import { useState, useEffect } from "react"

export default function Home({user}) {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [])

    const mainContainer = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#a5a5a5'
    }

    return (
        <div style={mainContainer}>
            {windowWidth < 1024 ? <h1 style={{textAlign: 'center'}}>Visualize em um Computador</h1> : <Layout userName={user}/>}
        </div>
    )
}

export const getServerSideProps = async ({query}) => {
    const { user } = query;
    return { props: { user } }
}