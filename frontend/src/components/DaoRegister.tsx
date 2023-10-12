/* eslint-disable no-console */
import { ReactNode, useState } from 'react'
import { Dao, DaoClient } from '../contracts/DaoClient'
import { useWallet } from '@txnlab/use-wallet'
import algosdk from 'algosdk'
import * as algokit from '@algorandfoundation/algokit-utils'

/* Example usage
<DaoRegister
  buttonClass="btn m-2"
  buttonLoadingNode=<span className="loading loading-spinner" />
  buttonNode="Call register"
  typedClient={typedClient}
  registeredAsa={registeredAsa}
/>
*/
type DaoRegisterArgs = Dao['methods']['register(asset)void']['argsObj']

type Props = {
  buttonClass: string
  buttonLoadingNode?: ReactNode
  buttonNode: ReactNode
  typedClient: DaoClient
  registeredAsa: DaoRegisterArgs['registeredAsa']
  algodClient: algosdk.Algodv2
  setState: () => Promise<void>
}

const DaoRegister = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { activeAddress, signer } = useWallet()
  const sender = { signer, addr: activeAddress! }

  const callMethod = async () => {
    setLoading(true)
    console.log(`Calling register`)


    const optinTxn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from: sender.addr,
      to: sender.addr,
      amount: 0,
      suggestedParams: await algokit.getTransactionParams(undefined, props.algodClient),
      assetIndex: Number(props.registeredAsa)
    })
    await algokit.sendTransaction({ from: sender, transaction: optinTxn }, props.algodClient);

    await props.typedClient.register(
      {
        registeredAsa: props.registeredAsa,
      },
      {
        sender, sendParams: { fee: algokit.microAlgos(3_000)}
      }
    )

    await props.setState()
    setLoading(false)
  }

  return (
    <button className={props.buttonClass} onClick={callMethod}>
      {loading ? props.buttonLoadingNode || props.buttonNode : props.buttonNode}
    </button>
  )
}

export default DaoRegister