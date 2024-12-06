import { useCallback, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { Avatar, Name } from '@coinbase/onchainkit/identity';
import {
    Transaction,
    TransactionButton,
    TransactionSponsor,
    TransactionStatus,
    TransactionStatusAction,
    TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet';
import { calls } from "@/app/transaction/call";
import {LifecycleStatus} from "@coinbase/onchainkit/nft";

export default function TransactionComponents() {
    const { address, isConnected } = useAccount();

    const handleOnStatus = useCallback(
        (status: LifecycleStatus) => {
            console.log("Hello Address", address);
            console.log('LifecycleStatus', status);
        },
        [address]
    );

    // Optional Debug: Log changes to address
    useEffect(() => {
        console.log("Current address value:", address);
        console.log("isConnected state:", isConnected);
    }, [address, isConnected]);

    if (!isConnected) {
        return (
            <Wallet>
                <ConnectWallet>
                    <Avatar className="h-6 w-6" />
                    <Name />
                </ConnectWallet>
            </Wallet>
        );
    }

    return (
        <Transaction
            chainId={84532}
            calls={calls}
            onStatus={handleOnStatus}
        >
            <TransactionButton />
            <TransactionSponsor />
            <TransactionStatus>
                <TransactionStatusLabel />
                <TransactionStatusAction />
            </TransactionStatus>
        </Transaction>
    );
};
