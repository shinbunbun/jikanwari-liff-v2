import getProfile from "./get-profile";

test("Get User Profile", () => {
  expect(getProfile("")).toBe(true);
})
