"use strict";

module.exports =
{
  internal1: {
    test: {
      type: "string",
      "x-original-ref": ["definitions.yaml#/thing"],
    },
    "x-original-ref": ["#/internal2", "#/external1"],
  },
  internal2: {
    test: {
      type: "string",
      "x-original-ref": ["definitions.yaml#/thing"],
    },
    "x-original-ref": ["#/internal2", "#/external1"],
  },
  internal3: {
    test: {
      type: "string",
      "x-original-ref": ["definitions.yaml#/thing"],
    },
    "x-original-ref": ["#/internal4", "#/external2"],
  },
  internal4: {
    test: {
      type: "string",
      "x-original-ref": ["definitions.yaml#/thing"],
    },
    "x-original-ref": ["#/internal4", "#/external2"],
  },
  external1: {
    test: {
      type: "string",
      "x-original-ref": ["definitions.yaml#/thing"],
    },
    "x-original-ref": ["#/internal2", "#/external1"],
  },
  external2: {
    test: {
      type: "string",
      "x-original-ref": ["definitions.yaml#/thing"],
    },
    "x-original-ref": ["#/internal4", "#/external2"],
  }
};
