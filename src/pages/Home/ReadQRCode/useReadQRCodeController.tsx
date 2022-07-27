import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";
import { useEffect, useState } from "react";

const useReadQRCodeController = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);
    })();
    setTimeout(() => {
      setScanned(true);
    }, 2000);
  }, []);

  const handleBarCodeScanned = () => {
    setScanned(true);
  };

  return { scanned, hasPermission, handleBarCodeScanned };
};

export { useReadQRCodeController };
