# Barebones Fallback Conversion

Forgot to register? Time to fallback!

Just [open the site here](https://kklash.github.io/eos-key-convert/) and chuck your privkey into the input box.

The actual conversion is done with the nodeJS libraries `eosjs-ecc`, and the `wif` utility from `bitcoinjs-lib`. The code is compiled with browserify and babel, then copy/pasted into `index.html`.

This means you can open the website, save the page as an html file, and use it completely offline.
