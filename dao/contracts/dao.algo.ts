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
    const registeredAsa = sendAssetCreation({
      configAssetTotal: 1_000,
      configAssetFreeze: this.app.address
    })
    this.registeredAsa.value = registeredAsa;
    return registeredAsa;
  }

  vote(inFavor: boolean): void {
    this.totalVotes.value = this.totalVotes.value + 1;
    if (inFavor) this.favorVotes.value = this.favorVotes.value + 1;
  }

  getProposal(): string {
    return this.proposal.value;
  }

  getVotes(): [number, number] {
    return [this.totalVotes.value, this.favorVotes.value];
  } 

}
