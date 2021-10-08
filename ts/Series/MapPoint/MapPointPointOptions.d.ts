/* *
 *
 *  (c) 2010-2021 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Imports
 *
 * */

import type { LonLatArray } from '../../Maps/MapViewOptions';
import type ScatterPointOptions from '../Scatter/ScatterPointOptions';

/* *
 *
 *  Declarations
 *
 * */

export interface MapPointPointOptions extends ScatterPointOptions {
    coordinates?: LonLatArray;
    lat?: number;
    lon?: number;
    type?: 'Point';
    x?: number;
    y?: (number|null);
}

export default MapPointPointOptions;
