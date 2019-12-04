export default (mockAdapter) => {
    mockAdapter.onGet('/AfectaVentas/cantidad', { params: { ComprobAvencer: 1, OpcionMuestra: "0" } }).reply(200, {
        "page_size": 10,
        "page_number": 1,
        "total_count": 2,
        "Resultado": {
            "Resultado": true,
            "Tipo_error": null,
            "Mens_error": null,
            "Errores": null
        },
        "Items": [
            {
                "nimovcli": 1,
                "nitem": 1,
                "Fec_emis": "2019-11-27T00:00:00",
                "Fec_vto": "2019-11-27T00:00:00",
                "Comprob_desc": "Presupuesto",
                "Comprob_nro": "00005809",
                "niprod": 59961,
                "Cod_prod": "34037",
                "Desc_prod": "ACTRON 600 RAPIDA ACCION caps.gelat.blanda x 10",
                "codbarra": "7793640215523",
                "Cod_unid": "UN",
                "desc_unid": "Unidad",
                "base_v": 1.0,
                "pcio_unit": 99.66,
                "Cant_pend": 2.0,
                "Cant_afec": 0.0,
                "cant_saldo": 2.0,
                "neto": 199.32
            },
            {
                "nimovcli": 1,
                "nitem": 2,
                "Fec_emis": "2019-11-27T00:00:00",
                "Fec_vto": "2019-11-27T00:00:00",
                "Comprob_desc": "Presupuesto",
                "Comprob_nro": "00005809",
                "niprod": 59962,
                "Cod_prod": "41637",
                "Desc_prod": "ACTRON 600 RAPIDA ACCION caps.gelat.blanda x 20",
                "codbarra": "7793640215622",
                "Cod_unid": "UN",
                "desc_unid": "Unidad",
                "base_v": 1.0,
                "pcio_unit": 188.63,
                "Cant_pend": 3.0,
                "Cant_afec": 0.0,
                "cant_saldo": 3.0,
                "neto": 565.89
            }
        ]
    });

    mockAdapter.onGet('/AfectaVentas/cantidad', { params: { ComprobAvencer: 0, OpcionMuestra: "1" } }).reply(200, {
        "page_size": 10,
        "page_number": 1,
        "total_count": 2,
        "Resultado": {
            "Resultado": true,
            "Tipo_error": null,
            "Mens_error": null,
            "Errores": null
        },
        "Items": [
            {
                "nimovcli": 1,
                "nitem": 1,
                "Fec_emis": "2019-11-27T00:00:00",
                "Fec_vto": "2019-11-27T00:00:00",
                "Comprob_desc": "Presupuesto",
                "Comprob_nro": "00005809",
                "niprod": 59961,
                "Cod_prod": "34037",
                "Desc_prod": "ACTRON 600 RAPIDA ACCION caps.gelat.blanda x 10",
                "codbarra": "7793640215523",
                "Cod_unid": "UN",
                "desc_unid": "Unidad",
                "base_v": 1.0,
                "pcio_unit": 99.66,
                "Cant_pend": 2.0,
                "Cant_afec": 0.0,
                "cant_saldo": 2.0,
                "neto": 199.32
            },
            {
                "nimovcli": 1,
                "nitem": 2,
                "Fec_emis": "2019-11-27T00:00:00",
                "Fec_vto": "2019-11-27T00:00:00",
                "Comprob_desc": "Presupuesto",
                "Comprob_nro": "00005809",
                "niprod": 59962,
                "Cod_prod": "41637",
                "Desc_prod": "ACTRON 600 RAPIDA ACCION caps.gelat.blanda x 20",
                "codbarra": "7793640215622",
                "Cod_unid": "UN",
                "desc_unid": "Unidad",
                "base_v": 1.0,
                "pcio_unit": 188.63,
                "Cant_pend": 3.0,
                "Cant_afec": 0.0,
                "cant_saldo": 3.0,
                "neto": 565.89
            }
        ]
    });

    mockAdapter.onGet('/AfectaVentas/cantidad', { params: { ComprobAvencer: 0, OpcionMuestra: "2" } }).reply(200, {
        "page_size": 10,
        "page_number": 1,
        "total_count": 2,
        "Resultado": {
            "Resultado": true,
            "Tipo_error": null,
            "Mens_error": null,
            "Errores": null
        },
        "Items": [
            {
                "nimovcli": 1,
                "nitem": 1,
                "Fec_emis": "2019-11-27T00:00:00",
                "Fec_vto": "2019-11-27T00:00:00",
                "Comprob_desc": "Presupuesto",
                "Comprob_nro": "00005809",
                "niprod": 59961,
                "Cod_prod": "34037",
                "Desc_prod": "ACTRON 600 RAPIDA ACCION caps.gelat.blanda x 10",
                "codbarra": "7793640215523",
                "Cod_unid": "UN",
                "desc_unid": "Unidad",
                "base_v": 1.0,
                "pcio_unit": 99.66,
                "Cant_pend": 2.0,
                "Cant_afec": 0.0,
                "cant_saldo": 2.0,
                "neto": 199.32
            },
            {
                "nimovcli": 1,
                "nitem": 2,
                "Fec_emis": "2019-11-27T00:00:00",
                "Fec_vto": "2019-11-27T00:00:00",
                "Comprob_desc": "Presupuesto",
                "Comprob_nro": "00005809",
                "niprod": 59962,
                "Cod_prod": "41637",
                "Desc_prod": "ACTRON 600 RAPIDA ACCION caps.gelat.blanda x 20",
                "codbarra": "7793640215622",
                "Cod_unid": "UN",
                "desc_unid": "Unidad",
                "base_v": 1.0,
                "pcio_unit": 188.63,
                "Cant_pend": 3.0,
                "Cant_afec": 0.0,
                "cant_saldo": 3.0,
                "neto": 565.89
            }
        ]
    });

    mockAdapter.onGet('/AfectaVentas/cantidad', { params: { ComprobAvencer: 0, OpcionMuestra: "0" } }).reply(200, {
        "page_size": 10,
        "page_number": 1,
        "total_count": 2,
        "Resultado": {
            "Resultado": true,
            "Tipo_error": null,
            "Mens_error": null,
            "Errores": null
        },
        "Items": [
            {
                "nimovcli": 1,
                "nitem": 1,
                "Fec_emis": "2019-11-27T00:00:00",
                "Fec_vto": "2019-11-27T00:00:00",
                "Comprob_desc": "Presupuesto",
                "Comprob_nro": "00005809",
                "niprod": 59961,
                "Cod_prod": "34037",
                "Desc_prod": "ACTRON 600 RAPIDA ACCION caps.gelat.blanda x 10",
                "codbarra": "7793640215523",
                "Cod_unid": "UN",
                "desc_unid": "Unidad",
                "base_v": 1.0,
                "pcio_unit": 99.66,
                "Cant_pend": 2.0,
                "Cant_afec": 0.0,
                "cant_saldo": 2.0,
                "neto": 199.32
            },
            {
                "nimovcli": 1,
                "nitem": 2,
                "Fec_emis": "2019-11-27T00:00:00",
                "Fec_vto": "2019-11-27T00:00:00",
                "Comprob_desc": "Presupuesto",
                "Comprob_nro": "00005809",
                "niprod": 59962,
                "Cod_prod": "41637",
                "Desc_prod": "ACTRON 600 RAPIDA ACCION caps.gelat.blanda x 20",
                "codbarra": "7793640215622",
                "Cod_unid": "UN",
                "desc_unid": "Unidad",
                "base_v": 1.0,
                "pcio_unit": 188.63,
                "Cant_pend": 3.0,
                "Cant_afec": 0.0,
                "cant_saldo": 3.0,
                "neto": 565.89
            }
        ]
    });

    mockAdapter.onGet('/AfectaVentas/importe', { params: { ComprobAvencer: 0, OpcionMuestra: "0" } }).reply(200, {
        "page_size": 10,
        "page_number": 1,
        "total_count": 2,
        "Resultado": {
            "Resultado": true,
            "Tipo_error": null,
            "Mens_error": null,
            "Errores": null
        },
        "Items": [
            {
                "nimovcli": 1,
                "nitem": 1,
                "fec_emis": "2019-11-27T00:00:00",
                "fec_vto": "2019-11-27T00:00:00",
                "Comprob_desc": "Presupuesto",
                "comprob_nro": "00005809",
                "niprod": 59961,
                "cod_prod": "34037",
                "desc_prod": "ACTRON 600 RAPIDA ACCION caps.gelat.blanda x 10",
                "codbarra": "7793640215523",
                "Cod_unid": "UN",
                "desc_unid": "Unidad",
                "base_v": 1.0,
                "imp_pend": 99.66,
                "imp_afec": 0,
                "cotiz": 2653.6,
                "Cant_pend": 2.0,
                "Cant_afec": 0.0,
                "cant_saldo": 2.0,
                "neto": 199.32,
                "saldo": 1203.89

            },
            {
                "nimovcli": 1,
                "nitem": 2,
                "fec_emis": "2019-11-27T00:00:00",
                "fec_vto": "2019-11-27T00:00:00",
                "Comprob_desc": "Presupuesto",
                "comprob_nro": "00005809",
                "niprod": 59962,
                "cod_prod": "41637",
                "desc_prod": "ACTRON 600 RAPIDA ACCION caps.gelat.blanda x 20",
                "codbarra": "7793640215622",
                "Cod_unid": "UN",
                "desc_unid": "Unidad",
                "base_v": 1.0,
                "imp_pend": 188.63,
                "imp_afec": 0,
                "cotiz": 2653.6,
                "Cant_pend": 3.0,
                "Cant_afec": 0.0,
                "cant_saldo": 3.0,
                "neto": 565.89,
                "saldo": 1203.89

            }
        ]
    });

    mockAdapter.onGet('/AfectaVentas/cantidad/Validar', { params: { idOperacion: 45334 } }).reply(200, {
        data: {
            "Items": [
                {
                    "nimovcli": 45334,
                    "nitem": 1,
                    "cant_afec": 100,
                    "prod_pcio_vta": '36.54',
                    "neto": '365450',
                    "ind_stock": 0
                },

            ],
            "total_importe": 54454,
            "total_item": 1,
            "total_cant": 100
        }
    });

    mockAdapter.onGet('/AfectaVentas/cantidad/Validar', { params: { idOperacion: 45335 } }).reply(200, {
        data: {
            "Items": [
                {
                    "nimovcli": 45335,
                    "nitem": 1,
                    "cant_afec": 250,
                    "prod_pcio_vta": '36.54',
                    "neto": '9135',
                    "ind_stock": 0
                },

            ],
            "total_importe": 154454,
            "total_item": 2,
            "total_cant": 600
        }
    });

    mockAdapter.onGet('/AfectaVentas/cantidad/Validar', { params: { idOperacion: 45336 } }).reply(200, {
        data: {
            "Items": [
                {
                    "nimovcli": 45336,
                    "nitem": 1,
                    "cant_afec": 0,
                    "prod_pcio_vta": '36.54',
                    "neto": '3332.25',
                    "ind_stock": 2
                },

            ],
            "total_importe": 0,
            "total_item": 0,
            "total_cant": 0
        }
    });

    mockAdapter.onGet('/AfectaVentas/cantidad/Validar', { params: { idOperacion: 45337 } }).reply(200, {
        data: {
            "Items": [
                {
                    "nimovcli": 45337,
                    "nitem": 1,
                    "cant_afec": 0,
                    "prod_pcio_vta": '36.54',
                    "neto": '3332.25',
                    "ind_stock": 1
                },

            ],
            "total_importe": 0,
            "total_item": 0,
            "total_cant": 0
        }
    });

    mockAdapter.onGet('/AfectaVentas/cantidad/Validar').reply(200, {
        data: {
            "Items": [
                {
                    "nimovcli": 45335,
                    "nitem": 1,
                    "cant_afec": 500,
                    "prod_pcio_vta": '36.54',
                    "neto": '3332.25',
                    "ind_stock": 0
                },
                {
                    "nimovcli": 45334,
                    "nitem": 1,
                    "cant_afec": 100,
                    "prod_pcio_vta": '38.04',
                    "neto": '36545.25',
                    "ind_stock": 0
                },
                {
                    "nimovcli": 45336,
                    "nitem": 1,
                    "cant_afec": 500,
                    "prod_pcio_vta": '45.52',
                    "neto": '46545.25',
                    "ind_stock": 0
                },
                {
                    "nimovcli": 45337,
                    "nitem": 1,
                    "cant_afec": 378,
                    "prod_pcio_vta": '45.52',
                    "neto": '46545.25',
                    "ind_stock": 0
                },
                {
                    "nimovcli": 45338,
                    "nitem": 1,
                    "cant_afec": 350,
                    "prod_pcio_vta": '45.52',
                    "neto": '46545.25',
                    "ind_stock": 1
                },
                {
                    "nimovcli": 45339,
                    "nitem": 1,
                    "cant_afec": 225,
                    "prod_pcio_vta": '45.52',
                    "neto": '46545.25',
                    "ind_stock": 0
                },
                {
                    "nimovcli": 45340,
                    "nitem": 1,
                    "cant_afec": 625,
                    "prod_pcio_vta": '45.52',
                    "neto": '46545.25',
                    "ind_stock": 1
                },
                {
                    "nimovcli": 45341,
                    "nitem": 1,
                    "cant_afec": 925,
                    "prod_pcio_vta": '45.52',
                    "neto": '46545.25',
                    "ind_stock": 0
                },
                {
                    "nimovcli": 45342,
                    "nitem": 1,
                    "cant_afec": 200,
                    "prod_pcio_vta": '45.52',
                    "neto": '46545.25',
                    "ind_stock": 2
                },
                {
                    "nimovcli": 45343,
                    "nitem": 1,
                    "cant_afec": 150,
                    "prod_pcio_vta": '45.52',
                    "neto": '46545.25',
                    "ind_stock": 0
                }

            ],
            "total_importe": 154454,
            "total_item": 2,
            "total_cant": 600
        }
    });

    mockAdapter.onGet('/AfectaVentas/importe/Validar').reply(200, {
        data: {
            "Items": [
                {
                    "nimovcli": 45335,
                    "nitem": 1,
                    "imp_afec": 500,
                    "neto": '3332.25',
                    "saldo": '3332.25',
                    "ind_stock": 1
                },
                {
                    "nimovcli": 45334,
                    "nitem": 1,
                    "imp_afec": 100,
                    "neto": '36545.25',
                    "saldo": '36545.25',
                    "ind_stock": 0
                },
                {
                    "nimovcli": 45336,
                    "nitem": 1,
                    "imp_afec": 500,
                    "neto": '46545.25',
                    "saldo": '46545.25',
                    "ind_stock": 0
                },
                {
                    "nimovcli": 45337,
                    "nitem": 1,
                    "imp_afec": 378,
                    "neto": '46545.25',
                    "saldo": '46545.25',
                    "ind_stock": 0
                },
                {
                    "nimovcli": 45338,
                    "nitem": 1,
                    "imp_afec": 350,
                    "neto": '46545.25',
                    "saldo": '46545.25',
                    "ind_stock": 0
                },
                {
                    "nimovcli": 45339,
                    "nitem": 1,
                    "imp_afec": 225,
                    "neto": '46545.25',
                    "saldo": '46545.25',
                    "ind_stock": 0
                },
                {
                    "nimovcli": 45340,
                    "nitem": 1,
                    "imp_afec": 625,
                    "neto": '46545.25',
                    "saldo": '46545.25',
                    "ind_stock": 0
                },
                {
                    "nimovcli": 45341,
                    "nitem": 1,
                    "imp_afec": 925,
                    "neto": '46545.25',
                    "saldo": '46545.25',
                    "ind_stock": 0
                },
                {
                    "nimovcli": 45342,
                    "nitem": 1,
                    "imp_afec": 200,
                    "neto": '46545.25',
                    "saldo": '46545.25',
                    "ind_stock": 0
                },
                {
                    "nimovcli": 45343,
                    "nitem": 1,
                    "imp_afec": 150,
                    "neto": '46545.25',
                    "saldo": '46545.25',
                    "ind_stock": 0
                }

            ],
            "total_importe": 154454,
            "total_item": 2,
            "total_cant": 600
        }
    });

    mockAdapter.onGet('/AfectaVentas/cantidad/CalculoSubtotales').reply(200, {
        data: {
            "solic_stock": 0,
            "total_importe": 12541.35,
            "total_item": 5,
            "total_cant": 150,
            "nimovcli": 45338,
            "precio_unit": '325.26',
            "neto": '3332.25',
            "Resultado": 'T',
            "mens_error": "Item correcto",
        },
    });

    mockAdapter.onGet('/AfectaVentas/cantidad/confirmar').reply(200, {
        data: {
            "solic_stock": 0,
            "total_importe": 12541.35,
            "total_item": 9,
            "total_cant": 335,
            "Resultado": 'T',
            "mens_error": "Item correcto",
        },
    });
}