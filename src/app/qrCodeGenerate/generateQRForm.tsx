import React, {useState} from "react";
import QRCode from "qrcode";
import qrCode from "@/app/qrCodeGenerate/qrCode";

interface GenerateQRFormProps {
    walletAddress?: string
}

const GenerateQRForm: React.FC<GenerateQRFormProps> = ({ walletAddress }) => {
        // Define the checklist items
    const [items, setItems] = useState([
        { id: 1, label: 'Ethereum', checked: false },
        { id: 2, label: 'Bitcoin', checked: false },
        { id: 3, label: 'USDC', checked: false },
    ]);

    const [defaultCrypto, setDefaultCrypto] = useState('');
    const [qrCodeSrc, setQrCodeSrc] = useState('')
    const [qrCodeText, setQrCodeText] = useState('')


    const selectionChangeHandler = (id: number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, checked: true }
                    : { ...item, checked: false }
            )
        );
    };

    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const selectedItem = items.find((item) => item.checked);
        const selectedCrypto = selectedItem?.label || "Ethereum";
        setDefaultCrypto(selectedCrypto)
        if (selectedItem) {
            alert(`You selected: ${selectedCrypto} and wallet address is ${walletAddress}`);
        } else {
            alert('No option selected.');
        }
        generateQrCode(selectedCrypto);
    };

    const generateQrCode = async (cryptoValue: string) => {
        try {
            console.log("Hello generateQrCode", cryptoValue);
            const qrCode = await QRCode.toDataURL(cryptoValue); // Await the promise
            setQrCodeSrc(qrCode); // Update the state
            console.log("Generated QR Code:", qrCode);
        } catch (error) {
            console.error("Error generating QR code:", error); // Handle errors
        }
    };

    return (
        <>
            <form onSubmit={formSubmitHandler} style={{maxWidth: '400px', margin: '0 auto'}}>
                <h2>Single-Select Checklist</h2>
                <ul style={{listStyle: 'none', padding: 0}}>
                    {items.map((item) => (
                        <li key={item.id} style={{marginBottom: '10px'}}>
                            <label>
                                <input
                                    type="radio"
                                    name="checklist" // Same name ensures only one can be selected
                                    checked={item.checked}
                                    onChange={() => selectionChangeHandler(item.id)}
                                    style={{marginRight: '10px'}}
                                />
                                {item.label}
                            </label>
                        </li>
                    ))}
                </ul>
                <button type="submit" style={{marginTop: '20px', padding: '10px 20px'}}>
                    Submit
                </button>
                <div>
                    <p>Default Crypto: {defaultCrypto}</p>
                </div>
                <img src={qrCodeSrc} alt="QR Code"/>
            </form>

        </>
    );
}

export default GenerateQRForm;