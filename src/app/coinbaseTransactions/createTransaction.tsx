import React from "react";
import {Coinbase, Wallet} from "@coinbase/coinbase-sdk";

function CreateTransaction () {

    async function buttonHandler() {
        let coinbase = Coinbase.configureFromJson({ filePath: '~/Downloads/cdp_api_key.json' });
        const wallet = await Wallet.create();
        console.log("Hello wallet id", wallet.getId());
    }

    return(
        <div>
            <button onClick={buttonHandler}>Create Transaction</button>
        </div>
    );
}

export default CreateTransaction;