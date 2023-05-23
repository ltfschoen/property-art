import React, { ReactNode, useContext, useState, createContext } from "react";
import { Button, Container, Grid, SvgIcon, Typography, Menu, MenuItem, Box } from '@mui/material';
import MetaMaskIcon from "./MetaMaskIcon";

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

    return (
        <>
            <Container>
                {wallet.accounts.length > 0 ? (
                    <div className="wallet-click">
                        <Button
                            variant="outlined"
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            startIcon={<SvgIcon component={MetaMaskIcon} viewBox="0 0 300 300" />}
                        >
                            {(wallet.accounts[0] as string)?.slice(0, 5)}...{(wallet.accounts[0] as string)?.slice(-5)}
                        </Button>
                    </div>
                ) : (
                    <div className="wallet-click">
                        <Button variant="outlined" onClick={handleConnect} startIcon={<SvgIcon component={MetaMaskIcon} viewBox="0 0 300 300" />} disabled={!isMetaMask}>
                            connect
                        </Button>
                    </div>
                )}
            </Container>
            <Container>
                {isMetaMask ? (
                    wallet.accounts.length > 0 ? (
                        <div className="wallet-connect">
                            <walletContext.Provider value={{ wallet }}>{children}</walletContext.Provider>
                        </div>
                    ) : (
                        <div className="wallet-connect">
                            <span className="wallet-notification">Please connect to Metamask</span>
                            <walletContext.Provider value={{ wallet }}>{children}</walletContext.Provider>
                        </div>
                    )
                ) : (
                    <div className="wallet-connect">
                        <span className="wallet-notification">Please Install Metamask</span>
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
