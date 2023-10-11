import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class Dao extends Contract {

  proposal = GlobalStateKey<string>();
  totalVotes = GlobalStateKey<number>();
  favorVotes = GlobalStateKey<number>();
  registeredAsa = GlobalStateKey<Asset>();

  createApplication(proposal: string): void {
    this.proposal.value = proposal;
  }

  bootstrap(): Asset {
    verifyTxn(this.txn, { sender: this.app.creator })
    assert(!this.registeredAsa.exists)
    const registeredAsa = sendAssetCreation({
      configAssetTotal: 1_000,
      configAssetFreeze: this.app.address
    })
    this.registeredAsa.value = registeredAsa;
    return registeredAsa;
  }

  register(registeredAsa: Asset): void {
    // Verificamos que el solicitante no tenga el asset aun
    assert(this.txn.sender.assetBalance(this.registeredAsa.value) === 0)

    // Enviar asset al miembro que se registre
    sendAssetTransfer({
      xferAsset: this.registeredAsa.value,
      assetReceiver: this.txn.sender,
      assetAmount: 1
    });

    // Congelarle el asset
    sendAssetFreeze({
      freezeAsset: this.registeredAsa.value,
      freezeAssetAccount: this.txn.sender,
      freezeAssetFrozen: true
    })
  }

  vote(inFavor: boolean, registeredAsa: Asset): void {
    assert(this.txn.sender.assetBalance(this.registeredAsa.value) >= 1)
    this.totalVotes.value = this.totalVotes.value + 1;
    if (inFavor) this.favorVotes.value = this.favorVotes.value + 1;
  }

  getProposal(): string {
    return this.proposal.value;
  }

  getVotes(): [number, number] {
    return [this.totalVotes.value, this.favorVotes.value];
  } 

  getRegisteredAsa(): Asset {
    return this.registeredAsa.value;
  }

}
