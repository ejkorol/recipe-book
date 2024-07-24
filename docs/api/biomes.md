# Biomes

Minecraft Biomes:

```json
{
    "id": 0,
    "name": "the_void",
    "category": "none",
    "temperature": 0.5,
    "precipitation": "none",
    "dimension": "overworld",
    "displayName": "The Void",
    "color": 0,
    "rainfall": 0.5
}
```

## Usage

### (GET) **`/api/biome`**

Returns an array of all biome objects.

```json
[
    {
        "id": 0,
        "name": "the_void",
        "category": "none",
        "temperature": 0.5,
        "precipitation": "none",
        "dimension": "overworld",
        "displayName": "The Void",
        "color": 0,
        "rainfall": 0.5
    },
    {
        "id": 1,
        "name": "plains",
        "category": "plains",
        "temperature": 0.8,
        "precipitation": "rain",
        "dimension": "overworld",
        "displayName": "Plains",
        "color": 9286496,
        "rainfall": 0.4
    },
    ...
]
```

### (GET) **`/api/biome/search?q=<query>`**

Returns an array of biome objects whose fields satisfy the query `/search?q=<query>`

_(query may either be of type 'string' or 'number')_

`/api/biome/search?q=void`

```json
[
    {
        "id": 0,
        "name": "the_void",
        "category": "none",
        "temperature": 0.5,
        "precipitation": "none",
        "dimension": "overworld",
        "displayName": "The Void",
        "color": 0,
        "rainfall": 0.5
    },
]
```

### (GET) **`/api/biome/:biomeId`**

Returns a single biome item whose `biomeId` exists

_(`:biomeId` may only be of type 'number')_

`/api/biome/0`

```json
{
    "id": 0,
    "name": "the_void",
    "category": "none",
    "temperature": 0.5,
    "precipitation": "none",
    "dimension": "overworld",
    "displayName": "The Void",
    "color": 0,
    "rainfall": 0.5
}
```
