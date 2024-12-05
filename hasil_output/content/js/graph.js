/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 134652.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 5.0], [0.5, 5.0], [0.6, 5.0], [0.7, 6.0], [0.8, 6.0], [0.9, 7.0], [1.0, 7.0], [1.1, 7.0], [1.2, 7.0], [1.3, 7.0], [1.4, 7.0], [1.5, 8.0], [1.6, 8.0], [1.7, 8.0], [1.8, 8.0], [1.9, 8.0], [2.0, 8.0], [2.1, 8.0], [2.2, 9.0], [2.3, 9.0], [2.4, 9.0], [2.5, 10.0], [2.6, 10.0], [2.7, 10.0], [2.8, 10.0], [2.9, 10.0], [3.0, 11.0], [3.1, 11.0], [3.2, 11.0], [3.3, 11.0], [3.4, 12.0], [3.5, 12.0], [3.6, 12.0], [3.7, 12.0], [3.8, 12.0], [3.9, 12.0], [4.0, 12.0], [4.1, 12.0], [4.2, 12.0], [4.3, 13.0], [4.4, 13.0], [4.5, 13.0], [4.6, 13.0], [4.7, 13.0], [4.8, 13.0], [4.9, 14.0], [5.0, 14.0], [5.1, 14.0], [5.2, 14.0], [5.3, 14.0], [5.4, 15.0], [5.5, 15.0], [5.6, 15.0], [5.7, 16.0], [5.8, 16.0], [5.9, 16.0], [6.0, 16.0], [6.1, 16.0], [6.2, 16.0], [6.3, 16.0], [6.4, 16.0], [6.5, 16.0], [6.6, 16.0], [6.7, 17.0], [6.8, 17.0], [6.9, 18.0], [7.0, 18.0], [7.1, 18.0], [7.2, 18.0], [7.3, 19.0], [7.4, 19.0], [7.5, 19.0], [7.6, 19.0], [7.7, 20.0], [7.8, 20.0], [7.9, 20.0], [8.0, 20.0], [8.1, 20.0], [8.2, 20.0], [8.3, 21.0], [8.4, 21.0], [8.5, 21.0], [8.6, 21.0], [8.7, 21.0], [8.8, 22.0], [8.9, 22.0], [9.0, 24.0], [9.1, 24.0], [9.2, 25.0], [9.3, 26.0], [9.4, 26.0], [9.5, 26.0], [9.6, 26.0], [9.7, 27.0], [9.8, 28.0], [9.9, 28.0], [10.0, 28.0], [10.1, 29.0], [10.2, 29.0], [10.3, 30.0], [10.4, 30.0], [10.5, 31.0], [10.6, 31.0], [10.7, 31.0], [10.8, 32.0], [10.9, 32.0], [11.0, 32.0], [11.1, 32.0], [11.2, 33.0], [11.3, 33.0], [11.4, 33.0], [11.5, 34.0], [11.6, 34.0], [11.7, 35.0], [11.8, 35.0], [11.9, 36.0], [12.0, 36.0], [12.1, 37.0], [12.2, 38.0], [12.3, 38.0], [12.4, 38.0], [12.5, 39.0], [12.6, 39.0], [12.7, 40.0], [12.8, 41.0], [12.9, 41.0], [13.0, 42.0], [13.1, 42.0], [13.2, 42.0], [13.3, 43.0], [13.4, 43.0], [13.5, 44.0], [13.6, 44.0], [13.7, 45.0], [13.8, 46.0], [13.9, 46.0], [14.0, 47.0], [14.1, 48.0], [14.2, 49.0], [14.3, 49.0], [14.4, 50.0], [14.5, 50.0], [14.6, 50.0], [14.7, 51.0], [14.8, 51.0], [14.9, 51.0], [15.0, 52.0], [15.1, 52.0], [15.2, 52.0], [15.3, 52.0], [15.4, 52.0], [15.5, 53.0], [15.6, 53.0], [15.7, 54.0], [15.8, 54.0], [15.9, 55.0], [16.0, 55.0], [16.1, 55.0], [16.2, 55.0], [16.3, 55.0], [16.4, 56.0], [16.5, 56.0], [16.6, 56.0], [16.7, 56.0], [16.8, 56.0], [16.9, 57.0], [17.0, 57.0], [17.1, 57.0], [17.2, 58.0], [17.3, 58.0], [17.4, 59.0], [17.5, 59.0], [17.6, 60.0], [17.7, 60.0], [17.8, 60.0], [17.9, 61.0], [18.0, 62.0], [18.1, 62.0], [18.2, 63.0], [18.3, 64.0], [18.4, 65.0], [18.5, 66.0], [18.6, 67.0], [18.7, 68.0], [18.8, 69.0], [18.9, 71.0], [19.0, 73.0], [19.1, 74.0], [19.2, 75.0], [19.3, 76.0], [19.4, 77.0], [19.5, 77.0], [19.6, 77.0], [19.7, 78.0], [19.8, 80.0], [19.9, 81.0], [20.0, 82.0], [20.1, 82.0], [20.2, 83.0], [20.3, 84.0], [20.4, 85.0], [20.5, 86.0], [20.6, 88.0], [20.7, 89.0], [20.8, 92.0], [20.9, 94.0], [21.0, 94.0], [21.1, 96.0], [21.2, 98.0], [21.3, 99.0], [21.4, 100.0], [21.5, 100.0], [21.6, 101.0], [21.7, 102.0], [21.8, 103.0], [21.9, 105.0], [22.0, 105.0], [22.1, 107.0], [22.2, 107.0], [22.3, 108.0], [22.4, 109.0], [22.5, 109.0], [22.6, 109.0], [22.7, 109.0], [22.8, 111.0], [22.9, 114.0], [23.0, 115.0], [23.1, 116.0], [23.2, 116.0], [23.3, 117.0], [23.4, 119.0], [23.5, 119.0], [23.6, 121.0], [23.7, 121.0], [23.8, 122.0], [23.9, 123.0], [24.0, 123.0], [24.1, 124.0], [24.2, 125.0], [24.3, 126.0], [24.4, 127.0], [24.5, 127.0], [24.6, 128.0], [24.7, 129.0], [24.8, 130.0], [24.9, 131.0], [25.0, 131.0], [25.1, 133.0], [25.2, 136.0], [25.3, 137.0], [25.4, 138.0], [25.5, 138.0], [25.6, 140.0], [25.7, 142.0], [25.8, 142.0], [25.9, 143.0], [26.0, 144.0], [26.1, 145.0], [26.2, 146.0], [26.3, 146.0], [26.4, 147.0], [26.5, 148.0], [26.6, 148.0], [26.7, 149.0], [26.8, 150.0], [26.9, 153.0], [27.0, 154.0], [27.1, 155.0], [27.2, 156.0], [27.3, 157.0], [27.4, 158.0], [27.5, 158.0], [27.6, 159.0], [27.7, 162.0], [27.8, 163.0], [27.9, 164.0], [28.0, 165.0], [28.1, 165.0], [28.2, 166.0], [28.3, 166.0], [28.4, 167.0], [28.5, 167.0], [28.6, 169.0], [28.7, 170.0], [28.8, 171.0], [28.9, 171.0], [29.0, 172.0], [29.1, 176.0], [29.2, 177.0], [29.3, 179.0], [29.4, 181.0], [29.5, 183.0], [29.6, 187.0], [29.7, 188.0], [29.8, 190.0], [29.9, 190.0], [30.0, 191.0], [30.1, 192.0], [30.2, 195.0], [30.3, 195.0], [30.4, 197.0], [30.5, 197.0], [30.6, 199.0], [30.7, 200.0], [30.8, 201.0], [30.9, 202.0], [31.0, 204.0], [31.1, 205.0], [31.2, 208.0], [31.3, 209.0], [31.4, 213.0], [31.5, 215.0], [31.6, 220.0], [31.7, 223.0], [31.8, 235.0], [31.9, 240.0], [32.0, 243.0], [32.1, 252.0], [32.2, 310.0], [32.3, 60000.0], [32.4, 60001.0], [32.5, 60001.0], [32.6, 60001.0], [32.7, 60002.0], [32.8, 60002.0], [32.9, 60002.0], [33.0, 60002.0], [33.1, 60002.0], [33.2, 60003.0], [33.3, 60003.0], [33.4, 60003.0], [33.5, 60003.0], [33.6, 60003.0], [33.7, 60003.0], [33.8, 60003.0], [33.9, 60003.0], [34.0, 60003.0], [34.1, 60003.0], [34.2, 60004.0], [34.3, 60004.0], [34.4, 60004.0], [34.5, 60004.0], [34.6, 60004.0], [34.7, 60004.0], [34.8, 60004.0], [34.9, 60004.0], [35.0, 60004.0], [35.1, 60004.0], [35.2, 60004.0], [35.3, 60004.0], [35.4, 60004.0], [35.5, 60004.0], [35.6, 60004.0], [35.7, 60004.0], [35.8, 60004.0], [35.9, 60005.0], [36.0, 60005.0], [36.1, 60005.0], [36.2, 60005.0], [36.3, 60005.0], [36.4, 60005.0], [36.5, 60005.0], [36.6, 60005.0], [36.7, 60005.0], [36.8, 60005.0], [36.9, 60005.0], [37.0, 60005.0], [37.1, 60005.0], [37.2, 60005.0], [37.3, 60005.0], [37.4, 60005.0], [37.5, 60005.0], [37.6, 60005.0], [37.7, 60005.0], [37.8, 60005.0], [37.9, 60005.0], [38.0, 60005.0], [38.1, 60006.0], [38.2, 60006.0], [38.3, 60006.0], [38.4, 60006.0], [38.5, 60006.0], [38.6, 60006.0], [38.7, 60006.0], [38.8, 60006.0], [38.9, 60006.0], [39.0, 60006.0], [39.1, 60006.0], [39.2, 60006.0], [39.3, 60006.0], [39.4, 60006.0], [39.5, 60006.0], [39.6, 60006.0], [39.7, 60006.0], [39.8, 60006.0], [39.9, 60006.0], [40.0, 60006.0], [40.1, 60006.0], [40.2, 60006.0], [40.3, 60007.0], [40.4, 60007.0], [40.5, 60007.0], [40.6, 60007.0], [40.7, 60007.0], [40.8, 60007.0], [40.9, 60007.0], [41.0, 60007.0], [41.1, 60007.0], [41.2, 60007.0], [41.3, 60007.0], [41.4, 60007.0], [41.5, 60007.0], [41.6, 60007.0], [41.7, 60007.0], [41.8, 60007.0], [41.9, 60007.0], [42.0, 60007.0], [42.1, 60007.0], [42.2, 60007.0], [42.3, 60007.0], [42.4, 60008.0], [42.5, 60008.0], [42.6, 60008.0], [42.7, 60008.0], [42.8, 60008.0], [42.9, 60008.0], [43.0, 60008.0], [43.1, 60008.0], [43.2, 60008.0], [43.3, 60008.0], [43.4, 60008.0], [43.5, 60008.0], [43.6, 60008.0], [43.7, 60008.0], [43.8, 60008.0], [43.9, 60009.0], [44.0, 60009.0], [44.1, 60009.0], [44.2, 60009.0], [44.3, 60009.0], [44.4, 60009.0], [44.5, 60009.0], [44.6, 60009.0], [44.7, 60009.0], [44.8, 60009.0], [44.9, 60010.0], [45.0, 60010.0], [45.1, 60010.0], [45.2, 60011.0], [45.3, 60011.0], [45.4, 60012.0], [45.5, 60013.0], [45.6, 60015.0], [45.7, 60017.0], [45.8, 60018.0], [45.9, 60021.0], [46.0, 60024.0], [46.1, 60031.0], [46.2, 60037.0], [46.3, 60044.0], [46.4, 60050.0], [46.5, 60058.0], [46.6, 60072.0], [46.7, 60105.0], [46.8, 60128.0], [46.9, 60185.0], [47.0, 60195.0], [47.1, 60202.0], [47.2, 60218.0], [47.3, 60234.0], [47.4, 60237.0], [47.5, 60240.0], [47.6, 60248.0], [47.7, 60253.0], [47.8, 60256.0], [47.9, 60261.0], [48.0, 60262.0], [48.1, 60270.0], [48.2, 60272.0], [48.3, 60273.0], [48.4, 60277.0], [48.5, 60278.0], [48.6, 60283.0], [48.7, 60287.0], [48.8, 60292.0], [48.9, 60294.0], [49.0, 60296.0], [49.1, 60298.0], [49.2, 60299.0], [49.3, 60306.0], [49.4, 60322.0], [49.5, 60325.0], [49.6, 60331.0], [49.7, 120066.0], [49.8, 120103.0], [49.9, 120213.0], [50.0, 120313.0], [50.1, 132780.0], [50.2, 132781.0], [50.3, 132793.0], [50.4, 132795.0], [50.5, 132795.0], [50.6, 132798.0], [50.7, 132800.0], [50.8, 132803.0], [50.9, 132810.0], [51.0, 132813.0], [51.1, 132816.0], [51.2, 132818.0], [51.3, 132819.0], [51.4, 132825.0], [51.5, 132827.0], [51.6, 132829.0], [51.7, 132830.0], [51.8, 132840.0], [51.9, 132841.0], [52.0, 132844.0], [52.1, 132844.0], [52.2, 132846.0], [52.3, 132849.0], [52.4, 132853.0], [52.5, 132859.0], [52.6, 132862.0], [52.7, 132863.0], [52.8, 132865.0], [52.9, 132867.0], [53.0, 132867.0], [53.1, 132870.0], [53.2, 132874.0], [53.3, 132876.0], [53.4, 132878.0], [53.5, 132878.0], [53.6, 132880.0], [53.7, 132881.0], [53.8, 132881.0], [53.9, 132883.0], [54.0, 132884.0], [54.1, 132886.0], [54.2, 132887.0], [54.3, 132888.0], [54.4, 132889.0], [54.5, 132889.0], [54.6, 132891.0], [54.7, 132892.0], [54.8, 132893.0], [54.9, 132893.0], [55.0, 132894.0], [55.1, 132895.0], [55.2, 132896.0], [55.3, 132897.0], [55.4, 132897.0], [55.5, 132898.0], [55.6, 132899.0], [55.7, 132900.0], [55.8, 132901.0], [55.9, 132902.0], [56.0, 132902.0], [56.1, 132903.0], [56.2, 132905.0], [56.3, 132908.0], [56.4, 132908.0], [56.5, 132908.0], [56.6, 132908.0], [56.7, 132909.0], [56.8, 132910.0], [56.9, 132910.0], [57.0, 132911.0], [57.1, 132911.0], [57.2, 132912.0], [57.3, 132912.0], [57.4, 132913.0], [57.5, 132913.0], [57.6, 132914.0], [57.7, 132915.0], [57.8, 132915.0], [57.9, 132916.0], [58.0, 132916.0], [58.1, 132916.0], [58.2, 132917.0], [58.3, 132918.0], [58.4, 132919.0], [58.5, 132920.0], [58.6, 132921.0], [58.7, 132921.0], [58.8, 132922.0], [58.9, 132923.0], [59.0, 132923.0], [59.1, 132924.0], [59.2, 132924.0], [59.3, 132925.0], [59.4, 132926.0], [59.5, 132926.0], [59.6, 132928.0], [59.7, 132928.0], [59.8, 132929.0], [59.9, 132930.0], [60.0, 132930.0], [60.1, 132930.0], [60.2, 132930.0], [60.3, 132931.0], [60.4, 132931.0], [60.5, 132932.0], [60.6, 132932.0], [60.7, 132932.0], [60.8, 132933.0], [60.9, 132933.0], [61.0, 132934.0], [61.1, 132935.0], [61.2, 132935.0], [61.3, 132936.0], [61.4, 132936.0], [61.5, 132936.0], [61.6, 132937.0], [61.7, 132938.0], [61.8, 132938.0], [61.9, 132939.0], [62.0, 132939.0], [62.1, 132939.0], [62.2, 132940.0], [62.3, 132941.0], [62.4, 132942.0], [62.5, 132942.0], [62.6, 132945.0], [62.7, 132945.0], [62.8, 132946.0], [62.9, 132946.0], [63.0, 132947.0], [63.1, 132947.0], [63.2, 132948.0], [63.3, 132948.0], [63.4, 132948.0], [63.5, 132948.0], [63.6, 132949.0], [63.7, 132949.0], [63.8, 132949.0], [63.9, 132952.0], [64.0, 132952.0], [64.1, 132954.0], [64.2, 132954.0], [64.3, 132956.0], [64.4, 132957.0], [64.5, 132958.0], [64.6, 132958.0], [64.7, 132959.0], [64.8, 132959.0], [64.9, 132960.0], [65.0, 132961.0], [65.1, 132962.0], [65.2, 132962.0], [65.3, 132963.0], [65.4, 132964.0], [65.5, 132964.0], [65.6, 132964.0], [65.7, 132965.0], [65.8, 132965.0], [65.9, 132965.0], [66.0, 132965.0], [66.1, 132966.0], [66.2, 132966.0], [66.3, 132966.0], [66.4, 132967.0], [66.5, 132967.0], [66.6, 132968.0], [66.7, 132968.0], [66.8, 132969.0], [66.9, 132969.0], [67.0, 132969.0], [67.1, 132969.0], [67.2, 132970.0], [67.3, 132970.0], [67.4, 132971.0], [67.5, 132971.0], [67.6, 132972.0], [67.7, 132973.0], [67.8, 132973.0], [67.9, 132973.0], [68.0, 132974.0], [68.1, 132974.0], [68.2, 132975.0], [68.3, 132975.0], [68.4, 132976.0], [68.5, 132976.0], [68.6, 132976.0], [68.7, 132977.0], [68.8, 132977.0], [68.9, 132978.0], [69.0, 132978.0], [69.1, 132978.0], [69.2, 132979.0], [69.3, 132979.0], [69.4, 132979.0], [69.5, 132981.0], [69.6, 132982.0], [69.7, 132983.0], [69.8, 132983.0], [69.9, 132984.0], [70.0, 132984.0], [70.1, 132984.0], [70.2, 132985.0], [70.3, 132985.0], [70.4, 132986.0], [70.5, 132986.0], [70.6, 132987.0], [70.7, 132987.0], [70.8, 132987.0], [70.9, 132988.0], [71.0, 132988.0], [71.1, 132988.0], [71.2, 132988.0], [71.3, 132989.0], [71.4, 132989.0], [71.5, 132989.0], [71.6, 132990.0], [71.7, 132991.0], [71.8, 132991.0], [71.9, 132992.0], [72.0, 132992.0], [72.1, 132992.0], [72.2, 132992.0], [72.3, 132992.0], [72.4, 132993.0], [72.5, 132993.0], [72.6, 132993.0], [72.7, 132994.0], [72.8, 132994.0], [72.9, 132994.0], [73.0, 132994.0], [73.1, 132995.0], [73.2, 132995.0], [73.3, 132996.0], [73.4, 132996.0], [73.5, 132996.0], [73.6, 132996.0], [73.7, 132997.0], [73.8, 132998.0], [73.9, 132999.0], [74.0, 132999.0], [74.1, 132999.0], [74.2, 133000.0], [74.3, 133002.0], [74.4, 133002.0], [74.5, 133002.0], [74.6, 133003.0], [74.7, 133003.0], [74.8, 133004.0], [74.9, 133005.0], [75.0, 133005.0], [75.1, 133006.0], [75.2, 133007.0], [75.3, 133008.0], [75.4, 133008.0], [75.5, 133009.0], [75.6, 133009.0], [75.7, 133010.0], [75.8, 133010.0], [75.9, 133012.0], [76.0, 133014.0], [76.1, 133014.0], [76.2, 133015.0], [76.3, 133017.0], [76.4, 133018.0], [76.5, 133018.0], [76.6, 133019.0], [76.7, 133021.0], [76.8, 133021.0], [76.9, 133022.0], [77.0, 133022.0], [77.1, 133024.0], [77.2, 133025.0], [77.3, 133027.0], [77.4, 133028.0], [77.5, 133028.0], [77.6, 133029.0], [77.7, 133030.0], [77.8, 133031.0], [77.9, 133031.0], [78.0, 133031.0], [78.1, 133032.0], [78.2, 133033.0], [78.3, 133033.0], [78.4, 133034.0], [78.5, 133034.0], [78.6, 133037.0], [78.7, 133038.0], [78.8, 133039.0], [78.9, 133040.0], [79.0, 133040.0], [79.1, 133041.0], [79.2, 133041.0], [79.3, 133042.0], [79.4, 133043.0], [79.5, 133043.0], [79.6, 133044.0], [79.7, 133045.0], [79.8, 133045.0], [79.9, 133046.0], [80.0, 133046.0], [80.1, 133047.0], [80.2, 133048.0], [80.3, 133049.0], [80.4, 133050.0], [80.5, 133051.0], [80.6, 133052.0], [80.7, 133054.0], [80.8, 133054.0], [80.9, 133054.0], [81.0, 133054.0], [81.1, 133055.0], [81.2, 133056.0], [81.3, 133056.0], [81.4, 133058.0], [81.5, 133059.0], [81.6, 133059.0], [81.7, 133061.0], [81.8, 133061.0], [81.9, 133062.0], [82.0, 133062.0], [82.1, 133063.0], [82.2, 133064.0], [82.3, 133064.0], [82.4, 133065.0], [82.5, 133065.0], [82.6, 133066.0], [82.7, 133067.0], [82.8, 133067.0], [82.9, 133068.0], [83.0, 133069.0], [83.1, 133072.0], [83.2, 133072.0], [83.3, 133073.0], [83.4, 133073.0], [83.5, 133074.0], [83.6, 133075.0], [83.7, 133076.0], [83.8, 133076.0], [83.9, 133077.0], [84.0, 133077.0], [84.1, 133077.0], [84.2, 133078.0], [84.3, 133078.0], [84.4, 133080.0], [84.5, 133080.0], [84.6, 133080.0], [84.7, 133083.0], [84.8, 133083.0], [84.9, 133085.0], [85.0, 133085.0], [85.1, 133086.0], [85.2, 133086.0], [85.3, 133087.0], [85.4, 133087.0], [85.5, 133087.0], [85.6, 133094.0], [85.7, 133099.0], [85.8, 133102.0], [85.9, 133104.0], [86.0, 133105.0], [86.1, 133112.0], [86.2, 133113.0], [86.3, 133113.0], [86.4, 133116.0], [86.5, 133116.0], [86.6, 133118.0], [86.7, 133128.0], [86.8, 133146.0], [86.9, 133161.0], [87.0, 133170.0], [87.1, 133174.0], [87.2, 133181.0], [87.3, 133185.0], [87.4, 133187.0], [87.5, 133189.0], [87.6, 133191.0], [87.7, 133195.0], [87.8, 133198.0], [87.9, 133199.0], [88.0, 133202.0], [88.1, 133205.0], [88.2, 133208.0], [88.3, 133212.0], [88.4, 133215.0], [88.5, 133216.0], [88.6, 133216.0], [88.7, 133219.0], [88.8, 133221.0], [88.9, 133225.0], [89.0, 133225.0], [89.1, 133230.0], [89.2, 133232.0], [89.3, 133232.0], [89.4, 133233.0], [89.5, 133234.0], [89.6, 133240.0], [89.7, 133244.0], [89.8, 133244.0], [89.9, 133248.0], [90.0, 133249.0], [90.1, 133252.0], [90.2, 133258.0], [90.3, 133260.0], [90.4, 133262.0], [90.5, 133264.0], [90.6, 133265.0], [90.7, 133271.0], [90.8, 133275.0], [90.9, 133277.0], [91.0, 133277.0], [91.1, 133290.0], [91.2, 133291.0], [91.3, 133293.0], [91.4, 133295.0], [91.5, 133296.0], [91.6, 133299.0], [91.7, 133302.0], [91.8, 133367.0], [91.9, 133375.0], [92.0, 133375.0], [92.1, 133404.0], [92.2, 133413.0], [92.3, 133452.0], [92.4, 133464.0], [92.5, 133477.0], [92.6, 133489.0], [92.7, 133505.0], [92.8, 133514.0], [92.9, 133524.0], [93.0, 133528.0], [93.1, 133536.0], [93.2, 133561.0], [93.3, 133578.0], [93.4, 133582.0], [93.5, 133590.0], [93.6, 133617.0], [93.7, 133653.0], [93.8, 133667.0], [93.9, 133684.0], [94.0, 133692.0], [94.1, 133705.0], [94.2, 133753.0], [94.3, 133776.0], [94.4, 133793.0], [94.5, 133795.0], [94.6, 133812.0], [94.7, 133815.0], [94.8, 133820.0], [94.9, 133832.0], [95.0, 133873.0], [95.1, 133917.0], [95.2, 133949.0], [95.3, 133977.0], [95.4, 133997.0], [95.5, 134017.0], [95.6, 134036.0], [95.7, 134049.0], [95.8, 134077.0], [95.9, 134093.0], [96.0, 134095.0], [96.1, 134123.0], [96.2, 134169.0], [96.3, 134186.0], [96.4, 134224.0], [96.5, 134224.0], [96.6, 134253.0], [96.7, 134275.0], [96.8, 134284.0], [96.9, 134290.0], [97.0, 134305.0], [97.1, 134320.0], [97.2, 134332.0], [97.3, 134347.0], [97.4, 134361.0], [97.5, 134361.0], [97.6, 134363.0], [97.7, 134367.0], [97.8, 134377.0], [97.9, 134387.0], [98.0, 134391.0], [98.1, 134394.0], [98.2, 134399.0], [98.3, 134406.0], [98.4, 134414.0], [98.5, 134415.0], [98.6, 134422.0], [98.7, 134426.0], [98.8, 134436.0], [98.9, 134440.0], [99.0, 134441.0], [99.1, 134444.0], [99.2, 134509.0], [99.3, 134524.0], [99.4, 134539.0], [99.5, 134550.0], [99.6, 134562.0], [99.7, 134586.0], [99.8, 134620.0], [99.9, 134648.0], [100.0, 134652.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 385.0, "series": [{"data": [[133800.0, 8.0], [0.0, 385.0], [132800.0, 89.0], [133200.0, 67.0], [133000.0, 208.0], [134400.0, 17.0], [134600.0, 5.0], [133600.0, 10.0], [133400.0, 11.0], [134000.0, 10.0], [134200.0, 11.0], [100.0, 166.0], [133900.0, 8.0], [133100.0, 40.0], [133300.0, 7.0], [132900.0, 334.0], [134300.0, 23.0], [133500.0, 15.0], [133700.0, 9.0], [132700.0, 12.0], [134500.0, 10.0], [134100.0, 6.0], [200.0, 28.0], [60200.0, 39.0], [60100.0, 7.0], [60000.0, 260.0], [60300.0, 7.0], [300.0, 1.0], [120300.0, 1.0], [120100.0, 2.0], [120200.0, 1.0], [120000.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 134600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1800.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1800.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1800.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.73342868E12, "maxY": 300.0, "series": [{"data": [[1.7334291E12, 300.0], [1.7334294E12, 1.0], [1.73342874E12, 300.0], [1.73342904E12, 300.0], [1.73342934E12, 2.0], [1.73342868E12, 300.0], [1.73342898E12, 300.0], [1.73342928E12, 5.833333333333334], [1.73342892E12, 300.0], [1.73342922E12, 14.416666666666666], [1.73342886E12, 300.0], [1.73342916E12, 227.2371134020616], [1.7334288E12, 300.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7334294E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 70519.12719298256, "minX": 1.0, "maxY": 134216.0, "series": [{"data": [[32.0, 133079.75], [2.0, 133116.0], [3.0, 133105.0], [4.0, 133108.0], [7.0, 129651.75], [10.0, 133116.0], [183.0, 133056.25], [182.0, 132958.0], [181.0, 133087.0], [177.0, 132997.0], [11.0, 133113.33333333334], [191.0, 133056.0], [189.0, 133022.0], [188.0, 133029.0], [186.0, 133060.0], [185.0, 132951.0], [199.0, 133014.5263157895], [198.0, 132995.5], [197.0, 132961.5], [196.0, 133006.0], [194.0, 132952.0], [193.0, 133054.0], [192.0, 132989.5], [12.0, 132781.0], [201.0, 132978.9166666667], [200.0, 133011.32075471696], [16.0, 133118.0], [1.0, 134216.0], [17.0, 110944.33333333334], [300.0, 70519.12719298256], [21.0, 133090.0], [24.0, 133086.0], [26.0, 133086.5], [29.0, 133080.66666666666], [30.0, 133083.0], [31.0, 133080.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[285.02055555555495, 77520.88888888898]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 300.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.73342868E12, "maxY": 14966.316666666668, "series": [{"data": [[1.7334291E12, 463.48333333333335], [1.7334294E12, 45.35], [1.73342874E12, 1632.3333333333333], [1.73342904E12, 14587.166666666666], [1.73342934E12, 45.35], [1.73342868E12, 11.9], [1.73342898E12, 17.1], [1.73342928E12, 232.53333333333333], [1.73342892E12, 185.85], [1.73342922E12, 504.3833333333333], [1.73342886E12, 14966.316666666668], [1.73342916E12, 12997.766666666666], [1.7334288E12, 108.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7334291E12, 19.0], [1.7334294E12, 0.0], [1.73342874E12, 560.5], [1.73342904E12, 539.6], [1.73342934E12, 0.0], [1.73342868E12, 3.8], [1.73342898E12, 5.7], [1.73342928E12, 1.9], [1.73342892E12, 17.1], [1.73342922E12, 1.9], [1.73342886E12, 545.3], [1.73342916E12, 9.5], [1.7334288E12, 5.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7334294E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 20.0, "minX": 1.73342868E12, "maxY": 134216.0, "series": [{"data": [[1.7334291E12, 75787.1052631579], [1.7334294E12, 134216.0], [1.73342874E12, 60050.89152542371], [1.73342904E12, 67095.83187390536], [1.73342934E12, 133116.0], [1.73342868E12, 20.0], [1.73342898E12, 100053.66666666667], [1.73342928E12, 130803.33333333333], [1.73342892E12, 73279.41666666667], [1.73342922E12, 122001.75000000001], [1.73342886E12, 67929.6082474227], [1.73342916E12, 131319.23024054978], [1.7334288E12, 125251.4]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7334294E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.73342868E12, "maxY": 100053.66666666667, "series": [{"data": [[1.7334291E12, 12637.789473684214], [1.7334294E12, 0.0], [1.73342874E12, 60050.79322033897], [1.73342904E12, 260.4903677758318], [1.73342934E12, 0.0], [1.73342868E12, 12.0], [1.73342898E12, 100053.66666666667], [1.73342928E12, 20013.166666666664], [1.73342892E12, 40050.916666666664], [1.73342922E12, 0.24999999999999997], [1.73342886E12, 233.1786941580758], [1.73342916E12, 618.7079037800686], [1.7334288E12, 72130.2]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7334294E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.73342868E12, "maxY": 134216.0, "series": [{"data": [[1.7334291E12, 63153.05263157894], [1.7334294E12, 134216.0], [1.73342874E12, 27.393220338983053], [1.73342904E12, 66858.98598949215], [1.73342934E12, 133116.0], [1.73342868E12, 1.0], [1.73342898E12, 11.333333333333332], [1.73342928E12, 110790.5], [1.73342892E12, 33272.833333333336], [1.73342922E12, 122001.58333333334], [1.73342886E12, 67713.95876288658], [1.73342916E12, 130700.39175257737], [1.7334288E12, 53178.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7334294E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 14.0, "minX": 1.0, "maxY": 134288.0, "series": [{"data": [[2.0, 66414.5], [32.0, 134288.0], [8.0, 60032.0], [140.0, 133179.0], [169.0, 132996.0], [180.0, 217.0], [3.0, 90179.0], [15.0, 133081.0], [1.0, 120091.0], [4.0, 132952.5], [68.0, 14.0], [5.0, 132795.0], [342.0, 132774.0], [21.0, 132964.0], [339.0, 132809.0], [94.0, 60168.0], [99.0, 132929.0], [101.0, 60006.0], [100.0, 60006.0], [7.0, 132796.0], [30.0, 66546.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 342.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 60168.0, "series": [{"data": [[2.0, 1.5], [32.0, 0.0], [8.0, 4.0], [140.0, 0.0], [169.0, 0.0], [180.0, 120.0], [3.0, 60018.5], [15.0, 0.0], [1.0, 60040.5], [4.0, 0.0], [68.0, 13.0], [5.0, 0.0], [342.0, 0.0], [21.0, 0.0], [339.0, 0.0], [94.0, 60168.0], [99.0, 0.0], [101.0, 60006.0], [100.0, 60006.0], [7.0, 0.0], [30.0, 10.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 342.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73342868E12, "maxY": 9.7, "series": [{"data": [[1.7334291E12, 0.31666666666666665], [1.73342892E12, 0.2], [1.73342874E12, 4.916666666666667], [1.73342922E12, 0.03333333333333333], [1.73342904E12, 9.516666666666667], [1.73342886E12, 9.7], [1.73342868E12, 5.033333333333333], [1.73342916E12, 0.13333333333333333], [1.73342898E12, 0.05], [1.7334288E12, 0.08333333333333333], [1.73342928E12, 0.016666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73342928E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73342868E12, "maxY": 4.916666666666667, "series": [{"data": [[1.73342868E12, 0.03333333333333333]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.7334291E12, 0.15], [1.7334294E12, 0.016666666666666666], [1.73342892E12, 0.05], [1.73342922E12, 0.18333333333333332], [1.73342904E12, 4.783333333333333], [1.73342934E12, 0.016666666666666666], [1.73342886E12, 4.916666666666667], [1.73342916E12, 4.766666666666667], [1.7334288E12, 0.03333333333333333], [1.73342928E12, 0.08333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}, {"data": [[1.7334291E12, 0.16666666666666666], [1.73342892E12, 0.15], [1.73342874E12, 4.916666666666667], [1.73342922E12, 0.016666666666666666], [1.73342904E12, 4.716666666666667], [1.73342886E12, 4.783333333333333], [1.73342916E12, 0.08333333333333333], [1.73342898E12, 0.016666666666666666]], "isOverall": false, "label": "502", "isController": false}, {"data": [[1.73342904E12, 0.016666666666666666], [1.73342898E12, 0.03333333333333333], [1.7334288E12, 0.05], [1.73342928E12, 0.016666666666666666]], "isOverall": false, "label": "504", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7334294E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73342868E12, "maxY": 9.7, "series": [{"data": [[1.7334291E12, 0.31666666666666665], [1.7334294E12, 0.016666666666666666], [1.73342874E12, 4.916666666666667], [1.73342904E12, 9.516666666666667], [1.73342934E12, 0.016666666666666666], [1.73342868E12, 0.03333333333333333], [1.73342898E12, 0.05], [1.73342928E12, 0.1], [1.73342892E12, 0.2], [1.73342922E12, 0.2], [1.73342886E12, 9.7], [1.73342916E12, 4.85], [1.7334288E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7334294E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73342868E12, "maxY": 9.7, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7334291E12, 0.31666666666666665], [1.7334294E12, 0.016666666666666666], [1.73342874E12, 4.916666666666667], [1.73342904E12, 9.516666666666667], [1.73342934E12, 0.016666666666666666], [1.73342868E12, 0.03333333333333333], [1.73342898E12, 0.05], [1.73342928E12, 0.1], [1.73342892E12, 0.2], [1.73342922E12, 0.2], [1.73342886E12, 9.7], [1.73342916E12, 4.85], [1.7334288E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7334294E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

