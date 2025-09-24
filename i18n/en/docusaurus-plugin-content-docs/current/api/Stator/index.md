---
sidebar_position: 6
title: "Stator"
---
# Stator

The `stator` attribute of the [`Project`](/docs/api/Project/) class corresponds to the [Stator Milestone](/docs/docs/Stator/) in the GUI. It specifies the stator slots geometry, winding configuration, and other relevant information.

It is an instance of the `StatorData` class, which can be accessed through `eMotorSolution.CheckPoints.Stator.Stator`. It contains three main attributes: `slot`, `winding`, and `lamination`.

:::tip[Parameters]
- **slot**: `SlotsData` - An instance of the `SlotsData` class, which contains the slot geometry and other relevant information.
- **winding**: `StatorWindingData` - An instance of the `StatorWindingData` class, which contains the winding configuration in the stator.
- **lamination**: `StatorLaminationsData` - An instance of the `StatorLaminationsData` class that specifies the lamination properties of the stator.
:::

## Methods
| Method | Description |
|--------|-------------|
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|---|---|
| [slot](/docs/api/Stator/slot) | `SlotsData` An instance of the `SlotsData` class, which contains the slot geometry and other relevant information. |
| [winding](/docs/api/Stator/winding) | `StatorWindingData` An instance of the `StatorWindingData` class, which contains the winding configuration in the stator. |
| [lamination](/docs/api/Stator/lamination) | `StatorLaminationsData` An instance of the `StatorLaminationsData` class that specifies the lamination properties of the stator. |
