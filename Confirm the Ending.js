function confirmEnding(str, target) {
    let length = target.length;
    let match = str.slice(str.length - length, str.length);
    if (match == target) {
      return true;
    }
    return false;
  }
  
  console.log(confirmEnding("Bastian", "n"));