/**
 * MaterialSymbolsOutlined icon set component.
 * Usage: <MaterialSymbolsOutlined name="icon-name" size={20} color="#4F8EF7" />
 */

import {createIconSet} from "react-native-vector-icons";
import * as glyphMap from './glyphmaps/MaterialSymbolsOutlined.json';

const iconSet = createIconSet(glyphMap, 'Material Symbols Outlined', 'MaterialSymbolsOutlined.ttf');

export default iconSet;
export const {
  Button,
  getImageSource,
  getImageSourceSync,
} = iconSet;
