import { useState } from "react";
import Layout from "../components/Layout";

export default function Estate() {
    const [count, setCount] = useState(0);

    return(
        <Layout title="Componente com Estado">
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </Layout>
    );
}