import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const UPIQRCodeScanner = () => {
    const [isScanning, setIsScanning] = useState(false);
    const [scanResult, setScanResult] = useState<string | null>(null);

    // Handle QR result
    const handleResult = (result: any) => {
        if (result?.text) {
            console.log("Scanned QR Code Data:", result.text);
            setScanResult(result.text);

            // Stop scanning and unmount the scanner to stop the camera
            setIsScanning(false);
        }
    };

    const handleError = (error: any) => {
        console.error("QR scanner error:", error);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Scan UPI QR Code</h1>

            {/* Render Start Button Only if Scanner is Not Active */}
            {!isScanning && (
                <button
                    onClick={() => setIsScanning(true)}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Start Scanner
                </button>
            )}

            {/* Dynamically Render the QR Scanner */}
            {isScanning && (
                <QrReader
                    delay={300}
                    onResult={handleResult} // Handle QR code result
                    onError={handleError}
                    style={{
                        width: "100%",
                        maxWidth: "400px",
                        margin: "20px auto",
                    }}
                    constraints={{
                        facingMode: "user",
                    }}
                />
            )}

            {/* Display the scanned result */}
            {scanResult && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Scanned Data:</h3>
                    <p>{scanResult}</p>
                </div>
            )}
        </div>
    );
};

export default UPIQRCodeScanner;
