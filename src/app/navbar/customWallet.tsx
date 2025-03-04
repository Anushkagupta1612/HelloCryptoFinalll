import {
    ConnectWallet,
    Wallet,
    WalletDropdown,
    WalletDropdownDisconnect
} from "@coinbase/onchainkit/wallet";
import {Address, Avatar, Identity, Name} from "@coinbase/onchainkit/identity";
import {color} from "@coinbase/onchainkit/theme";


function CustomWallet() {

    return (
        <div className="flex justify-end">
            <Wallet>
                <ConnectWallet>
                    <Avatar className="h-6 w-6"/>
                    <Name/>
                </ConnectWallet>
                <WalletDropdown>
                    <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                        <Avatar/>
                        <Name/>
                        <Address className={color.foregroundMuted}/>
                    </Identity>
                    <WalletDropdownDisconnect/>
                </WalletDropdown>
            </Wallet>
        </div>
    );
}

export default CustomWallet;