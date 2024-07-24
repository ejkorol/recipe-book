# Entities

Minecraft Entities:

```json
{
    "id": 117,
    "internalId": 117,
    "name": "fishing_bobber",
    "displayName": "Fishing Bobber",
    "width": 0.25,
    "height": 0.25,
    "type": "projectile",
    "category": "Projectiles"
}
```

## Usage

### (GET) **`/api/entity`**

Returns an array of all entity objects.

```json
[
    {
        "id": 81,
        "internalId": 81,
        "name": "skeleton",
        "displayName": "Skeleton",
        "width": 0.6,
        "height": 1.99,
        "type": "hostile",
        "category": "Hostile mobs"
    },
    {
        "id": 82,
        "internalId": 82,
        "name": "skeleton_horse",
        "displayName": "Skeleton Horse",
        "width": 1.3964844,
        "height": 1.6,
        "type": "animal",
        "category": "Hostile mobs"
    },
    ...
]
```

### (GET) **`/api/entity/search?q=<query>`**

Returns an array of entity objects whose fields satisfy the query `/search?q=<query>`

_(query may either be of type 'string' or 'number')_

`/api/entity/search?q=player`

```json
[
    {
        "id": 116,
        "internalId": 116,
        "name": "player",
        "displayName": "Player",
        "width": 0.6,
        "height": 1.8,
        "type": "player",
        "category": "UNKNOWN"
    },
    ...
]
```

### (GET) **`/api/entity/:entityId`**

Returns a single entity item whose `entityId` exists

_(`:entityId` may only be of type 'number')_

`/api/entity/8`

```json
{
    "id": 8,
    "internalId": 8,
    "name": "boat",
    "displayName": "Boat",
    "width": 1.375,
    "height": 0.5625,
    "type": "other",
    "category": "Vehicles"
}
```
