import { PersonAge } from "../src/age";

describe("PersonAge", () => {
  test("should correctly give the person age on Earth", () => {
    let age = new PersonAge("2000-1-1");

    expect(age.calculateAge()).toEqual(20);
  });
  test("should correctly give the person age on Earth", () => {
    let age = new PersonAge("2015-06-17");

    expect(age.calculateAge()).toEqual(4);
  });
  test("should correctly give the person age on Earth", () => {
    let age = new PersonAge("1945-07-30");

    expect(age.calculateAge()).toEqual(74);
  });
  test("should correctly give the person age on Mercury", () => {
    let ageMercury = new PersonAge("1945-07-30");

    expect(ageMercury.calculateAgeMercury()).toEqual(306);
  });
  test("should correctly give the person age on Mercury", () => {
    let ageMercury  = new PersonAge("2000-1-1");

    expect(ageMercury.calculateAgeMercury()).toEqual(82);
  });
  test("should correctly give the person age on Venus", () => {
    let ageVenus = new PersonAge("1945-07-30");

    expect(ageVenus.calculateAgeVenus()).toEqual(120);
  });
  test("should correctly give the person age on Venus", () => {
    let ageVenus  = new PersonAge("2000-1-1");

    expect(ageVenus.calculateAgeVenus()).toEqual(32);
  });
  test("should correctly give the person age on Mars", () => {
    let ageMars = new PersonAge("1945-07-30");

    expect(ageMars.calculateAgeMars()).toEqual(39);
  });
  test("should correctly give the person age on Mars", () => {
    let ageMars  = new PersonAge("2000-1-1");

    expect(ageMars.calculateAgeMars()).toEqual(10);
  });
  test("should correctly give the person age on Jupiter", () => {
    let ageJupiter = new PersonAge("1945-07-30");

    expect(ageJupiter.calculateAgeJupiter()).toEqual(6.2);
  });
  test("should correctly give the person age on Jupiter", () => {
    let ageJupiter  = new PersonAge("2000-1-1");

    expect(ageJupiter.calculateAgeJupiter()).toEqual(1.7);
  });
});