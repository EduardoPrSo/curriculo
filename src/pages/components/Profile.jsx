import styled from "styled-components";

export default function Profile() {
    return (
        <>
            <InfoTitle>• Contato</InfoTitle>
            <TopicItemWithIcon>
                <TopicIcon src="phone.svg"/>
                <TopicItem>(41) 9 9882-6978</TopicItem>
            </TopicItemWithIcon>
            <TopicItemWithIcon>
                <TopicIcon src="email.svg"/>
                <TopicItem>edup.s@hotmail.com</TopicItem>
            </TopicItemWithIcon>
            <TopicItemWithIcon>
                <TopicIcon src="linkedin.svg"/>
                <TopicItemLink onClick={() => window.open('https://www.linkedin.com/in/DuDuPrSo')}>linkedin.com/in/DuDuPrSo</TopicItemLink>
            </TopicItemWithIcon>
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