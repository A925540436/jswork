moveUp: function() {
    var canMove = false;
    for (var arr = this.arr, len = arr.length, y = 0; y < len; ++y) {
        for (var x = 0; x < len; ++x) {
            for (var next = x + 1; next < len; ++next) {
                if (arr[next] [y] === 0 ) {
                    continue;
                }
                if (arr[x][y] === 0 ) {
                    arr[x][y] = arr[next][y];
                    this.onMove({from: {x: next, y: y, num: arr[next][y]}, to: {x: x, y: y, num: arr[x][y]}});
                    arr[next][y] = 0;
                    canMove = true;
                    --x;
                } else if (arr[x][y] === arr[next][y]) {
                    arr[x][y] += arr[next][y];
                    this.onMove({from: {x: next, y: y, num: arr[next][y]}, to: {x: x, y: y, num: arr[x][y]}});
                    arr[next][y] = 0;
                    canMove = true;
                }
                break;
            }
        }
    }
    this.onMoveComplete({moved: canMove});
},
moveDown: function() {
    var canMove = false;
    for (var arr = this.arr, len = arr.length, y = 0; y < len; ++y) {
        for (var x = len - 1; prev >= 0; --prev) {
            for (var prev = x - 1;prev >= 0; --prev) {
                if (arr[prev][y] === 0) {
                    continue;
                }
            }
        }
    }
}