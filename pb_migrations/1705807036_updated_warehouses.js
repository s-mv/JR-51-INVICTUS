/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fbvyui2ctxutvzm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q7mykavq",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fbvyui2ctxutvzm")

  // remove
  collection.schema.removeField("q7mykavq")

  return dao.saveCollection(collection)
})
