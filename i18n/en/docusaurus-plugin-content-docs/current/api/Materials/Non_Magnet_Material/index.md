---
sidebar_position: 0.1
title: "Non_Magnet_Material"
---

# Non_Magnet_Material
The `Non_Magnet_Material` class represents the API of the non-magnet material in the GUI [here](/docs/docs/Materials/Non-Magnet). This class is accessed through the `eMotorSolution.CheckPoints.Materials` module.

:::tip[Parameters]
- **name**: `str` - The name of the non-magnet material.
- **conductivity_expression**: `str | float` - The conductivity of the material, which can be a string mathematical expression or a float value.
- **conductivity_unit**: `Literal["S/m", "S/cm", "S/mm", "S/um", "S/nm"]` - The unit of conductivity. Default is `"S/m"`.
- **permeability**: `Union[LinearPermeability, NonlinearPermeability, AnisotropicPermeability]` - The permeability of the material, which can be an instance of [`LinearPermeability`](/docs/api/Materials/Non_Magnet_Material/LinearPermeability), [`NonlinearPermeability`](/docs/api/Materials/Non_Magnet_Material/NonlinearPermeability), or [`AnisotropicPermeability`](/docs/api/Materials/Non_Magnet_Material/AnisotropicPermeability).
:::


## Methods
| Method | Description |
|--------|-------------|
| set_conductivity(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["S/m", "S/cm", "S/mm", "S/um", "S/nm"]` for the conductivity of the material. |
| set_linear_permeability(expression) | Changes the permeability of the material to a `LinearPermeability` instance with the given `expression: str \| float` as the relative permeability. |
| set_nonlinear_permeability(data_init, b_unit, h_unit) | Changes the permeability of the material to a `NonlinearPermeability` instance with the given `data_init: List[List[float]]`, `b_unit: Literal["T", "mT", "uT", "nT", "pT", "G", "mG", "uG", "nG"]`, and `h_unit: Literal["A/m", "kA/m", "MA/m", "GA/m", "TA/m"]`. |
| set_anisotropic_permeability(x_data_init, y_data_init, b_unit, h_unit) | Changes the permeability of the material to an `AnisotropicPermeability` instance with the given `x_data_init: List[List[float]]`, `y_data_init: List[List[float]]`, `b_unit: Literal["T", "mT", "uT", "nT", "pT", "G", "mG", "uG", "nG"]`, and `h_unit: Literal["A/m", "kA/m", "MA/m", "GA/m", "TA/m"]`. |
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|---|---|
| name | `str` The name of the non-magnet material. |
| conductivity | `float` Returns the evaluated conductivity of the material in `S/m`. :warning: *read-only* |
| permeability_type | `Literal["Linear", "Nonlinear", "Anisotropic"]` Returns the type of permeability of the material. :warning: *read-only* |
| permeability | `Union[LinearPermeability, NonlinearPermeability, AnisotropicPermeability]` Returns the permeability of the material. :warning: *read-only* |

## Example Usage

```python
import eMotorSolution as ems
from eMotorSolution.CheckPoints.Materials import LinearPermeability, Non_Magnet_Material

# load an existing project
project = ems.load_project("path/to/your/project.json")

# Print the collection of materials
print(project.materials.collection)

# Add a new non-magnet material
new_material = Non_Magnet_Material(
    name="NewMaterial",
    conductivity_expression= 1e7,
    conductivity_unit="S/m",
    permeability=LinearPermeability(relative_permeability_expression="1.05")
)

# Add the new material to the project's materials collection
project.materials.collection["NewMaterial"] = new_material
```