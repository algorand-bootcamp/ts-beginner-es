import {
  describe, test, expect, beforeAll, beforeEach
} from '@jest/globals';
import * as algokit from '@algorandfoundation/algokit-utils';
import algosdk from 'algosdk';
import { algorandFixture } from '@algorandfoundation/algokit-utils/testing';
import { DaoClient } from '../contracts/clients/DaoClient';

const fixture = algorandFixture();

let appClient: DaoClient;

describe('Dao', () => {
  beforeEach(fixture.beforeEach);

  const proposal = 'Nueva propuesta';

  beforeAll(async () => {
    await fixture.beforeEach();
    const { algod, testAccount } = fixture.context;
    const sender = algosdk.generateAccount();

    appClient = new DaoClient(
      {
        sender: testAccount,
        resolveBy: 'id',
        id: 0,
      },
      algod,
    );

    await appClient.create.createApplication({proposal});
  });

  
  let registeredAsa: bigint

  test('bootstrap', async() => {
    // Enviamos fondos al contrato para cubrir balance minimo
    await appClient.appClient.fundAppAccount(algokit.microAlgos(200_000));
    try {
      // Hacemos que nuestra transaccion cubra la comision de la transaccion interna
      const bootstrapResult = await appClient.bootstrap({}, { 
        sendParams: { 
          fee: algokit.microAlgos(2_000) 
        } 
      });
      registeredAsa = bootstrapResult.return!.valueOf();
    } catch(e) {
      console.warn(e);
      throw e;
    }
  })

  test('getProposal', async () => {
    const proposalFromMethod = await appClient.getProposal({});
    expect(proposalFromMethod.return?.valueOf()).toBe(proposal);
  });

  test('voto a favor', async () => {
    await appClient.vote({ inFavor: true });
    const totalVotesFromMethod = await appClient.getVotes({});
    expect(totalVotesFromMethod.return?.valueOf()).toEqual([BigInt(1), BigInt(1)]);
  })

  test('voto en contra', async () => {
    await appClient.vote({ inFavor: false });
    const totalVotesFromMethod = await appClient.getVotes({});
    expect(totalVotesFromMethod.return?.valueOf()).toEqual([BigInt(2), BigInt(1)]);
  })
});
