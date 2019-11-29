export default (mockAdapter) => {

    mockAdapter.onPost('/carga_item_vta').reply(200, {
        "Resultado": true,
        "Tipo_error": null,
        "Mens_error": null,
        "Errores": null,
        "solic_stock": 0,
        "total_importe": 38632.0,
        "total_item": 4,
        "total_cant": 286.0
    });


    /* mockAdapter.onGet('/Items/carga_item_vta', { params: { "idOperacion": 221223, "niprod": 36575 } }).reply(200, {
         data: {
             "solic_stock": 0,
             "total_importe": 25541,
             "total_item": 7,
             "total_cant": 500
         }
     });
 
     mockAdapter.onGet('/Items/carga_item_vta', { params: { "idOperacion": 221223, "niprod": 36574 } }).reply(200, {
         data: {
             "solic_stock": 0,
             "total_importe": 15541.35,
             "total_item": 6,
             "total_cant": 250
         }
     }); */
}