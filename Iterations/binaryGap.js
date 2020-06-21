//Problem description: https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function solution(N){
  const binaryArr = dec2bin(N).split('').map(Number);
  
  let maxGap = 0;
  let currentGap = 0;

  for(let i of binaryArr){
    if(i === 0){
        currentGap += 1;
    }else{
        if(currentGap >= maxGap){
            maxGap = currentGap
        }
        currentGap = 0;
    }
  }
  //console.log(`The max binary gap of ${N} is ${maxGap}`)
  return(maxGap);
}

//solution(1234567);
