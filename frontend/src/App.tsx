import { DeflyWalletConnect } from '@blockshake/defly-connect'
import { DaffiWalletConnect } from '@daffiwallet/connect'
import { PeraWalletConnect } from '@perawallet/connect'
import { PROVIDER_ID, ProvidersArray, WalletProvider, useInitializeProviders, useWallet } from '@txnlab/use-wallet'
import algosdk from 'algosdk'
import { SnackbarProvider } from 'notistack'
import { useEffect, useState } from 'react'
import ConnectWallet from './components/ConnectWallet'
import { getAlgodConfigFromViteEnvironment, getKmdConfigFromViteEnvironment } from './utils/network/getAlgoClientConfigs'
import { DaoClient } from './contracts/DaoClient'
import * as algokit from '@algorandfoundation/algokit-utils';
import DaoCreateApplication from './components/DaoCreateApplication'
import DaoRegister from './components/DaoRegister'
import AlgodClient from 'algosdk/dist/types/client/v2/algod/algod'

let providersArray: ProvidersArray
if (import.meta.env.VITE_ALGOD_NETWORK === '') {
  const kmdConfig = getKmdConfigFromViteEnvironment()
  providersArray = [
    {
      id: PROVIDER_ID.KMD,
      clientOptions: {
        wallet: kmdConfig.wallet,
        password: kmdConfig.password,
        host: kmdConfig.server,
        token: String(kmdConfig.token),
        port: String(kmdConfig.port),
      },
    },
  ]
} else {
  providersArray = [
    { id: PROVIDER_ID.DEFLY, clientStatic: DeflyWalletConnect },
    { id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect },
    { id: PROVIDER_ID.DAFFI, clientStatic: DaffiWalletConnect },
    { id: PROVIDER_ID.EXODUS },
    // If you are interested in WalletConnect v2 provider
    // refer to https://github.com/TxnLab/use-wallet for detailed integration instructions
  ]
}

export default function App() {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const { activeAddress } = useWallet()
  const [appId, setAppId] = useState<number>(0)
  const [proposal, setProposal] = useState<string>('')
  const [registeredAsa, setRegisteredAsa] = useState<number>(0)
  const [registered, setRegistered] = useState<boolean>(false)


  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal)
  }

  const algodConfig = getAlgodConfigFromViteEnvironment()

  const algod = algokit.getAlgoClient({
    server: algodConfig.server,
    port: algodConfig.port,
    token: algodConfig.token
  })

  const typedClient = new DaoClient(
    {
      resolveBy: 'id',
      id: appId,
    },
    algod,
  );

  const setState = async() => {
    try {
      const state = await typedClient.getGlobalState()
      setProposal(state.proposal!.asString())
      const asa = state.registeredAsa?.asNumber() || 0
      setRegisteredAsa(asa) 
      
      try {
        const assetInfo = await algod.accountAssetInformation(activeAddress!, asa).do()
        setRegistered(assetInfo['asset-holding'].amount === 1)
      } catch (e) {
        console.warn(e)
        setRegistered(false)
      }
    
      
    } catch (e) {
      console.warn(e)
      setProposal('ID de aplicación NO valido')
    }
    
  }

  useEffect(() => {
    if (appId === 0) {
      setProposal("Ingrese un app ID para ver la propuesta")
      return
    }
    setState()
  }, [appId])


  const walletProviders = useInitializeProviders({
    providers: providersArray,
    nodeConfig: {
      network: algodConfig.network,
      nodeServer: algodConfig.server,
      nodePort: String(algodConfig.port),
      nodeToken: String(algodConfig.token),
    },
    algosdkStatic: algosdk,
  })

  return (
    <SnackbarProvider maxSnack={3}>
      <WalletProvider value={walletProviders}>
        <div className="hero min-h-screen bg-teal-400">
          <div className="hero-content text-center rounded-lg p-6 max-w-md bg-white mx-auto">
            <div className="max-w-md">
              <h1 className="text-4xl">
                Bienvenido al sistema de  <div className="font-bold">DAO 🙂</div>
              </h1>
              <p className="py-6">
                Este es el proyecto del bootcamp beginner de Tealscript en español
              </p>

              <div className="grid">

                
                <button data-test-id="connect-wallet" className="btn m-2" onClick={toggleWalletModal}>
                  Wallet Connection
                </button>
                <div className="divider" />

                <h1 className='font-bold'>ID del app de DAO:</h1>
                <input 
                  type='number' 
                  className='input input-bordered m-2'
                  value={appId}
                  onChange={(e) => setAppId(Number(e.currentTarget.value) || 0)}
                />
                <textarea className='textarea textarea-bordered m-2' value={proposal}></textarea>

                {activeAddress && appId ===0 && (
                  <DaoCreateApplication
                    buttonClass="btn m-2"
                    buttonLoadingNode=<span className="loading loading-spinner" />
                    buttonNode="Call createApplication"
                    typedClient={typedClient}
                    setAppId={setAppId}
                  />
                )}

              {activeAddress && appId !==0 && registeredAsa !==0 && !registered && (
                <DaoRegister
                  buttonClass="btn m-2"
                  buttonLoadingNode=<span className="loading loading-spinner" />
                  buttonNode="Call register"
                  typedClient={typedClient}
                  registeredAsa={registeredAsa}
                  algodClient={algod}
                  setState={setState}
                />
              )}
              </div>

              <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
            </div>
          </div>
        </div>
      </WalletProvider>
    </SnackbarProvider>
  )
}
