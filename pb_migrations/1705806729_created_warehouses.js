/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fbvyui2ctxutvzm",
    "created": "2024-01-21 03:12:09.105Z",
    "updated": "2024-01-21 03:12:09.105Z",
    "name": "warehouses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nbmrlppd",
        "name": "size",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "accgqv20",
        "name": "capacity",
        "type": "number",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("fbvyui2ctxutvzm");

  return dao.deleteCollection(collection);
})
