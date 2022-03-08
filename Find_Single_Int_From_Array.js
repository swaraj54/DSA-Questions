(function main() {

    var solution = function(arr) {
        console.log(arr)
        for (var i = 0; i < arr.length; i++){
            var flag = true;
            for (var j = i+1; j < arr.length; j++){
                if( arr[i]===arr[j] ){
                    flag = false;
                }
            }
            if(flag === true ){
                console.log(arr[i])
                break;
            }
        }      
    };
   
    var arr = [3,5,3,9,2,5,2];
    console.log(solution(arr));
  })();