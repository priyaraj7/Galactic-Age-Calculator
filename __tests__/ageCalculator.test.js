import { PersonAge } from "../src/age";

describe("Current PersonAge", () => {
  test("should correctly give the person age on Earth", () => {
    let age = new PersonAge("2000-1-1");
    expect(age.calculateAgeOnEarth()).toEqual(`Your age on Earth is 20 years`);
  });
  test("should correctly give the person age on Mercury", () => {
    let age = new PersonAge("2000-1-1");
    expect(age.calculateAgeOnMercury()).toEqual(
      `Your age on Mercury is 83 years`
    );
  });
  test("should correctly give the person age on Venus", () => {
    let age = new PersonAge("2000-1-1");
    expect(age.calculateAgeOnVenus()).toEqual(`Your age on Venus is 33 years`);
  });
  test("should correctly give the person age on Mars", () => {
    let age = new PersonAge("2000-1-1");
    expect(age.calculateAgeOnMars()).toEqual(`Your age on Mars is 11 years`);
  });
  test("should correctly give the person age on Jupiter", () => {
    let age = new PersonAge("2000-1-1");
    expect(age.calculateAgeOnJupiter()).toEqual(
      `Your age on Jupiter is 2 years`
    );
  });
});
describe("Current status of PersonAge", () => {
  test("should correctly give the current status of person age on Earth", () => {
    let age = new PersonAge("2000-1-1");
    expect(age.getStatusOnEarth()).toEqual(`You have 59 years left on Earth`);
    let oldAge = new PersonAge("1920-1-1");
    expect(oldAge.getStatusOnEarth()).toEqual(
      `You have lived past 21 years on Earth`
    );
  });
  test("should correctly give the current status of person age on Mercury", () => {
    let age = new PersonAge("2000-1-1");
    expect(age.getStatusOnMercury()).toEqual(
      `You have 245 years left on Mercury`
    );
    let oldAge = new PersonAge("1920-1-1");
    expect(oldAge.getStatusOnMercury()).toEqual(
      `You have lived past 87 years on Mercury`
    );
  });
  test("should correctly give the current status of person age on Venus", () => {
    let age = new PersonAge("2000-1-1");
    expect(age.getStatusOnVenus()).toEqual(`You have 96 years left on Venus`);
    let oldAge = new PersonAge("1920-1-1");
    expect(oldAge.getStatusOnVenus()).toEqual(
      `You have lived past 34 years on Venus`
    );
  });
  test("should correctly give the current status of person age on Mars", () => {
    let age = new PersonAge("2000-1-1");
    expect(age.getStatusOnMars()).toEqual(`You have 31 years left on Mars`);
    let oldAge = new PersonAge("1920-1-1");
    expect(oldAge.getStatusOnMars()).toEqual(
      `You have lived past 12 years on Mars`
    );
  });
  test("should correctly give the current status of person age on Jupiter", () => {
    let age = new PersonAge("2000-1-1");
    expect(age.getStatusOnJupiter()).toEqual(
      `You have 5 years left on Jupiter`
    );
    let oldAge = new PersonAge("1920-1-1");
    expect(oldAge.getStatusOnJupiter()).toEqual(
      `You have lived past 2 years on Jupiter`
    );
  });
});
