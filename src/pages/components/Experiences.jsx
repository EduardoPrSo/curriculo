import styled from "styled-components";
import { profileConfig } from "../../config/config";

export default function Experiences() {

    const experiences = profileConfig.experiences;

    return (
        <>
            <InfoTitle>• Experiênias</InfoTitle>
            {experiences.map((experience, index) => (
                <ExperienceContainer key={index}>
                    <ExperienceTitle>- {experience.title}</ExperienceTitle>
                    <ExperiencePeriod>Período: {experience.period}</ExperiencePeriod>
                    {experience.activities.map((topic, index) => (
                        <TopicItem key={index}>- {topic}</TopicItem>
                    ))}
                </ExperienceContainer>
            ))}
        </>
    ) 
}


const InfoTitle = styled.h1`
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: 20px;
    color: #00000096;
`
const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 80%;
    width: 100%;
    margin-bottom: 20px;
`

const ExperienceTitle = styled.h1`
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: 20px;
    color: #00000096;
`

const ExperiencePeriod = styled.h1`
    font-size: 1.1rem;
    font-weight: 600;
    margin-left: 40px;
    color: #00000096;
`

const TopicItem = styled.p`
    font-size: 1rem;
    font-weight: 600;
    margin-left: 50px;
    color: #00000096;
`