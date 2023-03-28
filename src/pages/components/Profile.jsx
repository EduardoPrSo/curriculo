import styled from "styled-components";
import { profileConfig } from "../../config/config";

export default function Profile() {

    const profile = profileConfig.profile.contact;

    return (
        <>
            <InfoTitle>• Contato</InfoTitle>
            {profile.map((profile, index) => (
                <TopicItemWithIcon key={index}>
                    <TopicIcon src={profile.icon}/>
                    {profile.link ? <TopicItemLink onClick={() => window.open(`${profile.link}`)}>{profile.title}</TopicItemLink> : <TopicItem>{profile.title}</TopicItem>}
                </TopicItemWithIcon>
            ))}
        </>
    )
}

const InfoTitle = styled.h1`
    font-size: 1.3rem;
    font-weight: 600;
`

const TopicItemWithIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    height: auto;
    width: 90%;
    margin-left: 15px;
`

const TopicIcon = styled.img`
    height: 20px;
    width: 20px;
`

const TopicItem = styled.p`
    font-size: .75rem;
    font-weight: 600;
`

const TopicItemLink = styled.p`
    font-size: .75rem;
    font-weight: 600;
    :hover {
        cursor: pointer;
    }
`