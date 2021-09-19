export default function ParamsUrl(req,res) {
    const params = req.query.params


    res.status(200).json({
        id: params,
        name: `Hezrom Thiago ${params}`,
        mail: `hezromthiago${params}@gmail.com`,
    });
}