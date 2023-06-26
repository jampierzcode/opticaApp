import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

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

export default function TicketCaja({
  logoSrc,
  tarjetaTotal,
  transferenciasTotal,
  efectivoTotal,
  ventas,
  gastoEfectivo,
  adeudos,
  montoInicial,
}) {
  return (
    <Document>
      <Page size={[209.76, 300]} style={styles.page}>
        <View style={styles.logo}>
          <Image src={logoSrc} alt="Logo" />
        </View>
        <View style={styles.customer}>
          <Text>Reporte de Caja</Text>
        </View>
        <View style={styles.info}>
          <Text>
            Monto de Apertura : $
            {Math.round((montoInicial * 100) / 100).toFixed(2)}
          </Text>
        </View>
        <View style={styles.info}>
          <Text>
            Total Ventas : ${Math.round((ventas * 100) / 100).toFixed(2)}
          </Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>Efectivo:</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>${Math.round((efectivoTotal * 100) / 100).toFixed(2)}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>Transferencias:</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>
                ${Math.round((transferenciasTotal * 100) / 100).toFixed(2)}
              </Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>Tarjetas:</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>${Math.round((tarjetaTotal * 100) / 100).toFixed(2)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <Text>
            Adeudos en Caja : ${Math.round((adeudos * 100) / 100).toFixed(2)}
          </Text>
        </View>
        <View style={styles.info}>
          <Text>
            Gastos en Efectivo : $
            {Math.round((gastoEfectivo * 100) / 100).toFixed(2)}
          </Text>
        </View>
        <View style={styles.info}>
          <Text>
            Total a Entregar : $
            {Math.round(
              ((montoInicial + ventas - gastoEfectivo) * 100) / 100
            ).toFixed(2)}
          </Text>
        </View>
        <View style={styles.info}>
          <Text>
            Total a entregar en efectivo: $
            {Math.round(
              ((montoInicial + efectivoTotal - gastoEfectivo) * 100) / 100
            ).toFixed(2)}
          </Text>
        </View>
      </Page>
    </Document>
  );
}
