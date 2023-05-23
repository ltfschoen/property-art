import React from "react";
import { Button, SvgIcon } from '@mui/material';
import MetaMaskIcon from "./MetaMaskIcon";

class Header extends React.Component {
    handleClick = () => {
        this.props.handleClick();
    }
    handleConnect = () => {
        this.props.handleConnect();
    }
    render() {
        const { wallet, handleClick, handleConnect, isMetaMask, open } = this.props;
        console.log('Header: ', wallet, isMetaMask, open)

        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand">
                    <span className="brand-text">Property Art</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {wallet && wallet.accounts && wallet.accounts.length > 0 ? (
                        <>
                            <Button
                                variant="outlined"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={this.handleClick}
                                startIcon={<SvgIcon component={MetaMaskIcon} viewBox="0 0 300 300" />}
                            >
                                {(wallet.accounts[0] as string)?.slice(0, 5)}...{(wallet.accounts[0] as string)?.slice(-5)}
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="outlined" onClick={this.handleConnect} startIcon={<SvgIcon component={MetaMaskIcon} viewBox="0 0 300 300" />} disabled={!isMetaMask}>
                                connect
                            </Button>
                        </>
                    )}
                </span>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Market</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Credit</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <a className="dropdown-item" href="#">Collateralized Loan</a>
                                <a className="dropdown-item" href="#">Royalty</a>
                            </div>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
        )
    }
};

export default Header;
