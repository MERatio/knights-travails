(()=>{"use strict";function o(o){const[s,n]=o,r=[];return s<=5&&n<=6&&r.push([s+2,n+1]),s<=6&&n<=5&&r.push([s+1,n+2]),s>=1&&n<=5&&r.push([s-1,n+2]),s>=2&&n<=6&&r.push([s-2,n+1]),s>=2&&n>=1&&r.push([s-2,n-1]),s>=1&&n>=2&&r.push([s-1,n-2]),s<=6&&n>=2&&r.push([s+1,n-2]),s<=5&&n>=1&&r.push([s+2,n-1]),r}function s(o,s){return o.every(((o,n)=>o===s[n]))}function n(n,r){const e=function(n,r){const e=[{board:new Array(8).fill().map((()=>new Array(8).fill(0))),coor:n,moves:[n]}];for(e[0].board[n[0]][n[1]]=1;e.length>0;){const n=e.shift();if(s(n.coor,r))return n.moves;const t=o(n.coor);for(const o of t)if(1!==n.board[o[0]][o[1]]){const s=n.board.map((o=>o.slice()));s[o[0]][o[1]]=1,e.push({board:s,coor:o,moves:[...n.moves,o]})}}}(n,r),t=e.length-1;console.log(`=> You made it in ${t} ${t>0?"moves":"move"}!  Here's your path:`);for(const o of e)console.log(`  [${o}]`)}window.knightMoves=n,n([3,3],[4,3])})();
//# sourceMappingURL=app.bundle.js.map