
export default (mockAdapter) => {
    mockAdapter.onGet('/vta_cab_compr/atrib_autocompl').reply(200, {
        data: [
            {
                "cod_dato": "01.01",
                "desc_dato": "Administración central"
            },
            {
                "cod_dato": "02.01",
                "desc_dato": "Administración San Luis"
            }
        ]
    })

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

    mockAdapter.onGet('/Comprobantes/config', { params: { cod_proceso: 1, idOperacion: 1 } }).reply(200, {
        data: {
            "cod_proceso": "P_SELCLI",
            "descrip_proceso": "Selección Cliente",
            "orden": "1",
            "campos": [
                {
                    "idcampo": "rsocial",
                    "descripcion": "Razón social cliente",
                    "label": "R.Social",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "cliente_codigo",
                    "descripcion": "Código cliente",
                    "label": "Código",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "tipo_resp",
                    "descripcion": "Tipo Responsable",
                    "label": "Tipo Responsable",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "cuit",
                    "descripcion": "CUIT",
                    "label": "C.U.I.T",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": "idTrabajador"
                },
                {
                    "idcampo": "contacto",
                    "descripcion": "Contacto",
                    "label": "Contacto",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "suc_tel",
                    "descripcion": "Telefono",
                    "label": "Teléfono",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "suc_email",
                    "descripcion": "email",
                    "label": "Correo",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "suc_address",
                    "descripcion": "direccion",
                    "label": "Dirección",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "suc_local",
                    "descripcion": "Localidad",
                    "label": "Localidad",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "suc_nom_prov",
                    "descripcion": "Provincia",
                    "label": "Provincia",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "suc_cpos",
                    "descripcion": "codigo postal",
                    "label": "Código postal",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "credito",
                    "descripcion": "Credito",
                    "label": "Límite Crédito",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "saldo_pend",
                    "descripcion": "saldo pendiente",
                    "label": "Crédito pendiente",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "credito_saldo",
                    "descripcion": "credito saldo",
                    "label": "Saldo",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "sucursales",
                    "descripcion": "sucursales",
                    "label": "Cliente Sucursal",
                    "editable": 1,
                    "requerido": 1,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "obs_cc",
                    "descripcion": "Observaciones cuenta corriente",
                    "label": "Obs. Cta. Cte.",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "obs_ventas",
                    "descripcion": "Observaciones de la venta",
                    "label": "Obs. Ventas",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
            ]
        }
    });

    mockAdapter.onGet('/Comprobantes/config', { params: { cod_proceso: 'p_vtacab', idOperacion: 1 } }).reply(200, {
        data: {
            "cod_proceso": "P_vtacab",
            "descrip_proceso": "Carga datos cabecera ventas",
            "orden": "2",
            "campos": [
                {
                    "idcampo": "suc_empresa_venta",
                    "descripcion": "Suc.Empresa",
                    "label": "Suc.Empresa",
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "Titulo_comp_vta",
                    "descripcion": "Titulo comprobante",
                    "label": "Titulo",
                    "editable": 1,
                    "visible": 1,
                    "requerido": 0,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "fecha",
                    "descripcion": "Fecha",
                    "label": "Fecha",
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": "FEC>=H",
                    "mascara": "fechaLarga"
                },
                {
                    "idcampo": "mon_comp_vta",
                    "descripcion": "Moneda",
                    "label": "Moneda",
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idcampo": "cotiz",
                    "descripcion": "Cotización",
                    "label": "Cotización",
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": "",
                    "mascara": ""
                },
                { "idcampo": "vend_comp_vta", "descripcion": "Vendedor", "label": "Vendedor", "editable": 1, "visible": 1, "requerido": 0, "valid": "", "mascara": "" },
                { "idcampo": "cond_comp_vta", "descripcion": "Cond.Venta", "label": "Cond.Venta", "editable": 1, "visible": 1, "requerido": 1, "valid": "", "mascara": "" },
                { "idcampo": "transp_comp_vta", "descripcion": "Transportista", "label": "Transportista", "editable": 0, "visible": 0, "requerido": 0, "valid": "", "mascara": "" },
                { "idcampo": "atrib_comp_vta", "descripcion": "Atributos", "label": "Datos Adicionales", "editable": 1, "visible": 1, "requerido": 1, "valid": "", "mascara": "" }

            ]
        }
    });

    mockAdapter.onGet('/Comprobantes/config', { params: { cod_proceso: 'P_CargaItemenVentas', idOperacion: 1 } }).reply(200, {
        data: {
            "cod_proceso": "P_CargaItemenVentas",
            "descrip_proceso": "Carga Items de Ventas",
            "orden": "3",
            "campos": [
                { "idcampo": "cod_prod", "descripcion": "Código Producto", "label": "Código", "editable": 0, "visible": 1, "mascara": "" },
                { "idcampo": "desc_prod", "descripcion": "Nombre Producto", "label": "Producto", "editable": 0, "visible": 1, "mascara": "" },
                { "idcampo": "unid_v", "descripcion": "Presentación", "label": "Unid/Pres", "editable": 1, "visible": 1, "mascara": "" },
                { "idcampo": "cantidad", "descripcion": "cantidad", "label": "Cant", "editable": 1, "visible": 1, "mascara": "" },
                { "idcampo": "ind_stock", "descripcion": "Indic.Stock", "label": "", "editable": 0, "visible": 1, "mascara": "" },
                { "idcampo": "pcio_unit", "descripcion": "Precio unit.", "label": "Precio Unit", "editable": 1, "visible": 1, "mascara": "precioUnitario" },
                { "idcampo": "modif_pcio", "descripcion": "Clave para modificar precio", "label": "", "editable": 1, "visible": 0, "mascara": "" },
                { "idcampo": "neto", "descripcion": "Importe neto", "label": "Neto", "editable": 1, "visible": 1, "mascara": "importeNeto" },
                { "idcampo": "fec_entrega", "descripcion": "Fecha entrega", "label": "Fec.Entr.", "editable": 1, "visible": 1, "valid": "FEC>=H", "mascara": "fechaLarga" },
                { "idcampo": "avisos", "descripcion": "avisos", "label": "Ofertas", "editable": 0, "visible": 1, "mascara": "" },
                //{ "idcampo": "fin_item", "visible": 1, "mascara": "" },
            ]
        }
    });

    mockAdapter.onGet('/Comprobantes/ventaCabecera', { params: { idOperacion: 1 } }).reply(200, {
        data:
        {
            "Titulo_comp_vta": "Nota de Venta con aprobación",
            "moneda": [
                {
                    "cod_moneda": "$",
                    "desc_moneda": "Pesos Arg.",
                    "cotiz": 1,
                },
                {
                    "cod_moneda": "U$S",
                    "desc_moneda": "Dolar Estadounidense",
                    "cotiz": 43.52,
                },
            ],
            "vendedor": [
                {
                    "cod_vendedor": 32,
                    "nom_vendedor": "Carlos Fernandez",
                },
                {
                    "cod_vendedor": 45,
                    "nom_vendedor": "Pedro Martinez",
                },
            ],
            "cond_comp_vta": [
                {
                    "cod_cond_vta": "CO",
                    "desc_cond_vta": "Contado",
                },
                {
                    "cod_cond_vta": "CC30",
                    "desc_cond_vta": "Cta.Cte. 30 días",
                }
            ],
            "transporte": [
                {
                    "cod_transp": "TR01",
                    "nom_transp": "Fletes del Sur",
                },
                {
                    "cod_transp": "TR56",
                    "nom_transp": "Trasporte Gutierrez",
                },
            ],
            "suc_empresa": [
                {
                    "cod_suc": "00",
                    "nom_suc": "Casa Central",
                },
                {
                    "cod_suc": "03",
                    "nom_suc": "Suc. San Isidro",
                },
            ],
            "atrib_comp_vta": [
                {
                    "cod_atrib": "TIPOENV",
                    "descripcion": "Tipo de Envio",
                    "tipo": "char",
                    "largo": 30,
                    "formato": "",
                    "orden": 1,
                    "valores": [
                        {
                            "cod_valor": "01",
                            "desc_valor": "Normal",
                        },
                        {
                            "cod_valor": "02",
                            "desc_valor": "Urg 24 hs",
                        },
                        {
                            "cod_valor": "03",
                            "desc_valor": "Urg 12 hs",
                        },
                    ]
                },
                {
                    "cod_atrib": "OBSERV",
                    "descripcion": "Observación",
                    "tipo": "char",
                    "largo": 50,
                    "formato": "",
                    "orden": 2,
                    "valores": []
                },
                {
                    "cod_atrib": "Costo",
                    "descripcion": "Costo Flete",
                    "tipo": "num",
                    "largo": 15,
                    "formato": "999.999,99",
                    "orden": 3,
                    "valores": []
                },
                {
                    "cod_atrib": "sede",
                    "descripcion": "Sede Administrativa",
                    "tipo": "autocomp",
                    "largo": 15,
                    "formato": "",
                    "orden": 3,
                    "valores": []
                }
            ]
        }
    });

}