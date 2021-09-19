import Layout from "../components/Layout";

export function getStaticProps() {
    return{
        props: {
            number: Math.random(),
        }
    }
}
export default function Estatic(props) {
    return(
        <Layout title="Content Estatic">
            <div>{props.number}</div>
        </Layout>
    )
}