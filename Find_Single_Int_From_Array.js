(function main() {
    var solution = function(arr) {
      
        for (var i =0; i< arr.length; i++){
            var flag = true;
            for (var j = 0; j < arr.length-1; j++){
                if(arr[i] !== arr[j]){
                    flag = false;
                }
            }
            if(flag=true){
                return arr[i];
            }
        }
        console.log("running")           
       
    };
   
    var arr = [3,5,3,9,2,5,2];
    console.log(solution(arr));
  })();