(function main() {

    var solution = function(arr) {
        var narr = arr.sort();
        // console.log(narr.length)
        for (var i = 0; i < narr.length; i++){   //3
            console.log(narr[i])
        }      
    };
   
    var arr = [3,5,3,9,2,5,2];
    console.log(solution(arr));
  })();