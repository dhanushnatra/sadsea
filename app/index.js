import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";
export default function Page() {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.container}
    >
      <View style={styles.main}>
        <TouchableOpacity style={styles.btn} onPress={() => router.push({
          pathname:"./INFO",
          params:{data:"Epipelagic Zone (Sunlight)"}
        })}>
          <Text style={styles.btntxt}>Epipelagic Zone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => router.push({
          pathname:"./INFO",
          params:{data:"Mesopelagic Zone (Twilight)"}
        })}>
          <Text style={styles.btntxt}>Mesopelagic Zone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => router.push({
          pathname:"./INFO",
          params:{data:"Bathypelagic Zone (Midnight)"}
        })}>
          <Text style={styles.btntxt}>Bathypelagic Zone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => router.push({
          pathname:"./INFO",
          params:{data:"Abyssopelagic Zone (Abyss)"}
        })}>
          <Text style={styles.btntxt}>Abyssopelagic Zone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => router.push({
          pathname:"./INFO",
          params:{data:"Hadalpelagic Zone (Trenches)"}
        })}>
          <Text style={styles.btntxt}>Hadalpelagic Zone</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  btntxt: {
    fontSize: 24,
    color: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
  },
  main: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
  },
  btn: {
    backgroundColor: "#38434D",
    borderRadius: 8,
    opacity: 0.7,
  },
});
