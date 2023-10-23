/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vbo57c5i5jd327a",
    "created": "2023-10-20 03:11:15.614Z",
    "updated": "2023-10-20 03:11:15.614Z",
    "name": "porrona",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mkbcwnci",
        "name": "field",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("vbo57c5i5jd327a");

  return dao.deleteCollection(collection);
})
