import styled from "styled-components";
import ExperienceLevel from "./ExperienceLevel";

export default function Habilities({userProfile}) {
    
    const habilities = userProfile.habilities;

    return (
        <>
            <InfoTitle>• Habilidades</InfoTitle>
            <HabilitieContainer>
                {habilities.map((hability, index) => (
                    <HabilitieItem key={index}>
                        <TopicItemSolo>{hability.title}</TopicItemSolo>
                        <ExperienceLevel level={hability.level} />
                    </HabilitieItem>
                ))}
            </HabilitieContainer>
        </> 
    )
}

const HabilitieContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 80%;
    width: 100%;
    overflow-y: scroll;
`

const InfoTitle = styled.h1`
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: 20px;
`

const HabilitieItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 90%;
    margin-left: 15px;
    padding: 0 0 15px 0;
`

const TopicItemSolo = styled.p`
    font-size: 1rem;
    font-weight: 600;
`