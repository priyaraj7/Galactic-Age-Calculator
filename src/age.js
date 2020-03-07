const lifeExpectancy = 79;
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
//   calculateAgeOnEarth() {
//     return `Your age on earth is ${this.calculateAge()} years` ;
//   }

//   calculateAgeMercury() {
//     return `Your age on Mercury is ${(this.calculateAge() * 365 / 88).toFixed(1)} years`
//     return (this.calculateAge() * 365) / 88;
//   }
//   calculateAgeVenus() {
//     return (this.calculateAge() * 365) / 225;
//   }
//   calculateAgeMars() {
//     return (this.calculateAge() * 365) / 687;
//   }
//   calculateAgeJupiter() {
//     return this.calculateAge() / 12;
//   }

//   getStatusOnEarth() {
//     const age = this.calculateAge();
//     if(lifeExpectancy >= age) {
//       // 'You have ' + (lifeExpectency - age) + ' years left';
//       return `You have ${lifeExpectancy - age} years left`;
//     } else {
//       return `You have lived past ${age - lifeExpectancy } years`;
//     }
//   }
//   leftAgeOnEarth() {
//     return lifeExpectancy - this.calculateAge();
//   }
//   leftAgeOnMercury() {
//     return ((lifeExpectancy - this.calculateAge()) * 365) / 88;
//   }
//   leftAgeOnVenus() {
//     return ((lifeExpectancy - this.calculateAge()) * 365) / 225;
//   }
//   leftAgeOnMars() {
//     return ((lifeExpectancy - this.calculateAge()) * 365) / 687;
//   }
//   leftAgeOnJupiter() {
//     return (lifeExpectancy - this.calculateAge()) / 12;
//   }

//   surpassedAgeOnEarth() {
//     if (this.calculateAge() > lifeExpectancy) {
//       return this.calculateAge() - lifeExpectancy;
//     }
//     return null;
//   }
//   surpassedAgeOnMercury() {
//     if (this.calculateAge() > lifeExpectancy)
//       return ((this.calculateAge() - lifeExpectancy) * 365) / 88;
//   }
//   surpassedAgeOnVenus() {
//     if (this.calculateAge() > lifeExpectancy)
//       return ((this.calculateAge() - lifeExpectancy) * 365) / 225;
//   }
//   surpassedAgeOnMars() {
//     if (this.calculateAge() > lifeExpectancy)
//       return ((this.calculateAge() - lifeExpectancy) * 365) / 687;
//   }
//   surpassedAgeOnJupiter() {
//     if (this.calculateAge() > lifeExpectancy)
//       return (this.calculateAge() - lifeExpectancy) / 12;
//   }
// }

// ......................................End................................

// http://www.spacegrant.hawaii.edu/class_acts/HowOld.html
