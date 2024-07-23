# Foodstuffs

Minecraft Foodstuffs:

    ```json
    {

        "id": 1144,
        "name": "suspicious_stew",
        "stackSize": 1,
        "displayName": "Suspicious Stew",
        "foodPoints": 6.0,
        "saturation": 7.2000003,
        "effectiveQuality": 13.200001,
        "saturationRatio": 1.2
    }
    ```

## Usage

### (GET) **`/api/food`**

Returns an array of all food objects.

    ```json
    [
        {
            "id": 815,
            "name": "bread",
            "displayName": "Bread",
            ...
        },
        ...
    ]
    ```

### (GET) **`/api/food/search?q=<query>`**

Returns an array of food objects whose fields satisfy the query `/search?q=<query>`

_(query may either be of type 'string' or 'number')_

    `/api/food/search?q=raw`

    ```json
    [
        {
            "id": 841,
            "name": "porkchop",
            "displayName": "Raw Porkchop",
            ...
        },
        {
            "id": 895,
            "name": "cod",
            "displayName": "Raw Cod",
            ...
        },
        ...
    ]
    ```

### (GET) **`/api/food/:foodId`**

Returns a single food item whose `foodId` exists

_(`:foodId` may only be of type 'number')_

    `/api/food/1173`

    ```json
    {
        "id": 1173,
        "name": "honey_bottle",
        "displayName": "Honey Bottle",
        ...
    }
    ```
