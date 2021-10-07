import { NextPage } from "next";

import {
  HeaderBox,
  TitleHeader,
  TextHeader
} from './style'

const InitialRegister: NextPage = () => {
  return (
    <>
      <HeaderBox>
        <TitleHeader>Precisa alugar com urgencia?</TitleHeader>
        <TextHeader>Qual nivel de urgencia em relação ao aluguel?</TextHeader>
        <TextHeader>Foi expulso de casa? Violência doméstica, etc...</TextHeader>
      </HeaderBox>

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evelyn", alignItems: "center", height: "60vh" }}>


      <button style={{ padding: "20px" }}>
        Para Agora
      </button>

      <button style={{ padding: "20px" }}>
        Para Agora
      </button>

      </div>
    </>
  )
}

export default InitialRegister;
