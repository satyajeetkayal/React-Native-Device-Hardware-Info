import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import * as DeviceInfo from "react-native-device-info";
import * as Battery from "expo-battery";

import {
  MaterialIcons,
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");
const FirstScreen = () => {
  const [id, setId] = useState([]);
  const [lvl, setLvl] = useState([]);
  const [os, setOs] = useState([]);
  const [boot, setBoot] = useState([]);
  const [carrier, setCarrier] = useState([]);
  const [device, setDevice] = useState([]);
  const [display, setDisplay] = useState([]);
  const [deviceName, setDeviceName] = useState([]);
  const [installTime, setInstall] = useState([]);
  const [fingerprint, setFingerprint] = useState([]);
  const [storage, setStorage] = useState([]);
  const [hardware, setHardware] = useState([]);
  const [host, setHost] = useState([]);
  const [packageName, setPackage] = useState([]);
  const [mac, setMac] = useState([]);
  const [manufacture, setManufacture] = useState([]);
  const [product, setProduct] = useState([]);
  const [security, setSecurity] = useState([]);
  const [userAgent, setUserAgent] = useState([]);
  const [emulator, setEmulator] = useState([]);
  const [charging, setCharging] = useState([]);
  const [Abis, setAbis] = useState([]);
  const [location, setLocation] = useState([]);
  const [headphone, setHeadphone] = useState([]);
  const [batteryLevel, setBatterylevel] = useState([]);
  const [airplane, setAirplane] = useState([]);
  const [powerState, setPowerState] = useState([]);
  const [oriention, setOriention] = useState([]);
  const [gms, setGms] = useState([]);
  const [hms, setHms] = useState([]);
  const [bit32, set32bit] = useState([]);
  const [bit64, set64bit] = useState([]);
  const [ip, setIp] = useState([]);
  const [phone, setPhone] = useState([]);
  const [lowPower, setLowPower] = useState([]);

  useEffect(() => {
    Battery.getBatteryStateAsync().then((Level) => {
      setPowerState(Level);
    });
    Battery.isLowPowerModeEnabledAsync().then((lowPower) => {
      setLowPower(lowPower);
    });
    DeviceInfo.getAndroidId().then((id) => {
      setId(id);
    });
    DeviceInfo.getApiLevel().then((level) => {
      setLvl(level);
    });
    DeviceInfo.getBaseOs().then((os) => {
      setOs(os);
    });
    DeviceInfo.getBootloader().then((boot) => {
      setBoot(boot);
    });
    DeviceInfo.getCarrier().then((carrier) => {
      setCarrier(carrier);
    });
    DeviceInfo.getDevice().then((device) => {
      setDevice(device);
    });
    DeviceInfo.getDisplay().then((display) => {
      setDisplay(display);
    });
    DeviceInfo.getDeviceName().then((deviceName) => {
      setDeviceName(deviceName);
    });
    DeviceInfo.getFirstInstallTime().then((firstInstallTime) => {
      setInstall(firstInstallTime);
    });
    DeviceInfo.getFingerprint().then((fingerprint) => {
      setFingerprint(fingerprint);
    });
    DeviceInfo.getFreeDiskStorage().then((freeDiskStorage) => {
      setStorage(freeDiskStorage);
    });
    DeviceInfo.getHardware().then((hardware) => {
      setHardware(hardware);
    });
    DeviceInfo.getHost().then((host) => {
      setHost(host);
    });
    DeviceInfo.getInstallerPackageName().then((installerPackageName) => {
      setPackage(installerPackageName);
    });
    DeviceInfo.getMacAddress().then((mac) => {
      setMac(mac);
    });
    DeviceInfo.getManufacturer().then((manufacturer) => {
      setManufacture(manufacturer);
    });
    DeviceInfo.getProduct().then((product) => {
      setProduct(product);
    });
    DeviceInfo.getSecurityPatch().then((securityPatch) => {
      setSecurity(securityPatch);
    });
    DeviceInfo.getUserAgent().then((userAgent) => {
      setUserAgent(userAgent);
    });
    DeviceInfo.isEmulator().then((isEmulator) => {
      setEmulator(isEmulator);
    });
    DeviceInfo.isBatteryCharging().then((isCharging) => {
      setCharging(isCharging);
    });
    DeviceInfo.supportedAbis().then((abis) => {
      setAbis(abis);
    });

    DeviceInfo.isLocationEnabled().then((enabled) => {
      setLocation(enabled);
    });
    DeviceInfo.isHeadphonesConnected().then((enabled) => {
      setHeadphone(enabled);
    });
    DeviceInfo.getBatteryLevel().then((battery) => {
      setBatterylevel(battery);
    });
    DeviceInfo.isAirplaneMode().then((airplaneModeOn) => {
      setAirplane(airplaneModeOn);
    });
    DeviceInfo.isLandscape().then((isLandscape) => {
      setOriention(isLandscape);
    });
    DeviceInfo.hasGms().then((hasGms) => {
      setGms(hasGms);
    });
    DeviceInfo.hasHms().then((hasHms) => {
      setHms(hasHms);
    });
    DeviceInfo.supported32BitAbis().then((abis) => {
      set32bit(abis);
    });
    DeviceInfo.supported64BitAbis().then((abis) => {
      set64bit(abis);
    });

    DeviceInfo.getPhoneNumber().then((phoneNumber) => {
      setPhone(phoneNumber);
    });
    DeviceInfo.getIpAddress().then((ip) => {
      setIp(ip);
    });
  }, []);

  const deviceId = DeviceInfo.getDeviceId();
  const appname = DeviceInfo.getApplicationName();
  const brand = DeviceInfo.getBrand();
  const build = DeviceInfo.getBuildNumber();
  const bundleId = DeviceInfo.getBundleId();
  const model = DeviceInfo.getModel();
  const systemName = DeviceInfo.getSystemName();
  const systemVersion = DeviceInfo.getSystemVersion();
  const isTablet = DeviceInfo.isTablet();
  const hasNotch = DeviceInfo.hasNotch();
  const type = DeviceInfo.getDeviceType();

  return (
    <ScrollView style={{ top: 40 }} scrollEnabled={true}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            padding: 30,
            marginRight: 5,
            marginLeft: 3.5,
            width: width / 2,
            borderColor: "gray",
          }}
        >
          <MaterialIcons
            name="memory"
            size={30}
            style={{ bottom: 20 }}
            color="black"
          ></MaterialIcons>
          <Text style={{ fontSize: 15, alignSelf: "center", color: "gray" }}>
            Hardware
          </Text>
          <Text
            style={{
              fontSize: 30,
              alignSelf: "center",
              bottom: 0,
              color: "black",
            }}
          >{`${hardware}`}</Text>
        </View>
        <View
          style={{
            marginRight: 5,
            borderWidth: 1,
            borderRadius: 20,
            padding: 30,
            width: width / 2 - 13,
            borderColor: "gray",
          }}
        >
          <AntDesign
            name="mobile1"
            size={25}
            style={{ bottom: 20 }}
            color="black"
          ></AntDesign>
          <Text style={{ fontSize: 15, alignSelf: "center", color: "gray" }}>
            Device Model
          </Text>
          <Text
            style={{
              fontSize: 30,
              alignSelf: "center",
              bottom: 0,
              color: "black",
            }}
          >{`${model}`}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 3,
          padding: 50,
          borderRadius: 20,
          borderWidth: 1,
          flexDirection: "column",
          marginTop: 10,
          marginLeft: 10,
          width: width - 20,
          borderColor: "gray",
        }}
      >
        <FontAwesome5
          name="android"
          size={25}
          color="black"
          style={{ bottom: 45, right: 25 }}
        />
        <Text style={styles.textName}>System OS</Text>
        <Text style={styles.textValue}>{`${systemName}`}</Text>
        <Text style={styles.textName}>Android Version</Text>
        <Text style={styles.textValue}>{`${systemVersion}`}</Text>
        <Text style={styles.textName}>API Level</Text>
        <Text style={styles.textValue}>{`${lvl}`}</Text>
        <Text style={styles.textName}>Security Patch</Text>
        <Text style={styles.textValue}>{`${security}`}</Text>
        <Text style={styles.textName}>OS Information</Text>
        <Text style={styles.textValue1}>{`${
          os ? `${os}` : "Not Available"
        }`}</Text>
      </View>
      <View
        style={{
          padding: 50,
          borderRadius: 20,
          borderWidth: 1,
          flexDirection: "column",
          marginTop: 10,
          marginLeft: 10,
          width: width - 20,
          borderColor: "gray",
        }}
      >
        <MaterialIcons
          name="developer-board"
          size={25}
          color="black"
          style={{ bottom: 45, right: 25 }}
        />
        <Text style={styles.textName}>Manufacturer</Text>
        <Text style={styles.textValue}>{`${manufacture}`}</Text>
        <Text style={styles.textName}>Product Name</Text>
        <Text style={styles.textValue}>{`${product}`}</Text>
        <Text style={styles.textName}>Brand</Text>
        <Text style={styles.textValue}>{`${brand}`}</Text>
        <Text style={styles.textName}>Device Name</Text>
        <Text style={styles.textValue}>{`${deviceName}`}</Text>
        <Text style={styles.textName}>Device ID</Text>
        <Text style={styles.textValue}>{`${deviceId}`}</Text>
        <Text style={styles.textName}>Bootloader</Text>
        <Text style={styles.textValue}>{`${
          boot ? `${boot}` : "Not Available"
        }`}</Text>
        <Text style={styles.textName}>Application Binary Interface (ABIs)</Text>
        <Text style={styles.textValue}>{`${Abis}`}</Text>
        <Text style={styles.textName}>Device Type</Text>
        <Text style={styles.textValue}>{`${type}`}</Text>
        <Text style={styles.textName}>Display</Text>
        <Text style={styles.textValue}>{`${display}`}</Text>
        <Text style={styles.textName}>Google Mobile Service</Text>
        <Text style={styles.textValue}>{gms ? "Yes" : "No"}</Text>
        <Text style={styles.textName}>Huawei Mobile Service</Text>
        <Text style={styles.textValue}>{hms ? "Yes" : "No"}</Text>
        <Text style={styles.textName}>System Architechture</Text>
        <Text style={styles.textValue}>{bit32 ? "x86" : "Not Supported"}</Text>
        <Text style={styles.textValue}>{bit64 ? "x64" : "Not Supported"}</Text>
      </View>
      <View
        style={{
          padding: 20,
          borderRadius: 20,
          borderWidth: 1,
          flexDirection: "column",
          marginTop: 10,
          marginLeft: 10,
          width: width - 20,
          borderColor: "gray",
        }}
      >
        <FontAwesome5
          name="fingerprint"
          size={25}
          color="black"
          style={{ bottom: 10, right: 0 }}
        />

        <Text style={styles.textName}>Fingerprint Security</Text>
        <Text style={styles.textValue1}>{`${fingerprint}`}</Text>
      </View>
      <View
        style={{
          padding: 50,
          borderRadius: 20,
          borderWidth: 1,
          flexDirection: "column",
          marginTop: 10,
          marginLeft: 10,
          width: width - 20,
          borderColor: "gray",
        }}
      >
        <MaterialIcons
          name="perm-device-info"
          size={24}
          color="black"
          style={{ bottom: 40, right: 30 }}
        />

        <Text style={styles.textName}>Headphone Connected</Text>
        <Text style={styles.textValue}>{`${headphone ? "Yes" : "No"}`}</Text>
        <Text style={styles.textName}>Location</Text>
        <Text style={styles.textValue}>{`${location ? "Yes" : "No"}`}</Text>
        <Text style={styles.textName}>Display Notch</Text>
        <Text style={styles.textValue}>{`${hasNotch ? "Yes" : "No"}`}</Text>
        <Text style={styles.textName}>Tablet Mode</Text>
        <Text style={styles.textValue}>{`${isTablet ? "Yes" : "No"}`}</Text>
        <Text style={styles.textName}>Emulator</Text>
        <Text style={styles.textValue}>{`${emulator ? "Yes" : "No"}`}</Text>
        <Text style={styles.textName}>Airplane Mode</Text>
        <Text style={styles.textValue}>{airplane ? "Yes" : "No"}</Text>
        <Text style={styles.textName}>Display orientation</Text>
        <Text style={styles.textValue}>
          {oriention ? "Landscape" : "Portrait"}
        </Text>
      </View>
      <View
        style={{
          padding: 50,
          borderRadius: 20,
          borderWidth: 1,
          flexDirection: "column",
          marginTop: 10,
          marginLeft: 10,
          width: width - 20,
          borderColor: "gray",
        }}
      >
        <MaterialIcons
          name="wifi"
          size={24}
          color="black"
          style={{ bottom: 40, right: 30 }}
        />
        <Text style={styles.textName}>Network Carrier</Text>
        <Text style={styles.textValue}>{`Carrier ${carrier}`}</Text>
        <Text style={styles.textName}>Mac Address</Text>
        <Text style={styles.textValue}>{`Mac Address ${mac}`}</Text>
        <Text style={styles.textName}>Host</Text>
        <Text style={styles.textValue}>{`Host ${host}`}</Text>
        <Text style={styles.textName}>IP Address</Text>
        <Text style={styles.textValue}>{ip}</Text>
        <Text style={styles.textName}>Phone Number</Text>
        <Text style={styles.textValue}>{phone}</Text>
      </View>
      <View
        style={{
          padding: 50,
          borderRadius: 20,
          borderWidth: 1,
          flexDirection: "column",
          marginTop: 10,
          marginLeft: 10,
          width: width - 20,
          borderColor: "gray",
        }}
      >
        <FontAwesome5
          name="user-cog"
          size={24}
          color="black"
          style={{ bottom: 40, right: 30 }}
        />
        <Text style={styles.textName}>User Agent</Text>
        <Text style={styles.textValue1}>{`${userAgent}`}</Text>
      </View>
      <View
        style={{
          padding: 50,
          borderRadius: 20,
          borderWidth: 1,
          flexDirection: "column",
          marginTop: 10,
          marginLeft: 10,
          width: width - 20,
          borderColor: "gray",
        }}
      >
        <MaterialCommunityIcons
          name="battery-10"
          size={24}
          color="black"
          style={{ bottom: 40, right: 30 }}
        />
        <Text style={styles.textName}>Battery Level</Text>
        <Text style={styles.textValue}>{`${batteryLevel * 100}%`}</Text>
        <Text style={styles.textName}>Charging</Text>
        <Text style={styles.textValue}>{`${charging ? "Yes" : "No"}`}</Text>
        <Text style={styles.textName}>Battery State</Text>
        <Text style={styles.textValue}>
          {powerState ? "Charging" : "Battery Mode"}
        </Text>
        <Text style={styles.textName}>Low Power</Text>
        <Text style={styles.textValue}>{lowPower ? "Yes" : "No"}</Text>
      </View>
      <View
        style={{
          padding: 50,
          borderRadius: 20,
          borderWidth: 1,
          flexDirection: "column",
          marginTop: 10,
          marginLeft: 10,
          width: width - 20,
          borderColor: "gray",
        }}
      >
        <MaterialCommunityIcons
          name="application"
          size={24}
          color="black"
          style={{ bottom: 40, right: 30 }}
        />
        <Text style={styles.textName}>Package Name</Text>
        <Text style={styles.textValue}>{`${
          packageName ? `${packageName}` : "Not Available"
        }`}</Text>
        <Text style={styles.textName}>Storage</Text>
        <Text style={styles.textValue}>{`${storage}`}</Text>
        <Text style={styles.textName}>Installation Time</Text>
        <Text style={styles.textValue}>{`${installTime} milliseconds`}</Text>
        <Text style={styles.textName}>Bundle ID</Text>
        <Text style={styles.textValue}>{`${bundleId}`}</Text>
        <Text style={styles.textName}>Build Number</Text>
        <Text style={styles.textValue}>{`${build}`}</Text>
        <Text style={styles.textName}>Application Name</Text>
        <Text style={styles.textValue}>{`${appname}`}</Text>
        <Text style={styles.textName}>Application ID</Text>
        <Text style={styles.textValue}>{`${id}`}</Text>
      </View>
    </ScrollView>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  textContainer: {
    color: "black",
  },
  textName: {
    fontSize: 15,
    alignSelf: "center",
    color: "gray",
  },
  textValue: { fontSize: 30, alignSelf: "center", bottom: 0, color: "black" },
  viewLarge: {
    flex: 3,
    padding: 50,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    width: width - 20,
    borderColor: "gray",
  },
  viewNormal: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 30,
    marginRight: 5,
    marginLeft: 3.5,
    width: width / 2,
    borderColor: "gray",
  },
  textValue1: {
    fontSize: 20,
    alignSelf: "center",
    bottom: 0,
    color: "black",
  },
});
