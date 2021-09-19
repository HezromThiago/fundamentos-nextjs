import Link from "next/link";
import { useEffect } from "react";
import ReactGA from "react-ga";
import Layout from "../components/Layout";
import Navegador from "../components/navegador";

import styles from "../styles/Layout.module.css";
export default function Home() {
  useEffect(() => {
    ReactGA.initialize("UA-203099835-1");
    ReactGA.pageview("/");
  }, []);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          height: "100vh",
        }}
      >
        <Navegador texto="Estiloso" destino="/estiloso" cor="#4D3F99" />
        <Navegador texto="Exemplo" destino="/exemplo" cor="#5cce10" />
        <Navegador texto="JSX" destino="/jsx" cor="rgba(199, 18, 18, 0.842)" />
        <Navegador texto="Navegação #01" destino="/navegacao" cor="yellow" />
        <Navegador texto="Navegação #02" destino="/client/sc/123" cor="#0c33e2" />
        <Navegador texto="Componente com Estado" destino="/estate" cor="#010b35" />
        <Navegador texto="Integração com API #01" destino="/integration_1" cor="#01351d" />
        <Navegador texto="Conteudo Estatico" destino="/estatic" cor="#4e1b20" />
      </div>
    </Layout>
  );
}
