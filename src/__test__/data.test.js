import { name, city, image } from "../data/data";

test("name, city, and image are all exported", () => {
  expect(name).toEqual("Liza");
  expect(city).toEqual("New York");
  expect(image).toEqual("https://i.imgur.com/mV8PQxj.gif");
});
