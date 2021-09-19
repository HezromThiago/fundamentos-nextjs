import Cabecalho from "../components/cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
    //Props é somente leitura
    return (
        <Layout title="Pagina Exemplo">
            <Cabecalho title="Next.js & React.js"/>
            <Cabecalho title="Titulo em props, passando props pro title" />
        </Layout>
    );
}