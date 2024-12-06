'use client'

import { ReactNode } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

const wagmiConfig = createConfig({
    chains: [baseSepolia],
    connectors: [
        coinbaseWallet({
            appName: 'onchainkit',
        }),
    ],
    ssr: true,
    transports: {
        [baseSepolia.id]: http(),
    },
});

function CustomWagmiProvider(props: { children: ReactNode }) {
    return <WagmiProvider config={wagmiConfig}>{props.children}</WagmiProvider>;
}

export default CustomWagmiProvider;