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

    expect(ageMercury.calculateAgeMercury()).toBeCloseTo(306.9, 0);
  });
  test("should correctly give the person age on Mercury", () => {
    let ageMercury  = new PersonAge("2000-1-1");

    expect(ageMercury.calculateAgeMercury()).toBeCloseTo(82.9, 0);
  });
  test("should correctly give the person age on Venus", () => {
    let ageVenus = new PersonAge("1945-07-30");

    expect(ageVenus.calculateAgeVenus()).toBeCloseTo(120.0, 0);
  });
  test("should correctly give the person age on Venus", () => {
    let ageVenus  = new PersonAge("2000-1-1");

    expect(ageVenus.calculateAgeVenus()).toBeCloseTo(32.4, 0);
  });
  test("should correctly give the person age on Mars", () => {
    let ageMars = new PersonAge("1945-07-30");

    expect(ageMars.calculateAgeMars()).toBeCloseTo(39.3, 0);
  });
  test("should correctly give the person age on Mars", () => {
    let ageMars  = new PersonAge("2000-1-1");

    expect(ageMars.calculateAgeMars()).toBeCloseTo(10.6, 0);
  });
  test("should correctly give the person age on Jupiter", () => {
    let ageJupiter = new PersonAge("1945-07-30");

    expect(ageJupiter.calculateAgeJupiter()).toBeCloseTo(6.2, 0);
  });
  test("should correctly give the person age on Jupiter", () => {
    let ageJupiter  = new PersonAge("2000-1-1");

    expect(ageJupiter.calculateAgeJupiter()).toBeCloseTo(1.6, 0);
  });
  test("should correctly give the person age left to live on Mercury", () => {
    let leftAgeMercury  = new PersonAge("2000-1-1");

    expect(leftAgeMercury.leftAgeOnMercury()).toBeCloseTo(244.7, 0);
  });
  test("should correctly give the person age left to live on Venus", () => {
    let leftAgeVenus  = new PersonAge("2000-1-1");

    expect(leftAgeVenus.leftAgeOnVenus()).toBeCloseTo(95.7, 0);
  });
  test("should correctly give the person age left to live on Mars", () => {
    let leftAgeMars  = new PersonAge("2000-1-1");

    expect(leftAgeMars.leftAgeOnMars()).toBeCloseTo(31.3, 0);
  });
  test("should correctly give the person age left to live on Jupiter", () => {
    let leftAgeJupiter  = new PersonAge("2000-1-1");

    expect(leftAgeJupiter.leftAgeOnJupiter()).toBeCloseTo(4.9, 0);
  });
});