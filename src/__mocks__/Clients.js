
export default (mockAdapter) => {
  mockAdapter.onGet('/Clientes/Seleccion', { criterio_cliente: "far", idOperacion: 21 }).reply(200,
    {
      clientes: [
        { idCliente: '1', Cod_cliente: 'XLCO35', Rsocial: 'Farmacia Central', Clave_impo: 'XLSL321', Direccion: 'Calle 25 #25-6', Localidad: 'Lerida', Provincia: 'Tolima', Cpos: '92930' },
        { idCliente: '2', Cod_cliente: 'XLCO33', Rsocial: 'Farmacia Sur', Clave_impo: 'XLSL321', Direccion: 'Calle 25 #25-6', Localidad: 'Lerida', Provincia: 'Tolima', Cpos: '92930' }
      ]
    }
  );

  mockAdapter.onGet('/Clientes/Seleccion/Confirmar').reply(200, [
    {
      "mensaje": "ok"
    }
  ]);

  mockAdapter.onGet('/Clientes/Consulta').reply(200,
    {
      "idCliente": 2010,
      "cod_categ": "GESTION",
      "cliente_categoria": "Clientes externos",
      "cod_sin_formato": "CCFCIAFC00115",
      "cliente_codigo": "CC.FCIA.FC.00115",
      "cliente_razon_social": "CENTRAL PHARMA SRL",
      "cliente_abrev": ".",
      "Tipo_resp": "I",
      "cliente_Tipo_resp": "Resp.Inscripto",
      "cliente_identificador": "30715156098",
      "cliente_domicilio": "Cordoba 1501 ",
      "cliente_dom_calle": "Cordoba",
      "cliente_dom_nro": "1501",
      "cliente_dom_piso": "",
      "cliente_dom_dpto": "",
      "cliente_obs_direc": "",
      "cliente_Cpos": "3400",
      "cliente_Localidad": "CORRIENTES",
      "Dom_cod_prov": "W",
      "cliente_Provincia": "Corrientes",
      "cliente_pais": "ARGENTINA",
      "cliente_Telefono": "(0379 ) 4429338",
      "cliente_fax": "",
      "cliente_email": "",
      "Pagweb": "",
      "cliente_Contacto": "",
      "cod_monex": "U$S",
      "Vend_id": 46,
      "cliente_vendedor": "Lisandro Malvarez",
      "Cvta_cod": "00",
      "cliente_cond_vta": "Contado",
      "Trans_cod": "A01",
      "cliente_transportista": "CTES RUTA A CENTRO",
      "cliente_dir_loc_ega": "Cordoba 1501 esq. Rivadavia",
      "cliente_Saldo": 0.0,
      "cliente_Limcred": 5000.0,
      "cliente_Pendcred": 5000.0,
      "cliente_doc_tipo": null,
      "cliente_doc_nro": "0",
      "Cod_preclis": "01OFG",
      "Nom_preclis": "Of. Farmacias y Clinicas",
      "Cod_preclis2": "11LGC",
      "Nom_preclis2": "Gral C/Rembolso",
      "cliente_Obs_vta": "",
      "cliente_Obs_cc": "",
      "Obs_Desp": "",
      "Cto_fondos": "IIVT",
      "Cto_fondos_desc": "INGRESOS POR VENTAS",
      "Habilitado": 1,
      "Fecha_inicio": "1900-01-01T00:00:00",
      "Fecha_ult_venta": "0001-01-01T00:00:00",
      "Fecha_modif": "2019-04-03T14:56:03.543",
      "cliente_Sucursales": [
        {
          "suc_nro": 0,
          "suc_nombre": "Casa Central",
          "suc_calle": "Cordoba",
          "suc_dom_nro": "1501",
          "suc_piso": "",
          "suc_dpto": "",
          "suc_cpos": "3400",
          "suc_local": "CORRIENTES",
          "suc_cod_prov": "W",
          "suc_nom_prov": "Corrientes",
          "suc_pais": "ARGENTINA",
          "suc_email": "",
          "suc_telef": "(0379 ) 4429338",
          "suc_observ": "",
          "suc_obs_dom": "",
          "suc_Vend_id": 46,
          "suc_Vend_nom": "Lisandro Malvarez",
          "suc_trans_cod": "A01",
          "suc_trans_nom": "CTES RUTA A CENTRO",
          "suc_Cvta_cod": "00",
          "suc_Cvta_desc": "Contado",
          "suc_credito": 5000.0
        }
      ],
      "Atributos": [
        {
          "catributo": "CLICLAS   ",
          "desc_atributo": "Clasificacion cliente         ",
          "cod_dato": "V         ",
          "desc_dato": "Categoría VIP                                               "
        },
        {
          "catributo": "COBRO     ",
          "desc_atributo": "Cobranza Programada           ",
          "cod_dato": "0         ",
          "desc_dato": "Vencimiento Factura                                         "
        },
        {
          "catributo": "DELEGA    ",
          "desc_atributo": "Delegación                    ",
          "cod_dato": "1         ",
          "desc_dato": "Casa Central                                                "
        },
        {
          "catributo": "DISN      ",
          "desc_atributo": "Nº de Dispone                 ",
          "cod_dato": null,
          "desc_dato": "resol 0522/04                                               "
        },
        {
          "catributo": "DISV      ",
          "desc_atributo": "Vencimiento del Dispone       ",
          "cod_dato": null,
          "desc_dato": "31/03/2019                                                  "
        },
        {
          "catributo": "DROGCLIEXP",
          "desc_atributo": "Indica si exporta CID/IMS     ",
          "cod_dato": "SI        ",
          "desc_dato": "Se exporta datos del cliente                                "
        },
        {
          "catributo": "DROGGLN   ",
          "desc_atributo": "Codigo GLN 01                 ",
          "cod_dato": null,
          "desc_dato": "9991465000005                                               "
        },
        {
          "catributo": "DROGTIPAG ",
          "desc_atributo": "Tipo de Agente                ",
          "cod_dato": "5         ",
          "desc_dato": "FARMACIA                                                    "
        },
        {
          "catributo": "E_RESUMEN ",
          "desc_atributo": "Enviar Resumen por Correo E.  ",
          "cod_dato": "0         ",
          "desc_dato": "NO                                                          "
        },
        {
          "catributo": "IBJUR     ",
          "desc_atributo": "IIBB-Jurisdiccion             ",
          "cod_dato": "W         ",
          "desc_dato": "Corrientes                                                  "
        },
        {
          "catributo": "MMC       ",
          "desc_atributo": "Monto Mínimo de Compra        ",
          "cod_dato": "GRAL      ",
          "desc_dato": "500                                                         "
        },
        {
          "catributo": "OBJC      ",
          "desc_atributo": "Objetivo Comercial            ",
          "cod_dato": "01        ",
          "desc_dato": "Objetivo Comercial                                          "
        },
        {
          "catributo": "RAPIPAGO  ",
          "desc_atributo": "Código Pago Rapipago          ",
          "cod_dato": null,
          "desc_dato": "3786000000020101                                            "
        },
        {
          "catributo": "RT        ",
          "desc_atributo": "Responsable técnico           ",
          "cod_dato": null,
          "desc_dato": "Julian Jorge Ayala                                          "
        },
        {
          "catributo": "RUTA      ",
          "desc_atributo": "Ruta de Transporte            ",
          "cod_dato": "W0        ",
          "desc_dato": "Corrientes - Capital                                        "
        },
        {
          "catributo": "SEGMENTO  ",
          "desc_atributo": "Segmentación de Clientes      ",
          "cod_dato": "05        ",
          "desc_dato": "FARMAR                                                      "
        },
        {
          "catributo": "TFAC      ",
          "desc_atributo": "Tipo de facturación           ",
          "cod_dato": "FR        ",
          "desc_dato": "Factura y Remito                                            "
        },
        {
          "catributo": "UNEG      ",
          "desc_atributo": "Unidad de Negocio             ",
          "cod_dato": "FCIA      ",
          "desc_dato": "Farmacias                                                   "
        },
        {
          "catributo": "VENDCALL  ",
          "desc_atributo": "Vendedor Call Center Asignado ",
          "cod_dato": "060       ",
          "desc_dato": "Cesar Frette                                                "
        },
        {
          "catributo": "VTASUSP   ",
          "desc_atributo": "Venta Suspendida              ",
          "cod_dato": "1         ",
          "desc_dato": "Venta HABILITADA                                            "
        },
        {
          "catributo": "ZONABI    ",
          "desc_atributo": "Zona                          ",
          "cod_dato": "01        ",
          "desc_dato": "Capital                                                     "
        }
      ]
    }
  );
}