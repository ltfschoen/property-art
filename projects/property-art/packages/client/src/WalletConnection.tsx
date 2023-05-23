import React, { ReactNode, useContext, useState, createContext } from "react";
import { Button, Container, Grid, SvgIcon, Typography, Menu, MenuItem, Box } from '@mui/material';
// import MetaMaskIcon from "./components/MetaMaskIcon";
import Header from './components/Header';

let injectedProvider = false;

if (typeof window.ethereum !== 'undefined') {
    injectedProvider = true;
}

const isMetaMask = injectedProvider ? window.ethereum.isMetaMask : false;
console.log(isMetaMask);

export const walletContext = createContext<any | null>(null);

type Props = {
    children: ReactNode;
};
const WalletConnection = ({ children }: Props,) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [wallet, setWallet] = useState({ accounts: [] })

    const updateWallet = async (accounts: any) => {
        setWallet({ accounts })
    }

    const handleConnect = async () => {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        })
        updateWallet(accounts)
    }
    const handleDisconnect = async () => {
        await window.ethereum.request({
            method: "eth_requestAccounts",
            params: [{ eth_accounts: {} }]
        })
        updateWallet([])
        setAnchorEl(null);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    console.log('WalletConnection: ', wallet, isMetaMask, open)

    return (
        <>
            <Container>
                <Header
                    handleClick={handleClick}
                    handleConnect={handleConnect}
                    isMetaMask={isMetaMask}
                    open={open}
                    wallet={wallet}
                />
            </Container >
            <Container>
                {isMetaMask ? (
                    wallet.accounts.length > 0 ? (
                        <div className="wallet-connect">
                            <walletContext.Provider value={{ wallet }}>{children}</walletContext.Provider>
                        </div>
                    ) : (
                        <div className="wallet-connect">
                            <span>Please connect to Metamask</span>
                            <walletContext.Provider value={{ wallet }}>{children}</walletContext.Provider>
                        </div>

                    )
                ) : (
                    <div className="wallet-connect">
                        <span>Please Install Metamask</span>
                        <walletContext.Provider value={{ wallet }}>{children}</walletContext.Provider>
                    </div>
                )}
            </Container>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleDisconnect}>Disconnect</MenuItem>
            </Menu>
        </>
    )
}

export default WalletConnection
