---
sidebar_position: 0.2
title: "Magnet_Material"
---

# Magnet_Material
The `Magnet_Material` class represents the API of the magnet material in the GUI [here](/docs/docs/Materials/Magnet). This class is accessed through the `eMotorSolution.CheckPoints.Materials` module.

:::tip[Parameters]
- **name**: `str` - The name of the magnet material.
- **radial_expression**: `str | float` - The radial magnetic flux density of the material, which can be a string mathematical expression or a float value.
- **radial_unit**: `Literal["T", "mT", "uT", "nT", "pT", "G", "mG", "uG", "nG"]` - The unit of radial magnetic flux density. Default is `"T"`.
- **tangential_expression**: `str | float` - The tangential magnetic flux density of the material, which can be a string mathematical expression or a float value.
- **tangential_unit**: `Literal["T", "mT", "uT", "nT", "pT", "G", "mG", "uG", "nG"]` - The unit of tangential magnetic flux density. Default is `"T"`.
- **conductivity_expression**: `str | float` - The conductivity of the material, which can be a string mathematical expression or a float value.
- **conductivity_unit**: `Literal["S/m", "S/cm", "S/mm", "S/um", "S/nm"]` - The unit of conductivity. Default is `"S/m"`.
- **relative_permeability_expression**: `str | float` - The relative permeability of the material, which can be a string mathematical expression or a float value.
:::


## Methods
| Method | Description |
|--------|-------------|
| set_radial(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["T", "mT", "uT", "nT", "pT", "G", "mG", "uG", "nG"]` for the radial magnetic flux density of the material. |
| set_tangential(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["T", "mT", "uT", "nT", "pT", "G", "mG", "uG", "nG"]` for the tangential magnetic flux density of the material. |
| set_conductivity(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["S/m", "S/cm", "S/mm", "S/um", "S/nm"]` for the conductivity of the material. |
| set_linear_permeability(expression) | Changes the permeability of the material to a `LinearPermeability` instance with the given `expression: str \| float` as the relative permeability. |
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|---|---|
| name | `str` The name of the non-magnet material. |
| radial | `float` Returns the evaluated radial magnetic flux density of the material in `T`. :warning: *read-only* |
| tangential | `float` Returns the evaluated tangential magnetic flux density of the material in `T`. :warning: *read-only* |
| conductivity | `float` Returns the evaluated conductivity of the material in `S/m`. :warning: *read-only* |
| relative_permeability | `float` Returns the evaluated relative permeability of the material. :warning: *read-only* |

## Example Usage

```python
import eMotorSolution as ems
from eMotorSolution.CheckPoints.Materials import Magnet_Material

# load an existing project
project = ems.load_project("path/to/your/project.json")

# Making a new magnet material
new_material = Magnet_Material(
    name="Test",
    radial_expression="1.0",
    radial_unit="T",
    tangential_expression="0.0",
    tangential_unit="T",
    conductivity_expression="0.0",
    conductivity_unit="S/m",
    relative_permeability_expression="1.0",
)

# Add the new material to the project's materials collection
project.materials.collection["Test"] = new_material
```