(function main() {

    var solution = function(arr) {
        console.log(arr)
        for (var i = 0; i < arr.length; i++){   //3
            var flag = true;
            for (var j = i; j < arr.length; j++){  //5
                if( arr[i]!==arr[j] ){
                    flag = false;
                } else {
                    flag = true;
                    break;
                }
            }
            // console.log(flag)
            if(flag === false ){
                console.log(arr[i])
                break;
            }
        }      
    };
   
    var arr = [3,5,3,9,2,5,2];
    console.log(solution(arr));
  })();