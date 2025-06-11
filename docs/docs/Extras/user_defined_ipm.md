---
sidebar_position: 3
title: User Defined IPM
---
# User Defined Interior Permanent Magnet (IPM) 
The interior permanent magnet machines may have multiple holes with multiple permanent magnets in each hole. Each permanent magnet can also have its own magnetization direction.

The user-defined Hole-Magnet, takes three parameters: `Points`, `Connections`, and `Magnetization`.

<p class="ems">![add](./img/user_def_ipm_properties.png)</p>

By default, a `Hole Type 52` is created when a user-defined IPM is selected. By clicking on the <span style={{ fontFamily: 'Segoe Fluent Icons', fontSize: '1.0em' }}>&#xE70F;</span> **Edit** button, a dialog will open where you can edit the `Points`, `Connections`, and `Magnetization` interactively.

<p class="ems">![add](./img/user_def_ipm_dialog.png)</p>

# Points
The `Points` dictionary contains the coordinates of the points that define the holes and magnets and the index of center-line points. The template for the `Points` dictionary is as follows:

```python
{
    "points": {
        "point0": [point0_x_coordinate, point0_y_coordinate],
        "point1": [point1_x_coordinate, point1_y_coordinate],
        ...
    },
    "pole_top_index": "point_x",
    "pole_bottom_index": "point_y",
}
```

:::warning
The following remarks should be strictly followed:
- The slot should be aligned with the x-axis.
- Point coordinates should be given in meters.
- The keys in the `points` dictionary should be unique strings that represent the point names. Other keys like integer or float values are not allowed.
:::

# Connections
The `Connections` dictionary defines how the points in the `Points` dictionary are connected to form the hole and magnet geometries. The template for the `Connections` dictionary is as follows:

```python
{
    "holes": [
        [    # First hole
            ["connection_type", "parameter1", "parameter2", ...],
            ["connection_type", "parameter1", "parameter2", ...], 
        ],
        [    # Second hole
            ["connection_type", "parameter1", "parameter2", ...],
            ["connection_type", "parameter1", "parameter2", ...], 
        ],
    ],
    "magnets": [
        [   # First magnet
            ["connection_type", "parameter1", "parameter2", ...],
            ["connection_type", "parameter1", "parameter2", ...], 
        ],
        [   # Second magnet
            ["connection_type", "parameter1", "parameter2", ...],
            ["connection_type", "parameter1", "parameter2", ...], 
        ],
    ],
}
```

The connections should close the geometry of the slot and windings. And the sequence of the connections should be in counter-clockwise direction.

:::info
Currently, the following connection types are supported:
- `line`: Connects two points with a straight line. **Syntax**: `("line", "point1", "point2")`
- `arc`: Connects two points with an arc. **Syntax**: `("arc", "start_point", "center_point", "end_point")`
- `arc3p`: Connects two points with an arc defined by three points. **Syntax**: `("arc3p", "start_point", "middle_point", "end_point")`
- `fillet`: Connects two lines with a fillet. **Syntax**: `("fillet", "point1", "intersection_point", "point2", radius)`
:::

# Magnetization
In contrast to `points` and `connections`, the `magnetization` is a list of dictionaries, where each dictionary defines the magnetization direction for the magnets defined in `connections`. Each magnet can have its own magnetization type, `cartesian` or `polar`. In case of `cartesian`, the magnetization is defined by a starting and ending point, while in case of `polar`, the magnetization is defined by the `polar_center_point`.

```python
[
    {
        "coordination": "cartesian",
        "starting_point": "point_x",
        "ending_point": "point_y",
    },
    {
        "coordination": "polar",
        "polar_center_point": [x_coordinate, y_coordinate],
    },
]
```
