
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

    /* mockAdapter.onGet('/Comprobantes/config', { params: { cod_proceso: 1, idOperacion: 1 } }).reply(200,
         {
             "cod_proceso": "P_SELCLI",
             "descrip_proceso": "Selección Cliente",
             "orden": "1",
             "campos": [
                 {
                     "idCampo": "rsocial",
                     "descripcion": "Razón social cliente",
                     "label": "R.Social",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "cliente_codigo",
                     "descripcion": "Código cliente",
                     "label": "Código",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "tipo_resp",
                     "descripcion": "Tipo Responsable",
                     "label": "Tipo Responsable",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "cuit",
                     "descripcion": "CUIT",
                     "label": "C.U.I.T",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": "idTrabajador"
                 },
                 {
                     "idCampo": "contacto",
                     "descripcion": "Contacto",
                     "label": "Contacto",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "suc_tel",
                     "descripcion": "Telefono",
                     "label": "Teléfono",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "suc_email",
                     "descripcion": "email",
                     "label": "Correo",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "suc_address",
                     "descripcion": "direccion",
                     "label": "Dirección",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "suc_local",
                     "descripcion": "Localidad",
                     "label": "Localidad",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "suc_nom_prov",
                     "descripcion": "Provincia",
                     "label": "Provincia",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "suc_cpos",
                     "descripcion": "codigo postal",
                     "label": "Código postal",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "credito",
                     "descripcion": "Credito",
                     "label": "Límite Crédito",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "saldo_pend",
                     "descripcion": "saldo pendiente",
                     "label": "Crédito pendiente",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "credito_saldo",
                     "descripcion": "credito saldo",
                     "label": "Saldo",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "sucursales",
                     "descripcion": "sucursales",
                     "label": "Cliente Sucursal",
                     "editable": 1,
                     "requerido": 1,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "obs_cc",
                     "descripcion": "Observaciones cuenta corriente",
                     "label": "Obs. Cta. Cte.",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "obs_ventas",
                     "descripcion": "Observaciones de la venta",
                     "label": "Obs. Ventas",
                     "editable": 1,
                     "requerido": 0,
                     "visible": 1,
                     "valid": "",
                     "mascara": ""
                 },
             ]
 
         });
 
     mockAdapter.onGet('/ProcesossDeComprobante').reply(200, {
         data: {
             "cod_proceso": "P_vtacab",
             "descrip_proceso": "Carga datos cabecera ventas",
             "orden": "2",
             "campos": [
                 {
                     "idCampo": "suc_empresa_venta",
                     "descripcion": "Suc.Empresa",
                     "label": "Suc.Empresa",
                     "editable": 1,
                     "visible": 1,
                     "requerido": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "Titulo_comp_vta",
                     "descripcion": "Titulo comprobante",
                     "label": "Titulo",
                     "editable": 1,
                     "visible": 1,
                     "requerido": 0,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "fecha",
                     "descripcion": "Fecha",
                     "label": "Fecha",
                     "editable": 1,
                     "visible": 1,
                     "requerido": 1,
                     "valid": "FEC>=H",
                     "mascara": "fechaLarga"
                 },
                 {
                     "idCampo": "mon_comp_vta",
                     "descripcion": "Moneda",
                     "label": "Moneda",
                     "editable": 1,
                     "visible": 1,
                     "requerido": 1,
                     "valid": "",
                     "mascara": ""
                 },
                 {
                     "idCampo": "cotiz",
                     "descripcion": "Cotización",
                     "label": "Cotización",
                     "editable": 0,
                     "visible": 1,
                     "requerido": 0,
                     "valid": "",
                     "mascara": ""
                 },
                 { "idCampo": "vend_comp_vta", "descripcion": "Vendedor", "label": "Vendedor", "editable": 1, "visible": 1, "requerido": 0, "valid": "", "mascara": "" },
                 { "idCampo": "cond_comp_vta", "descripcion": "Cond.Venta", "label": "Cond.Venta", "editable": 1, "visible": 1, "requerido": 1, "valid": "", "mascara": "" },
                 { "idCampo": "transp_comp_vta", "descripcion": "Transportista", "label": "Transportista", "editable": 0, "visible": 0, "requerido": 0, "valid": "", "mascara": "" },
                 { "idCampo": "atrib_comp_vta", "descripcion": "Atributos", "label": "Datos Adicionales", "editable": 1, "visible": 1, "requerido": 1, "valid": "", "mascara": "" }
 
             ]
         }
     });
 
     mockAdapter.onGet('/Comprobantes/config', { params: { cod_proceso: 'P_CargaItemenVentas', idOperacion: 1 } }).reply(200, {
         data: {
             "cod_proceso": "P_CargaItemenVentas",
             "descrip_proceso": "Carga Items de Ventas",
             "orden": "3",
             "campos": [
                 { "idCampo": "cod_prod", "descripcion": "Código Producto", "label": "Código", "editable": 0, "visible": 1, "mascara": "", "requerido": "0" },
                 { "idCampo": "desc_prod", "descripcion": "Nombre Producto", "label": "Producto", "editable": 0, "visible": 1, "mascara": "", "requerido": "0" },
                 { "idCampo": "unid_v", "descripcion": "Presentación", "label": "Unid/Pres", "editable": 1, "visible": 1, "mascara": "", "requerido": "0" },
                 { "idCampo": "cantidad", "descripcion": "cantidad", "label": "Cant", "editable": 1, "visible": 1, "mascara": "", "requerido": "1", "valid": "VAL>0" },
                 { "idCampo": "ind_stock", "descripcion": "Indic.Stock", "label": "", "editable": 0, "visible": 1, "mascara": "", "requerido": "0" },
                 { "idCampo": "precio_unit", "descripcion": "Precio unit.", "label": "Precio Unit", "editable": 1, "visible": 1, "requerido": "1", "valid": "VAL>0", "mascara": "precioUnitario" },
                 { "idCampo": "modif_pcio", "descripcion": "Clave para modificar precio", "label": "", "editable": 1, "visible": 0, "requerido": "0", "mascara": "" },
                 { "idCampo": "neto", "descripcion": "Importe neto", "label": "Neto", "editable": 1, "visible": 1, "mascara": "precioUnitario", "requerido": "1", "valid": "VAL>0" },
                 { "idCampo": "fec_entrega", "descripcion": "Fecha entrega", "label": "Fec.Entr.", "editable": 1, "visible": 1, "requerido": "0", "valid": "FEC>=H", "mascara": "fechaLarga" },
                 { "idCampo": "avisos", "descripcion": "avisos", "label": "Ofertas", "editable": 0, "visible": 1, "mascara": "", "requerido": "0" },
                 //{ "idCampo": "fin_item", "visible": 1, "mascara": "" },
             ]
         }
     });*/


    mockAdapter.onGet('/ProcesoDeComprobante', { params: { cod_proceso: 'p_afectcomprob' } }).reply(200, {
        data: {
            "cod_proceso": "p_afectcomprob",
            "descrip_proceso": "Afectacion Comprobante",
            "orden": "3",
            "campos": [
                { "idCampo": "fec_emis", "descripcion": "Fecha", "label": "Fecha", "editable": 0, "visible": 1, "requerido": "0", "valid": "FEC>=H", "mascara": "fechaLarga" },
                { "idCampo": "fec_vto", "descripcion": "Fecha Venta", "label": "Fecha Venta", "editable": 0, "visible": 0, "requerido": "0", "valid": "FEC>=H", "mascara": "fechaLarga" },
                { "idCampo": "comprob_nro", "descripcion": "Comprobante", "label": "Comprobante", "editable": 0, "visible": 1, "mascara": "", "requerido": "0" },
                { "idCampo": "comprob_desc", "descripcion": "Comprobante Nombre", "label": "Nombre Comprobante", "editable": 0, "visible": 0, "mascara": "", "requerido": "0" },
                { "idCampo": "cod_prod", "descripcion": "Código Producto", "label": "Producto", "editable": 0, "visible": 1, "mascara": "", "requerido": "0" },
                { "idCampo": "desc_prod", "descripcion": "Nombre Producto", "label": "Detalle", "editable": 0, "visible": 1, "mascara": "", "requerido": "0" },
                { "idCampo": "codbarra", "descripcion": "Codigo de Barra", "label": "Codigo de Barras", "editable": 0, "visible": 0, "mascara": "", "requerido": "0" },
                { "idCampo": "base_v", "descripcion": "Base", "label": "Base", "editable": 0, "visible": 0, "mascara": "", "requerido": "0" },
                { "idCampo": "cant_pend", "descripcion": "cantidad", "label": "Cant. Pend.", "editable": 0, "visible": 1, "mascara": "", "requerido": "0", "valid": "VAL>0" },
                { "idCampo": "cod_unid", "descripcion": "Presentación", "label": "Unidad", "editable": 0, "visible": 1, "mascara": "", "requerido": "0" },
                { "idCampo": "cant_afec", "descripcion": "Cantidad Afectada", "label": "Cant. Afectada", "editable": 1, "visible": 1, "mascara": "", "requerido": "1", "valid": "VAL>0" },
                { "idCampo": "ind_stock", "descripcion": "Indic.Stock", "label": "", "editable": 0, "visible": 0, "mascara": "", "requerido": "0" },
                { "idCampo": "precio_unit", "descripcion": "Precio unit.", "label": "Precio Unitario", "editable": 1, "visible": 1, "requerido": "1", "valid": "VAL>0", "mascara": "precioUnitario" },
                { "idCampo": "modif_pcio", "descripcion": "Clave para modificar precio", "label": "", "editable": 1, "visible": 0, "requerido": "0", "mascara": "" },
                { "idCampo": "neto", "descripcion": "Importe neto", "label": "Importe Neto", "editable": 1, "visible": 1, "mascara": "precioUnitario", "requerido": "1", "valid": "VAL>0" },
                { "idCampo": "cant_saldo", "descripcion": "Saldo", "label": "Saldo", "editable": 0, "visible": 1, "mascara": "", "requerido": "0", "valid": "VAL>0" },
            ]
        }
    });


    mockAdapter.onGet('/ProcesoDeComprobante', { params: { cod_proceso: 'p_afectcomprobimport' } }).reply(200, {
        data: {
            "cod_proceso": "p_afectcomprob",
            "descrip_proceso": "Afectacion Comprobante",
            "orden": "3",
            "campos": [
                { "idCampo": "fec_emis", "descripcion": "Fecha", "label": "Fecha", "editable": 0, "visible": 1, "requerido": "0", "valid": "FEC>=H", "mascara": "fechaLarga" },
                { "idCampo": "fec_vto", "descripcion": "Fecha Venta", "label": "Fecha Venta", "editable": 0, "visible": 1, "requerido": "0", "valid": "FEC>=H", "mascara": "fechaLarga" },
                { "idCampo": "comprob_nro", "descripcion": "Comprobante", "label": "Comprobante", "editable": 0, "visible": 1, "mascara": "", "requerido": "0" },
                { "idCampo": "comprob_desc", "descripcion": "Comprobante Nombre", "label": "Nombre Comprobante", "editable": 0, "visible": 0, "mascara": "", "requerido": "0" },
                { "idCampo": "cod_prod", "descripcion": "Código Producto", "label": "Producto", "editable": 0, "visible": 0, "mascara": "", "requerido": "0" },
                { "idCampo": "desc_prod", "descripcion": "Nombre Producto", "label": "Detalle", "editable": 0, "visible": 1, "mascara": "", "requerido": "0" },
                { "idCampo": "imp_pend", "descripcion": "Importe pendiente", "label": "Imp. Pend.", "editable": 0, "visible": 1, "mascara": "", "requerido": "0" },
                { "idCampo": "cotiz", "descripcion": "Cotización del comprob. afectado", "label": "Cotiz", "editable": 0, "visible": 1, "mascara": "", "requerido": "0" },
                { "idCampo": "imp_afec", "descripcion": "Importe afectado", "label": "Importe Afectado", "editable": 1, "visible": 1, "mascara": "", "requerido": "1", "valid": "VAL>0" },
                { "idCampo": "neto", "descripcion": "neto", "label": "Neto", "editable": 0, "visible": 1, "mascara": "", "requerido": "0" },
                { "idCampo": "saldo", "descripcion": "salod", "label": "Saldo", "editable": 0, "visible": 1, "mascara": "", "requerido": 0, "valid": "VAL>0" },
            ]
        }
    });

    mockAdapter.onGet('/Comprobantes/ventaCabecera', { params: { idOperacion: 1 } }).reply(200, {
        data: {
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