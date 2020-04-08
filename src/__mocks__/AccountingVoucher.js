export default (mockAdapter) => {
    mockAdapter.onGet('/Impuestos/Comprob').reply(200,
        {
            "Resultado": [
                {
                    "resultado": '.T.'
                }],
            "total_impuesto": 375,
            "Impuestos": [
                {
                    "cod_imp": "IVA DBC",
                    "desc_imp": "IVA débito fiscal",
                    "tasa": 21,
                    "alicuota": 1,
                    "impuesto": 315,
                    "base_calc": 1500,
                    "nro_certif": "",
                    "linea_edit": 0,
                    "Items": [
                        {
                            "nitem_af": 1,
                            "desc_item": "Actron Pediatrico 500mg x20 comp",
                            "neto_item": 1000,
                            "impuesto_item": 210
                        },
                        {
                            "nitem_af": 2,
                            "desc_item": "Venda elastica 50m",
                            "neto_item": 500,
                            "impuesto_item": 105
                        }
                    ]
                },
                {
                    "cod_imp": "IB C PC",
                    "desc_imp": "IIIBB CABA percepción",
                    "tasa": 3,
                    "alicuota": 1,
                    "impuesto": 30,
                    "base_calc": 1000,
                    "nro_certif": "",
                    "linea_edit": 1,
                    "Items": [
                        {
                            "nitem_af": 1,
                            "desc_item": "Actron Pediatrico 500mg x20 comp",
                            "neto_item": 1000,
                            "impuesto_item": 30
                        },
                    ]
                },
                {
                    "cod_imp": "GAN RC LOS",
                    "desc_imp": "Ganancias retención Loc Bienes y serv",
                    "tasa": '4,5',
                    "alicuota": 2,
                    "impuesto": 30,
                    "base_calc": 2500,
                    "nro_certif": "2020-009871",
                    "linea_edit": 2,
                    "Items": [

                    ]
                }
            ]
        }
    );


    mockAdapter.onPost('/impuesto/validarlinea').reply(200, [
        {
            "Idoperacion": 12345,
            "cod_imp": "IVA DBC",
            "tasa": 21,
            "alicuota": 1,
            "impuesto": 210,
            "base_calc": 1000,
            "nro_certif": "",
            "total_impuesto": 3210
        }
    ]);

    mockAdapter.onPost('/impuesto/confirmar').reply(200,
        {
            "Resultado": {
                "Resultado": true,
                "Tipo_error": null,
                "Mens_error": null,
                "Errores": null
            }
        }
    )

}