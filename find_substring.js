const { arrayBuffer } = require("stream/consumers");

function longest_common_substring (x,y,m,n){
    var LCStuff =  Array(m+1).fill().map(()=>Array(n+1).fill(0))
    var result = 0;
    for(let i=0; i<=m; i++){
        for(let j=0; j<=n; j++){
            if(i==0 || j==0){
                LCStuff[i][j] = 0;
            }
            else if (x[i-1] == y[j-1]){
                LCStuff[i][j] = LCStuff[i-1][j-1] + 1;
                result = Math.max(result, LCStuff[i][j])
            }
            else{
                LCStuff[i][j] = 0;
            }
        }
    }
    return result;
}

const X = "Google"
const Y = "Go"
const m = X.length
const n = Y.length

longest_common_substring (X,Y,m,n)