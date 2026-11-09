---
sidebar_position: 3
title: "lamination"
---
# lamination

The `lamination` attribute of the [`Project.stator`](/docs/api/Stator) corresponds to the [Stator Lamination CheckPoint](/docs/docs/Stator/Lamination) in the GUI. It is an instance of the `StatorLaminationData` class, which can be accessed through `eMotorSolution.CheckPoints.Stator.Lamination`.

:::tip[Parameters]
- **stack_length_expression**: `str | int` The mathematical expression string or integer representing the stack length of the stator lamination. Default is `83.82`.
- **stack_length_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of measurement for the stack length. Default is `mm`.
- **fill_factor_expression**: `str | float` The mathematical expression string or float representing the fill factor of the stator lamination. Default is `1.0`.
- **lamination_material_init**: `str` The name of the lamination material. It should be one of the non-magnet materials in the project's materials collection. Default is `50A350`.
:::

## Methods
| Method | Description |
|--------|-------------|
| set_stack_length(expression, unit) | Sets the `expression: str \| int` for `stack_length` and the `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]` for the stack length unit. |
| set_fill_factor(expression) | Sets the `expression: str \| float` for `fill_factor`. |
| set_lamination_material(material_name) | Sets the `material_name: str` for `lamination_material`. It should be one of the non-magnet materials in the project's materials collection. |
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|-----------|-------------|
| stack_length | `float` Returns the evaluated stack length of the stator lamination in the specified unit. :warning: *read-only* |
| stack_length_unit | `Literal["m", "dm", "cm", "mm", "in", "ft"]` Returns the unit of measurement for the stack length. :warning: *read-only* |
| fill_factor | `float` Returns the evaluated fill factor of the stator lamination. :warning: *read-only* |
| lamination_material | `str` Returns the name of the lamination material. :warning: *read-only* |