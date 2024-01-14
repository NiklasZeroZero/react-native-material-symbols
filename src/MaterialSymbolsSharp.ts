/**
 * MaterialSymbolsSharp icon set component.
 * Usage: <MaterialSymbolsSharp name="icon-name" size={20} color="#4F8EF7" />
 */

import {createIconSet} from "react-native-vector-icons";
import * as glyphMap from './glyphmaps/MaterialSymbolsSharp.json';

const iconSet = createIconSet(glyphMap, 'Material Symbols Sharp', 'MaterialSymbolsSharp.ttf');

export default iconSet;
export const {
  Button,
  getImageSource,
  getImageSourceSync,
} = iconSet;
