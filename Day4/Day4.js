function minMax(arr){
    var min = Math.min.apply(null, arr),
      max = Math.max.apply(null, arr)
    
    return [min,max];
  }