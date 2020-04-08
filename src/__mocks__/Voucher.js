
export default (mockAdapter) => {


    mockAdapter.onGet('/ProcesoDeComprobante', { params: { cod_proceso: 'p_selcli', idOperacion: 21 } }).reply(200,
        {
            "cod_proceso": "p_selcli",
            "descrip_proceso": "Selección Cliente",
            "orden": "1",
            "campos": [
                {
                    "idCampo": "cliente_razon_social",
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
                    "idCampo": "cliente_Tipo_resp",
                    "descripcion": "Tipo Responsable",
                    "label": "Tipo Responsable",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_identificador",
                    "descripcion": "CUIT",
                    "label": "C.U.I.T",
                    "editable": 1,
                    "requerido": 1,
                    "visible": 1,
                    "valid": "",
                    "mascara": "idTrabajador"
                },
                {
                    "idCampo": "cliente_Contacto",
                    "descripcion": "Contacto",
                    "label": "Contacto",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Telefono",
                    "descripcion": "Telefono",
                    "label": "Teléfono",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_email",
                    "descripcion": "email",
                    "label": "Correo",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_domicilio",
                    "descripcion": "direccion",
                    "label": "Dirección",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Localidad",
                    "descripcion": "Localidad",
                    "label": "Localidad",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Provincia",
                    "descripcion": "Provincia",
                    "label": "Provincia",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Cpos",
                    "descripcion": "codigo postal",
                    "label": "Código postal",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Limcred",
                    "descripcion": "Credito",
                    "label": "Límite Crédito",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Pendcred",
                    "descripcion": "saldo pendiente",
                    "label": "Crédito pendiente",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Saldo",
                    "descripcion": "credito saldo",
                    "label": "Saldo",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Sucursales",
                    "descripcion": "sucursales",
                    "label": "Cliente Sucursal",
                    "editable": 1,
                    "requerido": 1,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Obs_cc",
                    "descripcion": "Observaciones cuenta corriente",
                    "label": "Obs. Cta. Cte.",
                    "editable": 1,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Obs_vta",
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

    mockAdapter.onGet('/ProcesoDeComprobante', { params: { cod_proceso: 'p_selcli', idOperacion: 22 } }).reply(200,
        {
            "cod_proceso": "p_selcli",
            "descrip_proceso": "Selección Cliente",
            "orden": "1",
            "campos": [
                {
                    "idCampo": "cliente_razon_social",
                    "descripcion": "Razón social cliente",
                    "label": "R.Social",
                    "editable": 0,
                    "requerido": 1,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_codigo",
                    "descripcion": "Código cliente",
                    "label": "Código",
                    "editable": 0,
                    "requerido": 1,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Tipo_resp",
                    "descripcion": "Tipo Responsable",
                    "label": "Tipo Responsable",
                    "editable": 0,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_identificador",
                    "descripcion": "CUIT",
                    "label": "C.U.I.T",
                    "editable": 0,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": "idTrabajador"
                },
                {
                    "idCampo": "cliente_Contacto",
                    "descripcion": "Contacto",
                    "label": "Contacto",
                    "editable": 0,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Telefono",
                    "descripcion": "Telefono",
                    "label": "Teléfono",
                    "editable": 0,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_email",
                    "descripcion": "email",
                    "label": "Correo",
                    "editable": 0,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_domicilio",
                    "descripcion": "direccion",
                    "label": "Dirección",
                    "editable": 0,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Localidad",
                    "descripcion": "Localidad",
                    "label": "Localidad",
                    "editable": 0,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Provincia",
                    "descripcion": "Provincia",
                    "label": "Provincia",
                    "editable": 0,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Cpos",
                    "descripcion": "codigo postal",
                    "label": "Código postal",
                    "editable": 0,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Limcred",
                    "descripcion": "Credito",
                    "label": "Límite Crédito",
                    "editable": 0,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Pendcred",
                    "descripcion": "saldo pendiente",
                    "label": "Crédito pendiente",
                    "editable": 0,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Saldo",
                    "descripcion": "credito saldo",
                    "label": "Saldo",
                    "editable": 0,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Sucursales",
                    "descripcion": "sucursales",
                    "label": "Cliente Sucursal",
                    "editable": 0,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Obs_cc",
                    "descripcion": "Observaciones cuenta corriente",
                    "label": "Obs. Cta. Cte.",
                    "editable": 0,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
                {
                    "idCampo": "cliente_Obs_vta",
                    "descripcion": "Observaciones de la venta",
                    "label": "Obs. Ventas",
                    "editable": 0,
                    "requerido": 0,
                    "visible": 1,
                    "valid": "",
                    "mascara": ""
                },
            ]

        });

    mockAdapter.onGet('/ProcesoDeComprobante', { params: { cod_proceso: "p_vtacab", idOperacion: "21" } }).reply(200,
        {
            "cod_proceso": "p_vtacab",
            "desc_proceso": "Datos de Cabecera Vta.",
            "orden": 2,
            "campos": [
                {
                    "idCampo": "Suc_empresa_vta               ",
                    "descrip": "",
                    "label": "Sucursal",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "Titulo_comp_vta               ",
                    "descrip": "",
                    "label": "Comprobante",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "fecha_comp_vta                ",
                    "descrip": "",
                    "label": "Fecha",
                    "mascara": "FechaLarga",
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "mon_comp_vta                  ",
                    "descrip": "",
                    "label": "Moneda",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "cotiz_comp_vta                ",
                    "descrip": "",
                    "label": "Cotización",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "cotiz_vta_cambio              ",
                    "descrip": "",
                    "label": "",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "vend_comp_vta                 ",
                    "descrip": "",
                    "label": "Vendedor",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "cond_comp_vta                 ",
                    "descrip": "",
                    "label": "Cond.Vta.",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "transp_comp_vta               ",
                    "descrip": "",
                    "label": "Transportista",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "atrib_comp_vta                ",
                    "descrip": "",
                    "label": "Atributos",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                }
            ]
        }
    );

    mockAdapter.onGet('/ProcesoDeComprobante', { params: { cod_proceso: "p_vtacab", idOperacion: "22" } }).reply(200,
        {
            "cod_proceso": "p_vtacab",
            "desc_proceso": "Datos de Cabecera Vta.",
            "orden": 2,
            "campos": [
                {
                    "idCampo": "Suc_empresa_vta               ",
                    "descrip": "",
                    "label": "Sucursal",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "Titulo_comp_vta               ",
                    "descrip": "",
                    "label": "Comprobante",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "fecha_comp_vta                ",
                    "descrip": "",
                    "label": "Fecha",
                    "mascara": "FechaLarga",
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "mon_comp_vta                  ",
                    "descrip": "",
                    "label": "Moneda",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "cotiz_comp_vta                ",
                    "descrip": "",
                    "label": "Cotización",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "cotiz_vta_cambio              ",
                    "descrip": "",
                    "label": "",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "vend_comp_vta                 ",
                    "descrip": "",
                    "label": "Vendedor",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "cond_comp_vta                 ",
                    "descrip": "",
                    "label": "Cond.Vta.",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "transp_comp_vta               ",
                    "descrip": "",
                    "label": "Transportista",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "atrib_comp_vta                ",
                    "descrip": "",
                    "label": "Atributos",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                }
            ]
        }
    );

    mockAdapter.onGet('/ProcesoDeComprobante', { params: { cod_proceso: 'p_cargaitemvta', idOperacion: 21 } }).reply(200,
        {
            "cod_proceso": "p_cargaitemvta",
            "desc_proceso": "Carga de Items",
            "orden": 3,
            "campos": [
                {
                    "idCampo": "desc_prod                     ",
                    "descrip": "",
                    "label": "Producto",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "cod_prod                      ",
                    "descrip": "",
                    "label": "Cod.Prod.",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "cod_unid                      ",
                    "descrip": "",
                    "label": "UM",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "ind_stock                     ",
                    "descrip": "",
                    "label": "",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "cantidad                      ",
                    "descrip": "",
                    "label": "Cantidad",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "pcio_unit                     ",
                    "descrip": "",
                    "label": "Precio",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "modif_pcio                    ",
                    "descrip": "",
                    "label": "",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "neto                          ",
                    "descrip": "",
                    "label": "Neto",
                    "mascara": null,
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "fec_entrega                   ",
                    "descrip": "",
                    "label": "Fec.Entrega",
                    "mascara": "FechaLarga",
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "avisos                        ",
                    "descrip": "",
                    "label": "",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                }
            ]
        }
    );


    mockAdapter.onGet('/ProcesoDeComprobante', { params: { cod_proceso: 'p_afec_cant_vta', idOperacion: 21 } }).reply(200,
        {
            "cod_proceso": "p_afec_cant_vta",
            "desc_proceso": "Afectación Cantidades",
            "orden": 3,
            "campos": [
                {
                    "idCampo": "Fec_emis                      ",
                    "descrip": "",
                    "label": "Fecha",
                    "mascara": "FechaCorta",
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Fec_vto                       ",
                    "descrip": "",
                    "label": "Fec.Vto.",
                    "mascara": "FechaCorta",
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Comprob_nro                   ",
                    "descrip": "",
                    "label": "Comprobante",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Comprob_desc                  ",
                    "descrip": "",
                    "label": "Desc. Comp.",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Cod_prod                      ",
                    "descrip": "",
                    "label": "Producto",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Desc_prod                     ",
                    "descrip": "",
                    "label": "Detalle",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Cant_pend                     ",
                    "descrip": "",
                    "label": "Pendiente",
                    "mascara": "CantidadEntera",
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Cod_unid                      ",
                    "descrip": "",
                    "label": "Unidad",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Cant_afec                     ",
                    "descrip": "",
                    "label": "Cant. Afectada",
                    "mascara": "CantidadEntera",
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "pcio_unit                     ",
                    "descrip": "",
                    "label": "Precio Unitario",
                    "mascara": "PrecioUnitUsual",
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "modif_pcio                    ",
                    "descrip": "",
                    "label": null,
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "neto                          ",
                    "descrip": "",
                    "label": "Importe Neto",
                    "mascara": "NetoUsual",
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "cant_saldo                    ",
                    "descrip": "",
                    "label": "Saldo",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                }
            ]
        }
    );

    mockAdapter.onGet('/ProcesoDeComprobante', { params: { cod_proceso: 'p_afec_cant_vta', idOperacion: 22 } }).reply(200,
        {
            "cod_proceso": "p_afec_cant_vta",
            "desc_proceso": "Afectación Cantidades",
            "orden": 3,
            "campos": [
                {
                    "idCampo": "Fec_emis                      ",
                    "descrip": "",
                    "label": "Fecha",
                    "mascara": "FechaCorta",
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Fec_vto                       ",
                    "descrip": "",
                    "label": "Fec.Vto.",
                    "mascara": "FechaCorta",
                    "editable": 0,
                    "visible": 0,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Comprob_nro                   ",
                    "descrip": "",
                    "label": "Comprobante",
                    "mascara": null,
                    "editable": 0,
                    "visible": 0,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Comprob_desc                  ",
                    "descrip": "",
                    "label": "Desc. Comp.",
                    "mascara": null,
                    "editable": 0,
                    "visible": 0,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Cod_prod                      ",
                    "descrip": "",
                    "label": "Producto",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Desc_prod                     ",
                    "descrip": "",
                    "label": "Detalle",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Cant_pend                     ",
                    "descrip": "",
                    "label": "Pendiente",
                    "mascara": "CantidadEntera",
                    "editable": 0,
                    "visible": 0,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Cod_unid                      ",
                    "descrip": "",
                    "label": "Unidad",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "Cant_afec                     ",
                    "descrip": "",
                    "label": "Cant. Afectada",
                    "mascara": "CantidadEntera",
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "pcio_unit                     ",
                    "descrip": "",
                    "label": "Precio Unitario",
                    "mascara": "PrecioUnitUsual",
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "modif_pcio                    ",
                    "descrip": "",
                    "label": null,
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                },
                {
                    "idCampo": "neto                          ",
                    "descrip": "",
                    "label": "Importe Neto",
                    "mascara": "NetoUsual",
                    "editable": 1,
                    "visible": 1,
                    "requerido": 1,
                    "valid": null
                },
                {
                    "idCampo": "cant_saldo                    ",
                    "descrip": "",
                    "label": "Saldo",
                    "mascara": null,
                    "editable": 0,
                    "visible": 1,
                    "requerido": 0,
                    "valid": null
                }
            ]
        }
    );

    mockAdapter.onGet('/ProcesoDeComprobante', { params: { cod_proceso: 'p_afec_impo_vta', idOperacion: 21 } }).reply(200, {
        "cod_proceso": "p_afec_impo_vta",
        "descrip_proceso": "Afectacion Importe",
        "orden": "8",
        "campos": [
            { "idCampo": "fec_emis", "descripcion": "Fecha", "label": "Fecha", "editable": 0, "visible": 1, "requerido": "0", "valid": "FEC>=H", "mascara": "FechaLarga" },
            { "idCampo": "fec_vto", "descripcion": "Fecha Venta", "label": "Fec. Vta.", "editable": 0, "visible": 1, "requerido": "0", "valid": "FEC>=H", "mascara": "FechaLarga" },
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

    });

    mockAdapter.onGet('/ProcesoDeComprobante', { params: { cod_proceso: 'p_afec_impo_vta', idOperacion: 22 } }).reply(200, {
        "cod_proceso": "p_afec_impo_vta",
        "descrip_proceso": "Afectacion Importe",
        "orden": "8",
        "campos": [
            {
                "idCampo": "fec_emis",
                "descripcion": "Fecha",
                "label": "Fecha",
                "editable": 0,
                "visible": 1,
                "requerido": "0",
                "valid": "FEC>=H",
                "mascara": "FechaLarga"
            },
            {
                "idCampo": "fec_vto",
                "descripcion": "Fecha Venta",
                "label": "Fec. Vta.",
                "editable": 0,
                "visible": 0,
                "requerido": "0",
                "valid": "FEC>=H",
                "mascara": "FechaLarga"
            },
            {
                "idCampo": "comprob_nro",
                "descripcion": "Comprobante",
                "label": "Comprobante",
                "editable": 0,
                "visible": 0,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "comprob_desc",
                "descripcion": "Comprobante Nombre",
                "label": "Nombre Comprobante",
                "editable": 0,
                "visible": 0,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "cod_prod",
                "descripcion": "Código Producto",
                "label": "Producto",
                "editable": 0,
                "visible": 0,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "desc_prod",
                "descripcion": "Nombre Producto",
                "label": "Detalle",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "imp_pend",
                "descripcion": "Importe pendiente",
                "label": "Imp. Pend.",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "cotiz",
                "descripcion": "Cotización del comprob. afectado",
                "label": "Cotiz",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "imp_afec",
                "descripcion": "Importe afectado",
                "label": "Importe Afectado",
                "editable": 1,
                "visible": 1,
                "mascara": "",
                "requerido": "1",
                "valid": "VAL>0"
            },
            {
                "idCampo": "neto",
                "descripcion": "neto",
                "label": "Neto",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "saldo",
                "descripcion": "salod",
                "label": "Saldo",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": 0,
                "valid": "VAL>0"
            },
        ]

    });

    mockAdapter.onGet('/ProcesoDeComprobante', { params: { cod_proceso: 'p_afec_estados_vta', idOperacion: 21 } }).reply(200, {
        "cod_proceso": "p_afec_estados_vta",
        "descrip_proceso": "Afectacion Importe",
        "orden": "8",
        "campos": [
            {
                "idCampo": "fec_emis",
                "descripcion": "Fecha",
                "label": "Fecha",
                "editable": 0,
                "visible": 1,
                "requerido": "0",
                "valid": "FEC>=H",
                "mascara": "FechaLarga"
            },

            {
                "idCampo": "fec_vto",
                "descripcion": "Fecha Venta",
                "label": "Fec. Vta.",
                "editable": 0,
                "visible": 1,
                "requerido": "0",
                "valid": "FEC>=H",
                "mascara": "FechaLarga"
            },
            {
                "idCampo": "comprob_nro",
                "descripcion": "Comprobante",
                "label": "Numero",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "comprob_desc",
                "descripcion": "Comprobante Nombre",
                "label": "Comprobante",
                "editable": 0,
                "visible": 1,
                "mascara": "", "requerido": "0"
            },
            {
                "idCampo": "desc_cond_vta",
                "descripcion": "Condicion de venta",
                "label": "Cond. Venta",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "desc_item",
                "descripcion": "Detalle del Item",
                "label": "Item.detalle",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "cod_prod",
                "descripcion": "Producto",
                "label": "Producto",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "cod_mone",
                "descripcion": "Moneda",
                "label": "Moneda",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "cod_unid",
                "descripcion": "Present",
                "label": "Prensent.",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "cant_pend",
                "descripcion": "Cantidad Pendiente",
                "label": "Cant. Pendiente",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "imp_pend",
                "descripcion": "Importe Pendiente",
                "label": "Imp. Pendiente",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "estado_orig",
                "descripcion": "Estado",
                "label": "Estado",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "estado_afec",
                "descripcion": "Estado Afectado",
                "label": "Estado Afectado",
                "editable": 1,
                "visible": 1,
                "mascara": "",
                "requerido": "1"
            },

        ]

    });

    mockAdapter.onGet('/ProcesoDeComprobante', { params: { cod_proceso: 'p_afec_estados_vta', idOperacion: 22 } }).reply(200, {
        "cod_proceso": "p_afec_estados_vta",
        "descrip_proceso": "Afectacion Importe",
        "orden": "8",
        "campos": [
            {
                "idCampo": "fec_emis",
                "descripcion": "Fecha",
                "label": "Fecha",
                "editable": 0,
                "visible": 1,
                "requerido": "0",
                "valid": "FEC>=H",
                "mascara": "FechaLarga"
            },

            {
                "idCampo": "fec_vto",
                "descripcion": "Fecha Venta",
                "label": "Fec. Vta.",
                "editable": 0,
                "visible": 0,
                "requerido": "0",
                "valid": "FEC>=H",
                "mascara": "FechaLarga"
            },
            {
                "idCampo": "comprob_nro",
                "descripcion": "Comprobante",
                "label": "Numero",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "comprob_desc",
                "descripcion": "Comprobante Nombre",
                "label": "Comprobante",
                "editable": 0,
                "visible": 0,
                "mascara": "", "requerido": "0"
            },
            {
                "idCampo": "desc_cond_vta",
                "descripcion": "Condicion de venta",
                "label": "Cond. Venta",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "desc_item",
                "descripcion": "Detalle del Item",
                "label": "Item.detalle",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "cod_prod",
                "descripcion": "Producto",
                "label": "Producto",
                "editable": 0,
                "visible": 0,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "cod_mone",
                "descripcion": "Moneda",
                "label": "Moneda",
                "editable": 0,
                "visible": 0,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "cod_unid",
                "descripcion": "Present",
                "label": "Prensent.",
                "editable": 0,
                "visible": 0,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "cant_pend",
                "descripcion": "Cantidad Pendiente",
                "label": "Cant. Pendiente",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "imp_pend",
                "descripcion": "Importe Pendiente",
                "label": "Imp. Pendiente",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "estado_orig",
                "descripcion": "Estado",
                "label": "Estado",
                "editable": 0,
                "visible": 1,
                "mascara": "",
                "requerido": "0"
            },
            {
                "idCampo": "estado_afec",
                "descripcion": "Estado Afectado",
                "label": "Estado Afectado",
                "editable": 1,
                "visible": 1,
                "mascara": "",
                "requerido": "1"
            },

        ]

    });

    mockAdapter.onGet('/ProcesoDeComprobante', { params: { cod_proceso: 'p_asto_comprob', idOperacion: 21 } }).reply(200, {
        "cod_proceso": "p_asto_comprob",
        "descrip_proceso": "Asiento Contable",
        "orden": "8",
        "campos": [
            {
                "idCampo": "niasto",
                "descripcion": "Niasto",
                "label": "Niasto",
                "editable": 0,
                "visible": 0,
                "requerido": "0",
                "valid": null,
                "mascara": null
            },
            {
                "idCampo": "nitem",
                "descripcion": "IT",
                "label": "IT",
                "editable": 0,
                "visible": 1,
                "requerido": "0",
                "valid": null,
                "mascara": null
            },
            {
                "idCampo": "cuenta",
                "descripcion": "Cuenta",
                "label": "Cuenta",
                "editable": 1,
                "visible": 1,
                "requerido": "0",
                "valid": null,
                "mascara": null
            },

            {
                "idCampo": "detalle",
                "descripcion": "Detalle",
                "label": "Detalle",
                "editable": 0,
                "visible": 1,
                "requerido": "0",
                "valid": null,
                "mascara": null
            },
            {
                "idCampo": "centrocosto",
                "descripcion": "Centro de costo",
                "label": "C. Costos",
                "editable": 1,
                "visible": 1,
                "requerido": "0",
                "valid": null,
                "mascara": null
            },
            {
                "idCampo": "masc_cta",
                "descripcion": "Descripcion Centro de costo",
                "label": "Desc. C.C.",
                "editable": 0,
                "visible": 0,
                "requerido": "0",
                "valid": null,
                "mascara": null
            },

            {
                "idCampo": "debe",
                "descripcion": "Debe",
                "label": "Debe",
                "editable": 0,
                "visible": 1,
                "requerido": "0",
                "valid": null,
                "mascara": null
            },
            {
                "idCampo": "haber",
                "descripcion": "haber",
                "label": "Haber",
                "editable": 0,
                "visible": 1,
                "requerido": "0",
                "valid": null,
                "mascara": null
            },
        ]

    });

    mockAdapter.onGet('/ProcesoDeComprobante', { params: { cod_proceso: 'p_impuesto', idOperacion: 21 } }).reply(200, {
        "cod_proceso": "p_impuesto",
        "descrip_proceso": "Impuesto",
        "orden": "8",
        "campos": [
            {
                "idCampo": "desc_imp",
                "descripcion": "Impuesto",
                "label": "Impuesto",
                "editable": 0,
                "visible": 1,
                "requerido": "0",
                "valid": null,
                "mascara": null
            },
            {
                "idCampo": "tasa",
                "descripcion": "Tasa",
                "label": "Tasa",
                "editable": 1,
                "visible": 1,
                "requerido": "0",
                "valid": null,
                "mascara": null
            },
            {
                "idCampo": "alicuota",
                "descripcion": "Alícouta",
                "label": "Alícouta",
                "editable": 1,
                "visible": 1,
                "requerido": "0",
                "valid": null,
                "mascara": null
            },

            {
                "idCampo": "impuesto",
                "descripcion": "Impuesto",
                "label": "Impuesto",
                "editable": 1,
                "visible": 1,
                "requerido": "0",
                "valid": null,
                "mascara": null
            },
            {
                "idCampo": "base_calc",
                "descripcion": "Base Calculo",
                "label": "Base Calculo",
                "editable": 1,
                "visible": 1,
                "requerido": "0",
                "valid": null,
                "mascara": null
            },
            {
                "idCampo": "nro_certif",
                "descripcion": "Numero de certificado",
                "label": "Nro. Certificado",
                "editable": 1,
                "visible": 0,
                "requerido": "0",
                "valid": null,
                "mascara": null
            },
        ]

    });


    mockAdapter.onGet('/Comprobantes/usuario').reply(200,
        [
            {
                "modulo": "Ventas",
                "nioperacion": 2,
                "cod_comprob": "NVSA",
                "descrip_comprob": "Nota de Venta",
                "descrip_tipocomp": "NOTAS DE VENTA"
            },
            /*{
                "modulo": "Ventas",
                "nioperacion": 1,
                "cod_comprob": "NVSA",
                "descrip_comprob": "Pedido reserva autom.",
                "descrip_tipocomp": "NOTAS DE VENTA"
            },
            {
                "modulo": "Ventas",
                "nioperacion": 3,
                "cod_comprob": "PRE",
                "descrip_comprob": "Presupuesto",
                "descrip_tipocomp": "NOTAS DE VENTA"
            }*/
        ]
    )

    mockAdapter.onGet('/comprobante/encabezado').reply(200,
        {
            "Resultado": {
                "Resultado": true,
                "Tipo_error": null,
                "Mens_error": null,
                "Errores": null
            },
            "total_importe": 51916.31,
            "total_item": 7,
            "total_cant": 389.0,
            "tipo_comprobante": "NOTAS DE VENTA",
            "descrip_comprobante": "Pedido reserva autom.",
            "razon_social": "CCFCIAFC00764 - FARMACIA 25 DE MAYO - MIELNIK HUGO R.",
            "dato1": "29/11/2019",
            "dato2": "Alejandro Gonzalez",
            "dato3": "Transportista: CTES RUTA A CENTRO",
            "dato4": ""
        }
    )
    mockAdapter.onPost('/vta_cab_compr/confirmar').reply(200,
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