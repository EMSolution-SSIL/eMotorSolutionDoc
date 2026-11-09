---
sidebar_position: 4
title: "lamination"
---
# lamination

The `lamination` attribute of the [`Project.rotor`](/docs/api/Rotor) corresponds to the [Rotor Lamination CheckPoint](/docs/docs/Rotor/Lamination) in the GUI. It is an instance of the `RotorLaminationData` class, which can be accessed through `eMotorSolution.CheckPoints.Rotor.Lamination`.

:::tip[Parameters]
- **fill_factor_expression**: `str | float` The mathematical expression string or float representing the fill factor of the stator lamination. Default is `1.0`.
- **lamination_material_init**: `str` The name of the lamination material. It should be one of the non-magnet materials in the project's materials collection. Default is `50A350`.
:::

## Methods
| Method | Description |
|--------|-------------|
| set_lamination_material(material_name) | Sets the `material_name: str` for `lamination_material`. It should be one of the non-magnet materials in the project's materials collection. |
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|-----------|-------------|
| fill_factor | `float` Returns the evaluated fill factor of the rotor lamination. :warning: *read-only* |
| lamination_material | `str` Returns the name of the lamination material. :warning: *read-only* |