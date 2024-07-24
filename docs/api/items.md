# Items

Minecraft Items:

```json
{
    "id": 0,
    "name": "air",
    "displayName": "Air",
    "image": "/images/1.19/air.png",
    "stackSize": 64,
    "enchantCategories": null,
    "repairWith": null,
    "maxDurability": null
},
```

## Usage

### (GET) **`/api/item`**

Returns an array of all item objects.

```json
[
    {
        "id": 4,
        "name": "diorite",
        "displayName": "Diorite",
        "image": "/images/1.19/diorite.png",
        "stackSize": 64,
        "enchantCategories": null,
        "repairWith": null,
        "maxDurability": null
    },
    {
        "id": 5,
        "name": "polished_diorite",
        "displayName": "Polished Diorite",
        "image": "/images/1.19/polished_diorite.png",
        "stackSize": 64,
        "enchantCategories": null,
        "repairWith": null,
        "maxDurability": null
    },
    ...
]
```

### (GET) **`/api/item/search?q=<query>`**

Returns an array of item objects whose fields satisfy the query `/search?q=<query>`

_(query may either be of type 'string' or 'number')_

`/api/item/search?q=dirt`

```json
[
    {
        "id": 15,
        "name": "dirt",
        "displayName": "Dirt",
        "image": "/images/1.19/dirt.png",
        "stackSize": 64,
        "enchantCategories": null,
        "repairWith": null,
        "maxDurability": null
    },
    {
        "id": 16,
        "name": "coarse_dirt",
        "displayName": "Coarse Dirt",
        "image": "/images/1.19/coarse_dirt.png",
        "stackSize": 64,
        "enchantCategories": null,
        "repairWith": null,
        "maxDurability": null
    },
    ...
]
```

### (GET) **`/api/item/:itemId`**

Returns a single item whose `itemId` exists

_(`:itemId` may only be of type 'number')_

`/api/item/438`

```json
{
    "id": 438,
    "name": "black_stained_glass",
    "displayName": "Black Stained Glass",
    "image": "/images/1.19/black_stained_glass.png",
    "stackSize": 64,
    "enchantCategories": null,
    "repairWith": null,
    "maxDurability": null
}
```
