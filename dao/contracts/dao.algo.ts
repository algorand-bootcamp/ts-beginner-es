import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class Dao extends Contract {

  proposal = GlobalStateKey<string>();
  totalVotes = GlobalStateKey<number>();

  createApplication(proposal: string): void {
    this.proposal.value = proposal;
  }

  vote(): void {
    this.totalVotes.value = this.totalVotes.value + 1;
  }

  getProposal(): string {
    return this.proposal.value;
  }

  getVotes(): number {
    return this.totalVotes.value;
  } 

}
