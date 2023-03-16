import styled from "styled-components";

export default function Degree() {
    return (
        <>
            <InfoTitle>• Formação</InfoTitle>
            <TopicItem>- Cursando Graduação em Engenharia Elétrica 6º Ano Universidade Positivo;</TopicItem>
            <TopicItem>- Curso de programação com foco em front-end na Alura;</TopicItem>
            <TopicItem>- Curso de inglês na Influx.</TopicItem>
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