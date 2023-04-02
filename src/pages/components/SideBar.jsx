import styled from "styled-components"
import Profile from "./Profile"
import Languages from "./Languages"
import Habilities from "./Habilities"
import { profileConfig } from "../../config/config";

export default function SideBar({userName}) {
    
    const profile = profileConfig[userName];
    const user = profile.profile;

    return (
        <SideContent profile={profile}>
            <PersonalImage src={user.image} />
            <ProfileInformations>
                <Profile userProfile={profile} />
                <Languages userProfile={profile} />
                <Habilities userProfile={profile} />
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
    width: 230px;
    background-color: ${props => props.profile.mainColor};
    border-radius: 5px 0 0 5px;
`

const PersonalImage = styled.img`
    height: 120px;
    width: 120px;
    border-radius: 50%;
`