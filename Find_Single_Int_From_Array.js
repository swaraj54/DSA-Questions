(function main() {

    var solution = function(arr) {
        console.log(arr)
        for (var i = 0; i < arr.length; i++){   //3
            var flag = true;
            
            for (var j = i+1; j < arr.length; j++){  //5
                if( arr[i] === arr[j] ){
                    flag = false;
                    break;
                }
                else {
                    console.log(arr[i])
                }
            }
            if (flag === false){
                console.log("finaL" , arr[i])
            }
        }      
    };
   
    var arr = [3,5,3,9,2,5,2];
    console.log(solution(arr));
  })();