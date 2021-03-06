export class PersonAge {
  constructor(dob) {
    this.birthday = new Date(dob);
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();

    const ageDate = new Date(diff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  calculateAgeOnEarth() {
    return `Your age on Earth is ${this.calculateAge()} years`;
  }
  calculateAgeOnMercury() {
    return `Your age on Mercury is ${Math.ceil(
      (this.calculateAge() * 365) / 88
    )} years`;
  }
  calculateAgeOnVenus() {
    return `Your age on Venus is ${Math.ceil(
      (this.calculateAge() * 365) / 225
    )} years`;
  }
  calculateAgeOnMars() {
    return `Your age on Mars is ${Math.ceil(
      (this.calculateAge() * 365) / 687
    )} years`;
  }
  calculateAgeOnJupiter() {
    return `Your age on Jupiter is ${Math.ceil(
      this.calculateAge() / 12
    )} years`;
  }

  getStatusOnEarth() {
    const age = this.calculateAge();
    const lifeExpectancy = 79;
    if (lifeExpectancy >= age) {
      return `You have ${lifeExpectancy - age} years left on Earth`;
    } else {
      return `You have lived past ${age - lifeExpectancy} years on Earth`;
    }
  }
  getStatusOnMercury() {
    const age = Math.ceil((this.calculateAge() * 365) / 88);
    const lifeExpectancy = Math.ceil((79 * 365) / 88);
    if (lifeExpectancy >= age) {
      return `You have ${lifeExpectancy - age} years left on Mercury`;
    } else {
      return `You have lived past ${age - lifeExpectancy} years on Mercury`;
    }
  }
  getStatusOnVenus() {
    const age = Math.ceil((this.calculateAge() * 365) / 225);
    const lifeExpectancy = Math.ceil((79 * 365) / 225);
    if (lifeExpectancy >= age) {
      return `You have ${lifeExpectancy - age} years left on Venus`;
    } else {
      return `You have lived past ${age - lifeExpectancy} years on Venus`;
    }
  }
  getStatusOnMars() {
    const age = Math.ceil((this.calculateAge() * 365) / 687);
    const lifeExpectancy = Math.ceil((79 * 365) / 687);
    if (lifeExpectancy >= age) {
      return `You have ${lifeExpectancy - age} years left on Mars`;
    } else {
      return `You have lived past ${age - lifeExpectancy} years on Mars`;
    }
  }
  getStatusOnJupiter() {
    const age = Math.ceil(this.calculateAge() / 12);
    const lifeExpectancy = Math.ceil(79 / 12);
    if (lifeExpectancy >= age) {
      return `You have ${lifeExpectancy - age} years left on Jupiter`;
    } else {
      return `You have lived past ${age - lifeExpectancy} years on Jupiter`;
    }
  }
}
