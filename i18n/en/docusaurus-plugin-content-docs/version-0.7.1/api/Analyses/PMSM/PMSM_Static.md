---
sidebar_position: 3
title: "Static"
---
# PMSM_Static Analysis
The `PMSM_Static` class is a specialized analysis for Permanent Magnet Synchronous Machines (PMSM) that calculates the Static response of the machine based on the initial conditions and operating parameters.

The `PMSM_Static` class inherits from the [`MS_InputControl`](/docs/api/Analyses/InputControl) base class, which provides common functionality for managing analysis input data. It is accessible through `eMotorSolution.CheckPoints.Analysis.PMSM.Static.PMSM_Static`.

:::tip[Parameters]
- **rotor_position_expression**: `str` A mathematical expression defining the initial rotor position.
- **rotor_position_unit**: `Literal["deg", "rad"]` The unit of the rotor position expression, either degrees ("deg") or radians ("rad").
:::

## Methods
| Method | Description |
|--------|-------------|
| set_rotor_position(value, unit) | Sets the rotor position expression with `value: str \| float` and `unit: Literal["deg", "rad"]`. |
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
