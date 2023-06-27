import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

import dayjs from "dayjs";
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Helvetica",
    padding: "20px",
  },
  logo: {
    marginBottom: "10px",
    width: "80px",
  },
  title: {
    fontSize: "8px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  info: {
    fontSize: "8px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "start",
    width: "100%",
  },
  customer: {
    marginBottom: "10px",
    fontSize: "8px",
  },
  table: {
    width: "100%",
    marginBottom: "8px",
    fontSize: "8px",
  },
  tableHeader: {
    backgroundColor: "lightgray",
    padding: "5px",
    textAlign: "center",
    fontSize: "6px",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    padding: "5px",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
  },
  tableRowInfo: {
    display: "flex",
    flexDirection: "row",
    padding: "5px",
    textAlign: "start",
    fontSize: "8px",
  },
  tableCell: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  totalRow: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "5px",
    textAlign: "start",
    fontWeight: "bold",
    fontSize: "8px",
  },
});

export default function Cotizacion({
  logoSrc,
  title,
  customer,
  products,
  precioGraduacion,
  optica,
  ordenID,
}) {
  var productsGrad;
  var productsVenta;
  var nombreGraduacion;
  var totalgrad;
  var total;
  var fecha = dayjs().format("DD-MM-YYYY");

  const loadingTicket = () => {
    // if (loading !== true) {
    productsVenta = products.filter(
      (elemento) => elemento.idGraduation === false
    );
    productsGrad = products.filter(
      (elemento) => elemento.idGraduation === true
    );
    sumarPrecioGraduacion();

    // }
  };
  const sumarPrecioGraduacion = () => {
    // if (loading !== true) {
    let totaln = 0;
    let nombre = "Material -";
    for (const product of productsGrad) {
      totaln = totaln + Number(product.costo);
      nombre += `${product.nombreProducto}-`;
    }
    nombreGraduacion = nombre;
    totaln = totaln + Number(precioGraduacion);
    totalgrad = totaln;
    for (const product of productsVenta) {
      totaln = totaln + Number(product.costo);
    }

    total = totaln;
    // }
  };
  loadingTicket();
  return (
    <Document>
      <Page size={[209.76, 600]} style={styles.page}>
        <View style={styles.logo}>
          <Image src={logoSrc} alt="Logo" />
        </View>
        <View style={styles.title}>
          <Text>Ticket de Cotización</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRowInfo}>
            <View style={styles.tableCell}>
              <Text>Dirección: {optica.direction}</Text>
            </View>
          </View>
          <View style={styles.tableRowInfo}>
            <View style={styles.tableCell}>
              <Text>Fecha de emisión: {fecha}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Cp: {optica.cp}</Text>
            </View>
          </View>
          <View style={styles.tableRowInfo}>
            <View style={styles.tableCell}>
              <Text>RFC: {optica.rfc}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Teléfono: {optica.contactPhone}</Text>
            </View>
          </View>
        </View>
        <View style={styles.customer}>
          <Text>Cliente: {customer}</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>Producto</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Cantidad</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Precio</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>Subtotal</Text>
            </View>
          </View>

          {Number(precioGraduacion) !== 0 ? (
            <View style={styles.tableRow} key={-1}>
              <View style={styles.tableCell}>
                <Text>{nombreGraduacion}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>1</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>
                  ${Math.round((Number(totalgrad) * 100) / 100).toFixed(2)}
                </Text>
              </View>
              <View style={styles.tableCell}>
                <Text>
                  ${Math.round((Number(totalgrad) * 100) / 100).toFixed(2)}
                </Text>
              </View>
            </View>
          ) : null}
          {productsVenta.map((product, index) => {
            return (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableCell}>
                  <Text>{product.nombreProducto}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{product.cantidad}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>
                    ${Math.round((product.precio * 100) / 100).toFixed(2)}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>
                    ${Math.round((product.costo * 100) / 100).toFixed(2)}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.totalRow}>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text>SubTotal</Text>
            <Text>${(Math.round((total / 1.16) * 100) / 100).toFixed(2)}</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text>IVA(16%)</Text>
            <Text>
              ${(Math.round((total - total / 1.16) * 100) / 100).toFixed(2)}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text>Total</Text>
            <Text>${(Math.round(total * 100) / 100).toFixed(2)}</Text>
          </View>

          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            {/* <Text style={{ textAlign: "justify" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            reiciendis, provident officia architecto ut consequatur nobis
            alias a velit maxime debitis praesentium inventore consequuntur
            est laborum ex nostrum fugiat. Commodi.
          </Text> */}
          </View>
        </View>
      </Page>
    </Document>
  );
}
