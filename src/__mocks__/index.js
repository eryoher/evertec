import Axios from "axios";
import MockAdapter from "axios-mock-adapter";
import clientMock from './Clients';
import voucherMock from './Voucher';
import voucherTypeMock from './VoucherType';
import productMock from './Product';
import itemsMock from './Items';
import afectaVentasMock from './AfectaVentas';
import generateMock from './Generate';

const mockAdapter = new MockAdapter(Axios, {
  delayResponse: 2000
});

clientMock(mockAdapter);
voucherMock(mockAdapter);
voucherTypeMock(mockAdapter);
productMock(mockAdapter);
itemsMock(mockAdapter);
afectaVentasMock(mockAdapter);
generateMock(mockAdapter);

mockAdapter.onPost('/login').reply(200, {
  data: {
    userId: "fsdjj35359ugiu",
    token: "fdsjt43t0*(&gj3k5",
    nombre: "ericson Hernandez",
    usuario: "eryoher",
    email: "eryoher@agminen.com",
    configApp: {
      mascaras: {
        precioUnitario: {
          tipo: 'numero',
          cantDecimales: 2,
          usarSeparadorMil: false
        },
        idTrabajador: {
          valor: '00-00000000-0',
          tipo: 'personalizado'
        },
        fechaLarga: {
          valor: 'dd/MM/yyyy',
          tipo: 'fecha'
        }
      }
    }
  }
});