---
sidebar_position: 2
title: "Transient"
---
# PMSM_Transient Analysis
The `PMSM_Transient` class is a specialized analysis for Permanent Magnet Synchronous Machines (PMSM) that calculates the transient response of the machine based on the initial conditions and operating parameters.
It corresponds to the [Transient analysis](/docs/docs/Analysis_PMSM/Transient) checkpoint in the eMotorSolution GUI. 
The `PMSM_Transient` class inherits from the [`MS_InputControl`](/docs/api/Analyses/InputControl) base class, which provides common functionality for managing analysis input data. It is accessible through `eMotorSolution.CheckPoints.Analysis.PMSM.Transient.PMSM_Transient`.

:::tip[Parameters]
- **rotor_position_expression**: `str` A mathematical expression defining the initial rotor position.
- **rotor_position_unit**: `Literal["deg", "rad"]` The unit of the rotor position expression, either degrees ("deg") or radians ("rad").
- **rotor_speed_expression**: `str` A mathematical expression defining the rotor speed.
- **rotor_speed_unit**: `Literal["rpm", "rad/s", "deg/s"]` The unit of the rotor speed expression, which can be revolutions per minute ("rpm"), radians per second ("rad/s"), or degrees per second ("deg/s").
- **delta_time_expression**: `str` A mathematical expression defining the time step for the analysis.
- **delta_time_unit**: `Literal["min", "s", "ms", "us", "ns", "ps"]` The unit of the time step expression.
- **num_time_steps_expression**: `str` A mathematical expression defining the number of time steps for the analysis.
- **save_fields**: `bool` A flag indicating whether to save the field data during the analysis.
:::

## Methods
| Method | Description |
|--------|-------------|
| set_rotor_position(value, unit) | Sets the rotor position expression with `value: str \| float` and `unit: Literal["deg", "rad"]`. |
| set_rotor_speed(value, unit) | Sets the rotor speed expression with `value: str \| float` and `unit: Literal["rpm", "rad/s", "deg/s"]`. |
| set_delta_time(value, unit) | Sets the delta time expression with `value: str \| float` and `unit: Literal["min", "s", "ms", "us", "ns", "ps"]`. |
| set_num_time_steps(value) | Sets the number of time steps expression with `value: str \| int`. |
| update() | Updates the input control based on the project data (e.g., materials, stator winding, rotor speed, etc.). |
| init_network() | Initializes the network settings for the analysis. | It may vary based on the type of child class. |
| init_time_functions() | Initializes the time functions for the analysis. | It may vary based on the type of child class. |
| save_json() | Saves the analysis data to a JSON file. |
| purge_all() | Purges all the data in the analysis, resetting it to its default state. |
| purge_solution() | Purges only the solution data in the analysis, keeping the input settings intact. |
| run() | Executes the Back EMF analysis using the current input settings. |
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|---|---|
| `rotor_position` | `float` The initial rotor position in `deg`. :warning: *read-only* |
| `rotor_speed` | `float` The rotor speed in `deg/s`. :warning: *read-only* |
| `delta_time` | `float` The time step in `s`. :warning: *read-only* |
| `num_time_steps` | `int` The number of time steps. :warning: *read-only* |
| `save_fields` | `bool` A flag indicating whether to save the field data during the analysis. |
| `sliding_mesh_properties` | `dict` A dictionary containing the sliding mesh properties for the analysis. :warning: *read-only* |