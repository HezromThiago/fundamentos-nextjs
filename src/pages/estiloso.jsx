import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Estiloso.module.css';

export default function Estiloso() {
    return (
        <Layout title="Pagina Estiloso">
            <div className={styles.roxo}>
                <h1 >Ola mundo</h1>
            </div>
        </Layout>
    );
}