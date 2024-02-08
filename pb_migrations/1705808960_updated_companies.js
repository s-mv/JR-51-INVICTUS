/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xnbyyt991bap3c7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gigrkxeu",
    "name": "inflow",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "dkjxq8okg1hgwrq",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qo0alghx",
    "name": "outflow",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "dkjxq8okg1hgwrq",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xnbyyt991bap3c7")

  // remove
  collection.schema.removeField("gigrkxeu")

  // remove
  collection.schema.removeField("qo0alghx")

  return dao.saveCollection(collection)
})
