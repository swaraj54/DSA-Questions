(function main() {
    
    var solution = function(arr) {
        
        for (var i =0; i< arr.length; i++){
            var counter = 0;
            for (var j = i+1; j < arr.length-1; j++){
                if(arr[i] === arr[j]){
                    counter++;
                }

            }
            if(counter === 0){
                console.log(arr[i]);
            }

        }      
       
    };
   
    var arr = [3,5,3,9,2,5,2];
    console.log(solution(arr));
  })();