
export default (mockAdapter) => {

    mockAdapter.onGet('/TipoDeComprobante').reply(200,
        {
            "idOperacion": 21,
            "cod_comprob": "C.NVCR",
            "descrip_comprob": "Pedido reserva autom.",
            "descrip_tipocomp": "Pedido",
            "procesos": [
                {

                    "cod_proceso": "p_selcli",
                    "desc_proceso": "Selección cliente",
                    "orden": 1
                },
                {
                    "cod_proceso": "p_vtacab",
                    "desc_proceso": "Datos de Cabecera",
                    "orden": 2
                },
                {
                    "cod_proceso": "p_impuesto",
                    "desc_proceso": "Impuestos",
                    "orden": 3
                },
                {
                    "cod_proceso": "p_cargaitemvta",
                    "desc_proceso": "Carga de Items",
                    "orden": 4
                },
                {
                    "cod_proceso": "p_afec_estados_vta",
                    "desc_proceso": "Afectacion Estado",
                    "orden": 5
                },
                {
                    "cod_proceso": "p_afec_cant_vta",
                    "desc_proceso": "Afectacion Comprobante",
                    "orden": 6
                },
                {
                    "cod_proceso": "p_afec_impo_vta",
                    "desc_proceso": "Afectacion Importe",
                    "orden": 7
                },
                {
                    "cod_proceso": "p_asto_comprob",
                    "desc_proceso": "Asiento Contable",
                    "orden": 8
                },
                {
                    "cod_proceso": "p_fincomprob",
                    "desc_proceso": "Generar",
                    "orden": 9
                },
            ]
        }
    );

    mockAdapter.onGet('/TipoDeComprobante', { params: { idOperacion: "21" } }).reply(200,
        {
            "idOperacion": 21,
            "cod_comprob": "C.NVCR",
            "descrip_comprob": "Pedido reserva autom.",
            "descrip_tipocomp": "Pedido",
            "procesos": [
                {

                    "cod_proceso": "p_selcli",
                    "desc_proceso": "Selección cliente",
                    "orden": 1
                },
                {
                    "cod_proceso": "p_vtacab",
                    "desc_proceso": "Datos de Cabecera",
                    "orden": 2
                },
                {
                    "cod_proceso": "p_impuesto",
                    "desc_proceso": "Impuestos",
                    "orden": 3
                },
                {
                    "cod_proceso": "p_cargaitemvta",
                    "desc_proceso": "Carga de Items",
                    "orden": 4
                },
                {
                    "cod_proceso": "p_afec_estados_vta",
                    "desc_proceso": "Afectacion Estado",
                    "orden": 5
                },
                {
                    "cod_proceso": "p_afec_cant_vta",
                    "desc_proceso": "Afectacion Comprobante",
                    "orden": 6
                },
                {
                    "cod_proceso": "p_afec_impo_vta",
                    "desc_proceso": "Afectacion Importe",
                    "orden": 7
                },
                {
                    "cod_proceso": "p_asto_comprob",
                    "desc_proceso": "Asiento Contable",
                    "orden": 8
                },
                {
                    "cod_proceso": "p_fincomprob",
                    "desc_proceso": "Generar",
                    "orden": 9
                },
            ]
        }
    );


    mockAdapter.onGet('/TipoComprobantes/user').reply(200, {
        data: [
            {
                "modulo": "Compras",
                "cod_comprob": "OCPA",
                "descrip_comprob": "Orden de compra manual",
                "descrip_tipocomp": "Orden Compra",
            },
            {
                "modulo": "Ventas",
                "cod_comprob": "NVCR",
                "descrip_comprob": "Pedido reserva autom.",
                "descrip_tipocomp": "Pedido",
            },
            {
                "modulo": "Ventas",
                "cod_comprob": "NVRM",
                "descrip_comprob": "Pedido reserva manual",
                "descrip_tipocomp": "Pedido",
            }
        ]

    });

    mockAdapter.onGet('/TipoComprobante/Cancelar').reply(200, "El comprobante se cancelo correctamente.");

    mockAdapter.onGet('/TipoDeComprobante/Guardar').reply(200, "El comprobante se guardo correctamente.");

}