export default (mockAdapter) => {

    mockAdapter.onGet('/vta_cab_compr/atrib_autocompl').reply(200,
        [
            {
                "cod_dato": "01.01",
                "desc_dato": "Administración central"
            },
            {
                "cod_dato": "02.01",
                "desc_dato": "Administración San Luis"
            }
        ]
    );

    mockAdapter.onGet('/vta_cab_compr/fecha_valid', { params: { idproceso: '123456', fecha: '08/01/2019' } }).reply(200, {
        codigo: 200,
        descripcion: 'OK',
        mensaje: ''
    });

    mockAdapter.onGet('/vta_cab_compr/fecha_valid', { params: { idproceso: '123456', fecha: '07/31/2019' } }).reply(200, {
        codigo: 409,
        descripcion: 'Error: Fecha menor a cierre contable',
        mensaje: 'La fecha debe ser mayor al último cierre contable: 07/31/2019'
    });

    mockAdapter.onGet('/vta_cab_compr/clave_valid', { params: { idproceso: '123456', clave: 'password' } }).reply(200, {
        codigo: 200,
        descripcion: 'OK',
        mensaje: 'Clave correcta!'
    })

    mockAdapter.onGet('/vta_cab_compr/clave_valid', { params: { idproceso: '123456', clave: '123456' } }).reply(200, {
        codigo: 409,
        descripcion: 'Clave erronea',
        mensaje: 'La clave no coincide con la registrada, pruebe nuevamente'
    })


    mockAdapter.onGet('/vta_cab_compr', { params: { idOperacion: "21" } }).reply(200,
        {
            "titulo_comp_vta": "Pedido reserva autom.",
            "moneda": [
                {
                    "cod_moneda": "$",
                    "desc_moneda": "Pesos",
                    "cotiz": 1.0
                },
                {
                    "cod_moneda": "U$S",
                    "desc_moneda": "Dolares",
                    "cotiz": 36.29
                }
            ],
            "vendedor": [
                {
                    "cod_vend": 24,
                    "nom_vend": "Clientes CERRADOS"
                },
                {
                    "cod_vend": 1,
                    "nom_vend": "Casa Central"
                },
                {
                    "cod_vend": 2,
                    "nom_vend": "Gerencia Posadas"
                },
                {
                    "cod_vend": 3,
                    "nom_vend": "Creditos y Cobranzas"
                },
                {
                    "cod_vend": 4,
                    "nom_vend": "Gestion Judicial"
                },
                {
                    "cod_vend": 5,
                    "nom_vend": "Lisandro Alcides Acosta"
                },
                {
                    "cod_vend": 6,
                    "nom_vend": "Arruti Alejandro"
                },
                {
                    "cod_vend": 7,
                    "nom_vend": "Bandeo Ernesto Jose"
                },
                {
                    "cod_vend": 8,
                    "nom_vend": "Mauricio Gonzalez"
                },
                {
                    "cod_vend": 9,
                    "nom_vend": "Luis Lara Alcantara"
                },
                {
                    "cod_vend": 10,
                    "nom_vend": "Legal Matias"
                },
                {
                    "cod_vend": 11,
                    "nom_vend": "Boris Nicolas Lucazevich"
                },
                {
                    "cod_vend": 12,
                    "nom_vend": "Mendez Sergio"
                },
                {
                    "cod_vend": 13,
                    "nom_vend": "Maidana Luis Marcelo"
                },
                {
                    "cod_vend": 14,
                    "nom_vend": "Monteavaro Richard"
                },
                {
                    "cod_vend": 15,
                    "nom_vend": "Ortellado Osvaldo"
                },
                {
                    "cod_vend": 16,
                    "nom_vend": "Romero Carlos"
                },
                {
                    "cod_vend": 17,
                    "nom_vend": "Carlos Magran"
                },
                {
                    "cod_vend": 18,
                    "nom_vend": "Juan Cerdan"
                },
                {
                    "cod_vend": 19,
                    "nom_vend": "Bianchi Andrés"
                },
                {
                    "cod_vend": 20,
                    "nom_vend": "Reartes Fernando"
                },
                {
                    "cod_vend": 21,
                    "nom_vend": "Veloso Mario"
                },
                {
                    "cod_vend": 22,
                    "nom_vend": "Viesca Walter"
                },
                {
                    "cod_vend": 23,
                    "nom_vend": "Carlos Toledo"
                },
                {
                    "cod_vend": 25,
                    "nom_vend": "Clientes OBSERVADOS"
                },
                {
                    "cod_vend": 26,
                    "nom_vend": "Franco Juan Domingo"
                },
                {
                    "cod_vend": 27,
                    "nom_vend": "Espinoza Natalia Analia"
                },
                {
                    "cod_vend": 28,
                    "nom_vend": "Alejandro Javier Gomez"
                },
                {
                    "cod_vend": 29,
                    "nom_vend": "Feldman Marcelo"
                },
                {
                    "cod_vend": 30,
                    "nom_vend": "Monica Alejandra Nuñez"
                },
                {
                    "cod_vend": 31,
                    "nom_vend": "Jose Paredes"
                },
                {
                    "cod_vend": 32,
                    "nom_vend": "Fabian Martinez"
                },
                {
                    "cod_vend": 33,
                    "nom_vend": "Delgado Julio"
                },
                {
                    "cod_vend": 34,
                    "nom_vend": "Mordacini Juan Pablo"
                },
                {
                    "cod_vend": 35,
                    "nom_vend": "Romero Erick Fernando"
                },
                {
                    "cod_vend": 36,
                    "nom_vend": "Pedidos WEB"
                },
                {
                    "cod_vend": 37,
                    "nom_vend": "Hector Pereyra"
                },
                {
                    "cod_vend": 38,
                    "nom_vend": "Andrea Rojas"
                },
                {
                    "cod_vend": 39,
                    "nom_vend": "Carlos Chavez"
                },
                {
                    "cod_vend": 40,
                    "nom_vend": "Erika Monzon"
                },
                {
                    "cod_vend": 41,
                    "nom_vend": "Leonardo Benitez"
                },
                {
                    "cod_vend": 42,
                    "nom_vend": "Mauro Monzon"
                },
                {
                    "cod_vend": 43,
                    "nom_vend": "Pablo Gayoso"
                },
                {
                    "cod_vend": 44,
                    "nom_vend": "Romina Colunga"
                },
                {
                    "cod_vend": 45,
                    "nom_vend": "Gladys Romero"
                },
                {
                    "cod_vend": 46,
                    "nom_vend": "Lisandro Malvarez"
                },
                {
                    "cod_vend": 47,
                    "nom_vend": "Andrea Kosinski"
                },
                {
                    "cod_vend": 48,
                    "nom_vend": "Karina Portillo"
                },
                {
                    "cod_vend": 49,
                    "nom_vend": "Lorena Jofre"
                },
                {
                    "cod_vend": 50,
                    "nom_vend": "Ursula Cantero"
                },
                {
                    "cod_vend": 51,
                    "nom_vend": "Vanesa Lopez"
                },
                {
                    "cod_vend": 52,
                    "nom_vend": "Veronica Lugo"
                },
                {
                    "cod_vend": 53,
                    "nom_vend": "Maria Jose Encina Ramirez"
                },
                {
                    "cod_vend": 54,
                    "nom_vend": "Alejandra Vandecabeye"
                },
                {
                    "cod_vend": 55,
                    "nom_vend": "Licitaciones CC"
                },
                {
                    "cod_vend": 56,
                    "nom_vend": "Carmen Reichert"
                },
                {
                    "cod_vend": 57,
                    "nom_vend": "Victor Vallejos"
                },
                {
                    "cod_vend": 58,
                    "nom_vend": "Fernando Fernandez"
                },
                {
                    "cod_vend": 59,
                    "nom_vend": "Baez Alberto"
                },
                {
                    "cod_vend": 60,
                    "nom_vend": "Cesar Frette"
                },
                {
                    "cod_vend": 61,
                    "nom_vend": "Alberto Acevedo"
                },
                {
                    "cod_vend": 62,
                    "nom_vend": "José Mosna"
                },
                {
                    "cod_vend": 63,
                    "nom_vend": "Gustavo Boveda"
                },
                {
                    "cod_vend": 64,
                    "nom_vend": "Maximiliano Morel"
                },
                {
                    "cod_vend": 65,
                    "nom_vend": "Pablo Terreni"
                },
                {
                    "cod_vend": 66,
                    "nom_vend": "Lisandro Esquivel"
                },
                {
                    "cod_vend": 67,
                    "nom_vend": "Martin Flores"
                },
                {
                    "cod_vend": 69,
                    "nom_vend": "Jose Barreiro"
                },
                {
                    "cod_vend": 70,
                    "nom_vend": "Alejandro Gonzalez"
                },
                {
                    "cod_vend": 71,
                    "nom_vend": "Agostina Moglia"
                },
                {
                    "cod_vend": 72,
                    "nom_vend": "Orfeo Debora"
                },
                {
                    "cod_vend": 73,
                    "nom_vend": "Santiago Feldmann"
                }
            ],
            "cond_comp_vta": [
                {
                    "cod_cond_vta": "CC30",
                    "desc_cond_vta": "Cuenta corriente 30 dias"
                },
                {
                    "cod_cond_vta": "00",
                    "desc_cond_vta": "Contado"
                },
                {
                    "cod_cond_vta": "99",
                    "desc_cond_vta": "-"
                },
                {
                    "cod_cond_vta": "CC01",
                    "desc_cond_vta": "Cuenta corriente 30-60 dias"
                },
                {
                    "cod_cond_vta": "CC02",
                    "desc_cond_vta": "Cuenta corriente 30-60-90 dias"
                },
                {
                    "cod_cond_vta": "CC03",
                    "desc_cond_vta": "Cuenta corriente 60-90 días"
                },
                {
                    "cod_cond_vta": "CC07",
                    "desc_cond_vta": "Cuenta corriente 7 dias"
                },
                {
                    "cod_cond_vta": "CC120",
                    "desc_cond_vta": "Cuenta corriente 120 dias"
                },
                {
                    "cod_cond_vta": "CC15",
                    "desc_cond_vta": "Cuenta corriente 15 dias"
                },
                {
                    "cod_cond_vta": "CC45",
                    "desc_cond_vta": "Cuenta corriente 45 dias"
                },
                {
                    "cod_cond_vta": "CC60",
                    "desc_cond_vta": "Cuenta corriente 60 dias"
                },
                {
                    "cod_cond_vta": "CC90",
                    "desc_cond_vta": "Cuenta corriente 90 dias"
                },
                {
                    "cod_cond_vta": "CC99",
                    "desc_cond_vta": "Contado_SP"
                },
                {
                    "cod_cond_vta": "CE01",
                    "desc_cond_vta": "C/entrega de valor 30-60 dias"
                },
                {
                    "cod_cond_vta": "CE02",
                    "desc_cond_vta": "C/entrega de valor 30-60-90 dias"
                },
                {
                    "cod_cond_vta": "CE03",
                    "desc_cond_vta": "C/entrega de valor 60-90 dias"
                },
                {
                    "cod_cond_vta": "CE04",
                    "desc_cond_vta": "C/entrega de valor 30-45 dias"
                },
                {
                    "cod_cond_vta": "CE07",
                    "desc_cond_vta": "C/entrega de valor 7 dias"
                },
                {
                    "cod_cond_vta": "CE15",
                    "desc_cond_vta": "C/entrega de valor 15 dias"
                },
                {
                    "cod_cond_vta": "CE21",
                    "desc_cond_vta": "C/entrega de valor 21 dias"
                },
                {
                    "cod_cond_vta": "CE30",
                    "desc_cond_vta": "C/entrega de valor 30 dias"
                },
                {
                    "cod_cond_vta": "CE45",
                    "desc_cond_vta": "C/entrega de valor 75 dias"
                },
                {
                    "cod_cond_vta": "CE60",
                    "desc_cond_vta": "C/entrega de valor 60 dias"
                },
                {
                    "cod_cond_vta": "CE75",
                    "desc_cond_vta": "C/entrega de valor 75 dias"
                },
                {
                    "cod_cond_vta": "CE90",
                    "desc_cond_vta": "C/entrega de valor 90 dias"
                },
                {
                    "cod_cond_vta": "CEFE",
                    "desc_cond_vta": "Contado Efectivo"
                },
                {
                    "cod_cond_vta": "CMES0",
                    "desc_cond_vta": "Compra Mensual Cta. Cte. 07 días"
                },
                {
                    "cod_cond_vta": "CMES1",
                    "desc_cond_vta": "Compra Mensual Cta. Cte. 30 días"
                },
                {
                    "cod_cond_vta": "CMES2",
                    "desc_cond_vta": "Compra Mensual Cta. Cte. 60 días"
                },
                {
                    "cod_cond_vta": "CMES3",
                    "desc_cond_vta": "Compra Mensual Cta. Cte. 90 días"
                },
                {
                    "cod_cond_vta": "CQUI0",
                    "desc_cond_vta": "Compra Quincenal Cta. Cte. 07 días"
                },
                {
                    "cod_cond_vta": "CQUI1",
                    "desc_cond_vta": "Compra Quincenal Cta. Cte. 30 días"
                },
                {
                    "cod_cond_vta": "CQUI2",
                    "desc_cond_vta": "Compra Quincenal Cta. Cte. 60 días"
                },
                {
                    "cod_cond_vta": "CQUI3",
                    "desc_cond_vta": "Compra Quincenal Cta. Cte. 90 días"
                },
                {
                    "cod_cond_vta": "CR01",
                    "desc_cond_vta": "C/ Reembolso 30-60 dìas"
                },
                {
                    "cod_cond_vta": "CR02",
                    "desc_cond_vta": "C/ Reembolso 30-60-90 dìas"
                },
                {
                    "cod_cond_vta": "CR03",
                    "desc_cond_vta": "C/ Reembolso 60-90 dìas"
                },
                {
                    "cod_cond_vta": "CR04",
                    "desc_cond_vta": "C/ Reembolso 90 dìas"
                },
                {
                    "cod_cond_vta": "CR05",
                    "desc_cond_vta": "C/ REEMBOLSO Eticos/Perf 30 días"
                },
                {
                    "cod_cond_vta": "CVAL",
                    "desc_cond_vta": "Contado Efectivo / Valores"
                },
                {
                    "cod_cond_vta": "EP30",
                    "desc_cond_vta": "CTA. CTE. ETICOS/PERF 30 dias"
                },
                {
                    "cod_cond_vta": "SE007",
                    "desc_cond_vta": "Compra Semanal Cta. Cte. 07 días"
                },
                {
                    "cod_cond_vta": "SE015",
                    "desc_cond_vta": "Compra Semanal Cta. Cte. 15 días"
                },
                {
                    "cod_cond_vta": "SE030",
                    "desc_cond_vta": "Compra Semanal Cta. Cte. 30 días"
                },
                {
                    "cod_cond_vta": "SE060",
                    "desc_cond_vta": "Compra Semanal Cta. Cte. 60 días"
                },
                {
                    "cod_cond_vta": "SE090",
                    "desc_cond_vta": "Compra Semanal Cta. Cte. 90 días"
                },
                {
                    "cod_cond_vta": "SEM07",
                    "desc_cond_vta": "-"
                },
                {
                    "cod_cond_vta": "SEM14",
                    "desc_cond_vta": "-"
                },
                {
                    "cod_cond_vta": "SEM21",
                    "desc_cond_vta": "-"
                },
                {
                    "cod_cond_vta": "TRBC",
                    "desc_cond_vta": "Transferencia Bancaria"
                }
            ],
            "transporte": [
                {
                    "cod_transp": "P01",
                    "nom_transp": "Propio - Posadas"
                },
                {
                    "cod_transp": "000",
                    "nom_transp": "VARIOS"
                },
                {
                    "cod_transp": "A01",
                    "nom_transp": "CTES RUTA A CENTRO"
                },
                {
                    "cod_transp": "A02",
                    "nom_transp": "CTES RUTA B PERIFERIA"
                },
                {
                    "cod_transp": "A03",
                    "nom_transp": "FSA RUTA B Nº 11/86"
                },
                {
                    "cod_transp": "A04",
                    "nom_transp": "CHACO RUTA A NAC 16/89/95"
                },
                {
                    "cod_transp": "A05",
                    "nom_transp": "CHACO RUTA A RCIA"
                },
                {
                    "cod_transp": "A06",
                    "nom_transp": "STA FE RUTA A  Nº11 RECON/AVE"
                },
                {
                    "cod_transp": "A07",
                    "nom_transp": "FSA RUTA A Nº81"
                },
                {
                    "cod_transp": "A08",
                    "nom_transp": "CTES RUTA C Nº 12/PROV 5"
                },
                {
                    "cod_transp": "A09",
                    "nom_transp": "CTES RUTA D Nº 12/123"
                },
                {
                    "cod_transp": "A10",
                    "nom_transp": "CTES RUTA E Nº 14"
                },
                {
                    "cod_transp": "A11",
                    "nom_transp": "CTES RUTA F Nº 12 POSADAS"
                },
                {
                    "cod_transp": "A12",
                    "nom_transp": "CTES RUTA G Nº 12/128 MBU."
                },
                {
                    "cod_transp": "C01",
                    "nom_transp": "Propio - Casa Central"
                },
                {
                    "cod_transp": "C02",
                    "nom_transp": "S.E.D.E"
                },
                {
                    "cod_transp": "C03",
                    "nom_transp": "CREDIFIN"
                },
                {
                    "cod_transp": "C04",
                    "nom_transp": "MA. CARLA - XTREME"
                },
                {
                    "cod_transp": "C05",
                    "nom_transp": "NICLIS"
                },
                {
                    "cod_transp": "C06",
                    "nom_transp": "PACK - EXPRESS"
                },
                {
                    "cod_transp": "C07",
                    "nom_transp": "EXPRESO NORTE"
                },
                {
                    "cod_transp": "E01",
                    "nom_transp": "Empresa"
                },
                {
                    "cod_transp": "P02",
                    "nom_transp": "Pulqui Pack"
                },
                {
                    "cod_transp": "P03",
                    "nom_transp": "Transp. Posadas de Recalde G."
                },
                {
                    "cod_transp": "P04",
                    "nom_transp": "Expreso Jet de Triade SA"
                },
                {
                    "cod_transp": "P05",
                    "nom_transp": "MANDADOS EL CORRECAMINOS"
                },
                {
                    "cod_transp": "P06",
                    "nom_transp": "S.E.D.E  Posadas"
                },
                {
                    "cod_transp": "P07",
                    "nom_transp": "Expreso Las Tres M"
                },
                {
                    "cod_transp": "P08",
                    "nom_transp": "MAS Mandados"
                },
                {
                    "cod_transp": "PO1",
                    "nom_transp": "POS-RUTA12/SUR"
                },
                {
                    "cod_transp": "PO2",
                    "nom_transp": "POS-RUTA12/CENTRO"
                },
                {
                    "cod_transp": "PO3",
                    "nom_transp": "POS-RUTA12/NORTE"
                },
                {
                    "cod_transp": "PO4",
                    "nom_transp": "POS-RUTA14/SUR"
                },
                {
                    "cod_transp": "PO5",
                    "nom_transp": "POS-RUTA14/CENTRO"
                },
                {
                    "cod_transp": "PO6",
                    "nom_transp": "POS-RUTA14/NORTE"
                },
                {
                    "cod_transp": "R01",
                    "nom_transp": "RPTO 01 - ZONA SUR"
                }
            ],
            "suc_empresa": [
                {
                    "Cod_Suc": "6",
                    "Nom_suc": "CORRIENTES P.V.0006"
                },
                {
                    "Cod_Suc": "3",
                    "Nom_suc": "Suc 0003"
                },
                {
                    "Cod_Suc": "0",
                    "Nom_suc": "Casa Central"
                },
                {
                    "Cod_Suc": "1",
                    "Nom_suc": "Casa Central"
                },
                {
                    "Cod_Suc": "888",
                    "Nom_suc": "BLUE"
                },
                {
                    "Cod_Suc": "777",
                    "Nom_suc": "BLUE"
                },
                {
                    "Cod_Suc": "2",
                    "Nom_suc": "Posadas"
                },
                {
                    "Cod_Suc": "7",
                    "Nom_suc": "Factura WEB"
                },
                {
                    "Cod_Suc": "5",
                    "Nom_suc": "POSADAS - P.V.0005"
                }
            ],
            "atrib_comp_vta": [
                {
                    "cod_atrib": "REMBUL",
                    "descripcion": "Cantidad de Bultos",
                    "tipo": "num",
                    "largo": 6,
                    "formato": "",
                    "orden": 1,
                    "valores": null
                },
                {
                    "cod_atrib": "CLICLAS",
                    "descripcion": "Clasificacion cliente",
                    "tipo": "combo",
                    "largo": 3,
                    "formato": "",
                    "orden": 2,
                    "valores": [
                        {
                            "cod_valor": "A",
                            "desc_valor": "Categoría A"
                        },
                        {
                            "cod_valor": "B",
                            "desc_valor": "Categoría B"
                        },
                        {
                            "cod_valor": "C",
                            "desc_valor": "Categoría C"
                        },
                        {
                            "cod_valor": "V",
                            "desc_valor": "Categoría VIP"
                        }
                    ]
                },
                {
                    "cod_atrib": "DIRENTREGA",
                    "descripcion": "Direccion de entrega",
                    "tipo": "char",
                    "largo": 100,
                    "formato": "",
                    "orden": 3,
                    "valores": null
                },
                {
                    "cod_atrib": "IBJUR",
                    "descripcion": "IIBB-Jurisdiccion",
                    "tipo": "combo",
                    "largo": 3,
                    "formato": "",
                    "orden": 4,
                    "valores": [
                        {
                            "cod_valor": "B",
                            "desc_valor": "Buenos Aires"
                        },
                        {
                            "cod_valor": "C",
                            "desc_valor": "Capital Federal"
                        },
                        {
                            "cod_valor": "K",
                            "desc_valor": "Catamarca"
                        },
                        {
                            "cod_valor": "H",
                            "desc_valor": "Chaco"
                        },
                        {
                            "cod_valor": "U",
                            "desc_valor": "Chubut"
                        },
                        {
                            "cod_valor": "X",
                            "desc_valor": "Cordoba"
                        },
                        {
                            "cod_valor": "W",
                            "desc_valor": "Corrientes"
                        },
                        {
                            "cod_valor": "E",
                            "desc_valor": "Entre Rios"
                        },
                        {
                            "cod_valor": "O",
                            "desc_valor": "Extranjeros"
                        },
                        {
                            "cod_valor": "P",
                            "desc_valor": "Formosa"
                        },
                        {
                            "cod_valor": "Y",
                            "desc_valor": "Jujuy"
                        },
                        {
                            "cod_valor": "L",
                            "desc_valor": "La Pampa"
                        },
                        {
                            "cod_valor": "F",
                            "desc_valor": "La Rioja"
                        },
                        {
                            "cod_valor": "M",
                            "desc_valor": "Mendoza"
                        },
                        {
                            "cod_valor": "N",
                            "desc_valor": "Misiones"
                        },
                        {
                            "cod_valor": "Q",
                            "desc_valor": "Neuquen"
                        },
                        {
                            "cod_valor": "0",
                            "desc_valor": "Prov. a definir"
                        },
                        {
                            "cod_valor": "R",
                            "desc_valor": "Rio Negro"
                        },
                        {
                            "cod_valor": "A",
                            "desc_valor": "Salta"
                        },
                        {
                            "cod_valor": "J",
                            "desc_valor": "San Juan"
                        },
                        {
                            "cod_valor": "D",
                            "desc_valor": "San Luis"
                        },
                        {
                            "cod_valor": "G",
                            "desc_valor": "Sant.del Estero"
                        },
                        {
                            "cod_valor": "Z",
                            "desc_valor": "Santa Cruz"
                        },
                        {
                            "cod_valor": "S",
                            "desc_valor": "Santa Fe"
                        },
                        {
                            "cod_valor": "V",
                            "desc_valor": "Tierra del Fueg"
                        },
                        {
                            "cod_valor": "T",
                            "desc_valor": "Tucuman"
                        }
                    ]
                },
                {
                    "cod_atrib": "HOJARUTA",
                    "descripcion": "Zona de Hoja de Ruta",
                    "tipo": "autocomp",
                    "largo": 2,
                    "formato": "",
                    "orden": 5,
                    "valores": null
                }
            ]
        }
    );

    mockAdapter.onGet('/vta_cab_compr', { params: { idOperacion: "22" } }).reply(200,
        {
            "titulo_comp_vta": "Pedido reserva autom.",
            "moneda": [
                {
                    "cod_moneda": "$",
                    "desc_moneda": "Pesos",
                    "cotiz": 1.0
                },
                {
                    "cod_moneda": "U$S",
                    "desc_moneda": "Dolares",
                    "cotiz": 36.29
                }
            ],
            "vendedor": [
                {
                    "cod_vend": 24,
                    "nom_vend": "Clientes CERRADOS"
                },
                {
                    "cod_vend": 1,
                    "nom_vend": "Casa Central"
                },
                {
                    "cod_vend": 2,
                    "nom_vend": "Gerencia Posadas"
                },
                {
                    "cod_vend": 3,
                    "nom_vend": "Creditos y Cobranzas"
                },
                {
                    "cod_vend": 4,
                    "nom_vend": "Gestion Judicial"
                },
                {
                    "cod_vend": 5,
                    "nom_vend": "Lisandro Alcides Acosta"
                },
                {
                    "cod_vend": 6,
                    "nom_vend": "Arruti Alejandro"
                },
                {
                    "cod_vend": 7,
                    "nom_vend": "Bandeo Ernesto Jose"
                },
                {
                    "cod_vend": 8,
                    "nom_vend": "Mauricio Gonzalez"
                },
                {
                    "cod_vend": 9,
                    "nom_vend": "Luis Lara Alcantara"
                },
                {
                    "cod_vend": 10,
                    "nom_vend": "Legal Matias"
                },
                {
                    "cod_vend": 11,
                    "nom_vend": "Boris Nicolas Lucazevich"
                },
                {
                    "cod_vend": 12,
                    "nom_vend": "Mendez Sergio"
                },
                {
                    "cod_vend": 13,
                    "nom_vend": "Maidana Luis Marcelo"
                },
                {
                    "cod_vend": 14,
                    "nom_vend": "Monteavaro Richard"
                },
                {
                    "cod_vend": 15,
                    "nom_vend": "Ortellado Osvaldo"
                },
                {
                    "cod_vend": 16,
                    "nom_vend": "Romero Carlos"
                },
                {
                    "cod_vend": 17,
                    "nom_vend": "Carlos Magran"
                },
                {
                    "cod_vend": 18,
                    "nom_vend": "Juan Cerdan"
                },
                {
                    "cod_vend": 19,
                    "nom_vend": "Bianchi Andrés"
                },
                {
                    "cod_vend": 20,
                    "nom_vend": "Reartes Fernando"
                },
                {
                    "cod_vend": 21,
                    "nom_vend": "Veloso Mario"
                },
                {
                    "cod_vend": 22,
                    "nom_vend": "Viesca Walter"
                },
                {
                    "cod_vend": 23,
                    "nom_vend": "Carlos Toledo"
                },
                {
                    "cod_vend": 25,
                    "nom_vend": "Clientes OBSERVADOS"
                },
                {
                    "cod_vend": 26,
                    "nom_vend": "Franco Juan Domingo"
                },
                {
                    "cod_vend": 27,
                    "nom_vend": "Espinoza Natalia Analia"
                },
                {
                    "cod_vend": 28,
                    "nom_vend": "Alejandro Javier Gomez"
                },
                {
                    "cod_vend": 29,
                    "nom_vend": "Feldman Marcelo"
                },
                {
                    "cod_vend": 30,
                    "nom_vend": "Monica Alejandra Nuñez"
                },
                {
                    "cod_vend": 31,
                    "nom_vend": "Jose Paredes"
                },
                {
                    "cod_vend": 32,
                    "nom_vend": "Fabian Martinez"
                },
                {
                    "cod_vend": 33,
                    "nom_vend": "Delgado Julio"
                },
                {
                    "cod_vend": 34,
                    "nom_vend": "Mordacini Juan Pablo"
                },
                {
                    "cod_vend": 35,
                    "nom_vend": "Romero Erick Fernando"
                },
                {
                    "cod_vend": 36,
                    "nom_vend": "Pedidos WEB"
                },
                {
                    "cod_vend": 37,
                    "nom_vend": "Hector Pereyra"
                },
                {
                    "cod_vend": 38,
                    "nom_vend": "Andrea Rojas"
                },
                {
                    "cod_vend": 39,
                    "nom_vend": "Carlos Chavez"
                },
                {
                    "cod_vend": 40,
                    "nom_vend": "Erika Monzon"
                },
                {
                    "cod_vend": 41,
                    "nom_vend": "Leonardo Benitez"
                },
                {
                    "cod_vend": 42,
                    "nom_vend": "Mauro Monzon"
                },
                {
                    "cod_vend": 43,
                    "nom_vend": "Pablo Gayoso"
                },
                {
                    "cod_vend": 44,
                    "nom_vend": "Romina Colunga"
                },
                {
                    "cod_vend": 45,
                    "nom_vend": "Gladys Romero"
                },
                {
                    "cod_vend": 46,
                    "nom_vend": "Lisandro Malvarez"
                },
                {
                    "cod_vend": 47,
                    "nom_vend": "Andrea Kosinski"
                },
                {
                    "cod_vend": 48,
                    "nom_vend": "Karina Portillo"
                },
                {
                    "cod_vend": 49,
                    "nom_vend": "Lorena Jofre"
                },
                {
                    "cod_vend": 50,
                    "nom_vend": "Ursula Cantero"
                },
                {
                    "cod_vend": 51,
                    "nom_vend": "Vanesa Lopez"
                },
                {
                    "cod_vend": 52,
                    "nom_vend": "Veronica Lugo"
                },
                {
                    "cod_vend": 53,
                    "nom_vend": "Maria Jose Encina Ramirez"
                },
                {
                    "cod_vend": 54,
                    "nom_vend": "Alejandra Vandecabeye"
                },
                {
                    "cod_vend": 55,
                    "nom_vend": "Licitaciones CC"
                },
                {
                    "cod_vend": 56,
                    "nom_vend": "Carmen Reichert"
                },
                {
                    "cod_vend": 57,
                    "nom_vend": "Victor Vallejos"
                },
                {
                    "cod_vend": 58,
                    "nom_vend": "Fernando Fernandez"
                },
                {
                    "cod_vend": 59,
                    "nom_vend": "Baez Alberto"
                },
                {
                    "cod_vend": 60,
                    "nom_vend": "Cesar Frette"
                },
                {
                    "cod_vend": 61,
                    "nom_vend": "Alberto Acevedo"
                },
                {
                    "cod_vend": 62,
                    "nom_vend": "José Mosna"
                },
                {
                    "cod_vend": 63,
                    "nom_vend": "Gustavo Boveda"
                },
                {
                    "cod_vend": 64,
                    "nom_vend": "Maximiliano Morel"
                },
                {
                    "cod_vend": 65,
                    "nom_vend": "Pablo Terreni"
                },
                {
                    "cod_vend": 66,
                    "nom_vend": "Lisandro Esquivel"
                },
                {
                    "cod_vend": 67,
                    "nom_vend": "Martin Flores"
                },
                {
                    "cod_vend": 69,
                    "nom_vend": "Jose Barreiro"
                },
                {
                    "cod_vend": 70,
                    "nom_vend": "Alejandro Gonzalez"
                },
                {
                    "cod_vend": 71,
                    "nom_vend": "Agostina Moglia"
                },
                {
                    "cod_vend": 72,
                    "nom_vend": "Orfeo Debora"
                },
                {
                    "cod_vend": 73,
                    "nom_vend": "Santiago Feldmann"
                }
            ],
            "cond_comp_vta": [
                {
                    "cod_cond_vta": "CC30",
                    "desc_cond_vta": "Cuenta corriente 30 dias"
                },
                {
                    "cod_cond_vta": "00",
                    "desc_cond_vta": "Contado"
                },
                {
                    "cod_cond_vta": "99",
                    "desc_cond_vta": "-"
                },
                {
                    "cod_cond_vta": "CC01",
                    "desc_cond_vta": "Cuenta corriente 30-60 dias"
                },
                {
                    "cod_cond_vta": "CC02",
                    "desc_cond_vta": "Cuenta corriente 30-60-90 dias"
                },
                {
                    "cod_cond_vta": "CC03",
                    "desc_cond_vta": "Cuenta corriente 60-90 días"
                },
                {
                    "cod_cond_vta": "CC07",
                    "desc_cond_vta": "Cuenta corriente 7 dias"
                },
                {
                    "cod_cond_vta": "CC120",
                    "desc_cond_vta": "Cuenta corriente 120 dias"
                },
                {
                    "cod_cond_vta": "CC15",
                    "desc_cond_vta": "Cuenta corriente 15 dias"
                },
                {
                    "cod_cond_vta": "CC45",
                    "desc_cond_vta": "Cuenta corriente 45 dias"
                },
                {
                    "cod_cond_vta": "CC60",
                    "desc_cond_vta": "Cuenta corriente 60 dias"
                },
                {
                    "cod_cond_vta": "CC90",
                    "desc_cond_vta": "Cuenta corriente 90 dias"
                },
                {
                    "cod_cond_vta": "CC99",
                    "desc_cond_vta": "Contado_SP"
                },
                {
                    "cod_cond_vta": "CE01",
                    "desc_cond_vta": "C/entrega de valor 30-60 dias"
                },
                {
                    "cod_cond_vta": "CE02",
                    "desc_cond_vta": "C/entrega de valor 30-60-90 dias"
                },
                {
                    "cod_cond_vta": "CE03",
                    "desc_cond_vta": "C/entrega de valor 60-90 dias"
                },
                {
                    "cod_cond_vta": "CE04",
                    "desc_cond_vta": "C/entrega de valor 30-45 dias"
                },
                {
                    "cod_cond_vta": "CE07",
                    "desc_cond_vta": "C/entrega de valor 7 dias"
                },
                {
                    "cod_cond_vta": "CE15",
                    "desc_cond_vta": "C/entrega de valor 15 dias"
                },
                {
                    "cod_cond_vta": "CE21",
                    "desc_cond_vta": "C/entrega de valor 21 dias"
                },
                {
                    "cod_cond_vta": "CE30",
                    "desc_cond_vta": "C/entrega de valor 30 dias"
                },
                {
                    "cod_cond_vta": "CE45",
                    "desc_cond_vta": "C/entrega de valor 75 dias"
                },
                {
                    "cod_cond_vta": "CE60",
                    "desc_cond_vta": "C/entrega de valor 60 dias"
                },
                {
                    "cod_cond_vta": "CE75",
                    "desc_cond_vta": "C/entrega de valor 75 dias"
                },
                {
                    "cod_cond_vta": "CE90",
                    "desc_cond_vta": "C/entrega de valor 90 dias"
                },
                {
                    "cod_cond_vta": "CEFE",
                    "desc_cond_vta": "Contado Efectivo"
                },
                {
                    "cod_cond_vta": "CMES0",
                    "desc_cond_vta": "Compra Mensual Cta. Cte. 07 días"
                },
                {
                    "cod_cond_vta": "CMES1",
                    "desc_cond_vta": "Compra Mensual Cta. Cte. 30 días"
                },
                {
                    "cod_cond_vta": "CMES2",
                    "desc_cond_vta": "Compra Mensual Cta. Cte. 60 días"
                },
                {
                    "cod_cond_vta": "CMES3",
                    "desc_cond_vta": "Compra Mensual Cta. Cte. 90 días"
                },
                {
                    "cod_cond_vta": "CQUI0",
                    "desc_cond_vta": "Compra Quincenal Cta. Cte. 07 días"
                },
                {
                    "cod_cond_vta": "CQUI1",
                    "desc_cond_vta": "Compra Quincenal Cta. Cte. 30 días"
                },
                {
                    "cod_cond_vta": "CQUI2",
                    "desc_cond_vta": "Compra Quincenal Cta. Cte. 60 días"
                },
                {
                    "cod_cond_vta": "CQUI3",
                    "desc_cond_vta": "Compra Quincenal Cta. Cte. 90 días"
                },
                {
                    "cod_cond_vta": "CR01",
                    "desc_cond_vta": "C/ Reembolso 30-60 dìas"
                },
                {
                    "cod_cond_vta": "CR02",
                    "desc_cond_vta": "C/ Reembolso 30-60-90 dìas"
                },
                {
                    "cod_cond_vta": "CR03",
                    "desc_cond_vta": "C/ Reembolso 60-90 dìas"
                },
                {
                    "cod_cond_vta": "CR04",
                    "desc_cond_vta": "C/ Reembolso 90 dìas"
                },
                {
                    "cod_cond_vta": "CR05",
                    "desc_cond_vta": "C/ REEMBOLSO Eticos/Perf 30 días"
                },
                {
                    "cod_cond_vta": "CVAL",
                    "desc_cond_vta": "Contado Efectivo / Valores"
                },
                {
                    "cod_cond_vta": "EP30",
                    "desc_cond_vta": "CTA. CTE. ETICOS/PERF 30 dias"
                },
                {
                    "cod_cond_vta": "SE007",
                    "desc_cond_vta": "Compra Semanal Cta. Cte. 07 días"
                },
                {
                    "cod_cond_vta": "SE015",
                    "desc_cond_vta": "Compra Semanal Cta. Cte. 15 días"
                },
                {
                    "cod_cond_vta": "SE030",
                    "desc_cond_vta": "Compra Semanal Cta. Cte. 30 días"
                },
                {
                    "cod_cond_vta": "SE060",
                    "desc_cond_vta": "Compra Semanal Cta. Cte. 60 días"
                },
                {
                    "cod_cond_vta": "SE090",
                    "desc_cond_vta": "Compra Semanal Cta. Cte. 90 días"
                },
                {
                    "cod_cond_vta": "SEM07",
                    "desc_cond_vta": "-"
                },
                {
                    "cod_cond_vta": "SEM14",
                    "desc_cond_vta": "-"
                },
                {
                    "cod_cond_vta": "SEM21",
                    "desc_cond_vta": "-"
                },
                {
                    "cod_cond_vta": "TRBC",
                    "desc_cond_vta": "Transferencia Bancaria"
                }
            ],
            "transporte": [
                {
                    "cod_transp": "P01",
                    "nom_transp": "Propio - Posadas"
                },
                {
                    "cod_transp": "000",
                    "nom_transp": "VARIOS"
                },
                {
                    "cod_transp": "A01",
                    "nom_transp": "CTES RUTA A CENTRO"
                },
                {
                    "cod_transp": "A02",
                    "nom_transp": "CTES RUTA B PERIFERIA"
                },
                {
                    "cod_transp": "A03",
                    "nom_transp": "FSA RUTA B Nº 11/86"
                },
                {
                    "cod_transp": "A04",
                    "nom_transp": "CHACO RUTA A NAC 16/89/95"
                },
                {
                    "cod_transp": "A05",
                    "nom_transp": "CHACO RUTA A RCIA"
                },
                {
                    "cod_transp": "A06",
                    "nom_transp": "STA FE RUTA A  Nº11 RECON/AVE"
                },
                {
                    "cod_transp": "A07",
                    "nom_transp": "FSA RUTA A Nº81"
                },
                {
                    "cod_transp": "A08",
                    "nom_transp": "CTES RUTA C Nº 12/PROV 5"
                },
                {
                    "cod_transp": "A09",
                    "nom_transp": "CTES RUTA D Nº 12/123"
                },
                {
                    "cod_transp": "A10",
                    "nom_transp": "CTES RUTA E Nº 14"
                },
                {
                    "cod_transp": "A11",
                    "nom_transp": "CTES RUTA F Nº 12 POSADAS"
                },
                {
                    "cod_transp": "A12",
                    "nom_transp": "CTES RUTA G Nº 12/128 MBU."
                },
                {
                    "cod_transp": "C01",
                    "nom_transp": "Propio - Casa Central"
                },
                {
                    "cod_transp": "C02",
                    "nom_transp": "S.E.D.E"
                },
                {
                    "cod_transp": "C03",
                    "nom_transp": "CREDIFIN"
                },
                {
                    "cod_transp": "C04",
                    "nom_transp": "MA. CARLA - XTREME"
                },
                {
                    "cod_transp": "C05",
                    "nom_transp": "NICLIS"
                },
                {
                    "cod_transp": "C06",
                    "nom_transp": "PACK - EXPRESS"
                },
                {
                    "cod_transp": "C07",
                    "nom_transp": "EXPRESO NORTE"
                },
                {
                    "cod_transp": "E01",
                    "nom_transp": "Empresa"
                },
                {
                    "cod_transp": "P02",
                    "nom_transp": "Pulqui Pack"
                },
                {
                    "cod_transp": "P03",
                    "nom_transp": "Transp. Posadas de Recalde G."
                },
                {
                    "cod_transp": "P04",
                    "nom_transp": "Expreso Jet de Triade SA"
                },
                {
                    "cod_transp": "P05",
                    "nom_transp": "MANDADOS EL CORRECAMINOS"
                },
                {
                    "cod_transp": "P06",
                    "nom_transp": "S.E.D.E  Posadas"
                },
                {
                    "cod_transp": "P07",
                    "nom_transp": "Expreso Las Tres M"
                },
                {
                    "cod_transp": "P08",
                    "nom_transp": "MAS Mandados"
                },
                {
                    "cod_transp": "PO1",
                    "nom_transp": "POS-RUTA12/SUR"
                },
                {
                    "cod_transp": "PO2",
                    "nom_transp": "POS-RUTA12/CENTRO"
                },
                {
                    "cod_transp": "PO3",
                    "nom_transp": "POS-RUTA12/NORTE"
                },
                {
                    "cod_transp": "PO4",
                    "nom_transp": "POS-RUTA14/SUR"
                },
                {
                    "cod_transp": "PO5",
                    "nom_transp": "POS-RUTA14/CENTRO"
                },
                {
                    "cod_transp": "PO6",
                    "nom_transp": "POS-RUTA14/NORTE"
                },
                {
                    "cod_transp": "R01",
                    "nom_transp": "RPTO 01 - ZONA SUR"
                }
            ],
            "suc_empresa": [
                {
                    "Cod_Suc": "6",
                    "Nom_suc": "CORRIENTES P.V.0006"
                },
                {
                    "Cod_Suc": "3",
                    "Nom_suc": "Suc 0003"
                },
                {
                    "Cod_Suc": "0",
                    "Nom_suc": "Casa Central"
                },
                {
                    "Cod_Suc": "1",
                    "Nom_suc": "Casa Central"
                },
                {
                    "Cod_Suc": "888",
                    "Nom_suc": "BLUE"
                },
                {
                    "Cod_Suc": "777",
                    "Nom_suc": "BLUE"
                },
                {
                    "Cod_Suc": "2",
                    "Nom_suc": "Posadas"
                },
                {
                    "Cod_Suc": "7",
                    "Nom_suc": "Factura WEB"
                },
                {
                    "Cod_Suc": "5",
                    "Nom_suc": "POSADAS - P.V.0005"
                }
            ],
            "atrib_comp_vta": [
                {
                    "cod_atrib": "REMBUL",
                    "descripcion": "Cantidad de Bultos",
                    "tipo": "num",
                    "largo": 6,
                    "formato": "",
                    "orden": 1,
                    "valores": null
                },
                {
                    "cod_atrib": "CLICLAS",
                    "descripcion": "Clasificacion cliente",
                    "tipo": "combo",
                    "largo": 3,
                    "formato": "",
                    "orden": 2,
                    "valores": [
                        {
                            "cod_valor": "A",
                            "desc_valor": "Categoría A"
                        },
                        {
                            "cod_valor": "B",
                            "desc_valor": "Categoría B"
                        },
                        {
                            "cod_valor": "C",
                            "desc_valor": "Categoría C"
                        },
                        {
                            "cod_valor": "V",
                            "desc_valor": "Categoría VIP"
                        }
                    ]
                },
                {
                    "cod_atrib": "DIRENTREGA",
                    "descripcion": "Direccion de entrega",
                    "tipo": "char",
                    "largo": 100,
                    "formato": "",
                    "orden": 3,
                    "valores": null
                },
                {
                    "cod_atrib": "IBJUR",
                    "descripcion": "IIBB-Jurisdiccion",
                    "tipo": "combo",
                    "largo": 3,
                    "formato": "",
                    "orden": 4,
                    "valores": [
                        {
                            "cod_valor": "B",
                            "desc_valor": "Buenos Aires"
                        },
                        {
                            "cod_valor": "C",
                            "desc_valor": "Capital Federal"
                        },
                        {
                            "cod_valor": "K",
                            "desc_valor": "Catamarca"
                        },
                        {
                            "cod_valor": "H",
                            "desc_valor": "Chaco"
                        },
                        {
                            "cod_valor": "U",
                            "desc_valor": "Chubut"
                        },
                        {
                            "cod_valor": "X",
                            "desc_valor": "Cordoba"
                        },
                        {
                            "cod_valor": "W",
                            "desc_valor": "Corrientes"
                        },
                        {
                            "cod_valor": "E",
                            "desc_valor": "Entre Rios"
                        },
                        {
                            "cod_valor": "O",
                            "desc_valor": "Extranjeros"
                        },
                        {
                            "cod_valor": "P",
                            "desc_valor": "Formosa"
                        },
                        {
                            "cod_valor": "Y",
                            "desc_valor": "Jujuy"
                        },
                        {
                            "cod_valor": "L",
                            "desc_valor": "La Pampa"
                        },
                        {
                            "cod_valor": "F",
                            "desc_valor": "La Rioja"
                        },
                        {
                            "cod_valor": "M",
                            "desc_valor": "Mendoza"
                        },
                        {
                            "cod_valor": "N",
                            "desc_valor": "Misiones"
                        },
                        {
                            "cod_valor": "Q",
                            "desc_valor": "Neuquen"
                        },
                        {
                            "cod_valor": "0",
                            "desc_valor": "Prov. a definir"
                        },
                        {
                            "cod_valor": "R",
                            "desc_valor": "Rio Negro"
                        },
                        {
                            "cod_valor": "A",
                            "desc_valor": "Salta"
                        },
                        {
                            "cod_valor": "J",
                            "desc_valor": "San Juan"
                        },
                        {
                            "cod_valor": "D",
                            "desc_valor": "San Luis"
                        },
                        {
                            "cod_valor": "G",
                            "desc_valor": "Sant.del Estero"
                        },
                        {
                            "cod_valor": "Z",
                            "desc_valor": "Santa Cruz"
                        },
                        {
                            "cod_valor": "S",
                            "desc_valor": "Santa Fe"
                        },
                        {
                            "cod_valor": "V",
                            "desc_valor": "Tierra del Fueg"
                        },
                        {
                            "cod_valor": "T",
                            "desc_valor": "Tucuman"
                        }
                    ]
                },
                {
                    "cod_atrib": "HOJARUTA",
                    "descripcion": "Zona de Hoja de Ruta",
                    "tipo": "autocomp",
                    "largo": 2,
                    "formato": "",
                    "orden": 5,
                    "valores": null
                }
            ]
        }
    );

    mockAdapter.onPost('/vta_cab_compr/confirmar').reply(200,
        {
            "Resultado": true,
            "Tipo_error": null,
            "Mens_error": null,
            "Errores": null
        }
    );



}