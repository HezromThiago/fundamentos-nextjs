export default function handler(req, res) {
    
    if(req.method === 'GET') {
        handlerGet(req, res);
    }else {
        res.status(405).send()
    }

    function handlerGet() {
        res.status(200).json({
            nome: "Hezrom",
            idade: 21,
            Profissao: "Desenvolvedor Javascript",
        })
    }
}

