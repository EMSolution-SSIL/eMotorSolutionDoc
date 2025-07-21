---
sidebar_position: 4
title: "Machine"
---
# Machine

The `machine` attribute of the [`Project`](/docs/api/Project/) class corresponds to the [Machine Milestone](/docs/docs/Machine/) in the GUI. It characterizes the machine such as the type, number of poles, main dimensions, and other properties.

It is an instance of the `MachineData` class, which contains two main attributes: `type` and `dimension`. The `MachineData` class can be imported from the `eMotorSolution.CheckPoints.Machine.Machine` module.

:::tip[Parameters]
- **type**: [`MachineTypeData`](/docs/api/Machine/type/), The type data of the machine.
- **dimension**: `MachineDimensionData`, The dimension data of the machine.
:::

## Methods
| Method | Description |
|--------|-------------|
| validate() | Returns the validation status in dictionary format. |


## Attributes
| Attribute | Description |
|---|---|
| [type](/docs/api/Machine/type/) | The `MachineTypeData` instance that contains the machine type data. |
| [dimension](/docs/api/Machine/dimension/) | The `MachineDimensionData` instance that contains the machine dimension data. |
| [air_gap_length](/docs/api/Machine/air_gap_length.md) | `float` Returns the air gap length of the machine in meters. :warning: *read-only* |
| [air_gap_radius](/docs/api/Machine/air_gap_radius.md) | `float` Returns the air gap radius of the machine in meters. :warning: *read-only* |
