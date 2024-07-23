# Recipes

Minecraft Recipes:

    ```json
    {
        "id": 1234,
        "ingredients": null,
        "recipe": [
            [ 764, 1234, 764],
            [ 764, 440, 764 ],
            [764, 764, 764 ]
        ],
        "result": 2,
        "quantity": 2
    }
    ```

## Usage

> Recipes may either contain a 2-dimensional array of `recipe` or an array of `ingredients`, however cannot contain both at a given time.

        **recipe**

        ```json
        "recipe": [
            [ 764, 1234, 764],
            [ 764, 440, 764 ],
            [764, 764, 764 ]
        ],
        ```

        Contains the crafting recipe for the **`result`** where the integers are item ids.

        **ingredients**

        ```json
        "ingredients": [ 4, 767 ]
        ```

        Contain an agnostic crafting recipe for the **`result`** where the integers are item ids.

        Please see [items](../api/items.md) for `/api/item` usage.

### (GET) **`/api/recipe`**

Returns an array of all food objects.

    ```json
    [
        {
            "id": 1234,
            "ingredients": null,
            "recipe": [
                [ 764, 1234, 764],
                [ 764, 440, 764 ],
                [764, 764, 764 ]
            ],
            "result": 2,
            "quantity": 2
        },
        ...
    ]
    ```

### (GET) **`/api/recipe/:result`**

Returns an array of recipe objects whose result satisfy the `/:result` item id.

> One or many recipes may have the same `result`.

This endpoint return a _human_ expression of the recipe, where `ingredients` or `recipe` contains the `name` (not `displayName`) of an `item` from [**`/api/item`**](../api/items.md)

_(`/:result` may only be of type 'number')_

    `/api/recipe/2`

    ```json
    [
        {
            "id": 2,
            "name": "granite",
            "displayName": "Granite",
            "recipe": null,
            "ingredients": [ "diorite", "quartz" ],
            "stackSize": 64,
            "quantity": 1
        },
        ...
    ]
    ```
