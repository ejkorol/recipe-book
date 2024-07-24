# Blocks

Minecraft Blocks:

```json
{
    "id": 32,
    "name": "gravel",
    "displayName": "Gravel",
    "hardness": 0.6,
    "resistance": 0.6,
    "stackSize": 64,
    "diggable": true,
    "material": "mineable/shovel",
    "transparent": false,
    "emitLight": 0,
    "filterLight": 15,
    "defaultState": 109,
    "minStateId": 109,
    "maxStateId": 109,
    "boundingBox": "block",
    "image": "/images/1.19/gravel.png",
    "states": [],
    "drops": [
      42
    ],
    "harvestTools": null
}
```

## Usage

### (GET) **`/api/block`**

Returns an array of all blocks.

```json
[
    {
        "id": 32,
        "name": "gravel",
        "displayName": "Gravel",
        "hardness": 0.6,
        "resistance": 0.6,
        "stackSize": 64,
        ...
    },
    {
        "id": 2,
        "name": "granite",
        "displayName": "Granite",
        "hardness": 1.5,
        "resistance": 6,
        "stackSize": 64,
        ...
    },
    ...
]
```

### (GET) **`/api/block/search?q=<query>`**

Returns an array of block objects whose fields satisfy the query `/search?q=<query>`

_(query may either be of type 'string' or 'number')_

`/api/block/search?q=block`

```json
[
    {
        "id": 1,
        "name": "stone",
        "displayName": "Stone",
        "hardness": 1.5,
        "resistance": 6,
        "stackSize": 64,
        "boundingBox": "block",
        ...
    },
    {
        "id": 2,
        "name": "granite",
        "displayName": "Granite",
        "hardness": 1.5,
        "resistance": 6,
        "stackSize": 64,
        "boundingBox": "block",
        ...
    },
    ...
]
```

### (GET) **`/api/block/:blockId`**

Returns a single block whose `blockId` exists

_(`:blockId` may only be of type 'number')_

`/api/block/200`

```json
{
    "id": 200,
    "name": "deepslate_redstone_ore",
    "displayName": "Deepslate Redstone Ore",
    "hardness": 4.5,
    "resistance": 3,
    "stackSize": 64,
    ...
}
```
