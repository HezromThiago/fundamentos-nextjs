import { useState } from "react";
import Layout from "../components/Layout";

export default function Integration() {

    const [code, setCode ] = useState(1); 
    const [client, setClient ] = useState({}); 

    async function getCustomers() {
        const res = await fetch(`http://localhost:3000/api/client/${code}`);
        const data = await res.json();
        setClient(data);
    }

    return(

        <Layout title="Integration for API NEXT JS">
            <div>

                <input /* event "onChange" dispara a funcao para alterar o valor do input */ 
                    type="number" 
                    value={code} 
                    onChange={(e) => setCode(e.target.value)} 
               />
                <button onClick={getCustomers}>Customer data search</button>
            </div>
                <ul>
                    <li>Code: {client.id}</li>
                    <li>Name: {client.name}</li>
                    <li>Mail: {client.mail}</li>
                </ul>
        </Layout>
    );
}