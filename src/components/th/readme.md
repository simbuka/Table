# `smb-th`

<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute    | Description                                                        | Type                              | Default     |
| ------------------------- | ------------ | ------------------------------------------------------------------ | --------------------------------- | ----------- |
| `identifier` _(required)_ | `identifier` | Cell unique identifier. Required if `sort` is used                 | `number`                          | `undefined` |
| `noSpacing`               | `no-spacing` | Tells if to add default spacing of cell                            | `boolean`                         | `false`     |
| `shrink`                  | `shrink`     | Tells if to shrink to child's width                                | `boolean`                         | `false`     |
| `sort`                    | `sort`       | Sort type. Leave empty to disable sort                             | `"" \| "asc" \| "desc" \| "none"` | `''`        |
| `truncate`                | `truncate`   | Tells if to add ellipsis if the content does not fit the container | `boolean`                         | `false`     |


## Events

| Event          | Description                  | Type                         |
| -------------- | ---------------------------- | ---------------------------- |
| `onSortChange` | Emitted when sorting changes | `CustomEvent<IOnSortChange>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
