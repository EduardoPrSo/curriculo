import styled from "styled-components";
import Degree from "./Degree";
import Experiences from "./Experiences";

export default function MainContent() {
    return (
        <MainContentContainer>
            <FullName><Name>Eduardo</Name> Prudente Soupinski</FullName>
            <ContentInfo>
                <Degree />
                <Experiences />
            </ContentInfo>
        </MainContentContainer>  
    );
}

const MainContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    height: 95%;
    width: 75%;
    border-radius: 0 5px 5px 0;
    overflow-y: scroll;
`

const Name = styled.span`
    font-size: 2.5rem;
    font-weight: 600;
    color: #00b7ff;
`

const FullName = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    color: #00000096;
    margin-top: 60px;
`

const ContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    width: 88%;
    overflow-y: scroll;
    ::-webkit-scrollbar-thumb {
        background-color: #00000057;
        border-radius: 20px;
    }
`

const PresentationText = styled.p`
    width: 80%;
    font-size: .rem;
    font-weight: 400;
    color: #00000096;
    margin-top: 20px;
    text-align: justify;
`