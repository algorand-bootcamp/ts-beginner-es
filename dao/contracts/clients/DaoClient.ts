/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import {
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  CoreAppCallArgs,
  RawAppCallArgs,
  AppState,
  TealTemplateParams,
  ABIAppCallArg,
} from '@algorandfoundation/algokit-utils/types/app'
import {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import { SendTransactionResult, TransactionToSign, SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction'
import { Algodv2, OnApplicationComplete, Transaction, TransactionWithSigner, AtomicTransactionComposer } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "createApplication(string)void": {
      "call_config": {
        "no_op": "CREATE"
      }
    },
    "bootstrap()uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "vote(bool)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "getProposal()string": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "getVotes()(uint64,uint64)": {
      "call_config": {
        "no_op": "CALL"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {
        "proposal": {
          "type": "bytes",
          "key": "proposal"
        },
        "totalVotes": {
          "type": "uint64",
          "key": "totalVotes"
        },
        "favorVotes": {
          "type": "uint64",
          "key": "favorVotes"
        },
        "registeredAsa": {
          "type": "uint64",
          "key": "registeredAsa"
        }
      },
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 1,
      "num_uints": 3
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDkKCi8vIFRoaXMgVEVBTCB3YXMgZ2VuZXJhdGVkIGJ5IFRFQUxTY3JpcHQgdjAuNDQuMAovLyBodHRwczovL2dpdGh1Yi5jb20vYWxnb3JhbmQtZGV2cmVsL1RFQUxTY3JpcHQKCi8vIFRoaXMgY29udHJhY3QgaXMgY29tcGxpYW50IHdpdGggYW5kL29yIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBBUkNzOiBbIEFSQzQgXQoKLy8gVGhlIGZvbGxvd2luZyB0ZW4gbGluZXMgb2YgVEVBTCBoYW5kbGUgaW5pdGlhbCBwcm9ncmFtIGZsb3cKLy8gVGhpcyBwYXR0ZXJuIGlzIHVzZWQgdG8gbWFrZSBpdCBlYXN5IGZvciBhbnlvbmUgdG8gcGFyc2UgdGhlIHN0YXJ0IG9mIHRoZSBwcm9ncmFtIGFuZCBkZXRlcm1pbmUgaWYgYSBzcGVjaWZpYyBhY3Rpb24gaXMgYWxsb3dlZAovLyBIZXJlLCBhY3Rpb24gcmVmZXJzIHRvIHRoZSBPbkNvbXBsZXRlIGluIGNvbWJpbmF0aW9uIHdpdGggd2hldGhlciB0aGUgYXBwIGlzIGJlaW5nIGNyZWF0ZWQgb3IgY2FsbGVkCi8vIEV2ZXJ5IHBvc3NpYmxlIGFjdGlvbiBmb3IgdGhpcyBjb250cmFjdCBpcyByZXByZXNlbnRlZCBpbiB0aGUgc3dpdGNoIHN0YXRlbWVudAovLyBJZiB0aGUgYWN0aW9uIGlzIG5vdCBpbXBsbWVudGVkIGluIHRoZSBjb250cmFjdCwgaXRzIHJlcHNlY3RpdmUgYnJhbmNoIHdpbGwgYmUgIk5PVF9JTVBMTUVOVEVEIiB3aGljaCBqdXN0IGNvbnRhaW5zICJlcnIiCnR4biBBcHBsaWNhdGlvbklECmludCAwCj4KaW50IDYKKgp0eG4gT25Db21wbGV0aW9uCisKc3dpdGNoIGNyZWF0ZV9Ob09wIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgTk9UX0lNUExFTUVOVEVEIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgY2FsbF9Ob09wCgpOT1RfSU1QTEVNRU5URUQ6CgllcnIKCi8vIGNyZWF0ZUFwcGxpY2F0aW9uKHN0cmluZyl2b2lkCmFiaV9yb3V0ZV9jcmVhdGVBcHBsaWNhdGlvbjoKCS8vIHByb3Bvc2FsOiBzdHJpbmcKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWV4dHJhY3QgMiAwCgoJLy8gZXhlY3V0ZSBjcmVhdGVBcHBsaWNhdGlvbihzdHJpbmcpdm9pZAoJY2FsbHN1YiBjcmVhdGVBcHBsaWNhdGlvbgoJaW50IDEKCXJldHVybgoKY3JlYXRlQXBwbGljYXRpb246Cglwcm90byAxIDAKCgkvLyBjb250cmFjdHMvZGFvLmFsZ28udHM6MTIKCS8vIHRoaXMucHJvcG9zYWwudmFsdWUgPSBwcm9wb3NhbAoJYnl0ZSAicHJvcG9zYWwiCglmcmFtZV9kaWcgLTEgLy8gcHJvcG9zYWw6IGJ5dGVzCglkdXAKCWxlbgoJaXRvYgoJZXh0cmFjdCA2IDIKCXN3YXAKCWNvbmNhdAoJYXBwX2dsb2JhbF9wdXQKCXJldHN1YgoKLy8gYm9vdHN0cmFwKCl1aW50NjQKYWJpX3JvdXRlX2Jvb3RzdHJhcDoKCWJ5dGUgMHggLy8gcHVzaCBlbXB0eSBieXRlcyB0byBmaWxsIHRoZSBzdGFjayBmcmFtZSBmb3IgdGhpcyBzdWJyb3V0aW5lJ3MgbG9jYWwgdmFyaWFibGVzCgoJLy8gZXhlY3V0ZSBib290c3RyYXAoKXVpbnQ2NAoJY2FsbHN1YiBib290c3RyYXAKCWludCAxCglyZXR1cm4KCmJvb3RzdHJhcDoKCXByb3RvIDEgMAoKCS8vIGNvbnRyYWN0cy9kYW8uYWxnby50czoxNgoJLy8gcmVnaXN0ZXJlZEFzYSA9IHNlbmRBc3NldENyZWF0aW9uKHsKCS8vICAgICAgIGNvbmZpZ0Fzc2V0VG90YWw6IDFfMDAwLAoJLy8gICAgICAgY29uZmlnQXNzZXRGcmVlemU6IHRoaXMuYXBwLmFkZHJlc3MKCS8vICAgICB9KQoJaXR4bl9iZWdpbgoJaW50IGFjZmcKCWl0eG5fZmllbGQgVHlwZUVudW0KCgkvLyBjb250cmFjdHMvZGFvLmFsZ28udHM6MTcKCS8vIGNvbmZpZ0Fzc2V0VG90YWw6IDFfMDAwCglpbnQgMV8wMDAKCWl0eG5fZmllbGQgQ29uZmlnQXNzZXRUb3RhbAoKCS8vIGNvbnRyYWN0cy9kYW8uYWxnby50czoxOAoJLy8gY29uZmlnQXNzZXRGcmVlemU6IHRoaXMuYXBwLmFkZHJlc3MKCXR4bmEgQXBwbGljYXRpb25zIDAKCWFwcF9wYXJhbXNfZ2V0IEFwcEFkZHJlc3MKCWFzc2VydAoJaXR4bl9maWVsZCBDb25maWdBc3NldEZyZWV6ZQoKCS8vIEZlZSBmaWVsZCBub3Qgc2V0LCBkZWZhdWx0aW5nIHRvIDAKCWludCAwCglpdHhuX2ZpZWxkIEZlZQoKCS8vIFN1Ym1pdCBpbm5lciB0cmFuc2FjdGlvbgoJaXR4bl9zdWJtaXQKCWl0eG4gQ3JlYXRlZEFzc2V0SUQKCWZyYW1lX2J1cnkgLTEgLy8gcmVnaXN0ZXJlZEFzYTogYXNzZXQKCgkvLyBjb250cmFjdHMvZGFvLmFsZ28udHM6MjAKCS8vIHRoaXMucmVnaXN0ZXJlZEFzYS52YWx1ZSA9IHJlZ2lzdGVyZWRBc2EKCWJ5dGUgInJlZ2lzdGVyZWRBc2EiCglmcmFtZV9kaWcgLTEgLy8gcmVnaXN0ZXJlZEFzYTogYXNzZXQKCWFwcF9nbG9iYWxfcHV0CgoJLy8gY29udHJhY3RzL2Rhby5hbGdvLnRzOjIxCgkvLyByZXR1cm4gcmVnaXN0ZXJlZEFzYTsKCWZyYW1lX2RpZyAtMSAvLyByZWdpc3RlcmVkQXNhOiBhc3NldAoJaXRvYgoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgovLyB2b3RlKGJvb2wpdm9pZAphYmlfcm91dGVfdm90ZToKCS8vIGluRmF2b3I6IGJvb2wKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWludCAwCglnZXRiaXQKCgkvLyBleGVjdXRlIHZvdGUoYm9vbCl2b2lkCgljYWxsc3ViIHZvdGUKCWludCAxCglyZXR1cm4KCnZvdGU6Cglwcm90byAxIDAKCgkvLyBjb250cmFjdHMvZGFvLmFsZ28udHM6MjUKCS8vIHRoaXMudG90YWxWb3Rlcy52YWx1ZSA9IHRoaXMudG90YWxWb3Rlcy52YWx1ZSArIDEKCWJ5dGUgInRvdGFsVm90ZXMiCglieXRlICJ0b3RhbFZvdGVzIgoJYXBwX2dsb2JhbF9nZXQKCWludCAxCgkrCglhcHBfZ2xvYmFsX3B1dAoKCS8vIGlmMF9jb25kaXRpb24KCS8vIGNvbnRyYWN0cy9kYW8uYWxnby50czoyNgoJLy8gaW5GYXZvcgoJZnJhbWVfZGlnIC0xIC8vIGluRmF2b3I6IGJvb2wKCWJ6IGlmMF9lbmQKCgkvLyBpZjBfY29uc2VxdWVudAoJLy8gY29udHJhY3RzL2Rhby5hbGdvLnRzOjI2CgkvLyB0aGlzLmZhdm9yVm90ZXMudmFsdWUgPSB0aGlzLmZhdm9yVm90ZXMudmFsdWUgKyAxCglieXRlICJmYXZvclZvdGVzIgoJYnl0ZSAiZmF2b3JWb3RlcyIKCWFwcF9nbG9iYWxfZ2V0CglpbnQgMQoJKwoJYXBwX2dsb2JhbF9wdXQKCmlmMF9lbmQ6CglyZXRzdWIKCi8vIGdldFByb3Bvc2FsKClzdHJpbmcKYWJpX3JvdXRlX2dldFByb3Bvc2FsOgoJLy8gZXhlY3V0ZSBnZXRQcm9wb3NhbCgpc3RyaW5nCgljYWxsc3ViIGdldFByb3Bvc2FsCglpbnQgMQoJcmV0dXJuCgpnZXRQcm9wb3NhbDoKCXByb3RvIDAgMAoKCS8vIGNvbnRyYWN0cy9kYW8uYWxnby50czozMAoJLy8gcmV0dXJuIHRoaXMucHJvcG9zYWwudmFsdWU7CglieXRlICJwcm9wb3NhbCIKCWFwcF9nbG9iYWxfZ2V0CglleHRyYWN0IDIgMAoJZHVwCglsZW4KCWl0b2IKCWV4dHJhY3QgNiAyCglzd2FwCgljb25jYXQKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKLy8gZ2V0Vm90ZXMoKSh1aW50NjQsdWludDY0KQphYmlfcm91dGVfZ2V0Vm90ZXM6CgkvLyBleGVjdXRlIGdldFZvdGVzKCkodWludDY0LHVpbnQ2NCkKCWNhbGxzdWIgZ2V0Vm90ZXMKCWludCAxCglyZXR1cm4KCmdldFZvdGVzOgoJcHJvdG8gMCAwCgoJLy8gY29udHJhY3RzL2Rhby5hbGdvLnRzOjM0CgkvLyByZXR1cm4gW3RoaXMudG90YWxWb3Rlcy52YWx1ZSwgdGhpcy5mYXZvclZvdGVzLnZhbHVlXTsKCWJ5dGUgMHggLy8gaW5pdGlhbCBoZWFkCglieXRlIDB4IC8vIGluaXRpYWwgdGFpbAoJYnl0ZSAweDAwMTAgLy8gaW5pdGlhbCBoZWFkIG9mZnNldAoJYnl0ZSAidG90YWxWb3RlcyIKCWFwcF9nbG9iYWxfZ2V0CglpdG9iCgljYWxsc3ViIHByb2Nlc3Nfc3RhdGljX3R1cGxlX2VsZW1lbnQKCWJ5dGUgImZhdm9yVm90ZXMiCglhcHBfZ2xvYmFsX2dldAoJaXRvYgoJY2FsbHN1YiBwcm9jZXNzX3N0YXRpY190dXBsZV9lbGVtZW50Cglwb3AgLy8gcG9wIGhlYWQgb2Zmc2V0Cgljb25jYXQgLy8gY29uY2F0IGhlYWQgYW5kIHRhaWwKCWJ5dGUgMHgxNTFmN2M3NQoJc3dhcAoJY29uY2F0Cglsb2cKCXJldHN1YgoKY3JlYXRlX05vT3A6CgltZXRob2QgImNyZWF0ZUFwcGxpY2F0aW9uKHN0cmluZyl2b2lkIgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggYWJpX3JvdXRlX2NyZWF0ZUFwcGxpY2F0aW9uCgllcnIKCmNhbGxfTm9PcDoKCW1ldGhvZCAiYm9vdHN0cmFwKCl1aW50NjQiCgltZXRob2QgInZvdGUoYm9vbCl2b2lkIgoJbWV0aG9kICJnZXRQcm9wb3NhbCgpc3RyaW5nIgoJbWV0aG9kICJnZXRWb3RlcygpKHVpbnQ2NCx1aW50NjQpIgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggYWJpX3JvdXRlX2Jvb3RzdHJhcCBhYmlfcm91dGVfdm90ZSBhYmlfcm91dGVfZ2V0UHJvcG9zYWwgYWJpX3JvdXRlX2dldFZvdGVzCgllcnIKCnByb2Nlc3Nfc3RhdGljX3R1cGxlX2VsZW1lbnQ6Cglwcm90byA0IDMKCWZyYW1lX2RpZyAtNCAvLyB0dXBsZSBoZWFkCglmcmFtZV9kaWcgLTEgLy8gZWxlbWVudAoJY29uY2F0CglmcmFtZV9kaWcgLTMgLy8gdHVwbGUgdGFpbAoJZnJhbWVfZGlnIC0yIC8vIGhlYWQgb2Zmc2V0CglyZXRzdWI=",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDkKaW50IDE="
  },
  "contract": {
    "name": "Dao",
    "desc": "",
    "methods": [
      {
        "name": "createApplication",
        "args": [
          {
            "name": "proposal",
            "type": "string",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "bootstrap",
        "args": [],
        "desc": "",
        "returns": {
          "type": "uint64",
          "desc": ""
        }
      },
      {
        "name": "vote",
        "args": [
          {
            "name": "inFavor",
            "type": "bool",
            "desc": ""
          }
        ],
        "desc": "",
        "returns": {
          "type": "void",
          "desc": ""
        }
      },
      {
        "name": "getProposal",
        "args": [],
        "desc": "",
        "returns": {
          "type": "string",
          "desc": ""
        }
      },
      {
        "name": "getVotes",
        "args": [],
        "desc": "",
        "returns": {
          "type": "(uint64,uint64)",
          "desc": ""
        }
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt 
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

/**
 * Defines the types of available calls and state of the Dao smart contract.
 */
export type Dao = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'createApplication(string)void' | 'createApplication', {
      argsObj: {
        proposal: string
      }
      argsTuple: [proposal: string]
      returns: void
    }>
    & Record<'bootstrap()uint64' | 'bootstrap', {
      argsObj: {
      }
      argsTuple: []
      returns: bigint
    }>
    & Record<'vote(bool)void' | 'vote', {
      argsObj: {
        inFavor: boolean
      }
      argsTuple: [inFavor: boolean]
      returns: void
    }>
    & Record<'getProposal()string' | 'getProposal', {
      argsObj: {
      }
      argsTuple: []
      returns: string
    }>
    & Record<'getVotes()(uint64,uint64)' | 'getVotes', {
      argsObj: {
      }
      argsTuple: []
      returns: [bigint, bigint]
    }>
  /**
   * Defines the shape of the global and local state of the application.
   */
  state: {
    global: {
      'proposal'?: BinaryState
      'totalVotes'?: IntegerState
      'favorVotes'?: IntegerState
      'registeredAsa'?: IntegerState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type DaoSig = keyof Dao['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends DaoSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the Dao smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends DaoSig> = Dao['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the Dao smart contract to the method's return type
 */
export type MethodReturn<TSignature extends DaoSig> = Dao['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type DaoCreateCalls = (typeof DaoCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type DaoCreateCallParams =
  | (TypedCallParams<'createApplication(string)void'> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type DaoDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: DaoCreateCalls) => DaoCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class DaoCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the Dao smart contract using the createApplication(string)void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication(string)void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication(string)void' as const,
          methodArgs: Array.isArray(args) ? args : [args.proposal],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the bootstrap()uint64 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static bootstrap(args: MethodArgs<'bootstrap()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'bootstrap()uint64' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the vote(bool)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static vote(args: MethodArgs<'vote(bool)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'vote(bool)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.inFavor],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the getProposal()string ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static getProposal(args: MethodArgs<'getProposal()string'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'getProposal()string' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the getVotes()(uint64,uint64) ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static getVotes(args: MethodArgs<'getVotes()(uint64,uint64)'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'getVotes()(uint64,uint64)' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
}

/**
 * A client to make calls to the Dao smart contract
 */
export class DaoClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `DaoClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue }
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof Dao['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the Dao smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: DaoDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(DaoCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the Dao smart contract using the createApplication(string)void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication(string)void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}): Promise<AppCallTransactionResultOfType<MethodReturn<'createApplication(string)void'>>> {
        return $this.mapReturnValue(await $this.appClient.create(DaoCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the Dao smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the bootstrap()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public bootstrap(args: MethodArgs<'bootstrap()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(DaoCallFactory.bootstrap(args, params))
  }

  /**
   * Calls the vote(bool)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public vote(args: MethodArgs<'vote(bool)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(DaoCallFactory.vote(args, params))
  }

  /**
   * Calls the getProposal()string ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public getProposal(args: MethodArgs<'getProposal()string'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(DaoCallFactory.getProposal(args, params))
  }

  /**
   * Calls the getVotes()(uint64,uint64) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public getVotes(args: MethodArgs<'getVotes()(uint64,uint64)'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(DaoCallFactory.getVotes(args, params))
  }

  /**
   * Extracts a binary state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns A BinaryState instance containing the state value, or undefined if the key was not found
   */
  private static getBinaryState(state: AppState, key: string): BinaryState | undefined {
    const value = state[key]
    if (!value) return undefined
    if (!('valueRaw' in value))
      throw new Error(`Failed to parse state value for ${key}; received an int when expected a byte array`)
    return {
      asString(): string {
        return value.value
      },
      asByteArray(): Uint8Array {
        return value.valueRaw
      }
    }
  }

  /**
   * Extracts a integer state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns An IntegerState instance containing the state value, or undefined if the key was not found
   */
  private static getIntegerState(state: AppState, key: string): IntegerState | undefined {
    const value = state[key]
    if (!value) return undefined
    if ('valueRaw' in value)
      throw new Error(`Failed to parse state value for ${key}; received a byte array when expected a number`)
    return {
      asBigInt() {
        return typeof value.value === 'bigint' ? value.value : BigInt(value.value)
      },
      asNumber(): number {
        return typeof value.value === 'bigint' ? Number(value.value) : value.value
      },
    }
  }

  /**
   * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
   */
  public async getGlobalState(): Promise<Dao['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get proposal() {
        return DaoClient.getBinaryState(state, 'proposal')
      },
      get totalVotes() {
        return DaoClient.getIntegerState(state, 'totalVotes')
      },
      get favorVotes() {
        return DaoClient.getIntegerState(state, 'favorVotes')
      },
      get registeredAsa() {
        return DaoClient.getIntegerState(state, 'registeredAsa')
      },
    }
  }

  public compose(): DaoComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      bootstrap(args: MethodArgs<'bootstrap()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.bootstrap(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      vote(args: MethodArgs<'vote(bool)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.vote(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      getProposal(args: MethodArgs<'getProposal()string'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.getProposal(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      getVotes(args: MethodArgs<'getVotes()(uint64,uint64)'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.getVotes(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async execute() {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams: {} }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as DaoComposer
  }
}
export type DaoComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the bootstrap()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  bootstrap(args: MethodArgs<'bootstrap()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): DaoComposer<[...TReturns, MethodReturn<'bootstrap()uint64'>]>

  /**
   * Calls the vote(bool)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  vote(args: MethodArgs<'vote(bool)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): DaoComposer<[...TReturns, MethodReturn<'vote(bool)void'>]>

  /**
   * Calls the getProposal()string ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  getProposal(args: MethodArgs<'getProposal()string'>, params?: AppClientCallCoreParams & CoreAppCallArgs): DaoComposer<[...TReturns, MethodReturn<'getProposal()string'>]>

  /**
   * Calls the getVotes()(uint64,uint64) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  getVotes(args: MethodArgs<'getVotes()(uint64,uint64)'>, params?: AppClientCallCoreParams & CoreAppCallArgs): DaoComposer<[...TReturns, MethodReturn<'getVotes()(uint64,uint64)'>]>

  /**
   * Makes a clear_state call to an existing instance of the Dao smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): DaoComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): DaoComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Executes the transaction group and returns an array of results
   */
  execute(): Promise<DaoComposerResults<TReturns>>
}
export type DaoComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
