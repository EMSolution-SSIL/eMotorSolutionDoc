---
sidebar_position: 2
title: "NonlinearPermeability"
---

# NonlinearPermeability
The `NonlinearPermeability` class represents the nonlinear permeability of a [non-magnet materials](/docs/api/Materials/Non_Magnet_Material). This class is accessed through the `eMotorSolution.CheckPoints.Materials` module.

:::tip[Parameters]
- **data_init**: `List[List[float]]` - A 2D list of floats `[[0, 0], [h1, b1], [h2, b2], ...]` where each sublist contains the magnetic field strength `h` and the corresponding magnetic flux density `b`. The first sublist should be `[0, 0]`, and the last sublist should contain the maximum values of `h` and `b`.
- **b_unit**: `Literal["T", "mT", "uT", "nT", "pT", "G", "mG", "uG", "nG"]` - The unit of magnetic flux density `b`. Default is `"T"`.
- **h_unit**: `Literal["A/m", "kA/m", "MA/m", "GA/m", "TA/m"]` - The unit of magnetic field strength `h`. Default is `"A/m"`.
:::

## Methods
| Method | Description |
|--------|-------------|
| set_data(data_init, b_unit, h_unit) | Sets the `data_init: List[List[float]]`, `b_unit: Literal["T", "mT", "uT", "nT", "pT", "G", "mG", "uG", "nG"]`, and `h_unit: Literal["A/m", "kA/m", "MA/m", "GA/m", "TA/m"]` for the nonlinear permeability of the material. |

## Attributes
| Attribute | Description |
|---|---|
| data | `List[List[float]]` Returns the 2D list of floats representing the magnetic field strength `h` in `A/m` and the corresponding magnetic flux density `b` in `T`. :warning: *read-only* |

## Example Usage
This example demonstrates how to create a `NonlinearPermeability` instance for a non-magnetic material.

```python
import eMotorSolution as ems
from eMotorSolution.CheckPoints.Materials import NonlinearPermeability, Non_Magnet_Material

# load an existing project
project = ems.load_project("path/to/your/project.json")

# Create a NonlinearPermeability instance
nonlinear_permeability = NonlinearPermeability(
    data_init=[[0, 0], [1, 1], [2, 2]],
    b_unit="T",
    h_unit="A/m"
)

# Add a new non-magnet material
new_material = Non_Magnet_Material(
    name="NewMaterial",
    conductivity_expression= 1e7,
    conductivity_unit="S/m",
    permeability=nonlinear_permeability
)

# Add the new material to the project's materials collection
project.materials.collection["NewMaterial"] = new_material
```