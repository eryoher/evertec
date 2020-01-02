export default (mockAdapter) => {

    mockAdapter.onGet('/vta_generar_compr/cliente_cabecera').reply(200, {
        data: {
            "Titulo_comp_vta": 'Cliente Cabecera',
            Cliente: {
                "Idcliente": 309,
                "cliente_codigo": "PSLWES",
                "cod_categ": "GESTION",
                "nom_categ": "Gestion",
                "cod_sin_formato": "FAR0399 ",
                "cod_con_formato": "FAR-0399 ",
                "cliente_razon_social": "FARMACIA CENTRAL Y PERFUMERIA PM S.R.L. ",
                "abrev": "FARMACIA CENTRAL",
                "cliente_Tipo_resp": "I",
                "cliente_Tipo_resp_desc": "Inscripto",
                "cliente_identificador": "30572374196",
                "cliente_domicilio": "25 DE MAYO ",
                "dom_nro": "272",
                "dom_piso": "PB",
                "dom_dpto": "",
                "dom_observ": "Puerta azul",
                "cliente_Cpos": "9120",
                "cliente_Localidad": "PUERTO MADRYN",
                "dom_cod_prov": "U",
                "cliente_Provincia": "Chubut",
                "pais": "Argentina",
                "cliente_Telefono": "(0280) 4454804 ",
                "fax": "",
                "cliente_email": "info@farmaciacentral.com.ar ",
                "pagweb": "www.farmaciacentral.com.ar",
                "cliente_Contacto": "ANABELA ",
                "cod_monex": "U$S",
                "vend_id": 2,
                "vend_nom": "Juan Fernandez",
                "cvta_cod": "60",
                "cvta_desc": "60 días FF",
                "trans_cod": "FL01",
                "trans_desc": "Transporte Sur",
                "dir_loc_ega": "Rivadavia 627, Puerto Madryn",
                "cliente_Pendcred": 257345.23,
                "cliente_Limcred": 200000.00,
                "cliente_Saldo": -57345.23,
                "doc_tipo": "",
                "doc_nro": "",
                "cod_preclis": "L1",
                "nom_preclis": "Lista precios Mayorista",
                "cod_preclis2": "Of1",
                "nom_preclis2": "Lista Ofertas",
                "cliente_Obs_vta": "Aplicar lista mayorista -5%",
                "cliente_Obs_cc": "",
                "obs_desp": "Entregas antes de las 15 hs",
                "cto_fondos": "IIVT",
                "cto_fondos_desc": "Ingreso por ventas",
                "habilitado": 1,
                "fecha_inicio": "2017-05-23",
                "fecha_comp_vta": "2019-04-08",
                "fecha_modif": "2018-12-23",
                cliente_Sucursales: [],
                "Sucursal": {
                    "suc_nombre": "Esquel",
                    "suc_calle": "Belgrano",
                    "suc_nro": "3552",
                    "suc_piso": "PB",
                    "suc_dpto": "2",
                    "suc_cpos": "9240",
                    "suc_local": "ESQUEL",
                    "suc_cod_prov": "U",
                    "suc_nom_prov": "Chubut",
                    "suc_pais": "Argentina",
                    "suc_email": "esquel@farmaciacentral.com.ar ",
                    "suc_tel": "(0284) 442-5522 ",
                    "suc_fax": "",
                    "suc_observ": "",
                    "suc_obs_dom": "",
                    "suc_vend_id": 4,
                    "suc_vend_nom": "Carlos Sanchez",
                    "suc_cvta_cod": "60",
                    "suc_cvta_desc": "60 días FF",
                    "suc_trans_cod": "FL32",
                    "suc_trans_desc": "Transporte Esquel",
                    "suc_credito": 50000.00
                }
            },
            Cabecera: {
                "cliente_Sucursales": [],
                "mon_comp_vta":
                    [{
                        "cod_moneda": "$",
                        "desc_moneda": "Pesos Arg.",
                        "cotiz": 1,
                    }],
                "vend_comp_vta":
                    [{
                        "cod_vendedor": 45,
                        "nom_vendedor": "Pedro Martinez",
                    }],
                "cotiz_comp_vta":
                    [{
                        "cod_cond_vta": "CO",
                        "desc_cond_vta": "Contado",
                    }],
                "transporte":
                    [{
                        "cod_transp": "TR56",
                        "nom_transp": "Trasporte Gutierrez",
                    }],

                "Suc_empresa_vta": [
                    {
                        "cod_suc": "03",
                        "nom_suc": "Suc. San Isidro",
                    }],
                "atrib_comp_vta":
                    [{
                        "cod_atrib": "TIPOENV",
                        "descripcion": "Tipo de Envio",
                        "tipo": "char",
                        "largo": 30,
                        "formato": "",
                        "orden": 1,
                        "valores": [{
                            "cod_valor": "01",
                            "desc_valor": "Normal",
                        }]
                    }]

            }
        }
    });

    mockAdapter.onGet('/vta_generar_compr/ítems_agregados').reply(200, {
        data: {
            "page_number": 1,
            "page_size": 5,
            "total_count": 5,
            "Resultado": [
                {
                    "resultado": '.T.'
                }],
            "Productos": [
                {
                    "id": 36574,
                    "niprod": 36574,
                    "cod_prod": "PERSEL00454",
                    "desc_prod": "Desodorante Axe musk",
                    "codbarra": "07795555225225",
                    "unid_v": "UN",
                    "cantidad": "100",
                    "base_v": 1,
                    "ind_stock": 2,
                    "precio_unit": 32.56,
                    "neto": 32560,
                    "fec_entrega": "19/10/2019",
                    "id_imagen": 77656,
                    "presentacion": [
                        {
                            "cod_pres": "CJ",
                            "desc_pres": "Cajax10UN",
                            "cant": 10,
                            "codbarra": "07977688566503",
                        }],
                    "Bonificaciones": [
                        {
                            "tipo_bonif": "P",
                            "cod_bonif": "PL02",
                            "desc_bonif": "Lapices Faber",
                        }],
                    "Atributos": [
                        {
                            "catributo": "Marca",
                            "desc_atributo": "Marca",
                            "cod_dato": "34",
                            "desc_dato": "Faber"
                        }]

                }

            ]
        }
    });

    mockAdapter.onGet('/vta_generar_compr/comprob_afectados').reply(200, {
        data: {
            "page_number": 1,
            "page_size": 50,
            "total_count": 126,
            "Resultado": [
                {
                    "resultado": '.T.'
                }],
            "Items": [
                {
                    "nimovcli": 45334,
                    "nitem": 1,
                    "fec_emis": "20190123",
                    "fec_vto": "20190223",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033424",
                    "niprod": 36574,
                    "cod_prod": "PERSEL00454",
                    "desc_prod": "Desodorante Axe musk",
                    "codbarra": "07795555225225",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '32.56',
                    "cant_pend": 100,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '3256,00',
                },
                {
                    "nimovcli": 45335,
                    "nitem": 4,
                    "fec_emis": "20190123",
                    "fec_vto": "20190115",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033424",
                    "niprod": 36576,
                    "cod_prod": "PERSEL00456",
                    "desc_prod": "Desodorante Axe Marine",
                    "codbarra": "07795555225226",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '254.56',
                    "cant_pend": 500,
                    "cant_afec": 325,
                    "cant_saldo": 0,
                    "neto": '1628, 00'
                },
                {
                    "nimovcli": 45336,
                    "nitem": 5,
                    "fec_emis": "20190123",
                    "fec_vto": "20190115",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033425",
                    "niprod": 36577,
                    "cod_prod": "PERSEL00457",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225227",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '35.05',
                    "cant_pend": 500,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '1628, 00'
                },
                {
                    "nimovcli": 45337,
                    "nitem": 6,
                    "fec_emis": "20190123",
                    "fec_vto": "20190115",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033426",
                    "niprod": 36578,
                    "cod_prod": "PERSEL00458",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225228",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '235.03',
                    "cant_pend": 378,
                    "cant_afec": 250,
                    "cant_saldo": 0,
                    "neto": '1668, 00'
                },
                {
                    "nimovcli": 45338,
                    "nitem": 7,
                    "fec_emis": "20190124",
                    "fec_vto": "20190116",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033427",
                    "niprod": 36579,
                    "cod_prod": "PERSEL00459",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225229",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '755.03',
                    "cant_pend": 350,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '1668,00'
                },
                {
                    "nimovcli": 45339,
                    "nitem": 8,
                    "fec_emis": "20190125",
                    "fec_vto": "20190117",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033428",
                    "niprod": 36581,
                    "cod_prod": "PERSEL00458",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225228",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '285.03',
                    "cant_pend": 225,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '1668, 00'
                },
                {
                    "nimovcli": 45340,
                    "nitem": 9,
                    "fec_emis": "20190126",
                    "fec_vto": "20190118",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033429",
                    "niprod": 36582,
                    "cod_prod": "PERSEL00459",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225229",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '5280.03',
                    "cant_pend": 625,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '1368, 00'
                },
                {
                    "nimovcli": 45341,
                    "nitem": 10,
                    "fec_emis": "20190127",
                    "fec_vto": "20190119",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033430",
                    "niprod": 36583,
                    "cod_prod": "PERSEL00460",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225230",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '7250.53',
                    "cant_pend": 925,
                    "cant_afec": 525,
                    "cant_saldo": 0,
                    "neto": '1368, 00'
                },
                {
                    "nimovcli": 45342,
                    "nitem": 11,
                    "fec_emis": "20190128",
                    "fec_vto": "20190120",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033431",
                    "niprod": 36584,
                    "cod_prod": "PERSEL00461",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225231",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '798.53',
                    "cant_pend": 200,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '1668, 00'
                },
                {
                    "nimovcli": 45343,
                    "nitem": 12,
                    "fec_emis": "20190129",
                    "fec_vto": "20190121",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033432",
                    "niprod": 36585,
                    "cod_prod": "PERSEL00462",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225232",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '785.53',
                    "cant_pend": 150,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '6985, 00'
                },
                {
                    "nimovcli": 45344,
                    "nitem": 13,
                    "fec_emis": "20190130",
                    "fec_vto": "20190122",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033433",
                    "niprod": 36586,
                    "cod_prod": "PERSEL00463",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225233",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '654.03',
                    "cant_pend": 680,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '9875,00'
                },
                {
                    "nimovcli": 45345,
                    "nitem": 14,
                    "fec_emis": "20190101",
                    "fec_vto": "20190123",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033434",
                    "niprod": 36587,
                    "cod_prod": "PERSEL00464",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225234",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '864.03',
                    "cant_pend": 125,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '8775,00'
                },
                {
                    "nimovcli": 45346,
                    "nitem": 15,
                    "fec_emis": "20190102",
                    "fec_vto": "20190124",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033435",
                    "niprod": 36588,
                    "cod_prod": "PERSEL00465",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225235",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '986.00',
                    "cant_pend": 825,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '8965,00'
                },
                {
                    "nimovcli": 45347,
                    "nitem": 16,
                    "fec_emis": "20190103",
                    "fec_vto": "20190125",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033436",
                    "niprod": 36589,
                    "cod_prod": "PERSEL00466",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225236",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '698.00',
                    "cant_pend": 625,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '8635,00'
                },
                {
                    "nimovcli": 45348,
                    "nitem": 17,
                    "fec_emis": "20190104",
                    "fec_vto": "20190126",
                    "comprob_desc": "Nota Vta res.Autom.",
                    "comprob_nro": "0001-0033437",
                    "niprod": 36590,
                    "cod_prod": "PERSEL00467",
                    "desc_prod": "Desodorante Axe Otro",
                    "codbarra": "07795555225237",
                    "cod_unid": "UN",
                    "desc_unid": "unid",
                    "base_v": 1,
                    "precio_unit": '584.00',
                    "cant_pend": 125,
                    "cant_afec": 0,
                    "cant_saldo": 0,
                    "neto": '6355,00'
                }

            ]
        }
    });

    mockAdapter.onPost('/vta_generar_compr/generar').reply(200, {
        data: {
            "Resultado": [
                {
                    "resultado": '.T.'
                }],
            "Comprobante_nro": "123987654"
        }
    });

    mockAdapter.onPost('/vta_generar_compr/imprimir').reply(200, {
        data: {
            "Resultado": [
                {
                    "resultado": '.T.'
                }],
            "comprobante_pdf": "aqui pdf"
        }
    });

}