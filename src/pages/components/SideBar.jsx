import styled from "styled-components"
import Profile from "./Profile"
import Languages from "./Languages"
import Habilities from "./Habilities"

export default function SideBar() {
    return (
        <SideContent>
            <PersonalImage src="https://avatars.githubusercontent.com/u/85527054?v=4" />
            <ProfileInformations>
                <Profile />
                <Languages />
                <Habilities />
            </ProfileInformations>
        </SideContent>
    )
}

const ProfileInformations = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 80%;
    width: 90%;
`

const SideContent = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    height: 100%;
    width: 25%;
    background-color: #00b7ff;
    border-radius: 5px 0 0 5px;
`

const PersonalImage = styled.img`
    height: 120px;
    width: 120px;
    border-radius: 50%;
`