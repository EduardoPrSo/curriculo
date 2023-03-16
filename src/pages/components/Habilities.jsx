import styled from "styled-components";
import ExperienceLevel from "./ExperienceLevel";

export default function Habilities() {
    return (
        <>
            <InfoTitle>• Habilidades</InfoTitle>
            <HabilitieContainer>
                <HabilitieItem>
                    <TopicItemSolo>Office</TopicItemSolo>
                    <ExperienceLevel level={2} />
                </HabilitieItem>
                <HabilitieItem>
                    <TopicItemSolo>Python</TopicItemSolo>
                    <ExperienceLevel level={3} />
                </HabilitieItem>
                <HabilitieItem>
                    <TopicItemSolo>JavaScript</TopicItemSolo>
                    <ExperienceLevel level={4} />
                </HabilitieItem>
                <HabilitieItem>
                    <TopicItemSolo>HTML</TopicItemSolo>
                    <ExperienceLevel level={4} />
                </HabilitieItem>
                <HabilitieItem>
                    <TopicItemSolo>CSS</TopicItemSolo>
                    <ExperienceLevel level={3} />
                </HabilitieItem>
                <HabilitieItem>
                    <TopicItemSolo>C/C++</TopicItemSolo>
                    <ExperienceLevel level={1} />
                </HabilitieItem>
                <HabilitieItem>
                    <TopicItemSolo>NodeJS</TopicItemSolo>
                    <ExperienceLevel level={2} />
                </HabilitieItem>
                <HabilitieItem>
                    <TopicItemSolo>React</TopicItemSolo>
                    <ExperienceLevel level={3} />
                </HabilitieItem>
                <HabilitieItem>
                    <TopicItemSolo>NextJS</TopicItemSolo>
                    <ExperienceLevel level={3} />
                </HabilitieItem>
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