"use strict";

module.exports = {
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    actions: {
      type: "object",
      properties: {
        affirmativeAction: {
          $ref: "#/properties/actions/properties/prevAction"
        },
        negativeAction: {
          $ref: "#/properties/actions/properties/prevAction"
        },
        prevAction: {
          type: "object",
          properties: {
            $id: "text_assets",
            oneOf: [
              {
                $ref: "#/properties/actions/properties/prevAction/properties/definitions/asset"
              },
              {
                $ref: "#/properties/actions/properties/prevAction/properties/definitions/asset"
              }
            ],
            definitions: {
              switchWrapper: {
                type: "object",
                $ref: "#/properties/actions/properties/prevAction/properties/definitions/switch"
              },
              asset: {
                type: "object",
                $id: "asset_action",
                properties: {
                  label: {
                    $ref: "#/properties/actions/properties/prevAction/properties"
                  }
                },
                $originalRef: [
                  "action.json"
                ]
              },
              switch: {
                type: "array",
                $ref: "#/properties/actions/properties/prevAction/properties/definitions/asset"
              }
            },
            $originalRef: [
              "text_assets.json"
            ],
          },
          $originalRef: [
            "#/definitions/actions"
          ],
        }
      }
    }
  },
  $originalRef: [
    "def.json#/definitions/container"
  ],
};
