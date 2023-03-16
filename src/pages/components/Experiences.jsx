import styled from "styled-components";

export default function Experiences() {
    return (
        <>
            <InfoTitle>• Experiênias</InfoTitle>
            <ExperienceContainer>
                <ExperienceTitle>- Estagiário - Volkswagen do Brasil</ExperienceTitle>
                <ExperiencePeriod>Período: 10/06/2022 – Atualmente</ExperiencePeriod>
                <TopicItem>- Área de qualidade de processos;</TopicItem>
                <TopicItem>- Implementação de software de inspeção de ponstos de união;</TopicItem>
                <TopicItem>- Desenvolvimento de idéias para os processos internos da fábrica;</TopicItem>
                <TopicItem>- Auxílio no desenvolvimento de qualidade da área de armação.</TopicItem>
            </ExperienceContainer>
            <ExperienceContainer>
                <ExperienceTitle>- Desenvolvedor Backend - Inverso</ExperienceTitle>
                <ExperiencePeriod>Período: 18/03/2021 – 27/05/2021</ExperiencePeriod>
                <TopicItem>- Criação de scripts para metaverso;</TopicItem>
                <TopicItem>- Desenvolvimento de ideias em equipe;</TopicItem>
                <TopicItem>- Manutenção de software backend.</TopicItem>
            </ExperienceContainer>
            <ExperienceContainer>
                <ExperienceTitle>- Estagiário - HB Automotive S.A</ExperienceTitle>
                <ExperiencePeriod>Período: 24/05/2021 – 03/11/2021</ExperiencePeriod>
                <TopicItem>- Automação industrial;</TopicItem>
                <TopicItem>- Programação de CLPs;</TopicItem>
                <TopicItem>- Acompanhamento e manutenção na máquina Kunkel Wagner;</TopicItem>
                <TopicItem>- Acompanhamento de termografia;</TopicItem>
                <TopicItem>- Manutenção de equipamentos eletrônicos e ferramentas de serviço.</TopicItem>
            </ExperienceContainer>
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