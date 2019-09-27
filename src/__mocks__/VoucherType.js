
export default (mockAdapter) => {

    mockAdapter.onGet('/TipoComprobantes/consulta', { params: { "idComprobante": "C.NVCR" } }).reply(200, {
        data: {
            "idOperacion": 12345,
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
                    "cod_proceso": "p_cargaitemvta",
                    "desc_proceso": "Carga de Items",
                    "orden": 3
                },
                {
                    "cod_proceso": "p_afectcomprob",
                    "desc_proceso": "Afectacion Comprobante",
                    "orden": 5
                },
                {
                    "cod_proceso": "p_fincomprob",
                    "desc_proceso": "Final Comprobante",
                    "orden": 9
                },
            ]
        }
    });


    mockAdapter.onGet('/TipoComprobantes/consulta', { params: { "idComprobante": "C.NVAP" } }).reply(200, {
        data: {
            "idOperacion": 12345,
            "cod_comprob": "C.NVAP",
            "descrip_comprob": "Pedido reserva autom.",
            "descrip_tipocomp": "Pedido",
            "procesos": [
                {
                    "cod_proceso": "p_selcli",
                    "desc_proceso": "Selección cliente",
                    "orden:": 1
                },
                {
                    "cod_proceso": "p_cargaitemvta",
                    "desc_proceso": "Carga de Items",
                    "orden:": 3
                },
                {
                    "cod_proceso": "p_fincomprob",
                    "desc_proceso": "Final Comprobante",
                    "orden:": 9
                },
            ]
        }
    });


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

}