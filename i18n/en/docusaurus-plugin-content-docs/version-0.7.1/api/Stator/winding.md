---
sidebar_position: 2
title: "winding"
---
# winding

The `winding` attribute of the [`Project.stator`](/docs/api/Stator) corresponds to the [Stator Winding CheckPoint](/docs/docs/Stator/Winding) in the GUI. It is an instance of the `StatorWindingData` class, which can be accessed through `eMotorSolution.CheckPoints.Stator.Winding`.

::::::tip[Parameters]
- **phase_number_expression**: `str | int` The mathematical expression string or integer representing the number of phases in the stator winding. Default is `3`.
- **layer_configuration_init**: `Literal["Single", "Distributed", "Concentrated"]` Specifies the layer configuration of the stator winding. Default is `Single`.
- **turns_per_coil_expression**: `str | int` The mathematical expression string or integer representing the number of turns per coil in the stator winding. Default is `9`.
- **parallel_paths_expression**: `str | int` The mathematical expression string or integer representing the number of parallel paths in the stator winding. Default is `1`.
- **coil_span_expression**: `str | int` The mathematical expression string or integer representing the coil span in the stator winding. Default is `6`.
:::note[Additional Considerations for `coil_span`]
The `coil_span` is influenced by the `layer_configuration`:
- For `Single` layer configuration, the `coil_span` should be equal to the pole pitch $\dfrac{\text{number of slots}}{\text{phase number}}$.
- For `Distributed` winding, $1 \leq \text{coil span} \leq \dfrac{\text{number of slots}}{\text{phase number}}$.
- For `Concentrated` winding, coil span should be equal to $1$.
:::
- **winding_material_init**: `str` The name of the winding material. It should be one of the non-magnet materials in the project's materials collection. Default is `Copper`.


::::::

## Methods
| Method | Description |
|--------|-------------|
| set_phase_number(expression) | Sets the `expression: str \| int` for `phase_number`. |
| set_layer_configuration(name) | Sets the `name: Literal["Single", "Distributed", "Concentrated"]` for `layer_configuration`. The `coil_span` will be adjusted accordingly. |
| set_turns_per_coil(expression) | Sets the `expression: str \| int` for `turns_per_coil`. |
| set_parallel_paths(expression) | Sets the `expression: str \| int` for `parallel_paths`. |
| set_coil_span(expression) | Sets the `expression: str \| int` for `coil_span`. Effective only for `Distributed` winding. |
| set_winding_material(material_name) | Sets the `material_name: str` for `winding_material`. It should be one of the non-magnet materials in the project's materials collection. |
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|-----------|-------------|
| phase_number | `int` Returns the evaluated number of phases in the stator winding. :warning: *read-only* |
| layer_configuration | `Literal["Single", "Distributed", "Concentrated"]` Returns the layer configuration of the stator winding. :warning: *read-only* |
| layer_number | `int` Returns the number of layers in the stator winding (1 for `Single`, 2 for `Distributed` and `Concentrated`). :warning: *read-only* |
| turns_per_coil | `int` Returns the evaluated number of turns per coil in the stator winding. :warning: *read-only* |
| parallel_paths | `int` Returns the evaluated number of parallel paths in the stator winding. :warning: *read-only* |
| coil_span | `int` Returns the evaluated coil span in the stator winding. :warning: *read-only* |
| winding_material | `str` Returns the name of the winding material. :warning: *read-only* |
