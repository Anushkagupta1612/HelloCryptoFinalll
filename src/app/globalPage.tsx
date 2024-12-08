'use client'

import Navbar from "@/app/navbar/navbar";
import GenerateQRForm from "@/app/qrCodeGenerate/generateQRForm";
import QRCodeScanner from "@/app/qrCodeScan/qrCodeScanner";
import TransactionPerformer from "@/app/transaction/transactionPerformer";
import CreateTransaction from "@/app/coinbaseTransactions/createTransaction";

function GlobalPage() {
    const walletAddress = '0xAA9bca57A4c11fb60A324EF4b6aa71D21F765ea2';
    return (
        <>
            <Navbar walletAddress={walletAddress}></Navbar>
            <GenerateQRForm walletAddress={walletAddress}></GenerateQRForm>
            <QRCodeScanner/>
            <TransactionPerformer/>
            <CreateTransaction/>
        </>
    );
}

export default GlobalPage;