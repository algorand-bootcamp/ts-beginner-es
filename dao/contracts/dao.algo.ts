import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class Dao extends Contract {

  proposal = GlobalStateKey<string>();
  totalVotes = GlobalStateKey<number>();
  favorVotes = GlobalStateKey<number>();

  createApplication(proposal: string): void {
    this.proposal.value = proposal;
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
