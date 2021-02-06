class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}




function reliableMultiply1(a, b) {
    //Until Math.random() < 0.2
    for(i=0; i< Infinity; i++){
      try {
        return primitiveMultiply(a, b);
      } catch (e) {
        if (!(e instanceof MultiplicatorUnitFailure))
          throw e;
      }
    }
}


function reliableMultiply2(a, b) {
 
  // The for (;;) construct is a way to intentionally 
  // create a loop that doesn’t terminate on its own.
    for(;;){
      try {
        return primitiveMultiply(a, b);
      } catch (e) {
        if (!(e instanceof MultiplicatorUnitFailure))
          throw e;
      }
    }
  }


console.log(reliableMultiply1(8, 8));
console.log(reliableMultiply2(6, 6));