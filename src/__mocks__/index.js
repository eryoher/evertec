import Axios from "axios";
import MockAdapter from "axios-mock-adapter";
import clientMock from './Clients';
import voucherMock from './Voucher';
import voucherTypeMock from './VoucherType';
import productMock from './Product';
import itemsMock from './Items';
import afectaVentasMock from './AfectaVentas';
import generateMock from './Generate';
import accountingSeatMock from './AccountingSeat';
import accountingVoucher from './AccountingVoucher';

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
accountingSeatMock(mockAdapter);
accountingVoucher(mockAdapter);

mockAdapter.onPost('/login').reply(200,
  {
    "token": "c0871dc7-70b6-4006-80ac-d028bd509dea",
    "configApp": {
      "mascaras": {
        "FechaCorta": {
          "valor": "DD/MM/YY",
          "tipo": "fecha"
        },
        "FechaLarga": {
          "valor": "DD/MM/YYYY",
          "tipo": "fecha"
        },
        "CantidadEntera": {
          "valor": {
            "mask": "000.000.000"
          },
          "tipo": "personalizado"
        },
        "Cantidad1Decimal": {
          "valor": {
            "mask": "000.000.000,0"
          },
          "tipo": "personalizado"
        },
        "Cantidad2Decimal": {
          "valor": {
            "mask": "000.000.000,00"
          },
          "tipo": "personalizado"
        },
        "Cantidad3Decimal": {
          "valor": {
            "mask": "000.000.000,000"
          },
          "tipo": "personalizado"
        },
        "PrecioUnitUsual": {
          "valor": {
            "mask": "0.000.000,00"
          },
          "tipo": "personalizado"
        },
        "PrecioUnitExtranjera": {
          "valor": {
            "mask": "000.000,00"
          },
          "tipo": "personalizado"
        },
        "NetoUsual": {
          "valor": {
            "mask": "000.000.000,00"
          },
          "tipo": "personalizado"
        },
        "NetoUsualSinDecimal": {
          "valor": {
            "mask": "000.000.000"
          },
          "tipo": "personalizado"
        },
        "NetoExtranjera": {
          "valor": {
            "mask": "0.000.000,00"
          },
          "tipo": "personalizado"
        },
        "IdImpositivo": {
          "valor": {
            "mask": "00-00000000-0"
          },
          "tipo": "personalizado"
        },
        "NroFactura": {
          "valor": {
            "mask": "A-00000-00000000"
          },
          "tipo": "personalizado"
        },
        "CodPostal": {
          "valor": {
            "mask": "A0000AAA"
          },
          "tipo": "personalizado"
        }
      }
    }
  }
);