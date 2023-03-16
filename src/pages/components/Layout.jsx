import styled from "styled-components"
import SideBar from "./SideBar"
import MainContent from "./MainContent"

export default function Layout() {
    return (
        <MainContainer>
            <SideBar />
            <MainContent />
        </MainContainer>
    )
}

const MainContainer = styled.div`
    display: flex;
    height: 95vh;
    width: 50vw;
    background-color: #f7f7f7;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.507);
`