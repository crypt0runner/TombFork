#!/bin/sh

sed -i 's/0x16ee2Cc3426069DC15D3dfC2Ac874C14AFd84058/glamour/g' deployments.mainnet.json
sed -i 's/0xEa24d9E7b10fCb66e798657A6525C042f2731865/gshares/g' deployments.mainnet.json
sed -i 's/0x5202E66f7A297980215F1EbdE83BeA79eD9586dC/gbond/g' deployments.mainnet.json
sed -i 's/0x0a2b1B9DB40F5612Fa4B385CaA466916cd7C9429/gsharereward/g' deployments.mainnet.json
sed -i 's/0x0D407e66918DBB8d3791307F38D61477eE6185dD/boardroom/g' deployments.mainnet.json
sed -i 's/0xb8C442a8b0d66FeC8eacE37517D0e2458Bf80504/treasury/g' deployments.mainnet.json
sed -i 's/0xa7E817e41ce538a3a0d0603Da1f81Cf1AC2Ad411/oracle/g' deployments.mainnet.json
sed -i 's/0xD1141ef5C524A067009074c97e0aDdbDae213c03/genesis/g' deployments.mainnet.json

