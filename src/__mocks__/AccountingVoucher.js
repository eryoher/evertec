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
                    "imp_id": 123456,
                    "productos": [
                        {
                            id: 1,
                            desc_product: 'IBUPROFENO 400 MG PUNTANOS 400 mg comp.x 10',
                            neto: 600,
                            impuesto: 126
                        },
                        {
                            id: 2,
                            desc_product: 'IBUPROFENO 400 MG X 90 COMP. (9BL) SAVANT',
                            neto: 600,
                            impuesto: 126
                        },
                        {
                            id: 3,
                            desc_product: 'IBUPROFENO 400 MG PUNTANOS 400 mg comp.x 10',
                            neto: 600,
                            impuesto: 126
                        },
                        {
                            id: 4,
                            desc_product: 'IBUPROFENO 600 MG X 10 COMP TAURO',
                            neto: 600,
                            impuesto: 126
                        }
                    ]
                },
                {
                    "imp_desc": "00002100 - IVA",
                    "tasa": 21,
                    "alicouta": '',
                    "linea_edit": 2,
                    "imp_valor": 100,
                    "basecalculo": 10000,
                    "imp_id": 123457,
                    "productos": [
                        {
                            id: 1,
                            desc_product: 'IBUPROFENO 400 MG PUNTANOS 400 mg comp.x 10',
                            neto: 600,
                            impuesto: 126
                        },
                        {
                            id: 2,
                            desc_product: 'IBUPROFENO 400 MG X 90 COMP. (9BL) SAVANT',
                            neto: 600,
                            impuesto: 126
                        },
                        {
                            id: 3,
                            desc_product: 'IBUPROFENO 400 MG PUNTANOS 400 mg comp.x 10',
                            neto: 600,
                            impuesto: 126
                        },
                        {
                            id: 4,
                            desc_product: 'IBUPROFENO 600 MG X 10 COMP TAURO',
                            neto: 600,
                            impuesto: 126
                        }
                    ]
                },
            ]
        }
    );

}