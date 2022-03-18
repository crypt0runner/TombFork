#!/bin/sh

sed -i 's/XX_DevFundAddress/XX_DevFundAddress/g'  *.js
sed -i 's/XX_OpAddress/XX_OpAddress/g' *.js 

# Edit for 1st migrate
sed -i 's/XX_GSHARESTIME/XX_GSHARESTIME/g'  *.js 
sed -i 's/XX_GSHARESPOOLTIME/XX_GSHARESPOOLTIME/g'  *.js 
sed -i 's/XX_GENTIME/XX_GENTIME/g'  *.js 

# Edit for migrate oracle
sed -i 's/XX_GLAMOURPAIR/XX_GLAMOURPAIR/g'  *.js 
sed -i 's/XX_ORACLETIME/XX_ORACLETIME/g'  *.js 

# Edit for setup2
sed -i 's/XX_GLAMOURPAIR/XX_GLAMOURPAIR/g'  *.js 
sed -i 's/XX_GSHARESPAIR/XX_GSHARESPAIR/g'  *.js 
sed -i 's/XX_BONDTIME/XX_BONDTIME/g'  *.js 

# Edit to init genesis
sed -i 's/XX_WAVAX/XX_WAVAX/g'  *.js 
sed -i 's/XX_USDC/XX_USDC/g'  *.js 





