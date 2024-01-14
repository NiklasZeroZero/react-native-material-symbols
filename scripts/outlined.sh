#!/bin/bash -e

# Material icons is currently published on npm and the published
# artifacts are >500MB unpacked. Until that is fixed we'll download
# them directly from the git repo.

TEMP_DIR=$(mktemp -d -t rnms.XXXXXX)
REF="f50c10320603a58143601100a40c925d521a5355" # Jan 05, 2024 update

curl https://github.com/google/material-design-icons/raw/$REF/variablefont/MaterialSymbolsOutlined%5BFILL,GRAD,opsz,wght%5D.ttf -Ls > Fonts/MaterialSymbolsOutlined.ttf

curl https://github.com/google/material-design-icons/raw/$REF/variablefont/MaterialSymbolsOutlined%5BFILL,GRAD,opsz,wght%5D.codepoints -Ls > $TEMP_DIR/MaterialSymbolsOutlined.codepoints

node bin/generate-material-icons $TEMP_DIR/MaterialSymbolsOutlined.codepoints\
  --componentName=MaterialSymbolsOutlined\
  --fontFamily='Material Symbols Outlined'\
  --template=templates/separated-icon-set.tpl\
  --glyphmap=src/glyphmaps/MaterialSymbolsOutlined.json\
  > src/MaterialSymbolsOutlined.ts

rm -rf $TEMP_DIR