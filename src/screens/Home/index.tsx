import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import boleto from "../../assets/boleto.png";
import dinheiro from "../../assets/dinheiro.png";
import Logo from "../../assets/logo.png";
import Mastercard from "../../assets/mastercard.png";
import pix from "../../assets/pix.png";
import Setting from "../../assets/setting.png";
import Wallet from "../../assets/Wallet.png";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={Logo} />
          <Image source={Setting} />
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View />
            <Image source={Mastercard} />
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.cardFooterText}>Rodrigo Lucas</Text>
            <View />
          </View>
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.cardDetailsHeader}>
            <Text style={styles.cardDetailsHeaderText}>Saldo disponível</Text>
            <Image source={Wallet} />
          </View>
          <Text style={styles.cardDetailsTextValue}>R$145,76</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Do que precisa?</Text>
        <ScrollView
          style={styles.footerScrollCardContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <View style={styles.footerCard}>
            <Image source={pix} />
            <Text style={styles.footerCardText}>Fazer um Pix</Text>
          </View>
          <View style={styles.footerCard}>
            <Image source={boleto} />
            <Text style={styles.footerCardText}>Pagar um boleto</Text>
          </View>
          <View style={styles.footerCard}>
            <Image source={dinheiro} />
            <Text style={styles.footerCardText}>Fazer um depósito</Text>
          </View>
          <View style={styles.footerCard}></View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1",
    alignItems: "center",
  },
  content: {
    width: "100%",
    paddingHorizontal: 30,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#9500F6",
    justifyContent: "space-between",
    padding: 20,
  },
  cardHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardFooter: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardFooterText: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "600",
    lineHeight: 36,
  },
  cardDetails: {
    padding: 20,
    marginTop: 20,
    width: "100%",
    height: 120,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#9500F6",
  },
  cardDetailsHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardDetailsHeaderText: {
    color: "#FFF",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },
  cardDetailsTextValue: {
    color: "#FFF",
    fontSize: 36,
    lineHeight: 54,
    fontWeight: "600",
  },
  footer: {
    width: "100%",
    paddingTop: 32,
  },
  footerText: {
    marginLeft: 50,
    color: "#FFF",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },
  footerScrollCardContainer: {
    width: "100%",
    height: 300,
    paddingHorizontal: 19,
  },
  footerCard: {
    marginTop: 37,
    marginLeft: 8,
    width: 100,
    height: 127,
    elevation: 5,
    borderRadius: 27,
    backgroundColor: "#9500F6",
    justifyContent: "space-between",
    padding: 15,
  },
  footerCardText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
  },
});
