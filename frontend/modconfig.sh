#!/bin/sh

sed -i 's/0xc5c7e67BfEb1B2c337282a0Bd978D6674768794F/glamourpair/g' config.ts 
sed -i 's/0x6A2f478483fa2b7602885Ce7B08bcAF6878A6fB4/gsharespair/g' config.ts 
sed -i 's/0x16ee2Cc3426069DC15D3dfC2Ac874C14AFd84058/glamour/g' config.ts 
sed -i 's/0xEa24d9E7b10fCb66e798657A6525C042f2731865/gshares/g' config.ts 

sed -i 's/Sharestart/Sharestart/g' config.ts 
sed -i 's/Genstart/Genstart/g' config.ts 
sed -i 's/Genend/Genend/g' config.ts 

