(window["webpackJsonptrain-game"]=window["webpackJsonptrain-game"]||[]).push([[0],{20:function(e,n,t){e.exports=t.p+"static/media/line.2e3e852f.svg"},21:function(e,n,t){e.exports=t.p+"static/media/curve.e4a33090.svg"},22:function(e,n,t){e.exports=t.p+"static/media/bridge.2b4139f0.svg"},23:function(e,n,t){e.exports=t.p+"static/media/switch.90588404.svg"},24:function(e,n,t){e.exports=t.p+"static/media/padure.7a9c9b0c.svg"},25:function(e,n,t){e.exports=t.p+"static/media/gara.830c43ab.svg"},26:function(e,n,t){e.exports={messageLog:"_31afquc8zKJxVBgSbkIwG6"}},28:function(e,n,t){e.exports=t(41)},40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(10),r=t.n(c),i=t(5),l=t(7),u=t(3),s=t(1),p={bridge:{type:"bridge",connections:[1,1,1,1],allowRotate:!0},curve:{type:"curve",connections:[1,1,0,0],allowRotate:!0},line:{type:"line",connections:[0,1,0,1],allowRotate:!0},switch:{type:"switch",connections:[1,1,0,1],allowRotate:!0},station:{type:"station",connections:[1,1,0,1],allowRotate:!0},forest:{type:"forest",connections:[0,0,0,0],allowRotate:!1}},d=["NORTH","EAST","SOUTH","WEST"],y={FOREST:{type:"FOREST",moves:3,piece:[p.forest.type]},STATIONS:{type:"STATIONS",moves:2,piece:[p.station.type]},TRACKS:{type:"TRACKS",moves:1,piece:[p.bridge.type,p.curve.type,p.line.type,p.switch.type]}},b=function(e){return{type:"SET_GAME_STAGE",payload:e}},m=function(e){return{type:"SET_ACTIVE_PLAYER",payload:e}},f=function(){return function(e,n){var t=n().game,o=t.players,a=t.activeTurn.player,c=o.findIndex((function(e){return e.id===a.id}));o[c+1]||e((function(e,n){var t=n().game.turns.stage;t===y.FOREST&&e(b(y.STATIONS)),t===y.STATIONS&&e(b(y.TRACKS))}));var r=n().game.turns.stage.moves,i={player:o[c+1]?o[c+1]:o[0],moves:{allowed:r,executed:0}};e(j()),e(m(i))}},g=function(){return function(e,n){var t=n().game.activeTurn.moves,o=t.allowed,a=t.executed;e({type:"PLAYER_MOVE_ADD"}),a+1===o&&e(f()),e(h())}},E=function(e){return{type:"LOG_MESSAGE",payload:e}},v=[[{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null}],[{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{connections:[1,1,0,1],enabled:!0,ownerId:2,type:"station",rotation:0},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{connections:[0,1,1,1],enabled:!0,ownerId:1,type:"station",rotation:-180},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null}],[{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null}],[{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null}],[{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null}],[{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null}],[{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{connections:[1,1,0,1],enabled:!0,ownerId:2,type:"station",rotation:0},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{connections:[1,1,0,1],enabled:!0,ownerId:1,type:"station",rotation:0},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null}],[{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null},{enabled:!0,occupied:!1,type:"",rotation:0,connections:[],ownerId:null}]],w=function(e,n){var t=e.posX,o=e.posY;return"undefined"!==typeof n[t]&&"undefined"!==typeof n[t][o]},O=function(e,n){var t=e.posX,o=e.posY,a=e.connections,c=void 0===a?[1,1,1,1]:a;return w({posX:t,posY:o},n)?[[t-1,o],[t,o+1],[t+1,o],[t,o-1]].filter((function(e,n){return 1===c[n]})).filter((function(e){var t=Object(l.a)(e,2),o=t[0],a=t[1];return w({posX:o,posY:a},n)})):null},I=function(e,n){var t=e.posX,o=e.posY,a=e.connections;return O({posX:t,posY:o,connections:void 0===a?[1,1,1,1]:a},n).map((function(e){var t=Object(l.a)(e,2),o=t[0],a=t[1];return n[o][a]}))||[]},T=function(e,n){var t=e.posX,o=e.posY,a=e.connections;return I({posX:t,posY:o},n).filter((function(e){return!0===e.occupied})).filter((function(e){return S({posX:t,posY:o,connections:a},e,!0)}))},S=function(e,n){var t=e.posX,o=e.posY,a=e.connections,c=n.posX,r=n.posY,i=n.connections,l=arguments.length>2&&void 0!==arguments[2]&&arguments[2],u="".concat(t-c).concat(o-r);switch(u){case"10":return l?a[0]&&i[2]:a[0]===i[2];case"0-1":return l?a[1]&&i[3]:a[1]===i[3];case"-10":return l?a[2]&&i[0]:a[2]===i[0];case"01":return l?a[3]&&i[1]:a[3]===i[1];default:return!1}},j=function(){return{type:"ENABLE_ALL_PIECES"}},_=function(e,n){return{type:"DISABLE_PIECE",payload:{x:e,y:n}}},A=function(){return function(e,n){var t=n(),o=t.game.activeTurn.player.id,a=t.board.gameMap,c=function(e,n){return e.reduce((function(e,t){var o=t.filter((function(e){return e.ownerId===n&&e.type===p.station.type}));return o.length?[].concat(Object(u.a)(e),Object(u.a)(o)):e}),[])}(a,o),r=Object(l.a)(c,2);(function e(n,t,o){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(console.log("[areCellsConnected] called"),(null===n||void 0===n?void 0:n.posX)===(null===t||void 0===t?void 0:t.posX)&&(null===n||void 0===n?void 0:n.posY)===(null===t||void 0===t?void 0:t.posY))return console.log("cells are connected yay"),!0;var c=T(n,o);return console.log("[areCellsConnected] connected cells found for ".concat(n.posX," ").concat(n.posY,":"),c),!!c.length&&(console.log("[areCellsConnected]: previous cell is ".concat(a.posX," ").concat(a.posY)),console.log("[areCellsConnected] filtering out previous cells leaves:",c.filter((function(e){return e.posX!==a.posX&&e.posY!==a.posY}))),c.filter((function(e){return e.posX!==a.posX||e.posY!==a.posY})).map((function(a){return e(a,t,o,n)})).some((function(e){return!0===e})))})(r[0],r[1],a)&&e(E("Congratulations, you have established a connection!"))}},h=function(){return function(e,n){var t=n(),o=t.board.gameMap,a=t.game,c=a.activeTurn.player.id;if(a.turns.stage.type===y.TRACKS.type){var r=function(e,n){var t=[];if((e=e||v).length&&n)return e.map((function(o){o.map((function(o){o.ownerId===n&&(t=[].concat(Object(u.a)(t),Object(u.a)(O(o,e))))}))})),t}(o,c).map((function(e){return e.join()}));r.length&&e({type:"SET_LEGAL_MOVES",payload:{moves:r}})}}},R=t(20),C=t.n(R),L=t(21),Y=t.n(L),M=t(22),N=t.n(M),X=t(23),x=t.n(X),P=t(24),k=t.n(P),D=t(25),W=t.n(D),B={line:C.a,curve:Y.a,bridge:N.a,switch:x.a,forest:k.a,station:W.a},G=t(12),V=t(13),H=function(e){var n=e.allowRotate,t=e.internalType,o=e.internalRotate,c=e.hideWheel,r=e.setSelection,i=e.saveSelection,l=e.setRotation,u=e.stage;return a.a.createElement("div",{className:"selection-wheel"},Object.keys(B).filter((function(e){return y[u].piece.includes(e)})).map((function(e,n){return a.a.createElement("div",{key:n,className:"quadrant quadrant-".concat(n),onClick:function(){return r(e)}},a.a.createElement("img",{src:B[e]}))})),a.a.createElement("div",{className:"selection-preview",onClick:function(){return i()}},t&&a.a.createElement("img",{className:"rotate-".concat(o),src:B[t]})),n&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"selection-rotate-right",onClick:function(){return l(90)}},a.a.createElement(G.a,{icon:V.b})),a.a.createElement("div",{className:"selection-rotate-left",onClick:function(){return l(-90)}},a.a.createElement(G.a,{icon:V.b}))),a.a.createElement("div",{className:"selection-close",onClick:function(){return c()}},a.a.createElement(G.a,{icon:V.a})))},K="SET_ALLOW_ROTATE",U="SET_TYPE",F="SET_ROTATE",q="SET_DISABLED",J="SET_ENABLED",z="SHOW_SELECTION_WHEEL",Q="HIDE_SELECTION_WHEEL",Z=function(e,n){switch(console.log("".concat(n.type," called with payload: ").concat(n.payload)),n.type){case K:return Object(s.a)({},e,{allowRotate:n.payload});case U:return Object(s.a)({},e,{internalType:n.payload});case F:return Object(s.a)({},e,{internalRotate:n.payload});case J:return Object(s.a)({},e,{isEnabled:!0});case q:return Object(s.a)({},e,{isEnabled:!1});case z:return Object(s.a)({},e,{selectionWheel:!0});case Q:return Object(s.a)({},e,{selectionWheel:!1})}},$=function(e){var n=e.cornerPiece,t=e.enabled,c=e.rotation,r=e.type,i=e.stage,u=e.posX,s=e.posY,d=e.setPiece,b=Object(o.useReducer)(Z,{allowRotate:!1,internalType:r,internalRotate:c||0,isEnabled:!0,selectionWheel:!1}),m=Object(l.a)(b,2),f=m[0],g=f.allowRotate,E=f.internalType,v=f.internalRotate,w=f.isEnabled,O=f.selectionWheel,I=m[1];Object(o.useEffect)((function(){!0===n&&y[i]===y.STATIONS&&I({type:q})}),[i]);var T=function(){return I({type:Q})};return a.a.createElement("div",{className:"piece piece-".concat(r," ").concat(t?"enabled":"disabled"," ").concat(O?"show-wheel":"")},a.a.createElement(H,{allowRotate:g,hideWheel:T,internalType:E,internalRotate:v,setSelection:function(e){I({type:U,payload:e}),I({type:K,payload:p[e].allowRotate})},saveSelection:function(){T(),d(u,s,E,v)},setRotation:function(e){I({type:F,payload:360===Math.abs(v+e)?0:v+e})},stage:i}),a.a.createElement("div",{className:"piece-image",onClick:function(){return w?I({type:z}):null}},r&&a.a.createElement("img",{className:"rotate-".concat(c),src:B[r]})))},ee={initBoard:function(){return function(e,n){var t=n().board.config,o=t.rows,a=t.columns,c={enabled:!0,occupied:!1,ownerId:null,type:"",rotation:0,connections:[]};e(function(e){return{type:"SET_BOARD",payload:e}}(Array(o).fill(null).map((function(e,n){return Array(a).fill(null).map((function(e,t){return Object(s.a)({},c,{posX:n,posY:t})}))}))))}},initPlayers:function(){return function(e,n){var t=n().game.playerCount,o=Object(u.a)(Array(parseInt(t))).map((function(e,n){return{id:n+1,name:"Player ".concat(n+1)}}));e(function(e){return{type:"SET_PLAYERS",payload:e}}(o)),e(b(y.STATIONS));var a={player:Object(s.a)({},o[0]),moves:{allowed:y.STATIONS.moves,executed:0}};e(m(a))}},setPiece:function(e,n,t,o){return function(a,c){var r=c(),i=r.game,s=i.activeTurn.player.id,b=i.turns.stage.type,m=r.board,f=m.config,v=f.rows,w=f.columns,O=m.gameMap[e][n],T=O.type,j=O.rotation,h=m.gameMap;if(t!==T||o!==j){var R=function(e,n){for(var t=Object(u.a)(e),o=n<0,a=Math.abs(n/90),c=0;c<a;c++)o?t.push(t.shift()):t.unshift(t.pop());return t}(p[t].connections,o);if(b===y.STATIONS.type){var C=function(e,n,t){var o=e.posX,a=e.posY,c=e.connections,r=!0,i=[],s=[[o-1,a],[o,a+1],[o+1,a],[o,a-1]].reduce((function(e,o){var a=Object(l.a)(o,2),c=a[0],r=a[1];return[].concat(Object(u.a)(e),[+(0<=c&&c<n&&0<=r&&r<t)])}),[]);return c.map((function(e,n){1===e&&1!==s[n]&&(i.push("Illegal Station Placement. ".concat(d[n]," direction is blocked.")),r=!1)})),{isLegal:r,errors:i}}({posX:e,posY:n,connections:R},v,w),L=C.isLegal,Y=C.errors;if(!L)return void Y.map((function(e){return a(E(e))}));var M=function(e,n,t,o,a){for(var c=[],r=e-a;r<=e+a;r++)for(var i=n-a;i<=n+a;i++)r>=0&&r<t&&i>=0&&i<o&&c.push([r,i]);return c}(e,n,v,w,2);console.log(M),M.map((function(e){a(_.apply(void 0,Object(u.a)(e)))}))}if(b===y.TRACKS.type)if(!function(e,n){var t=e.posX,o=e.posY,a=e.connections,c=I({posX:t,posY:o},n).filter((function(e){return e.occupied})).map((function(e){return S({posX:t,posY:o,connections:a},e)})).every((function(e){return!0===e})),r=I({posX:t,posY:o,connections:a},n);return c&&r.length>=2}({posX:e,posY:n,connections:R},h))return void a(E("Move is not legal."));a(function(e,n,t){return{type:"SET_PIECE",payload:{x:e,y:n,piece:t}}}(e,n,{connections:R,enabled:!0,occupied:!0,ownerId:s,posX:e,posY:n,type:t,rotation:o})),a(A()),a(g())}else a(E("No change registered."))}},playerMakeMove:g},ne=Object(i.b)((function(e){return{board:e.board.gameMap,stage:e.game.turns.stage.type}}),ee)((function(e){var n=e.board,t=e.rows,c=e.columns,r=e.stage,i=e.setPiece,l=e.initBoard,u=e.initPlayers;return Object(o.useEffect)((function(){l(),u()}),[]),a.a.createElement("div",{className:"game-board",style:{width:"calc(80px * ".concat(c,")")}},n.map((function(e,n){return e.map((function(e,o){var l=0==n&&0==o||n==t-1&&o==c-1||0==n&&o==c-1||n==t-1&&0==o;return a.a.createElement("div",{className:"cell \n                ".concat(o===c-1?"right-edge":""," \n                ").concat(n===t-1?"bottom-edge":""),style:{flex:"calc(100% / ".concat(c," - 1px) 0 0")},key:"cell-".concat(n).concat(o)},a.a.createElement($,Object.assign({cornerPiece:l,posX:n,posY:o,setPiece:i,stage:r},e)))}))})))})),te=t(26),oe=t.n(te),ae=Object(i.b)((function(e){return{messages:e.messageLog.messages}}))((function(e){var n=e.messages,t=void 0===n?[]:n;return a.a.createElement("ul",{className:oe.a.messageLog},t.map((function(e,n){return a.a.createElement("li",{key:n},e)})))}));var ce={setRows:function(e){return{type:"SET_ROWS",payload:e}},setColumns:function(e){return{type:"SET_COLUMNS",payload:e}}},re=Object(i.b)((function(e){return{rows:e.board.config.rows,columns:e.board.config.columns,stage:e.game.turns.stage.type,activePlayer:e.game.activeTurn}}),ce)((function(e){var n=e.rows,t=e.columns,o=e.setRows,c=e.setColumns,r=e.stage,i=e.activePlayer;return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"controls"},a.a.createElement("label",null,"Rows:"),a.a.createElement("input",{type:"number",pattern:"[0-9]*",value:n,onChange:function(e){return o(e.target.value)}}),a.a.createElement("br",null),a.a.createElement("label",null,"Columns:"),a.a.createElement("input",{type:"number",pattern:"[0-9]*",value:t,onChange:function(e){return c(e.target.value)}}),a.a.createElement("br",null),a.a.createElement("h3",null,"Stage: ",r),i.player.name," make ",i.moves.allowed-i.moves.executed," ","moves"),a.a.createElement(ae,null),a.a.createElement(ne,{rows:n,columns:t}))})),ie=(t(40),t(6)),le=t(27),ue=t(4),se={config:{rows:8,columns:8},gameMap:[]},pe={playerCount:1,players:{},turns:{count:1,stage:""},activeTurn:{player:{},moves:{allowed:0,executed:0}}},de={messages:["Welcome!"]},ye=Object(ie.c)({board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_BOARD":return Object(s.a)({},e,{gameMap:n.payload});case"SET_ROWS":return Object(s.a)({},e,{config:Object(s.a)({},e.config,{rows:n.payload})});case"SET_COLUMNS":return Object(s.a)({},e,{config:Object(s.a)({},e.config,{columns:n.payload})});case"SET_PIECE":return Object(s.a)({},e,{gameMap:Object.assign(Object(u.a)(e.gameMap),Object(ue.a)({},n.payload.x,Object.assign(Object(u.a)(e.gameMap[n.payload.x]),Object(ue.a)({},n.payload.y,Object(s.a)({},n.payload.piece)))))});case"ENABLE_PIECE":return Object(s.a)({},e,{gameMap:Object.assign(Object(u.a)(e.gameMap),Object(ue.a)({},n.payload.x,Object.assign(Object(u.a)(e.gameMap[n.payload.x]),Object(ue.a)({},n.payload.y,Object(s.a)({},e.gameMap[n.payload.x][n.payload.y],{enabled:!0})))))});case"DISABLE_PIECE":return Object(s.a)({},e,{gameMap:Object.assign(Object(u.a)(e.gameMap),Object(ue.a)({},n.payload.x,Object.assign(Object(u.a)(e.gameMap[n.payload.x]),Object(ue.a)({},n.payload.y,Object(s.a)({},e.gameMap[n.payload.x][n.payload.y],{enabled:!1})))))});case"SET_LEGAL_MOVES":return Object(s.a)({},e,{gameMap:e.gameMap.map((function(e,t){return e.map((function(e,o){return n.payload.moves.includes("".concat(t,",").concat(o))?Object(s.a)({},e,{enabled:!0}):Object(s.a)({},e,{enabled:!1})}))}))});case"ENABLE_ALL_PIECES":return Object(s.a)({},e,{gameMap:e.gameMap.map((function(e){return e.map((function(e){return Object(s.a)({},e,{enabled:!0})}))}))});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INIT_PLAYERS":return Object(s.a)({},e,{players:Object(s.a)({},n.payload)});case"SET_PLAYER_TURN":return Object(s.a)({},e,{turns:Object(s.a)({},e.turns,{active:n.payload})});case"SET_PLAYER_COUNT":return Object(s.a)({},e,{playerCount:n.payload});case"SET_PLAYERS":return Object(s.a)({},e,{players:n.payload});case"SET_GAME_STAGE":return Object(s.a)({},e,{turns:Object(s.a)({},e.turns,{stage:n.payload})});case"SET_ACTIVE_PLAYER":return Object(s.a)({},e,{activeTurn:n.payload});case"PLAYER_MOVE_ADD":return Object(s.a)({},e,{activeTurn:Object(s.a)({},e.activeTurn,{moves:Object(s.a)({},e.activeTurn.moves,{executed:e.activeTurn.moves.executed+1})})});default:return e}},messageLog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,n=arguments.length>1?arguments[1]:void 0,t=n.type,o=n.payload;switch(t){case"LOG_MESSAGE":return{messages:[].concat(Object(u.a)(e.messages),[o])};default:return e}}}),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,me=Object(ie.e)(ye,be(Object(ie.a)(le.a)));r.a.render(a.a.createElement(i.a,{store:me},a.a.createElement(re,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.07d3e50e.chunk.js.map