export default (mockAdapter) => {
    mockAdapter.onGet('/Asiento/Comprob').reply(200,
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
                    "niasto": 3334,
                    "nitem": 1,
                    "detalle": "Deudores",
                    "linea_edit": 0,
                    "nicodcta": 2367,
                    "cuenta": "2.1.01.01. - Deudores por ventas",
                    "tipo_imp": 1,
                    "masc_cta": "",
                    "nicc": null,
                    "centrocosto": null,
                    "debe": 9210,
                    "haber": 0
                },
                {
                    "niasto": 3334,
                    "nitem": 2,
                    "detalle": "Venta medicamentos",
                    "linea_edit": 2,
                    "nicodcta": null,
                    "cuenta": "?",
                    "tipo_imp": null,
                    "masc_cta": "4.3.01",
                    "nicc": null,
                    "centrocosto": null,
                    "debe": 0,
                    "haber": 8000
                },
                {
                    "niasto": 3334,
                    "nitem": 3,
                    "detalle": "Venta perfumeria",
                    "linea_edit": 1,
                    "nicodcta": 4578,
                    "cuenta": "4.1.01.01. - Venta no medicinal ",
                    "tipo_imp": 2,
                    "masc_cta": "",
                    "nicc": null,
                    "centrocosto": null,
                    "debe": 0,
                    "haber": 1000
                },
                {
                    "niasto": 3334,
                    "nitem": 4,
                    "detalle": "Impuestos",
                    "linea_edit": 0,
                    "nicodcta": 667,
                    "cuenta": "2.3.01.02. - IVA debito fiscal ",
                    "tipo_imp": 1,
                    "masc_cta": "",
                    "nicc": null,
                    "centrocosto": null,
                    "debe": 0,
                    "haber": 210
                }
            ]
        }
    );

}