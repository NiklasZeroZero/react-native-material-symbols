/**
 * MaterialSymbolsRounded icon set component.
 * Usage: <MaterialSymbolsRounded name="icon-name" size={20} color="#4F8EF7" />
 */

import {createIconSet} from "react-native-vector-icons";
import * as glyphMap from './glyphmaps/MaterialSymbolsRounded.json';

const iconSet = createIconSet(glyphMap, 'Material Symbols Rounded', 'MaterialSymbolsRounded.ttf');

export default iconSet;
export const {
  Button,
  getImageSource,
  getImageSourceSync,
} = iconSet;
