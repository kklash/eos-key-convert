'use strict'

const wif = require('wif')
const { privateToPublic } = require('eosjs-ecc')

function convertToEOSKeypair (privkey) {
  if (typeof privkey === 'string') privkey = privkey.replace('0x', '')
  const hexKey = new Buffer.from(privkey, 'hex')
  const wifKey = wif.encode(128, hexKey, false)
  return {
    pub: privateToPublic(wifKey),
    priv: wifKey
  }
}

const input = document.getElementById('privkeyInput')
input.onchange = parseUIAndConvert
document.getElementById('activate').onclick = parseUIAndConvert

function parseUIAndConvert () {
  const output = document.getElementById('output')
  // output.innerHTML = ''
  let finalOutput
  if (input.value.replace('0x', '').length === 64) {
    const eosAccount = convertToEOSKeypair(input.value)
    finalOutput = `
PUBKEY:  ${eosAccount.pub}<br><br>
PRIVKEY: ${eosAccount.priv}`
  } else {
    finalOutput = 'Invalid private key'
  }
  output.innerHTML = finalOutput
}
