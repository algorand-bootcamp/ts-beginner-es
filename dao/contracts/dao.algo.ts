import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class Dao extends Contract {
  getProposal(): string {
    return 'Propuesta uno';
  }
}
