// code inspired by firebase

import { createHash } from 'crypto';
import { block } from "../src/firebaseAPI.js"

class Transaction {
  constructor(item, warehouse, queue) {
    this.item = item;
    this.warehouse = warehouse;
    this.queue = queue;
  }

  toString = () => JSON.stringify(this);
}

class Block {
  constructor(prevHash, transaction, ts = Date.now()) {
    this.prevHash = prevHash;
    this.transaction = transaction;
    this.ts = ts;
    this.id = Math.round(Math.random() * 999999999);
  }

  get hash() {
    const str = JSON.stringify(this);
    const hash = createHash('SHA256');
    hash.update(str).end();
    return hash.digest('hex');
  }
}

export class CryptoWarehouse {
  constructor() {
    const keypair = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: { type: 'spki', format: 'pem' },
      privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
    });

    this.privateKey = keypair.privateKey;
    this.publicKey = keypair.publicKey;
  }

  sendItem(item, receiver) {
    const transaction = new Transaction(item, this.name, receiver.name);

    block.push(transaction);
  }
}

export class CryptoQueue {
  constructor() {
    const keypair = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: { type: 'spki', format: 'pem' },
      privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
    });

    this.privateKey = keypair.privateKey;
    this.publicKey = keypair.publicKey;
  }

  sendItem(item, receiver) {
    const transaction = new Transaction(item, this.name, receiver.name);
    block.push(transaction);
  }
}
