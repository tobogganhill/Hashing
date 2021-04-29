// Linkable Ring Signatures

// npm install lrs //
// Run with command: node ring.js

var lrs = require('lrs');

// 3 parties generate their public/private key pairs
var alice = lrs.gen();
var bob = lrs.gen();
var eve = lrs.gen();

// The list of public key is known and distributed
var group = [alice, bob, eve].map((m) => m.publicKey);

// Alice signs a message on behalf of one of the 3
var signed = lrs.sign(group, alice, 'Top secret message.');

// Anyone is able to verify *some* of them signed the particular message
console.log(lrs.verify(group, signed, 'Top secret message.'));

// If the same person signs another message (Alice in this case)...
var signed2 = lrs.sign(group, alice, 'Another message.');

// We are able to tell the signature came from the same person
console.log(lrs.link(signed, signed2));
