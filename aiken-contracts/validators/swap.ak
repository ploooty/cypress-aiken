
validator swap(pub_key_hash: ByteArray, min_price: Int) -> Bool {
  tx = ScriptContext.tx;

  // Ensure the minimum price is met
  value_met = tx.value_received(pub_key_hash) >= min_price;

  // Ensure only one NFT is swapped
  nft_count = tx.minted_assets.count() == 1;

  value_met && nft_count
}
aiken buuild
