import Link from 'next/link';

import styles from '../styles/Layout.module.css';
import Navegador from './navegador';

export default function Layout(props) {
    return(
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                    <h1>{props.title ?? "Aulão de Nextjs"}</h1>
                <Navegador texto="Voltar" destino="/" cor="#313131" />
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
}