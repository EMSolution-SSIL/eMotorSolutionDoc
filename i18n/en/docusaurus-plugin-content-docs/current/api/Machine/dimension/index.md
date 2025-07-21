---
sidebar_position: 2
title: "dimension"
---
# dimension
The `dimension` attribute of the [`MachineData`](/docs/api/Machine/) class represents the  main dimensions of the machine. In the GUI, this is displayed as a [checkpoint](/docs/docs/Machine/Dimension).

It is an instance of the `MachineDimensionData` class accessible through the `eMotorSolution.CheckPoints.Machine.Dimension` module.

:::tip[Parameters]
- **stator_outer_radius_expression**: `str` | `float`, The outer radius of the stator. defaults to `"134.62"`.
- **stator_outer_radius_unit**: `str`, The unit for the outer radius of the stator. defaults to `"mm"`.
- **stator_inner_radius_expression**: `str` | `float`, The inner radius of the stator. defaults to `"80.95"`.
- **stator_inner_radius_unit**: `str`, The unit for the inner radius of the stator. defaults to `"mm"`.
- **rotor_outer_radius_expression**: `str` | `float`, The outer radius of the rotor. defaults to `"80.2"`.
- **rotor_outer_radius_unit**: `str`, The unit for the outer radius of the rotor. defaults to `"mm"`.
- **rotor_inner_radius_expression**: `str` | `float`, The inner radius of the rotor. defaults to `"55.32"`.
- **rotor_inner_radius_unit**: `str`, The unit for the inner radius of the rotor. defaults to `"mm"`.
- **shaft_material_init**: `str`, The material of the shaft. defaults to `"Air"`.
:::


## Methods
| Method | Description |
|--------|-------------|
| [set_stator_outer_radius](/docs/api/Machine/dimension/set_stator_outer_radius)(expression, unit) | Sets the outer radius of the stator. |
| [set_stator_inner_radius](/docs/api/Machine/dimension/set_stator_inner_radius)(expression, unit) | Sets the inner radius of the stator. |
| [set_rotor_outer_radius](/docs/api/Machine/dimension/set_rotor_outer_radius)(expression, unit) | Sets the outer radius of the rotor. |
| [set_rotor_inner_radius](/docs/api/Machine/dimension/set_rotor_inner_radius)(expression, unit) | Sets the inner radius of the rotor. |
| [set_shaft_material](/docs/api/Machine/dimension/set_shaft_material)(material) | Sets the material of the shaft. |
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|-----------|-------------|
| stator_outer_radius | `float` The outer radius of the stator in meters. :warning: *read-only*|
| stator_inner_radius | `float` The inner radius of the stator in meters. :warning: *read-only*|
| rotor_outer_radius | `float` The outer radius of the rotor in meters. :warning: *read-only*|
| rotor_inner_radius | `float` The inner radius of the rotor in meters. :warning: *read-only*|
| shaft_material | `str` The material name of the shaft. :warning: *read-only*|
| stator_core_yoke | `float` The yoke of the stator in meters. :warning: *read-only*|
| rotor_core_yoke | `float` The yoke of the rotor in meters. :warning: *read-only*|

