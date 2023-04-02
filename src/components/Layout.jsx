import styled from "styled-components"
import SideBar from "./SideBar"
import MainContent from "./MainContent"
import { useState } from "react";
import { profileConfig } from "../config/config";

export default function Layout({userName}) {
    const [userProfile, setUserProfile] = useState(false);

    const profile = profileConfig[userName];

    const changeButton = {
        color: userProfile ? 'white' : 'black', 
        textAlign: 'center', 
        border: userProfile ? '1px solid white' : `1px solid black`, 
        width: '50%',
        borderRadius: '5px',
        marginLeft: '3%',
    }

    return (
        <MainContainer profile={profile}>
            {userProfile && <SideBar userName={userName} />}
            <MainContent userName={userName} />
            <Informations><p style={changeButton} onClick={() => setUserProfile(!userProfile)}>{userProfile ? 'IR PARA EXPERIÊNCIAS' : 'VOLTAR PARA PERFIL'}</p></Informations>
        </MainContainer>
    )
}

const Informations = styled.div`
    color: #00000096;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    top: 96.3%;
`


const MainContainer = styled.div`
    position: relative;
    display: flex;
    height: 95vh;
    width: 900px;
    background-color: #f7f7f7;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.507);
    
    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }
`