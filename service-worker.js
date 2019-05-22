"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Petrovski/Star-Tool-Engineering/index.html","6dad2d8816e31b5ede9af91c6d9584f5"],["/Petrovski/Star-Tool-Engineering/static/css/main.21f8dff2.css","e0565bb3d391dba7646750fcf7b214d0"],["/Petrovski/Star-Tool-Engineering/static/js/main.c4dba70a.js","7b04e14d5e388453237d23a83dc2f845"],["/Petrovski/Star-Tool-Engineering/static/media/Simple-Line-Icons.0cb0b9c5.woff2","0cb0b9c589c0624c9c78dd3d83e946f6"],["/Petrovski/Star-Tool-Engineering/static/media/Simple-Line-Icons.2fe2efe6.svg","2fe2efe63441d830b1acd106c1fe8734"],["/Petrovski/Star-Tool-Engineering/static/media/Simple-Line-Icons.78f07e2c.woff","78f07e2c2a535c26ef21d95e41bd7175"],["/Petrovski/Star-Tool-Engineering/static/media/Simple-Line-Icons.d2285965.ttf","d2285965fe34b05465047401b8595dd0"],["/Petrovski/Star-Tool-Engineering/static/media/Simple-Line-Icons.f33df365.eot","f33df365d6d0255b586f2920355e94d7"],["/Petrovski/Star-Tool-Engineering/static/media/cnc-machine.7cbc0293.jpg","7cbc0293e33fcc44a94fbcc0734397cd"],["/Petrovski/Star-Tool-Engineering/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/Petrovski/Star-Tool-Engineering/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/Petrovski/Star-Tool-Engineering/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/Petrovski/Star-Tool-Engineering/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/Petrovski/Star-Tool-Engineering/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/Petrovski/Star-Tool-Engineering/static/media/galaxy_s5_land_black.03b51e06.png","03b51e065c5c626999376722f5bfd180"],["/Petrovski/Star-Tool-Engineering/static/media/galaxy_s5_land_white.0525c34c.png","0525c34cef3283eabc3167338a0797d4"],["/Petrovski/Star-Tool-Engineering/static/media/galaxy_s5_port_black.0de8e1a8.png","0de8e1a8665635a0837688589c6f4914"],["/Petrovski/Star-Tool-Engineering/static/media/galaxy_s5_port_white.5910135f.png","5910135fbce4a7641a5f1ff1400b9d7c"],["/Petrovski/Star-Tool-Engineering/static/media/galaxy_tab4_land_black.c10e3607.png","c10e360713bdd5a37ccc7084a4402857"],["/Petrovski/Star-Tool-Engineering/static/media/galaxy_tab4_land_white.ba2ef566.png","ba2ef5665e4e31ba27c939cc60589963"],["/Petrovski/Star-Tool-Engineering/static/media/gold.7f10264e.png","7f10264e0f100ddffd8bbdd8ac281fef"],["/Petrovski/Star-Tool-Engineering/static/media/grey.f33471e2.png","f33471e2767747a3863115d7b8b980b8"],["/Petrovski/Star-Tool-Engineering/static/media/imac.b4111cf5.png","b4111cf5c1d1896d1628f95e3bea7e48"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_air_2_gold_land.3d8f03da.png","3d8f03daaeaca835b53aef996630a1eb"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_air_2_gold_port.18c7b364.png","18c7b36437e59d55e4c8c89898664b9c"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_air_2_gray_land.43cbe56f.png","43cbe56f89906ad1095dcb411f54ea79"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_air_2_gray_port.070f84dc.png","070f84dc1bf0ceb5b09710a62b0c044c"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_air_2_silver_land.eeb81c45.png","eeb81c4553931271a6fcddc76aa8e2a5"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_air_2_silver_port.cb6895ef.png","cb6895ef16c1ce0b4f4d9d0ee1e3f496"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_air_gray_land.49d7d773.png","49d7d7738efffe81e5465076ed255f29"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_air_gray_port.3aab1ade.png","3aab1adee35d0ad688992735a96a52c2"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_air_silver_land.b7cbef7b.png","b7cbef7b31f10fb0ec94894ade316ee1"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_air_silver_port.cc19f51e.png","cc19f51ea28d907e545a6f57ecaa3830"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_port_black.76c5ba88.png","76c5ba8820448f36ee9567acbf7e5ee5"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_pro_land_black.94c538da.png","94c538da19ff004085dfc3093a88e748"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_pro_land_gold.b3faae9e.png","b3faae9e1082811badead6cfd98db62f"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_pro_land_silver.9fb9a414.png","9fb9a4146751e9b044ce14dad13588c9"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_pro_port_black.b6239c60.png","b6239c60fcca3b51b0f3b2d8e11f1af9"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_pro_port_gold.f0e7b1cf.png","f0e7b1cf8ef8f58d07f11e5e96c4a03a"],["/Petrovski/Star-Tool-Engineering/static/media/ipad_pro_port_silver.c1ffcacd.png","c1ffcacd23f696e90b004e4a0c54349b"],["/Petrovski/Star-Tool-Engineering/static/media/iphone5_land_black.07bbd15f.png","07bbd15ff3c2a1859feb82afb719e2cf"],["/Petrovski/Star-Tool-Engineering/static/media/iphone5_land_white.5d4198bc.png","5d4198bc85fcb3c350950f0a69ec9907"],["/Petrovski/Star-Tool-Engineering/static/media/iphone5_port_black.81078e2c.png","81078e2cf3b4fe341431f4d2f6675eed"],["/Petrovski/Star-Tool-Engineering/static/media/iphone5_port_white.3347526f.png","3347526fc4a1fdedcabe680c64c0e799"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_6_land_black.6ca71745.png","6ca71745c1ce3e4b0ca33740afe159fa"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_6_land_gold.633e2b15.png","633e2b154c400e9a9cfcc568ddaafdb0"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_6_land_white.aa01efc5.png","aa01efc5702705ce5a695da66aed8faf"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_6_plus_black_land.ae1f5e7a.png","ae1f5e7ab3d5a28ac3a858de6764f7df"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_6_plus_black_port.d96cfb83.png","d96cfb83c4d774edd86e0e06b47a974b"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_6_plus_gold_land.b8846e1c.png","b8846e1c45561164e04a43abc5a5c75a"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_6_plus_gold_port.0aec69ba.png","0aec69baa3d9026b3dd7dd88e054f35e"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_6_plus_white_land.3b0218f7.png","3b0218f7b660c875ec8440fd9279df00"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_6_plus_white_port.d6c50fbd.png","d6c50fbd2ce470c075e863ba6961557a"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_6_port_black.ae61d785.png","ae61d78586a588605a71f0f58f9e2760"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_6_port_gold.673d810a.png","673d810a0ec7218572346bf8bd3b8d90"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_6_port_white.d4956eac.png","d4956eac0ce11c5df72ab79fb58815b9"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_se_land_black.f17bc857.png","f17bc857d0dcea6fe60775161c7bbd5e"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_se_land_gold.8d33a7c1.png","8d33a7c1f6305b41c56523d5bf7e2176"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_se_land_rose.1c34c98f.png","1c34c98f53b119c958988496a60a03c3"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_se_land_white.6c71f01f.png","6c71f01ff2b3a48c38a70a43ef9b3914"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_se_port_black.e392031a.png","e392031a42566e89724cc347e2eb944e"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_se_port_gold.b49805de.png","b49805dee4cc2d7b8c92d3632ba8bcb9"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_se_port_rose.664550ad.png","664550ad8bff9d496e4786641e3033d5"],["/Petrovski/Star-Tool-Engineering/static/media/iphone_se_port_white.f947505c.png","f947505c6fa2adb20690a2474736ab0a"],["/Petrovski/Star-Tool-Engineering/static/media/lumia920_land.cd3a76c6.png","cd3a76c6e24267e669f6bc5ad2ff9f6e"],["/Petrovski/Star-Tool-Engineering/static/media/lumia920_port.accc02ae.png","accc02ae3e69c7a2679d43b1979811a7"],["/Petrovski/Star-Tool-Engineering/static/media/macbook.e2d887e4.png","e2d887e445fd459e71304f3caae7610f"],["/Petrovski/Star-Tool-Engineering/static/media/nexus7_port.20bfe0b6.png","20bfe0b646677b54b0d7af8921aee885"],["/Petrovski/Star-Tool-Engineering/static/media/s3_land_black.6b2944e5.png","6b2944e5a402051f87606434560c7b38"],["/Petrovski/Star-Tool-Engineering/static/media/s3_land_white.0effbb6a.png","0effbb6a3ffa421ab3b6da2e69fb3b0e"],["/Petrovski/Star-Tool-Engineering/static/media/s3_port_black.fda6e177.png","fda6e17702dbe65c69ca219d9d2bb06a"],["/Petrovski/Star-Tool-Engineering/static/media/s3_port_white.54ef3f95.png","54ef3f9543f5e6134bee56473edec3a4"],["/Petrovski/Star-Tool-Engineering/static/media/samsung_tv.41971728.png","4197172869623c61e72b07ff19e98c2f"],["/Petrovski/Star-Tool-Engineering/static/media/silver.845604f7.png","845604f7ac5c5d44155d61484944ca07"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var i=new URL(e);return"/"===i.pathname.slice(-1)&&(i.pathname+=a),i.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,i,n){var t=new URL(e);return n&&t.pathname.match(n)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(i)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var i=new URL(a).pathname;return e.some(function(e){return i.match(e)})},stripIgnoredUrlParameters=function(e,a){var i=new URL(e);return i.hash="",i.search=i.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),i.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],i=e[1],n=new URL(a,self.location),t=createCacheKey(n,hashParamName,i,/\.\w{8}\./);return[n.toString(),t]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(i){if(!a.has(i)){var n=new Request(i,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+i+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(i,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(i){return Promise.all(i.map(function(i){if(!a.has(i.url))return e.delete(i)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,i=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(i))||(i=addDirectoryIndex(i,"index.html"),a=urlsToCacheKeys.has(i));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(i=new URL("/Petrovski/Star-Tool-Engineering/index.html",self.location).toString(),a=urlsToCacheKeys.has(i)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(i)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});