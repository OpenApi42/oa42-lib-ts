import assert from "assert";
import test from "test";
import { getParameterValue, parseParameters } from "./parameters.js";

test("read-parameter", async (t) => {
  const parameters = {
    string: ["hi"],
    number: ["10.5"],
    integer: ["10"],
  };

  {
    const actual = getParameterValue(parameters, "string");
    const expected = "hi";
    assert.equal(actual, expected);
  }
  {
    const actual = getParameterValue(parameters, "no");
    const expected = undefined;
    assert.equal(actual, expected);
  }
});

test("parse-parameters", async (t) => {
  assert.deepEqual(parseParameters("a:1,b:2", "", ",", ":"), {
    a: "1",
    b: "2",
  });

  assert.deepEqual(parseParameters("a,1,b,2", "", ",", ","), {
    a: "1",
    b: "2",
  });
});
