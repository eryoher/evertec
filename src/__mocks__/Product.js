export default (mockAdapter) => {

    mockAdapter.onGet('/Productos/Precio').reply(200, {
        "prod_pcio_vta": '3245.05'
    });

    mockAdapter.onGet('/Productos/Seleccion').reply(200,
        {
            "page_size": 10,
            "page_number": 1,
            "total_count": 9,
            "Resultado": {
                "Resultado": true,
                "Tipo_error": null,
                "Mens_error": null,
                "Errores": null
            },
            "bonificaciones": [
                {
                    "tipo_bonif": "C",
                    "cod_bonif": "12x10",
                    "desc_bon": "12x10"
                }
            ],
            "productos": [
                {
                    "niprod": 109370,
                    "cod_prod": "LB1000226",
                    "desc_prod": "DESODORANTE P/INODORO OETT 25 G PAST",
                    "codbarra": "",
                    "cod_unid": "UN",
                    "base_v": 1.0,
                    "ind_stock": 0,
                    "pcio_unit": 18.46,
                    "id_imagen": 0,
                    "presentaciones": [
                        {
                            "cod_pres": "UN",
                            "desc_pres": "Unidad",
                            "cant": 1,
                            "codbarra": ""
                        }
                    ],
                    "atributos": [
                        {
                            "cod_atrib": "CARRITO",
                            "desc_atrib": "Comercializado por Carrito WEB",
                            "cod_dato": "0",
                            "desc_dato": "NO Comercializado"
                        },
                        {
                            "cod_atrib": "CLAVE",
                            "desc_atrib": "Productos Clave",
                            "cod_dato": "00",
                            "desc_dato": "No prioritario"
                        },
                        {
                            "cod_atrib": "PLZCOMER",
                            "desc_atrib": "Plazo Comercializacion",
                            "cod_dato": null,
                            "desc_dato": "180"
                        }
                    ],
                    "Bonificaciones": [

                    ]
                },
                {
                    "niprod": 51062,
                    "cod_prod": "23646",
                    "desc_prod": "MINAMINT DESODORANTE BUCAL SPRAY Freshmint desod.buc.x9ml",
                    "codbarra": "7798034749257",
                    "cod_unid": "UN",
                    "base_v": 1.0,
                    "ind_stock": 0,
                    "pcio_unit": 119.0,
                    "id_imagen": 0,
                    "presentaciones": [
                        {
                            "cod_pres": "UN",
                            "desc_pres": "Unidad",
                            "cant": 1,
                            "codbarra": "7798034749257"
                        }
                    ],
                    "atributos": [
                        {
                            "cod_atrib": "ACCIONES",
                            "desc_atrib": "Acción Comercial",
                            "cod_dato": "00",
                            "desc_dato": "Venta Normal"
                        },
                        {
                            "cod_atrib": "CARRITO",
                            "desc_atrib": "Comercializado por Carrito WEB",
                            "cod_dato": "1",
                            "desc_dato": "Comercializado"
                        },
                        {
                            "cod_atrib": "CLAVE",
                            "desc_atrib": "Productos Clave",
                            "cod_dato": "00",
                            "desc_dato": "No prioritario"
                        },
                        {
                            "cod_atrib": "COMERCIO",
                            "desc_atrib": "06  Comercializado",
                            "cod_dato": "3",
                            "desc_dato": "No comercializado"
                        },
                        {
                            "cod_atrib": "DROGACCT",
                            "desc_atrib": "02  Acción terapéutica",
                            "cod_dato": "00407",
                            "desc_dato": "Productos odontológicos"
                        },
                        {
                            "cod_atrib": "DROGCF",
                            "desc_atrib": "10  Requiere Cadena de Frío",
                            "cod_dato": "2",
                            "desc_dato": "No"
                        },
                        {
                            "cod_atrib": "DROGDRO",
                            "desc_atrib": "01  Monodroga",
                            "cod_dato": "10630",
                            "desc_dato": "producto cosmético"
                        },
                        {
                            "cod_atrib": "DROGLAB",
                            "desc_atrib": "13  Laboratorio fabricante",
                            "cod_dato": "541",
                            "desc_dato": "GRIMBERG"
                        },
                        {
                            "cod_atrib": "DROGLINEA",
                            "desc_atrib": "04  Línea de Producto",
                            "cod_dato": "0008",
                            "desc_dato": "Etico 2º Linea"
                        },
                        {
                            "cod_atrib": "DROGPRANT",
                            "desc_atrib": "Precio anterior",
                            "cod_dato": null,
                            "desc_dato": "105,00"
                        },
                        {
                            "cod_atrib": "DROGROTA",
                            "desc_atrib": "12  Clas. Producto",
                            "cod_dato": "3",
                            "desc_dato": "C"
                        },
                        {
                            "cod_atrib": "DROGULTFE",
                            "desc_atrib": "Fecha última actualización",
                            "cod_dato": null,
                            "desc_dato": "29/03/2019 05:09:59 p.m."
                        },
                        {
                            "cod_atrib": "MARCA",
                            "desc_atrib": "03  Marca",
                            "cod_dato": "1810",
                            "desc_dato": "Grimberg"
                        },
                        {
                            "cod_atrib": "PLZCOMER",
                            "desc_atrib": "Plazo Comercializacion",
                            "cod_dato": null,
                            "desc_dato": "180"
                        },
                        {
                            "cod_atrib": "PRIORIDAD",
                            "desc_atrib": "Prioridad de Pedido",
                            "cod_dato": null,
                            "desc_dato": "00"
                        }
                    ],
                    "Bonificaciones": [

                    ]
                },
                {
                    "niprod": 51060,
                    "cod_prod": "23644",
                    "desc_prod": "MINAMINT DESODORANTE BUCAL SPRAY Spearmint desod.buc.x9ml",
                    "codbarra": "7798034749240",
                    "cod_unid": "UN",
                    "base_v": 1.0,
                    "ind_stock": 0,
                    "pcio_unit": 119.0,
                    "id_imagen": 0,
                    "presentaciones": [
                        {
                            "cod_pres": "UN",
                            "desc_pres": "Unidad",
                            "cant": 1,
                            "codbarra": "7798034749240"
                        }
                    ],
                    "atributos": [
                        {
                            "cod_atrib": "ACCIONES",
                            "desc_atrib": "Acción Comercial",
                            "cod_dato": "00",
                            "desc_dato": "Venta Normal"
                        },
                        {
                            "cod_atrib": "CARRITO",
                            "desc_atrib": "Comercializado por Carrito WEB",
                            "cod_dato": "1",
                            "desc_dato": "Comercializado"
                        },
                        {
                            "cod_atrib": "CLAVE",
                            "desc_atrib": "Productos Clave",
                            "cod_dato": "00",
                            "desc_dato": "No prioritario"
                        },
                        {
                            "cod_atrib": "COMERCIO",
                            "desc_atrib": "06  Comercializado",
                            "cod_dato": "3",
                            "desc_dato": "No comercializado"
                        },
                        {
                            "cod_atrib": "DROGACCT",
                            "desc_atrib": "02  Acción terapéutica",
                            "cod_dato": "00407",
                            "desc_dato": "Productos odontológicos"
                        },
                        {
                            "cod_atrib": "DROGCF",
                            "desc_atrib": "10  Requiere Cadena de Frío",
                            "cod_dato": "2",
                            "desc_dato": "No"
                        },
                        {
                            "cod_atrib": "DROGDRO",
                            "desc_atrib": "01  Monodroga",
                            "cod_dato": "10630",
                            "desc_dato": "producto cosmético"
                        },
                        {
                            "cod_atrib": "DROGLAB",
                            "desc_atrib": "13  Laboratorio fabricante",
                            "cod_dato": "541",
                            "desc_dato": "GRIMBERG"
                        },
                        {
                            "cod_atrib": "DROGLINEA",
                            "desc_atrib": "04  Línea de Producto",
                            "cod_dato": "0008",
                            "desc_dato": "Etico 2º Linea"
                        },
                        {
                            "cod_atrib": "DROGPRANT",
                            "desc_atrib": "Precio anterior",
                            "cod_dato": null,
                            "desc_dato": "105,00"
                        },
                        {
                            "cod_atrib": "DROGROTA",
                            "desc_atrib": "12  Clas. Producto",
                            "cod_dato": "3",
                            "desc_dato": "C"
                        },
                        {
                            "cod_atrib": "DROGULTFE",
                            "desc_atrib": "Fecha última actualización",
                            "cod_dato": null,
                            "desc_dato": "29/03/2019 05:09:59 p.m."
                        },
                        {
                            "cod_atrib": "MARCA",
                            "desc_atrib": "03  Marca",
                            "cod_dato": "1810",
                            "desc_dato": "Grimberg"
                        },
                        {
                            "cod_atrib": "PLZCOMER",
                            "desc_atrib": "Plazo Comercializacion",
                            "cod_dato": null,
                            "desc_dato": "180"
                        },
                        {
                            "cod_atrib": "PRIORIDAD",
                            "desc_atrib": "Prioridad de Pedido",
                            "cod_dato": null,
                            "desc_dato": "00"
                        }
                    ],
                    "Bonificaciones": [

                    ]
                },
                {
                    "niprod": 89121,
                    "cod_prod": "49951",
                    "desc_prod": "PROAVENAL DESODORANTE roll on x 100 ml",
                    "codbarra": "7798051852299",
                    "cod_unid": "UN",
                    "base_v": 1.0,
                    "ind_stock": 0,
                    "pcio_unit": 421.0,
                    "id_imagen": 0,
                    "presentaciones": [
                        {
                            "cod_pres": "UN",
                            "desc_pres": "Unidad",
                            "cant": 1,
                            "codbarra": "7798051852299"
                        }
                    ],
                    "atributos": [
                        {
                            "cod_atrib": "ACCIONES",
                            "desc_atrib": "Acción Comercial",
                            "cod_dato": "00",
                            "desc_dato": "Venta Normal"
                        },
                        {
                            "cod_atrib": "CARRITO",
                            "desc_atrib": "Comercializado por Carrito WEB",
                            "cod_dato": "1",
                            "desc_dato": "Comercializado"
                        },
                        {
                            "cod_atrib": "CLASPROD",
                            "desc_atrib": "Clasificación Productos",
                            "cod_dato": "02",
                            "desc_dato": "Medicamentos"
                        },
                        {
                            "cod_atrib": "CLAVE",
                            "desc_atrib": "Productos Clave",
                            "cod_dato": "00",
                            "desc_dato": "No prioritario"
                        },
                        {
                            "cod_atrib": "COMERCIO",
                            "desc_atrib": "06  Comercializado",
                            "cod_dato": "3",
                            "desc_dato": "No comercializado"
                        },
                        {
                            "cod_atrib": "DROGACCT",
                            "desc_atrib": "02  Acción terapéutica",
                            "cod_dato": "00444",
                            "desc_dato": "Desodorante"
                        },
                        {
                            "cod_atrib": "DROGCF",
                            "desc_atrib": "10  Requiere Cadena de Frío",
                            "cod_dato": "2",
                            "desc_dato": "No"
                        },
                        {
                            "cod_atrib": "DROGDRO",
                            "desc_atrib": "01  Monodroga",
                            "cod_dato": "01116",
                            "desc_dato": "avena+asoc."
                        },
                        {
                            "cod_atrib": "DROGLAB",
                            "desc_atrib": "13  Laboratorio fabricante",
                            "cod_dato": "506",
                            "desc_dato": "PANALAB"
                        },
                        {
                            "cod_atrib": "DROGLINEA",
                            "desc_atrib": "04  Línea de Producto",
                            "cod_dato": "0008",
                            "desc_dato": "Etico 2º Linea"
                        },
                        {
                            "cod_atrib": "DROGPRANT",
                            "desc_atrib": "Precio anterior",
                            "cod_dato": null,
                            "desc_dato": "409,00"
                        },
                        {
                            "cod_atrib": "DROGROTA",
                            "desc_atrib": "12  Clas. Producto",
                            "cod_dato": "3",
                            "desc_dato": "C"
                        },
                        {
                            "cod_atrib": "DROGULTFE",
                            "desc_atrib": "Fecha última actualización",
                            "cod_dato": null,
                            "desc_dato": "05/04/2019 09:30:07 p.m."
                        },
                        {
                            "cod_atrib": "MARCA",
                            "desc_atrib": "03  Marca",
                            "cod_dato": "4801",
                            "desc_dato": "Panalab"
                        },
                        {
                            "cod_atrib": "PLZCOMER",
                            "desc_atrib": "Plazo Comercializacion",
                            "cod_dato": null,
                            "desc_dato": "180"
                        },
                        {
                            "cod_atrib": "PRIORIDAD",
                            "desc_atrib": "Prioridad de Pedido",
                            "cod_dato": null,
                            "desc_dato": "00"
                        }
                    ],
                    "Bonificaciones": [

                    ]
                },
                {
                    "niprod": 113246,
                    "cod_prod": "53860",
                    "desc_prod": "PROAVENAL DESODORANTE roll on x 100 ml x 2 u.",
                    "codbarra": "7798051852985",
                    "cod_unid": "UN",
                    "base_v": 1.0,
                    "ind_stock": 0,
                    "pcio_unit": 824.0,
                    "id_imagen": 0,
                    "presentaciones": [
                        {
                            "cod_pres": "UN",
                            "desc_pres": "Unidad",
                            "cant": 1,
                            "codbarra": "7798051852985"
                        }
                    ],
                    "atributos": [
                        {
                            "cod_atrib": "ACCIONES",
                            "desc_atrib": "Acción Comercial",
                            "cod_dato": "00",
                            "desc_dato": "Venta Normal"
                        },
                        {
                            "cod_atrib": "CARRITO",
                            "desc_atrib": "Comercializado por Carrito WEB",
                            "cod_dato": "0",
                            "desc_dato": "NO Comercializado"
                        },
                        {
                            "cod_atrib": "CLAVE",
                            "desc_atrib": "Productos Clave",
                            "cod_dato": "00",
                            "desc_dato": "No prioritario"
                        },
                        {
                            "cod_atrib": "DROGACCT",
                            "desc_atrib": "02  Acción terapéutica",
                            "cod_dato": "00444",
                            "desc_dato": "Desodorante"
                        },
                        {
                            "cod_atrib": "DROGCF",
                            "desc_atrib": "10  Requiere Cadena de Frío",
                            "cod_dato": "2",
                            "desc_dato": "No"
                        },
                        {
                            "cod_atrib": "DROGDRO",
                            "desc_atrib": "01  Monodroga",
                            "cod_dato": "01116",
                            "desc_dato": "avena+asoc."
                        },
                        {
                            "cod_atrib": "DROGLAB",
                            "desc_atrib": "13  Laboratorio fabricante",
                            "cod_dato": "506",
                            "desc_dato": "PANALAB"
                        },
                        {
                            "cod_atrib": "DROGPRANT",
                            "desc_atrib": "Precio anterior",
                            "cod_dato": null,
                            "desc_dato": "800,00"
                        },
                        {
                            "cod_atrib": "DROGROTA",
                            "desc_atrib": "12  Clas. Producto",
                            "cod_dato": "3",
                            "desc_dato": "C"
                        },
                        {
                            "cod_atrib": "DROGULTFE",
                            "desc_atrib": "Fecha última actualización",
                            "cod_dato": null,
                            "desc_dato": "05/04/2019 09:30:07 p.m."
                        },
                        {
                            "cod_atrib": "PLZCOMER",
                            "desc_atrib": "Plazo Comercializacion",
                            "cod_dato": null,
                            "desc_dato": "180"
                        },
                        {
                            "cod_atrib": "PRIORIDAD",
                            "desc_atrib": "Prioridad de Pedido",
                            "cod_dato": null,
                            "desc_dato": "00"
                        }
                    ],
                    "Bonificaciones": [

                    ]
                },
                {
                    "niprod": 84029,
                    "cod_prod": "48087",
                    "desc_prod": "PROAVENAL DESODORANTE roll on x 50 ml",
                    "codbarra": "7798051851926",
                    "cod_unid": "UN",
                    "base_v": 1.0,
                    "ind_stock": 0,
                    "pcio_unit": 202.39,
                    "id_imagen": 0,
                    "presentaciones": [
                        {
                            "cod_pres": "UN",
                            "desc_pres": "Unidad",
                            "cant": 1,
                            "codbarra": "7798051851926"
                        }
                    ],
                    "atributos": [
                        {
                            "cod_atrib": "ACCIONES",
                            "desc_atrib": "Acción Comercial",
                            "cod_dato": "00",
                            "desc_dato": "Venta Normal"
                        },
                        {
                            "cod_atrib": "CARRITO",
                            "desc_atrib": "Comercializado por Carrito WEB",
                            "cod_dato": "1",
                            "desc_dato": "Comercializado"
                        },
                        {
                            "cod_atrib": "CLASPROD",
                            "desc_atrib": "Clasificación Productos",
                            "cod_dato": "02",
                            "desc_dato": "Medicamentos"
                        },
                        {
                            "cod_atrib": "CLAVE",
                            "desc_atrib": "Productos Clave",
                            "cod_dato": "00",
                            "desc_dato": "No prioritario"
                        },
                        {
                            "cod_atrib": "COMERCIO",
                            "desc_atrib": "06  Comercializado",
                            "cod_dato": "3",
                            "desc_dato": "No comercializado"
                        },
                        {
                            "cod_atrib": "DROGACCT",
                            "desc_atrib": "02  Acción terapéutica",
                            "cod_dato": "00444",
                            "desc_dato": "Desodorante"
                        },
                        {
                            "cod_atrib": "DROGCF",
                            "desc_atrib": "10  Requiere Cadena de Frío",
                            "cod_dato": "2",
                            "desc_dato": "No"
                        },
                        {
                            "cod_atrib": "DROGDRO",
                            "desc_atrib": "01  Monodroga",
                            "cod_dato": "01116",
                            "desc_dato": "avena+asoc."
                        },
                        {
                            "cod_atrib": "DROGLAB",
                            "desc_atrib": "13  Laboratorio fabricante",
                            "cod_dato": "506",
                            "desc_dato": "PANALAB"
                        },
                        {
                            "cod_atrib": "DROGLINEA",
                            "desc_atrib": "04  Línea de Producto",
                            "cod_dato": "0008",
                            "desc_dato": "Etico 2º Linea"
                        },
                        {
                            "cod_atrib": "DROGPRANT",
                            "desc_atrib": "Precio anterior",
                            "cod_dato": null,
                            "desc_dato": "198,42"
                        },
                        {
                            "cod_atrib": "DROGROTA",
                            "desc_atrib": "12  Clas. Producto",
                            "cod_dato": "3",
                            "desc_dato": "C"
                        },
                        {
                            "cod_atrib": "DROGULTFE",
                            "desc_atrib": "Fecha última actualización",
                            "cod_dato": null,
                            "desc_dato": "11/06/2018 11:11:20 a.m."
                        },
                        {
                            "cod_atrib": "MARCA",
                            "desc_atrib": "03  Marca",
                            "cod_dato": "4801",
                            "desc_dato": "Panalab"
                        },
                        {
                            "cod_atrib": "PLZCOMER",
                            "desc_atrib": "Plazo Comercializacion",
                            "cod_dato": null,
                            "desc_dato": "180"
                        },
                        {
                            "cod_atrib": "PRIORIDAD",
                            "desc_atrib": "Prioridad de Pedido",
                            "cod_dato": null,
                            "desc_dato": "00"
                        }
                    ],
                    "Bonificaciones": [

                    ]
                },
                {
                    "niprod": 54848,
                    "cod_prod": "35454",
                    "desc_prod": "WELEDA DESODORANTES Citrus desodorant.x118ml",
                    "codbarra": "7798036820770",
                    "cod_unid": "UN",
                    "base_v": 1.0,
                    "ind_stock": 0,
                    "pcio_unit": 260.0,
                    "id_imagen": 0,
                    "presentaciones": [
                        {
                            "cod_pres": "UN",
                            "desc_pres": "Unidad",
                            "cant": 1,
                            "codbarra": "7798036820770"
                        }
                    ],
                    "atributos": [
                        {
                            "cod_atrib": "ACCIONES",
                            "desc_atrib": "Acción Comercial",
                            "cod_dato": "00",
                            "desc_dato": "Venta Normal"
                        },
                        {
                            "cod_atrib": "CARRITO",
                            "desc_atrib": "Comercializado por Carrito WEB",
                            "cod_dato": "1",
                            "desc_dato": "Comercializado"
                        },
                        {
                            "cod_atrib": "CLAVE",
                            "desc_atrib": "Productos Clave",
                            "cod_dato": "00",
                            "desc_dato": "No prioritario"
                        },
                        {
                            "cod_atrib": "COMERCIO",
                            "desc_atrib": "06  Comercializado",
                            "cod_dato": "3",
                            "desc_dato": "No comercializado"
                        },
                        {
                            "cod_atrib": "DROGACCT",
                            "desc_atrib": "02  Acción terapéutica",
                            "cod_dato": "00412",
                            "desc_dato": "Dermatocosméticos"
                        },
                        {
                            "cod_atrib": "DROGCF",
                            "desc_atrib": "10  Requiere Cadena de Frío",
                            "cod_dato": "2",
                            "desc_dato": "No"
                        },
                        {
                            "cod_atrib": "DROGDRO",
                            "desc_atrib": "01  Monodroga",
                            "cod_dato": "10630",
                            "desc_dato": "producto cosmético"
                        },
                        {
                            "cod_atrib": "DROGFAM",
                            "desc_atrib": "08  Familia",
                            "cod_dato": "PE",
                            "desc_dato": "PERFUMERIA"
                        },
                        {
                            "cod_atrib": "DROGLAB",
                            "desc_atrib": "13  Laboratorio fabricante",
                            "cod_dato": "530",
                            "desc_dato": "WELEDA"
                        },
                        {
                            "cod_atrib": "DROGPRANT",
                            "desc_atrib": "Precio anterior",
                            "cod_dato": null,
                            "desc_dato": "225,00"
                        },
                        {
                            "cod_atrib": "DROGROTA",
                            "desc_atrib": "12  Clas. Producto",
                            "cod_dato": "3",
                            "desc_dato": "C"
                        },
                        {
                            "cod_atrib": "DROGULTFE",
                            "desc_atrib": "Fecha última actualización",
                            "cod_dato": null,
                            "desc_dato": "20/03/2019 05:27:49 p.m."
                        },
                        {
                            "cod_atrib": "PLZCOMER",
                            "desc_atrib": "Plazo Comercializacion",
                            "cod_dato": null,
                            "desc_dato": "180"
                        },
                        {
                            "cod_atrib": "PRIORIDAD",
                            "desc_atrib": "Prioridad de Pedido",
                            "cod_dato": null,
                            "desc_dato": "00"
                        }
                    ],
                    "Bonificaciones": [

                    ]
                },
                {
                    "niprod": 54850,
                    "cod_prod": "35457",
                    "desc_prod": "WELEDA DESODORANTES Rosa desodorant.x 118 ml",
                    "codbarra": "7798036820794",
                    "cod_unid": "UN",
                    "base_v": 1.0,
                    "ind_stock": 0,
                    "pcio_unit": 290.0,
                    "id_imagen": 0,
                    "presentaciones": [
                        {
                            "cod_pres": "UN",
                            "desc_pres": "Unidad",
                            "cant": 1,
                            "codbarra": "7798036820794"
                        }
                    ],
                    "atributos": [
                        {
                            "cod_atrib": "ACCIONES",
                            "desc_atrib": "Acción Comercial",
                            "cod_dato": "00",
                            "desc_dato": "Venta Normal"
                        },
                        {
                            "cod_atrib": "CARRITO",
                            "desc_atrib": "Comercializado por Carrito WEB",
                            "cod_dato": "1",
                            "desc_dato": "Comercializado"
                        },
                        {
                            "cod_atrib": "CLAVE",
                            "desc_atrib": "Productos Clave",
                            "cod_dato": "00",
                            "desc_dato": "No prioritario"
                        },
                        {
                            "cod_atrib": "COMERCIO",
                            "desc_atrib": "06  Comercializado",
                            "cod_dato": "3",
                            "desc_dato": "No comercializado"
                        },
                        {
                            "cod_atrib": "DROGACCT",
                            "desc_atrib": "02  Acción terapéutica",
                            "cod_dato": "00412",
                            "desc_dato": "Dermatocosméticos"
                        },
                        {
                            "cod_atrib": "DROGCF",
                            "desc_atrib": "10  Requiere Cadena de Frío",
                            "cod_dato": "2",
                            "desc_dato": "No"
                        },
                        {
                            "cod_atrib": "DROGDRO",
                            "desc_atrib": "01  Monodroga",
                            "cod_dato": "10630",
                            "desc_dato": "producto cosmético"
                        },
                        {
                            "cod_atrib": "DROGFAM",
                            "desc_atrib": "08  Familia",
                            "cod_dato": "PE",
                            "desc_dato": "PERFUMERIA"
                        },
                        {
                            "cod_atrib": "DROGLAB",
                            "desc_atrib": "13  Laboratorio fabricante",
                            "cod_dato": "530",
                            "desc_dato": "WELEDA"
                        },
                        {
                            "cod_atrib": "DROGPRANT",
                            "desc_atrib": "Precio anterior",
                            "cod_dato": null,
                            "desc_dato": "265,00"
                        },
                        {
                            "cod_atrib": "DROGROTA",
                            "desc_atrib": "12  Clas. Producto",
                            "cod_dato": "3",
                            "desc_dato": "C"
                        },
                        {
                            "cod_atrib": "DROGULTFE",
                            "desc_atrib": "Fecha última actualización",
                            "cod_dato": null,
                            "desc_dato": "20/03/2019 05:27:49 p.m."
                        },
                        {
                            "cod_atrib": "PLZCOMER",
                            "desc_atrib": "Plazo Comercializacion",
                            "cod_dato": null,
                            "desc_dato": "180"
                        },
                        {
                            "cod_atrib": "PRIORIDAD",
                            "desc_atrib": "Prioridad de Pedido",
                            "cod_dato": null,
                            "desc_dato": "00"
                        }
                    ],
                    "Bonificaciones": [

                    ]
                },
                {
                    "niprod": 54849,
                    "cod_prod": "35455",
                    "desc_prod": "WELEDA DESODORANTES Salvia desodorant.x118ml",
                    "codbarra": "7798036820787",
                    "cod_unid": "UN",
                    "base_v": 1.0,
                    "ind_stock": 0,
                    "pcio_unit": 260.0,
                    "id_imagen": 0,
                    "presentaciones": [
                        {
                            "cod_pres": "UN",
                            "desc_pres": "Unidad",
                            "cant": 1,
                            "codbarra": "7798036820787"
                        }
                    ],
                    "atributos": [
                        {
                            "cod_atrib": "ACCIONES",
                            "desc_atrib": "Acción Comercial",
                            "cod_dato": "00",
                            "desc_dato": "Venta Normal"
                        },
                        {
                            "cod_atrib": "CARRITO",
                            "desc_atrib": "Comercializado por Carrito WEB",
                            "cod_dato": "1",
                            "desc_dato": "Comercializado"
                        },
                        {
                            "cod_atrib": "CLAVE",
                            "desc_atrib": "Productos Clave",
                            "cod_dato": "00",
                            "desc_dato": "No prioritario"
                        },
                        {
                            "cod_atrib": "COMERCIO",
                            "desc_atrib": "06  Comercializado",
                            "cod_dato": "3",
                            "desc_dato": "No comercializado"
                        },
                        {
                            "cod_atrib": "DROGACCT",
                            "desc_atrib": "02  Acción terapéutica",
                            "cod_dato": "00412",
                            "desc_dato": "Dermatocosméticos"
                        },
                        {
                            "cod_atrib": "DROGCF",
                            "desc_atrib": "10  Requiere Cadena de Frío",
                            "cod_dato": "2",
                            "desc_dato": "No"
                        },
                        {
                            "cod_atrib": "DROGDRO",
                            "desc_atrib": "01  Monodroga",
                            "cod_dato": "10630",
                            "desc_dato": "producto cosmético"
                        },
                        {
                            "cod_atrib": "DROGFAM",
                            "desc_atrib": "08  Familia",
                            "cod_dato": "PE",
                            "desc_dato": "PERFUMERIA"
                        },
                        {
                            "cod_atrib": "DROGLAB",
                            "desc_atrib": "13  Laboratorio fabricante",
                            "cod_dato": "530",
                            "desc_dato": "WELEDA"
                        },
                        {
                            "cod_atrib": "DROGPRANT",
                            "desc_atrib": "Precio anterior",
                            "cod_dato": null,
                            "desc_dato": "225,00"
                        },
                        {
                            "cod_atrib": "DROGROTA",
                            "desc_atrib": "12  Clas. Producto",
                            "cod_dato": "3",
                            "desc_dato": "C"
                        },
                        {
                            "cod_atrib": "DROGULTFE",
                            "desc_atrib": "Fecha última actualización",
                            "cod_dato": null,
                            "desc_dato": "20/03/2019 05:27:49 p.m."
                        },
                        {
                            "cod_atrib": "PLZCOMER",
                            "desc_atrib": "Plazo Comercializacion",
                            "cod_dato": null,
                            "desc_dato": "180"
                        },
                        {
                            "cod_atrib": "PRIORIDAD",
                            "desc_atrib": "Prioridad de Pedido",
                            "cod_dato": null,
                            "desc_dato": "00"
                        }
                    ],
                    "Bonificaciones": [

                    ]
                }
            ]
        }
    );

    mockAdapter.onGet('/Productos/carro').reply(200, {
        "Resultado": {
            "Resultado": true,
            "Tipo_error": null,
            "Mens_error": null,
            "Errores": null
        },
        "page_size": 10,
        "page_number": 1,
        "total_count": 4,
        "total_importe": 38632.0,
        "total_item": 4.0,
        "total_cant": 286.0,
        "total_margen_bruto": 0.0,
        "productos": [
            {
                "niprod": 59961,
                "cod_prod": "34037",
                "desc_prod": "ACTRON 600 RAPIDA ACCION caps.gelat.blanda x 10",
                "codbarra": "7793640215523",
                "cod_unid": "UN",
                "base_v": 1.0,
                "ind_stock": 0,
                "cantidad": 100.0,
                "pcio_unit": 120.0,
                "id_imagen": 0,
                "neto": 12000.0,
                "Presentacion": [
                    {
                        "cod_pres": "UN",
                        "desc_pres": "Unidad",
                        "cant": 1,
                        "codbarra": ""
                    }
                ],
                "desc_bon": "Vol 3 - 5 - 10",
                "atributos": [
                    {
                        "cod_atrib": "2FACTEMPAQ",
                        "desc_atrib": "07  Factor de Empaque",
                        "cod_dato": null,
                        "desc_dato": "100"
                    },
                    {
                        "cod_atrib": "ACCIONES",
                        "desc_atrib": "Acción Comercial",
                        "cod_dato": "00",
                        "desc_dato": "Venta Normal"
                    },
                    {
                        "cod_atrib": "CARRITO",
                        "desc_atrib": "Comercializado por Carrito WEB",
                        "cod_dato": "1",
                        "desc_dato": "Comercializado"
                    },
                    {
                        "cod_atrib": "CATGENERO",
                        "desc_atrib": "15  Genero (Categoria)",
                        "cod_dato": "04",
                        "desc_dato": "Comprimidos"
                    },
                    {
                        "cod_atrib": "CLASPROD",
                        "desc_atrib": "Clasificación Productos",
                        "cod_dato": "02",
                        "desc_dato": "Medicamentos"
                    },
                    {
                        "cod_atrib": "CLAVE",
                        "desc_atrib": "Productos Clave",
                        "cod_dato": "00",
                        "desc_dato": "No prioritario"
                    },
                    {
                        "cod_atrib": "COMERCIO",
                        "desc_atrib": "06  Comercializado",
                        "cod_dato": "1",
                        "desc_dato": "Comercializado"
                    },
                    {
                        "cod_atrib": "DROGACCT",
                        "desc_atrib": "02  Acción terapéutica",
                        "cod_dato": "00433",
                        "desc_dato": "Analgésico Antiinflam."
                    },
                    {
                        "cod_atrib": "DROGCF",
                        "desc_atrib": "10  Requiere Cadena de Frío",
                        "cod_dato": "2",
                        "desc_dato": "No"
                    },
                    {
                        "cod_atrib": "DROGDRO",
                        "desc_atrib": "01  Monodroga",
                        "cod_dato": "05184",
                        "desc_dato": "ibuprofeno"
                    },
                    {
                        "cod_atrib": "DROGFAM",
                        "desc_atrib": "08  Familia",
                        "cod_dato": "ME",
                        "desc_dato": "MEDICAMENTO"
                    },
                    {
                        "cod_atrib": "DROGLAB",
                        "desc_atrib": "13  Laboratorio fabricante",
                        "cod_dato": "723",
                        "desc_dato": "BAYER CONSUMER"
                    },
                    {
                        "cod_atrib": "DROGLINEA",
                        "desc_atrib": "04  Línea de Producto",
                        "cod_dato": "0007",
                        "desc_dato": "Etico 1º Linea"
                    },
                    {
                        "cod_atrib": "DROGPRANT",
                        "desc_atrib": "Precio anterior",
                        "cod_dato": null,
                        "desc_dato": "128,94"
                    },
                    {
                        "cod_atrib": "drogproexp",
                        "desc_atrib": "Indica si se exporta producto",
                        "cod_dato": "SI",
                        "desc_dato": "se exportan datos del prod."
                    },
                    {
                        "cod_atrib": "DROGROTA",
                        "desc_atrib": "12  Clas. Producto",
                        "cod_dato": "1",
                        "desc_dato": "A"
                    },
                    {
                        "cod_atrib": "DROGTRAZ",
                        "desc_atrib": "05  Tipo Trazabilidad",
                        "cod_dato": "0",
                        "desc_dato": "Ninguna"
                    },
                    {
                        "cod_atrib": "DROGULTFE",
                        "desc_atrib": "Fecha última actualización",
                        "cod_dato": null,
                        "desc_dato": "08/03/2019 04:50:59 p.m."
                    },
                    {
                        "cod_atrib": "ENCOMP",
                        "desc_atrib": "14  Encargado de Compra",
                        "cod_dato": "03",
                        "desc_dato": "Alberto Baez"
                    },
                    {
                        "cod_atrib": "MARCA",
                        "desc_atrib": "03  Marca",
                        "cod_dato": "0305",
                        "desc_dato": "Bayer"
                    },
                    {
                        "cod_atrib": "PLZCOMER",
                        "desc_atrib": "Plazo Comercializacion",
                        "cod_dato": null,
                        "desc_dato": "180"
                    },
                    {
                        "cod_atrib": "PRIORIDAD",
                        "desc_atrib": "Prioridad de Pedido",
                        "cod_dato": null,
                        "desc_dato": "00"
                    },
                    {
                        "cod_atrib": "PROD_COMER",
                        "desc_atrib": "Producto Comercializable",
                        "cod_dato": "SI",
                        "desc_dato": "SI"
                    }
                ]
            },
            {
                "niprod": 59961,
                "cod_prod": "34037",
                "desc_prod": "ACTRON 600 RAPIDA ACCION caps.gelat.blanda x 10",
                "codbarra": "7793640215523",
                "cod_unid": "CJ",
                "base_v": 1.0,
                "ind_stock": 0,
                "cantidad": 10.0,
                "pcio_unit": 120.0,
                "id_imagen": 0,
                "neto": 1200.0,
                "Presentacion": [
                    {
                        "cod_pres": "CJ",
                        "desc_pres": "Caja",
                        "cant": 12,
                        "codbarra": ""
                    }
                ],
                "desc_bon": "Vol 3 - 5 - 10",
                "atributos": [
                    {
                        "cod_atrib": "2FACTEMPAQ",
                        "desc_atrib": "07  Factor de Empaque",
                        "cod_dato": null,
                        "desc_dato": "100"
                    },
                    {
                        "cod_atrib": "ACCIONES",
                        "desc_atrib": "Acción Comercial",
                        "cod_dato": "00",
                        "desc_dato": "Venta Normal"
                    },
                    {
                        "cod_atrib": "CARRITO",
                        "desc_atrib": "Comercializado por Carrito WEB",
                        "cod_dato": "1",
                        "desc_dato": "Comercializado"
                    },
                    {
                        "cod_atrib": "CATGENERO",
                        "desc_atrib": "15  Genero (Categoria)",
                        "cod_dato": "04",
                        "desc_dato": "Comprimidos"
                    },
                    {
                        "cod_atrib": "CLASPROD",
                        "desc_atrib": "Clasificación Productos",
                        "cod_dato": "02",
                        "desc_dato": "Medicamentos"
                    },
                    {
                        "cod_atrib": "CLAVE",
                        "desc_atrib": "Productos Clave",
                        "cod_dato": "00",
                        "desc_dato": "No prioritario"
                    },
                    {
                        "cod_atrib": "COMERCIO",
                        "desc_atrib": "06  Comercializado",
                        "cod_dato": "1",
                        "desc_dato": "Comercializado"
                    },
                    {
                        "cod_atrib": "DROGACCT",
                        "desc_atrib": "02  Acción terapéutica",
                        "cod_dato": "00433",
                        "desc_dato": "Analgésico Antiinflam."
                    },
                    {
                        "cod_atrib": "DROGCF",
                        "desc_atrib": "10  Requiere Cadena de Frío",
                        "cod_dato": "2",
                        "desc_dato": "No"
                    },
                    {
                        "cod_atrib": "DROGDRO",
                        "desc_atrib": "01  Monodroga",
                        "cod_dato": "05184",
                        "desc_dato": "ibuprofeno"
                    },
                    {
                        "cod_atrib": "DROGFAM",
                        "desc_atrib": "08  Familia",
                        "cod_dato": "ME",
                        "desc_dato": "MEDICAMENTO"
                    },
                    {
                        "cod_atrib": "DROGLAB",
                        "desc_atrib": "13  Laboratorio fabricante",
                        "cod_dato": "723",
                        "desc_dato": "BAYER CONSUMER"
                    },
                    {
                        "cod_atrib": "DROGLINEA",
                        "desc_atrib": "04  Línea de Producto",
                        "cod_dato": "0007",
                        "desc_dato": "Etico 1º Linea"
                    },
                    {
                        "cod_atrib": "DROGPRANT",
                        "desc_atrib": "Precio anterior",
                        "cod_dato": null,
                        "desc_dato": "128,94"
                    },
                    {
                        "cod_atrib": "drogproexp",
                        "desc_atrib": "Indica si se exporta producto",
                        "cod_dato": "SI",
                        "desc_dato": "se exportan datos del prod."
                    },
                    {
                        "cod_atrib": "DROGROTA",
                        "desc_atrib": "12  Clas. Producto",
                        "cod_dato": "1",
                        "desc_dato": "A"
                    },
                    {
                        "cod_atrib": "DROGTRAZ",
                        "desc_atrib": "05  Tipo Trazabilidad",
                        "cod_dato": "0",
                        "desc_dato": "Ninguna"
                    },
                    {
                        "cod_atrib": "DROGULTFE",
                        "desc_atrib": "Fecha última actualización",
                        "cod_dato": null,
                        "desc_dato": "08/03/2019 04:50:59 p.m."
                    },
                    {
                        "cod_atrib": "ENCOMP",
                        "desc_atrib": "14  Encargado de Compra",
                        "cod_dato": "03",
                        "desc_dato": "Alberto Baez"
                    },
                    {
                        "cod_atrib": "MARCA",
                        "desc_atrib": "03  Marca",
                        "cod_dato": "0305",
                        "desc_dato": "Bayer"
                    },
                    {
                        "cod_atrib": "PLZCOMER",
                        "desc_atrib": "Plazo Comercializacion",
                        "cod_dato": null,
                        "desc_dato": "180"
                    },
                    {
                        "cod_atrib": "PRIORIDAD",
                        "desc_atrib": "Prioridad de Pedido",
                        "cod_dato": null,
                        "desc_dato": "00"
                    },
                    {
                        "cod_atrib": "PROD_COMER",
                        "desc_atrib": "Producto Comercializable",
                        "cod_dato": "SI",
                        "desc_dato": "SI"
                    }
                ]
            },
            {
                "niprod": 59961,
                "cod_prod": "34037",
                "desc_prod": "ACTRON 600 RAPIDA ACCION caps.gelat.blanda x 10",
                "codbarra": "7793640215523",
                "cod_unid": "UN",
                "base_v": 1.0,
                "ind_stock": 0,
                "cantidad": 145.0,
                "pcio_unit": 144.5,
                "id_imagen": 0,
                "neto": 20952.5,
                "Presentacion": [
                    {
                        "cod_pres": "UN",
                        "desc_pres": "Unidad",
                        "cant": 1,
                        "codbarra": ""
                    }
                ],
                "desc_bon": "Vol 3 - 5 - 10",
                "atributos": [
                    {
                        "cod_atrib": "2FACTEMPAQ",
                        "desc_atrib": "07  Factor de Empaque",
                        "cod_dato": null,
                        "desc_dato": "100"
                    },
                    {
                        "cod_atrib": "ACCIONES",
                        "desc_atrib": "Acción Comercial",
                        "cod_dato": "00",
                        "desc_dato": "Venta Normal"
                    },
                    {
                        "cod_atrib": "CARRITO",
                        "desc_atrib": "Comercializado por Carrito WEB",
                        "cod_dato": "1",
                        "desc_dato": "Comercializado"
                    },
                    {
                        "cod_atrib": "CATGENERO",
                        "desc_atrib": "15  Genero (Categoria)",
                        "cod_dato": "04",
                        "desc_dato": "Comprimidos"
                    },
                    {
                        "cod_atrib": "CLASPROD",
                        "desc_atrib": "Clasificación Productos",
                        "cod_dato": "02",
                        "desc_dato": "Medicamentos"
                    },
                    {
                        "cod_atrib": "CLAVE",
                        "desc_atrib": "Productos Clave",
                        "cod_dato": "00",
                        "desc_dato": "No prioritario"
                    },
                    {
                        "cod_atrib": "COMERCIO",
                        "desc_atrib": "06  Comercializado",
                        "cod_dato": "1",
                        "desc_dato": "Comercializado"
                    },
                    {
                        "cod_atrib": "DROGACCT",
                        "desc_atrib": "02  Acción terapéutica",
                        "cod_dato": "00433",
                        "desc_dato": "Analgésico Antiinflam."
                    },
                    {
                        "cod_atrib": "DROGCF",
                        "desc_atrib": "10  Requiere Cadena de Frío",
                        "cod_dato": "2",
                        "desc_dato": "No"
                    },
                    {
                        "cod_atrib": "DROGDRO",
                        "desc_atrib": "01  Monodroga",
                        "cod_dato": "05184",
                        "desc_dato": "ibuprofeno"
                    },
                    {
                        "cod_atrib": "DROGFAM",
                        "desc_atrib": "08  Familia",
                        "cod_dato": "ME",
                        "desc_dato": "MEDICAMENTO"
                    },
                    {
                        "cod_atrib": "DROGLAB",
                        "desc_atrib": "13  Laboratorio fabricante",
                        "cod_dato": "723",
                        "desc_dato": "BAYER CONSUMER"
                    },
                    {
                        "cod_atrib": "DROGLINEA",
                        "desc_atrib": "04  Línea de Producto",
                        "cod_dato": "0007",
                        "desc_dato": "Etico 1º Linea"
                    },
                    {
                        "cod_atrib": "DROGPRANT",
                        "desc_atrib": "Precio anterior",
                        "cod_dato": null,
                        "desc_dato": "128,94"
                    },
                    {
                        "cod_atrib": "drogproexp",
                        "desc_atrib": "Indica si se exporta producto",
                        "cod_dato": "SI",
                        "desc_dato": "se exportan datos del prod."
                    },
                    {
                        "cod_atrib": "DROGROTA",
                        "desc_atrib": "12  Clas. Producto",
                        "cod_dato": "1",
                        "desc_dato": "A"
                    },
                    {
                        "cod_atrib": "DROGTRAZ",
                        "desc_atrib": "05  Tipo Trazabilidad",
                        "cod_dato": "0",
                        "desc_dato": "Ninguna"
                    },
                    {
                        "cod_atrib": "DROGULTFE",
                        "desc_atrib": "Fecha última actualización",
                        "cod_dato": null,
                        "desc_dato": "08/03/2019 04:50:59 p.m."
                    },
                    {
                        "cod_atrib": "ENCOMP",
                        "desc_atrib": "14  Encargado de Compra",
                        "cod_dato": "03",
                        "desc_dato": "Alberto Baez"
                    },
                    {
                        "cod_atrib": "MARCA",
                        "desc_atrib": "03  Marca",
                        "cod_dato": "0305",
                        "desc_dato": "Bayer"
                    },
                    {
                        "cod_atrib": "PLZCOMER",
                        "desc_atrib": "Plazo Comercializacion",
                        "cod_dato": null,
                        "desc_dato": "180"
                    },
                    {
                        "cod_atrib": "PRIORIDAD",
                        "desc_atrib": "Prioridad de Pedido",
                        "cod_dato": null,
                        "desc_dato": "00"
                    },
                    {
                        "cod_atrib": "PROD_COMER",
                        "desc_atrib": "Producto Comercializable",
                        "cod_dato": "SI",
                        "desc_dato": "SI"
                    }
                ]
            },
            {
                "niprod": 59961,
                "cod_prod": "34037",
                "desc_prod": "ACTRON 600 RAPIDA ACCION caps.gelat.blanda x 10",
                "codbarra": "7793640215523",
                "cod_unid": "UN",
                "base_v": 1.0,
                "ind_stock": 0,
                "cantidad": 31.0,
                "pcio_unit": 144.5,
                "id_imagen": 0,
                "neto": 4479.5,
                "Presentacion": [
                    {
                        "cod_pres": "UN",
                        "desc_pres": "Unidad",
                        "cant": 1,
                        "codbarra": ""
                    }
                ],
                "desc_bon": "Vol 3 - 5 - 10",
                "atributos": [
                    {
                        "cod_atrib": "2FACTEMPAQ",
                        "desc_atrib": "07  Factor de Empaque",
                        "cod_dato": null,
                        "desc_dato": "100"
                    },
                    {
                        "cod_atrib": "ACCIONES",
                        "desc_atrib": "Acción Comercial",
                        "cod_dato": "00",
                        "desc_dato": "Venta Normal"
                    },
                    {
                        "cod_atrib": "CARRITO",
                        "desc_atrib": "Comercializado por Carrito WEB",
                        "cod_dato": "1",
                        "desc_dato": "Comercializado"
                    },
                    {
                        "cod_atrib": "CATGENERO",
                        "desc_atrib": "15  Genero (Categoria)",
                        "cod_dato": "04",
                        "desc_dato": "Comprimidos"
                    },
                    {
                        "cod_atrib": "CLASPROD",
                        "desc_atrib": "Clasificación Productos",
                        "cod_dato": "02",
                        "desc_dato": "Medicamentos"
                    },
                    {
                        "cod_atrib": "CLAVE",
                        "desc_atrib": "Productos Clave",
                        "cod_dato": "00",
                        "desc_dato": "No prioritario"
                    },
                    {
                        "cod_atrib": "COMERCIO",
                        "desc_atrib": "06  Comercializado",
                        "cod_dato": "1",
                        "desc_dato": "Comercializado"
                    },
                    {
                        "cod_atrib": "DROGACCT",
                        "desc_atrib": "02  Acción terapéutica",
                        "cod_dato": "00433",
                        "desc_dato": "Analgésico Antiinflam."
                    },
                    {
                        "cod_atrib": "DROGCF",
                        "desc_atrib": "10  Requiere Cadena de Frío",
                        "cod_dato": "2",
                        "desc_dato": "No"
                    },
                    {
                        "cod_atrib": "DROGDRO",
                        "desc_atrib": "01  Monodroga",
                        "cod_dato": "05184",
                        "desc_dato": "ibuprofeno"
                    },
                    {
                        "cod_atrib": "DROGFAM",
                        "desc_atrib": "08  Familia",
                        "cod_dato": "ME",
                        "desc_dato": "MEDICAMENTO"
                    },
                    {
                        "cod_atrib": "DROGLAB",
                        "desc_atrib": "13  Laboratorio fabricante",
                        "cod_dato": "723",
                        "desc_dato": "BAYER CONSUMER"
                    },
                    {
                        "cod_atrib": "DROGLINEA",
                        "desc_atrib": "04  Línea de Producto",
                        "cod_dato": "0007",
                        "desc_dato": "Etico 1º Linea"
                    },
                    {
                        "cod_atrib": "DROGPRANT",
                        "desc_atrib": "Precio anterior",
                        "cod_dato": null,
                        "desc_dato": "128,94"
                    },
                    {
                        "cod_atrib": "drogproexp",
                        "desc_atrib": "Indica si se exporta producto",
                        "cod_dato": "SI",
                        "desc_dato": "se exportan datos del prod."
                    },
                    {
                        "cod_atrib": "DROGROTA",
                        "desc_atrib": "12  Clas. Producto",
                        "cod_dato": "1",
                        "desc_dato": "A"
                    },
                    {
                        "cod_atrib": "DROGTRAZ",
                        "desc_atrib": "05  Tipo Trazabilidad",
                        "cod_dato": "0",
                        "desc_dato": "Ninguna"
                    },
                    {
                        "cod_atrib": "DROGULTFE",
                        "desc_atrib": "Fecha última actualización",
                        "cod_dato": null,
                        "desc_dato": "08/03/2019 04:50:59 p.m."
                    },
                    {
                        "cod_atrib": "ENCOMP",
                        "desc_atrib": "14  Encargado de Compra",
                        "cod_dato": "03",
                        "desc_dato": "Alberto Baez"
                    },
                    {
                        "cod_atrib": "MARCA",
                        "desc_atrib": "03  Marca",
                        "cod_dato": "0305",
                        "desc_dato": "Bayer"
                    },
                    {
                        "cod_atrib": "PLZCOMER",
                        "desc_atrib": "Plazo Comercializacion",
                        "cod_dato": null,
                        "desc_dato": "180"
                    },
                    {
                        "cod_atrib": "PRIORIDAD",
                        "desc_atrib": "Prioridad de Pedido",
                        "cod_dato": null,
                        "desc_dato": "00"
                    },
                    {
                        "cod_atrib": "PROD_COMER",
                        "desc_atrib": "Producto Comercializable",
                        "cod_dato": "SI",
                        "desc_dato": "SI"
                    }
                ]
            }
        ]
    });
}