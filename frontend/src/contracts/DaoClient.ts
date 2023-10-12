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
    "register(asset)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "vote(bool,asset)void": {
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
    },
    "getRegisteredAsa()uint64": {
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
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDkKCi8vIFRoaXMgVEVBTCB3YXMgZ2VuZXJhdGVkIGJ5IFRFQUxTY3JpcHQgdjAuNDQuMAovLyBodHRwczovL2dpdGh1Yi5jb20vYWxnb3JhbmQtZGV2cmVsL1RFQUxTY3JpcHQKCi8vIFRoaXMgY29udHJhY3QgaXMgY29tcGxpYW50IHdpdGggYW5kL29yIGltcGxlbWVudHMgdGhlIGZvbGxvd2luZyBBUkNzOiBbIEFSQzQgXQoKLy8gVGhlIGZvbGxvd2luZyB0ZW4gbGluZXMgb2YgVEVBTCBoYW5kbGUgaW5pdGlhbCBwcm9ncmFtIGZsb3cKLy8gVGhpcyBwYXR0ZXJuIGlzIHVzZWQgdG8gbWFrZSBpdCBlYXN5IGZvciBhbnlvbmUgdG8gcGFyc2UgdGhlIHN0YXJ0IG9mIHRoZSBwcm9ncmFtIGFuZCBkZXRlcm1pbmUgaWYgYSBzcGVjaWZpYyBhY3Rpb24gaXMgYWxsb3dlZAovLyBIZXJlLCBhY3Rpb24gcmVmZXJzIHRvIHRoZSBPbkNvbXBsZXRlIGluIGNvbWJpbmF0aW9uIHdpdGggd2hldGhlciB0aGUgYXBwIGlzIGJlaW5nIGNyZWF0ZWQgb3IgY2FsbGVkCi8vIEV2ZXJ5IHBvc3NpYmxlIGFjdGlvbiBmb3IgdGhpcyBjb250cmFjdCBpcyByZXByZXNlbnRlZCBpbiB0aGUgc3dpdGNoIHN0YXRlbWVudAovLyBJZiB0aGUgYWN0aW9uIGlzIG5vdCBpbXBsbWVudGVkIGluIHRoZSBjb250cmFjdCwgaXRzIHJlcHNlY3RpdmUgYnJhbmNoIHdpbGwgYmUgIk5PVF9JTVBMTUVOVEVEIiB3aGljaCBqdXN0IGNvbnRhaW5zICJlcnIiCnR4biBBcHBsaWNhdGlvbklECmludCAwCj4KaW50IDYKKgp0eG4gT25Db21wbGV0aW9uCisKc3dpdGNoIGNyZWF0ZV9Ob09wIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgTk9UX0lNUExFTUVOVEVEIE5PVF9JTVBMRU1FTlRFRCBOT1RfSU1QTEVNRU5URUQgY2FsbF9Ob09wCgpOT1RfSU1QTEVNRU5URUQ6CgllcnIKCi8vIGNyZWF0ZUFwcGxpY2F0aW9uKHN0cmluZyl2b2lkCmFiaV9yb3V0ZV9jcmVhdGVBcHBsaWNhdGlvbjoKCS8vIHByb3Bvc2FsOiBzdHJpbmcKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWV4dHJhY3QgMiAwCgoJLy8gZXhlY3V0ZSBjcmVhdGVBcHBsaWNhdGlvbihzdHJpbmcpdm9pZAoJY2FsbHN1YiBjcmVhdGVBcHBsaWNhdGlvbgoJaW50IDEKCXJldHVybgoKY3JlYXRlQXBwbGljYXRpb246Cglwcm90byAxIDAKCgkvLyBjb250cmFjdHMvZGFvLmFsZ28udHM6MTIKCS8vIHRoaXMucHJvcG9zYWwudmFsdWUgPSBwcm9wb3NhbAoJYnl0ZSAicHJvcG9zYWwiCglmcmFtZV9kaWcgLTEgLy8gcHJvcG9zYWw6IGJ5dGVzCglkdXAKCWxlbgoJaXRvYgoJZXh0cmFjdCA2IDIKCXN3YXAKCWNvbmNhdAoJYXBwX2dsb2JhbF9wdXQKCXJldHN1YgoKLy8gYm9vdHN0cmFwKCl1aW50NjQKYWJpX3JvdXRlX2Jvb3RzdHJhcDoKCWJ5dGUgMHggLy8gcHVzaCBlbXB0eSBieXRlcyB0byBmaWxsIHRoZSBzdGFjayBmcmFtZSBmb3IgdGhpcyBzdWJyb3V0aW5lJ3MgbG9jYWwgdmFyaWFibGVzCgoJLy8gZXhlY3V0ZSBib290c3RyYXAoKXVpbnQ2NAoJY2FsbHN1YiBib290c3RyYXAKCWludCAxCglyZXR1cm4KCmJvb3RzdHJhcDoKCXByb3RvIDEgMAoKCS8vIGNvbnRyYWN0cy9kYW8uYWxnby50czoxNgoJLy8gdmVyaWZ5IHNlbmRlcgoJdHhuIFNlbmRlcgoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJYXBwX3BhcmFtc19nZXQgQXBwQ3JlYXRvcgoJYXNzZXJ0Cgk9PQoJYXNzZXJ0CgoJLy8gY29udHJhY3RzL2Rhby5hbGdvLnRzOjE3CgkvLyBhc3NlcnQoIXRoaXMucmVnaXN0ZXJlZEFzYS5leGlzdHMpCgl0eG5hIEFwcGxpY2F0aW9ucyAwCglieXRlICJyZWdpc3RlcmVkQXNhIgoJYXBwX2dsb2JhbF9nZXRfZXgKCXN3YXAKCXBvcAoJIQoJYXNzZXJ0CgoJLy8gY29udHJhY3RzL2Rhby5hbGdvLnRzOjE4CgkvLyByZWdpc3RlcmVkQXNhID0gc2VuZEFzc2V0Q3JlYXRpb24oewoJLy8gICAgICAgY29uZmlnQXNzZXRUb3RhbDogMV8wMDAsCgkvLyAgICAgICBjb25maWdBc3NldEZyZWV6ZTogdGhpcy5hcHAuYWRkcmVzcwoJLy8gICAgIH0pCglpdHhuX2JlZ2luCglpbnQgYWNmZwoJaXR4bl9maWVsZCBUeXBlRW51bQoKCS8vIGNvbnRyYWN0cy9kYW8uYWxnby50czoxOQoJLy8gY29uZmlnQXNzZXRUb3RhbDogMV8wMDAKCWludCAxXzAwMAoJaXR4bl9maWVsZCBDb25maWdBc3NldFRvdGFsCgoJLy8gY29udHJhY3RzL2Rhby5hbGdvLnRzOjIwCgkvLyBjb25maWdBc3NldEZyZWV6ZTogdGhpcy5hcHAuYWRkcmVzcwoJdHhuYSBBcHBsaWNhdGlvbnMgMAoJYXBwX3BhcmFtc19nZXQgQXBwQWRkcmVzcwoJYXNzZXJ0CglpdHhuX2ZpZWxkIENvbmZpZ0Fzc2V0RnJlZXplCgoJLy8gRmVlIGZpZWxkIG5vdCBzZXQsIGRlZmF1bHRpbmcgdG8gMAoJaW50IDAKCWl0eG5fZmllbGQgRmVlCgoJLy8gU3VibWl0IGlubmVyIHRyYW5zYWN0aW9uCglpdHhuX3N1Ym1pdAoJaXR4biBDcmVhdGVkQXNzZXRJRAoJZnJhbWVfYnVyeSAtMSAvLyByZWdpc3RlcmVkQXNhOiBhc3NldAoKCS8vIGNvbnRyYWN0cy9kYW8uYWxnby50czoyMgoJLy8gdGhpcy5yZWdpc3RlcmVkQXNhLnZhbHVlID0gcmVnaXN0ZXJlZEFzYQoJYnl0ZSAicmVnaXN0ZXJlZEFzYSIKCWZyYW1lX2RpZyAtMSAvLyByZWdpc3RlcmVkQXNhOiBhc3NldAoJYXBwX2dsb2JhbF9wdXQKCgkvLyBjb250cmFjdHMvZGFvLmFsZ28udHM6MjMKCS8vIHJldHVybiByZWdpc3RlcmVkQXNhOwoJZnJhbWVfZGlnIC0xIC8vIHJlZ2lzdGVyZWRBc2E6IGFzc2V0CglpdG9iCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCi8vIHJlZ2lzdGVyKGFzc2V0KXZvaWQKYWJpX3JvdXRlX3JlZ2lzdGVyOgoJLy8gcmVnaXN0ZXJlZEFzYTogYXNzZXQKCXR4bmEgQXBwbGljYXRpb25BcmdzIDEKCWJ0b2kKCXR4bmFzIEFzc2V0cwoKCS8vIGV4ZWN1dGUgcmVnaXN0ZXIoYXNzZXQpdm9pZAoJY2FsbHN1YiByZWdpc3RlcgoJaW50IDEKCXJldHVybgoKcmVnaXN0ZXI6Cglwcm90byAxIDAKCgkvLyBjb250cmFjdHMvZGFvLmFsZ28udHM6MjgKCS8vIGFzc2VydCh0aGlzLnR4bi5zZW5kZXIuYXNzZXRCYWxhbmNlKHRoaXMucmVnaXN0ZXJlZEFzYS52YWx1ZSkgPT09IDApCgl0eG4gU2VuZGVyCglieXRlICJyZWdpc3RlcmVkQXNhIgoJYXBwX2dsb2JhbF9nZXQKCWFzc2V0X2hvbGRpbmdfZ2V0IEFzc2V0QmFsYW5jZQoJYXNzZXJ0CglpbnQgMAoJPT0KCWFzc2VydAoKCS8vIGNvbnRyYWN0cy9kYW8uYWxnby50czozMQoJLy8gc2VuZEFzc2V0VHJhbnNmZXIoewoJLy8gICAgICAgeGZlckFzc2V0OiB0aGlzLnJlZ2lzdGVyZWRBc2EudmFsdWUsCgkvLyAgICAgICBhc3NldFJlY2VpdmVyOiB0aGlzLnR4bi5zZW5kZXIsCgkvLyAgICAgICBhc3NldEFtb3VudDogMQoJLy8gICAgIH0pCglpdHhuX2JlZ2luCglpbnQgYXhmZXIKCWl0eG5fZmllbGQgVHlwZUVudW0KCgkvLyBjb250cmFjdHMvZGFvLmFsZ28udHM6MzIKCS8vIHhmZXJBc3NldDogdGhpcy5yZWdpc3RlcmVkQXNhLnZhbHVlCglieXRlICJyZWdpc3RlcmVkQXNhIgoJYXBwX2dsb2JhbF9nZXQKCWl0eG5fZmllbGQgWGZlckFzc2V0CgoJLy8gY29udHJhY3RzL2Rhby5hbGdvLnRzOjMzCgkvLyBhc3NldFJlY2VpdmVyOiB0aGlzLnR4bi5zZW5kZXIKCXR4biBTZW5kZXIKCWl0eG5fZmllbGQgQXNzZXRSZWNlaXZlcgoKCS8vIGNvbnRyYWN0cy9kYW8uYWxnby50czozNAoJLy8gYXNzZXRBbW91bnQ6IDEKCWludCAxCglpdHhuX2ZpZWxkIEFzc2V0QW1vdW50CgoJLy8gRmVlIGZpZWxkIG5vdCBzZXQsIGRlZmF1bHRpbmcgdG8gMAoJaW50IDAKCWl0eG5fZmllbGQgRmVlCgoJLy8gU3VibWl0IGlubmVyIHRyYW5zYWN0aW9uCglpdHhuX3N1Ym1pdAoKCS8vIGNvbnRyYWN0cy9kYW8uYWxnby50czozOAoJLy8gc2VuZEFzc2V0RnJlZXplKHsKCS8vICAgICAgIGZyZWV6ZUFzc2V0OiB0aGlzLnJlZ2lzdGVyZWRBc2EudmFsdWUsCgkvLyAgICAgICBmcmVlemVBc3NldEFjY291bnQ6IHRoaXMudHhuLnNlbmRlciwKCS8vICAgICAgIGZyZWV6ZUFzc2V0RnJvemVuOiB0cnVlCgkvLyAgICAgfSkKCWl0eG5fYmVnaW4KCWludCBhZnJ6CglpdHhuX2ZpZWxkIFR5cGVFbnVtCgoJLy8gY29udHJhY3RzL2Rhby5hbGdvLnRzOjM5CgkvLyBmcmVlemVBc3NldDogdGhpcy5yZWdpc3RlcmVkQXNhLnZhbHVlCglieXRlICJyZWdpc3RlcmVkQXNhIgoJYXBwX2dsb2JhbF9nZXQKCWl0eG5fZmllbGQgRnJlZXplQXNzZXQKCgkvLyBjb250cmFjdHMvZGFvLmFsZ28udHM6NDAKCS8vIGZyZWV6ZUFzc2V0QWNjb3VudDogdGhpcy50eG4uc2VuZGVyCgl0eG4gU2VuZGVyCglpdHhuX2ZpZWxkIEZyZWV6ZUFzc2V0QWNjb3VudAoKCS8vIGNvbnRyYWN0cy9kYW8uYWxnby50czo0MQoJLy8gZnJlZXplQXNzZXRGcm96ZW46IHRydWUKCWludCAxCglpdHhuX2ZpZWxkIEZyZWV6ZUFzc2V0RnJvemVuCgoJLy8gRmVlIGZpZWxkIG5vdCBzZXQsIGRlZmF1bHRpbmcgdG8gMAoJaW50IDAKCWl0eG5fZmllbGQgRmVlCgoJLy8gU3VibWl0IGlubmVyIHRyYW5zYWN0aW9uCglpdHhuX3N1Ym1pdAoJcmV0c3ViCgovLyB2b3RlKGFzc2V0LGJvb2wpdm9pZAphYmlfcm91dGVfdm90ZToKCS8vIHJlZ2lzdGVyZWRBc2E6IGFzc2V0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglidG9pCgl0eG5hcyBBc3NldHMKCgkvLyBpbkZhdm9yOiBib29sCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglpbnQgMAoJZ2V0Yml0CgoJLy8gZXhlY3V0ZSB2b3RlKGFzc2V0LGJvb2wpdm9pZAoJY2FsbHN1YiB2b3RlCglpbnQgMQoJcmV0dXJuCgp2b3RlOgoJcHJvdG8gMiAwCgoJLy8gY29udHJhY3RzL2Rhby5hbGdvLnRzOjQ2CgkvLyBhc3NlcnQodGhpcy50eG4uc2VuZGVyLmFzc2V0QmFsYW5jZSh0aGlzLnJlZ2lzdGVyZWRBc2EudmFsdWUpID49IDEpCgl0eG4gU2VuZGVyCglieXRlICJyZWdpc3RlcmVkQXNhIgoJYXBwX2dsb2JhbF9nZXQKCWFzc2V0X2hvbGRpbmdfZ2V0IEFzc2V0QmFsYW5jZQoJYXNzZXJ0CglpbnQgMQoJPj0KCWFzc2VydAoKCS8vIGNvbnRyYWN0cy9kYW8uYWxnby50czo0NwoJLy8gdGhpcy50b3RhbFZvdGVzLnZhbHVlID0gdGhpcy50b3RhbFZvdGVzLnZhbHVlICsgMQoJYnl0ZSAidG90YWxWb3RlcyIKCWJ5dGUgInRvdGFsVm90ZXMiCglhcHBfZ2xvYmFsX2dldAoJaW50IDEKCSsKCWFwcF9nbG9iYWxfcHV0CgoJLy8gaWYwX2NvbmRpdGlvbgoJLy8gY29udHJhY3RzL2Rhby5hbGdvLnRzOjQ4CgkvLyBpbkZhdm9yCglmcmFtZV9kaWcgLTEgLy8gaW5GYXZvcjogYm9vbAoJYnogaWYwX2VuZAoKCS8vIGlmMF9jb25zZXF1ZW50CgkvLyBjb250cmFjdHMvZGFvLmFsZ28udHM6NDgKCS8vIHRoaXMuZmF2b3JWb3Rlcy52YWx1ZSA9IHRoaXMuZmF2b3JWb3Rlcy52YWx1ZSArIDEKCWJ5dGUgImZhdm9yVm90ZXMiCglieXRlICJmYXZvclZvdGVzIgoJYXBwX2dsb2JhbF9nZXQKCWludCAxCgkrCglhcHBfZ2xvYmFsX3B1dAoKaWYwX2VuZDoKCXJldHN1YgoKLy8gZ2V0UHJvcG9zYWwoKXN0cmluZwphYmlfcm91dGVfZ2V0UHJvcG9zYWw6CgkvLyBleGVjdXRlIGdldFByb3Bvc2FsKClzdHJpbmcKCWNhbGxzdWIgZ2V0UHJvcG9zYWwKCWludCAxCglyZXR1cm4KCmdldFByb3Bvc2FsOgoJcHJvdG8gMCAwCgoJLy8gY29udHJhY3RzL2Rhby5hbGdvLnRzOjUyCgkvLyByZXR1cm4gdGhpcy5wcm9wb3NhbC52YWx1ZTsKCWJ5dGUgInByb3Bvc2FsIgoJYXBwX2dsb2JhbF9nZXQKCWV4dHJhY3QgMiAwCglkdXAKCWxlbgoJaXRvYgoJZXh0cmFjdCA2IDIKCXN3YXAKCWNvbmNhdAoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgovLyBnZXRWb3RlcygpKHVpbnQ2NCx1aW50NjQpCmFiaV9yb3V0ZV9nZXRWb3RlczoKCS8vIGV4ZWN1dGUgZ2V0Vm90ZXMoKSh1aW50NjQsdWludDY0KQoJY2FsbHN1YiBnZXRWb3RlcwoJaW50IDEKCXJldHVybgoKZ2V0Vm90ZXM6Cglwcm90byAwIDAKCgkvLyBjb250cmFjdHMvZGFvLmFsZ28udHM6NTYKCS8vIHJldHVybiBbdGhpcy50b3RhbFZvdGVzLnZhbHVlLCB0aGlzLmZhdm9yVm90ZXMudmFsdWVdOwoJYnl0ZSAweCAvLyBpbml0aWFsIGhlYWQKCWJ5dGUgMHggLy8gaW5pdGlhbCB0YWlsCglieXRlIDB4MDAxMCAvLyBpbml0aWFsIGhlYWQgb2Zmc2V0CglieXRlICJ0b3RhbFZvdGVzIgoJYXBwX2dsb2JhbF9nZXQKCWl0b2IKCWNhbGxzdWIgcHJvY2Vzc19zdGF0aWNfdHVwbGVfZWxlbWVudAoJYnl0ZSAiZmF2b3JWb3RlcyIKCWFwcF9nbG9iYWxfZ2V0CglpdG9iCgljYWxsc3ViIHByb2Nlc3Nfc3RhdGljX3R1cGxlX2VsZW1lbnQKCXBvcCAvLyBwb3AgaGVhZCBvZmZzZXQKCWNvbmNhdCAvLyBjb25jYXQgaGVhZCBhbmQgdGFpbAoJYnl0ZSAweDE1MWY3Yzc1Cglzd2FwCgljb25jYXQKCWxvZwoJcmV0c3ViCgovLyBnZXRSZWdpc3RlcmVkQXNhKCl1aW50NjQKYWJpX3JvdXRlX2dldFJlZ2lzdGVyZWRBc2E6CgkvLyBleGVjdXRlIGdldFJlZ2lzdGVyZWRBc2EoKXVpbnQ2NAoJY2FsbHN1YiBnZXRSZWdpc3RlcmVkQXNhCglpbnQgMQoJcmV0dXJuCgpnZXRSZWdpc3RlcmVkQXNhOgoJcHJvdG8gMCAwCgoJLy8gY29udHJhY3RzL2Rhby5hbGdvLnRzOjYwCgkvLyByZXR1cm4gdGhpcy5yZWdpc3RlcmVkQXNhLnZhbHVlOwoJYnl0ZSAicmVnaXN0ZXJlZEFzYSIKCWFwcF9nbG9iYWxfZ2V0CglpdG9iCglieXRlIDB4MTUxZjdjNzUKCXN3YXAKCWNvbmNhdAoJbG9nCglyZXRzdWIKCmNyZWF0ZV9Ob09wOgoJbWV0aG9kICJjcmVhdGVBcHBsaWNhdGlvbihzdHJpbmcpdm9pZCIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDAKCW1hdGNoIGFiaV9yb3V0ZV9jcmVhdGVBcHBsaWNhdGlvbgoJZXJyCgpjYWxsX05vT3A6CgltZXRob2QgImJvb3RzdHJhcCgpdWludDY0IgoJbWV0aG9kICJyZWdpc3Rlcihhc3NldCl2b2lkIgoJbWV0aG9kICJ2b3RlKGJvb2wsYXNzZXQpdm9pZCIKCW1ldGhvZCAiZ2V0UHJvcG9zYWwoKXN0cmluZyIKCW1ldGhvZCAiZ2V0Vm90ZXMoKSh1aW50NjQsdWludDY0KSIKCW1ldGhvZCAiZ2V0UmVnaXN0ZXJlZEFzYSgpdWludDY0IgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggYWJpX3JvdXRlX2Jvb3RzdHJhcCBhYmlfcm91dGVfcmVnaXN0ZXIgYWJpX3JvdXRlX3ZvdGUgYWJpX3JvdXRlX2dldFByb3Bvc2FsIGFiaV9yb3V0ZV9nZXRWb3RlcyBhYmlfcm91dGVfZ2V0UmVnaXN0ZXJlZEFzYQoJZXJyCgpwcm9jZXNzX3N0YXRpY190dXBsZV9lbGVtZW50OgoJcHJvdG8gNCAzCglmcmFtZV9kaWcgLTQgLy8gdHVwbGUgaGVhZAoJZnJhbWVfZGlnIC0xIC8vIGVsZW1lbnQKCWNvbmNhdAoJZnJhbWVfZGlnIC0zIC8vIHR1cGxlIHRhaWwKCWZyYW1lX2RpZyAtMiAvLyBoZWFkIG9mZnNldAoJcmV0c3Vi",
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
        "name": "register",
        "args": [
          {
            "name": "registeredAsa",
            "type": "asset",
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
        "name": "vote",
        "args": [
          {
            "name": "inFavor",
            "type": "bool",
            "desc": ""
          },
          {
            "name": "registeredAsa",
            "type": "asset",
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
      },
      {
        "name": "getRegisteredAsa",
        "args": [],
        "desc": "",
        "returns": {
          "type": "uint64",
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
    & Record<'register(asset)void' | 'register', {
      argsObj: {
        registeredAsa: number | bigint
      }
      argsTuple: [registeredAsa: number | bigint]
      returns: void
    }>
    & Record<'vote(bool,asset)void' | 'vote', {
      argsObj: {
        inFavor: boolean
        registeredAsa: number | bigint
      }
      argsTuple: [inFavor: boolean, registeredAsa: number | bigint]
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
    & Record<'getRegisteredAsa()uint64' | 'getRegisteredAsa', {
      argsObj: {
      }
      argsTuple: []
      returns: bigint
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
   * Constructs a no op call for the register(asset)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static register(args: MethodArgs<'register(asset)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'register(asset)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.registeredAsa],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the vote(bool,asset)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static vote(args: MethodArgs<'vote(bool,asset)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'vote(bool,asset)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.inFavor, args.registeredAsa],
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
  /**
   * Constructs a no op call for the getRegisteredAsa()uint64 ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static getRegisteredAsa(args: MethodArgs<'getRegisteredAsa()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'getRegisteredAsa()uint64' as const,
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
   * Calls the register(asset)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public register(args: MethodArgs<'register(asset)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(DaoCallFactory.register(args, params))
  }

  /**
   * Calls the vote(bool,asset)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public vote(args: MethodArgs<'vote(bool,asset)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
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
   * Calls the getRegisteredAsa()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public getRegisteredAsa(args: MethodArgs<'getRegisteredAsa()uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(DaoCallFactory.getRegisteredAsa(args, params))
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
      register(args: MethodArgs<'register(asset)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.register(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      vote(args: MethodArgs<'vote(bool,asset)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
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
      getRegisteredAsa(args: MethodArgs<'getRegisteredAsa()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.getRegisteredAsa(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
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
   * Calls the register(asset)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  register(args: MethodArgs<'register(asset)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): DaoComposer<[...TReturns, MethodReturn<'register(asset)void'>]>

  /**
   * Calls the vote(bool,asset)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  vote(args: MethodArgs<'vote(bool,asset)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): DaoComposer<[...TReturns, MethodReturn<'vote(bool,asset)void'>]>

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
   * Calls the getRegisteredAsa()uint64 ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  getRegisteredAsa(args: MethodArgs<'getRegisteredAsa()uint64'>, params?: AppClientCallCoreParams & CoreAppCallArgs): DaoComposer<[...TReturns, MethodReturn<'getRegisteredAsa()uint64'>]>

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
