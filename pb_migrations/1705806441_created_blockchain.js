/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2q0fifvfad1wi00",
    "created": "2024-01-21 03:07:21.781Z",
    "updated": "2024-01-21 03:07:21.781Z",
    "name": "blockchain",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1u6u9qbu",
        "name": "hash",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": true
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2q0fifvfad1wi00");

  return dao.deleteCollection(collection);
})
