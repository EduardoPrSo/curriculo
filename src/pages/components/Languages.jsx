import styled from "styled-components";
import ExperienceLevel from "./ExperienceLevel";

export default function Languages() {
    return (
        <>
            <InfoTitle>• Idiomas</InfoTitle>
            <LanguageItem>
                <TopicItemSolo>Inglês</TopicItemSolo>
                <ExperienceLevel level={4} />
            </LanguageItem>
        </>
    )
}

const InfoTitle = styled.h1`
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: 20px;
`

const LanguageItem = styled.div`
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