// calculate age
export class PersonAge {
  constructor(dob) {
    // [1] new Date(dateString)
    this.birthday = new Date(dob); // transform birthday in date-object
  }
  calculateAge() {
    // diff = now (in ms) - birthday (in ms)
    // diff = age in ms
    const diff = Date.now() - this.birthday.getTime();

    // [2] new Date(value); -> value = ms since 1970
    // = do as if person was born in 1970
    // this works cause we are interested in age, not a year
    const ageDate = new Date(diff);

    // check: 1989 = 1970 + 19
    //console.log(ageDate.getUTCFullYear()); // 1989

    // age = year if person was born in 1970 (= 1989) - 1970 = 19
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  calculateAgeMercury() {
    return Math.floor((this.calculateAge()*365)/88)
  }
}






// ......................................End................................

// http://www.spacegrant.hawaii.edu/class_acts/HowOld.html
