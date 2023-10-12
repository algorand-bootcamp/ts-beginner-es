/* eslint-disable no-console */
import { ReactNode, useState } from 'react'
import { Dao, DaoClient } from '../contracts/DaoClient'
import { useWallet } from '@txnlab/use-wallet'

/* Example usage
<DaoVote
  buttonClass="btn m-2"
  buttonLoadingNode=<span className="loading loading-spinner" />
  buttonNode="Call vote"
  typedClient={typedClient}
  inFavor={inFavor}
  registeredAsa={registeredAsa}
/>
*/
type DaoVoteArgs = Dao['methods']['vote(bool,asset)void']['argsObj']

type Props = {
  buttonClass: string
  buttonLoadingNode?: ReactNode
  buttonNode: ReactNode
  typedClient: DaoClient
  inFavor: DaoVoteArgs['inFavor']
  registeredAsa: DaoVoteArgs['registeredAsa']
}

const DaoVote = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { activeAddress, signer } = useWallet()

  const callMethod = async () => {
    setLoading(true)
    console.log(`Calling vote`)
    await props.typedClient.vote(
      {
        inFavor: props.inFavor,
        registeredAsa: props.registeredAsa,
      },
      {
        sender: { signer, addr: activeAddress! },
      },
    )
    setLoading(false)
  }

  return (
    <button className={props.buttonClass} onClick={callMethod}>
      {loading ? props.buttonLoadingNode || props.buttonNode : props.buttonNode}
    </button>
  )
}

export default DaoVote