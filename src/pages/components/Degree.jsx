import styled from "styled-components";

export default function Degree({userProfile}) {

    const degree = userProfile.degrees;

    return (
        <>
            <InfoTitle>• Formação</InfoTitle>
            {degree.map((degree, index) => (
                <TopicItem key={index}>- {degree}</TopicItem>
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
const TopicItem = styled.p`
    font-size: 1rem;
    font-weight: 600;
    margin-left: 20px;
    color: #00000096;
`