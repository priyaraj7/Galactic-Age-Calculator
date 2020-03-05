import { PersonAge } from "../src/age";

describe("PersonAge", () => {
  test("should correctly give the person age on earth", () => {
    let age = new PersonAge("2000-1-1");

    expect(age.calculateAge()).toEqual(20);
  });
  test("should correctly give the person age on earth", () => {
    let age = new PersonAge("2015-06-17");

    expect(age.calculateAge()).toEqual(4);
  });
  test("should correctly give the person age on earth", () => {
    let age = new PersonAge("1945-07-30");

    expect(age.calculateAge()).toEqual(74);
  });
  test("should correctly give the person age on mercury", () => {
    let ageMercury = new PersonAge("1945-07-30");

    expect(ageMercury.calculateAgeMercury()).toEqual(306);
  });
  test("should correctly give the person age mercury", () => {
    let ageMercury  = new PersonAge("2000-1-1");

    expect(ageMercury.calculateAgeMercury()).toEqual(82);
  });
});
