import ErrorRepository from "../app";

let errorRep = new ErrorRepository();

test("testing translate code", () => {
  errorRep.members.set(1, "Неверный логин");

  let resultOfTranslate = errorRep.translate(1);

  expect(resultOfTranslate).toBe("Неверный логин");
});

test("testing translate wrong code", () => {
  errorRep.members.set(1, "Неверный логин");

  let resultOfTranslate = errorRep.translate(3);

  expect(resultOfTranslate).toBe("Unknown error");
});
