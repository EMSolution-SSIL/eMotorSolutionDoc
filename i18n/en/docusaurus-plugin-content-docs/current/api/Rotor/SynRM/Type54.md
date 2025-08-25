---
sidebar_position: 1
title: "Type 54"
---
# Type 54

<p class="ems">![main window](../img/SynRM_HoleM54.png)</p>

The `IPM_HoleMagnet54Data` is accessed through the `eMotorSolution.CheckPoints.Rotor.SynRM.SYN_HoleM54` module.

:::tip[Parameters]
- **W1_expression**: `str | float` The string mathematical expression or a float value for `W1`.
- **W1_unit**: `Literal["deg", "rad"]` The unit of the `W1`. Default is `"deg"`.
- **R1_expression**: `str | float` The string mathematical expression or a float value for `R1`.
- **R1_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the `R1`. Default is `"m"`.
- **H0_expression**: `str | float` The string mathematical expression or a float value for `H0`.
- **H0_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the `H0`. Default is `"m"`.
- **H1_expression**: `str | float` The string mathematical expression or a float value for `H1`.
- **H1_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the `H1`. Default is `"m"`.
- **hole_material_init**: `str` The name of the hole material. It should be one of the non-magnet materials in the project's materials collection. Default is `Air`.
:::

## Methods
| Method | Description |
|--------|-------------|
| set_W1(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["deg", "rad"]` for `W1`. |
| set_R1(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]` for `R1`. |
| set_H0(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]` for `H0`. |
| set_H1(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]` for `H1`. |
| set_hole_material(material_name) | Sets the `material_name: str` for `hole_material`. It should be one of the non-magnet materials in the project's materials collection. |
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|---|---|
| W1 | `float` Returns the evaluated value of `W1` in `deg`. :warning: *read-only* |
| R1 | `float` Returns the evaluated value of `R1` in `m`. :warning: *read-only* |
| H0 | `float` Returns the evaluated value of `H0` in `m`. :warning: *read-only* |
| H1 | `float` Returns the evaluated value of `H1` in `m`. :warning: *read-only* |
| hole_material | `str` Returns the name of the hole material. :warning: *read-only* |
| hints | `dict[str, float]` Returns the hints for the slot in `m`. :warning: *read-only* |
