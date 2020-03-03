export default (mockAdapter) => {
    mockAdapter.onGet('/Impuestos/Comprob').reply(200,
        {
            "page_number": 1,
            "page_size": 10,
            "total_count": 4,
            "Resultado": [
                {
                    "resultado": '.T.'
                }
            ],
            "Items": [
                {
                    "imp_desc": "00002153 - Gan. Ret. Clien. Vta. Bienes",
                    "tasa": 2,
                    "alicouta": 545822,
                    "linea_edit": 1,
                    "imp_valor": 1200,
                    "basecalculo": 10000,
                    "imp_id": 123456
                },
                {
                    "imp_desc": "00002100 - IVA",
                    "tasa": 21,
                    "alicouta": '',
                    "linea_edit": 2,
                    "imp_valor": 100,
                    "basecalculo": 10000,
                    "imp_id": 123457
                },
            ]
        }
    );

}