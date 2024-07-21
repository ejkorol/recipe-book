# Requests

## Post

**post to: `/api/items`**

Sample body:

```
{
    "name": "Diamond Sword",
    "description": "A powerful sword made from diamonds.",
    "image": "https://example.com/images/diamond-sword.png",
    "itemTypeId": "9f8e54d8-cb36-4b67-a8e7-9f88c03a66ef",
    "stackSize": 1,
    "durability": 1561,
    "isMineable": false,
    "requiredToolId": null,
    "attributes": [
        {
            "attributeId": "9f8e54d8-cb36-4b67-a8e7-9f88c03a66ef",
            "value": 10
        }
    ],
    "recipes": [
        {
            "recipeId": "9f8e54d8-cb36-4b67-a8e7-9f88c03a66ef",
            "quantity": 1
        }
    ]
}
```
