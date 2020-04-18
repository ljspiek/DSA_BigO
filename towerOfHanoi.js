function stepsToSolveHanoiT(height, srcP, desP, bufferP) {
    
    if (height >= 1) {
        
      // Move a tower of height-1 to the buffer peg, using the destination peg.
      stepsToSolveHanoiT( height - 1, srcP, bufferP, desP)
      
  
      // Move the remaining disk to the destination peg.
    //   console.log('Move disk from Tower ', srcP, ' to Tower ', desP);
  
      // Move the tower of `height-1` from the `buffer peg` to the `destination peg` using the `source peg`.        
      
      stepsToSolveHanoiT( height - 1, bufferP, desP, srcP)
      count(n++, srcP, desP)
    }
    
    return;
  }
  
  let n = 1

  function count(n, srcP, desP){
      console.log( n, 'Move disk from Tower ', srcP, ' to Tower ', desP)
    
  }



  stepsToSolveHanoiT(6, "A", "C", "B");

  //Exponential O(2n)