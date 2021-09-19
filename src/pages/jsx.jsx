import { useEffect } from 'react';
import ReactGA from 'react-ga';
import Layout from '../components/Layout';

export default function Home() {

    useEffect(() => {

        ReactGA.initialize('UA-203099835-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
        ReactGA.outboundLink()
        
    }, []);

    function ClickHandler() {
        ReactGA.event({
            category: 'outbound-link',
            action: 'click',
            label: 'Botão do Whatsapp',
        });

        alert('Informação enviada ao google Analytics');
    }

    return (
        <Layout title="Pagina JSX">

            <button onClick={ClickHandler}>
                Click
            </button>
        </Layout>
    );
}