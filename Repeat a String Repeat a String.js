function repeatStringNumTimes(str, num) {
    if (num <= 0) {
      return "";
    }
    let result = "";
    let index = 0;
    while (index < num) {
      result = result + str;
      index += 1;
    }
    return result
  }
  
  console.log(repeatStringNumTimes("abc", 3));