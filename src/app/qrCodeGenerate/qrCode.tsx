import React, {useState} from "react";
import QRCode from "qrcode";

interface QrCodeProps {
  textValue: string;
}
const QrCode: React.FC<QrCodeProps> = ({textValue}) => {
    const [qrCodeSrc, setQrCodeSrc] = useState('')
    QRCode.toString('Anushka').then((value) => setQrCodeSrc(value));
    return(
        <div>
            <img src={qrCodeSrc} alt="QR Code" />
            {/*<p>{textValue}</p>*/}
        </div>
    );
};

export default QrCode;