export interface SysConf {
    miningLocalServerUrl: string;
    miningLocalChainUrl: string;
    miningMonitorUrl: string;
    sidecarUrl: string;
    btcNodeInfo?: NodeInfo;
}

export interface NodeInfo {
    peerHost: string;
    username: string;
    password: string;
    rpcPort: number;
    peerPort: number;
}