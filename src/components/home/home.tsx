import React from "react";

import NavBar from "../navbar/navbar";

type TitleProps = {
    children: React.ReactNode
}

type ParagraphProps = {
    children: React.ReactNode
}

const Title = ({ children }: TitleProps ) => {
    return <h1>{ children }</h1>
};
const Paragraph = ({ children }: ParagraphProps ) =>{
    return <p>{ children }</p>
}


function Home() {
    return(   
        <main>
            <NavBar></NavBar>
            <div>
                <Title>Olá, meu nome é <span>Paulo</span>.</Title>
                <Paragraph>Sou um entusiasta de tecnologia, nascido em São Paulo - Brasil.</Paragraph>
            </div>
        </main>        
    );
}

export default Home;
