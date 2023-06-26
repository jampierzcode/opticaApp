import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 12,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 30,
    fontStyle: "bold",

    fontSize: "8px",
  },
  table: {
    width: "100%",
    marginBottom: "8px",
    fontSize: "8px",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    padding: "5px",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "8px",
  },
  tableCell: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "8px",
  },
});

// Componente para generar el PDF
const TicketInventario = ({ data }) => {
  console.log(data);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>Inventario de Productos</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Nombre</Text>
            <Text style={styles.tableCell}>CODIGO</Text>
            <Text style={styles.tableCell}>Color</Text>
            <Text style={styles.tableCell}>Tipo de Material</Text>
            <Text style={styles.tableCell}>Stock</Text>
            <Text style={styles.tableCell}>Costo</Text>
            <Text style={styles.tableCell}>Precio de Venta</Text>
            <Text style={styles.tableCell}>Proveedor</Text>
            <Text style={styles.tableCell}>CheckInfo</Text>
          </View>
          {data.map((item) => (
            <View key={item.id} style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.nombreProducto}</Text>
              <Text style={styles.tableCell}>
                {item.tipoEstructura !== "" ? item.tipoEstructura : "--"}
              </Text>
              <Text style={styles.tableCell}>{item.color}</Text>
              <Text style={styles.tableCell}>{item.tipoMaterial}</Text>
              <Text style={styles.tableCell}>{item.stock}</Text>
              <Text style={styles.tableCell}>{item.costo}</Text>
              <Text style={styles.tableCell}>{item.precioVenta}</Text>
              <Text style={styles.tableCell}>{item.proveedor}</Text>
              <Text style={styles.tableCell}> </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default TicketInventario;
