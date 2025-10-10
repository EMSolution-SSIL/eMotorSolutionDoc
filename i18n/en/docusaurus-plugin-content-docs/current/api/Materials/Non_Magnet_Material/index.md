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
- **iron_loss**: `Optional[Union[YamazakiLoss, AnisotropicYamazakiLoss]]` - The iron loss model for the material, which can be an instance of [`YamazakiLoss`](/docs/api/Materials/Non_Magnet_Material/YamazakiLoss) or [`AnisotropicYamazakiLoss`](/docs/api/Materials/Non_Magnet_Material/AnisotropicYamazakiLoss).
:::


## Methods
| Method | Description |
|--------|-------------|
| set_conductivity(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["S/m", "S/cm", "S/mm", "S/um", "S/nm"]` for the conductivity of the material. |
| set_linear_permeability(expression) | Changes the permeability of the material to a `LinearPermeability` instance with the given `expression: str \| float` as the relative permeability. |
| set_nonlinear_permeability(data_init, b_unit, h_unit) | Changes the permeability of the material to a `NonlinearPermeability` instance with the given `data_init: List[List[float]]`, `b_unit: Literal["T", "mT", "uT", "nT", "pT", "G", "mG", "uG", "nG"]`, and `h_unit: Literal["A/m", "kA/m", "MA/m", "GA/m", "TA/m"]`. |
| set_anisotropic_permeability(x_data_init, y_data_init, b_unit, h_unit) | Changes the permeability of the material to an `AnisotropicPermeability` instance with the given `x_data_init: List[List[float]]`, `y_data_init: List[List[float]]`, `b_unit: Literal["T", "mT", "uT", "nT", "pT", "G", "mG", "uG", "nG"]`, and `h_unit: Literal["A/m", "kA/m", "MA/m", "GA/m", "TA/m"]`. |
| set_yamazaki_loss(ke_expression, ke_unit, kh_expression, kh_unit, mass_density_expression, mass_density_unit) | Sets the iron loss model of the material to a `YamazakiLoss` instance with the given parameters. `ke_expression: str \| float`, `ke_unit: Literal["W/kg/T^2/Hz^2", "mW/kg/T^2/Hz^2", "uW/kg/T^2/Hz^2", "nW/kg/T^2/Hz^2"]`, `kh_expression: str \| float`, `kh_unit: Literal["W/kg/T^2/Hz", "mW/kg/T^2/Hz", "uW/kg/T^2/Hz", "nW/kg/T^2/Hz"]`, `mass_density_expression: str \| float`, `mass_density_unit: Literal["kg/m^3", "kg/dm^3", "kg/cm^3", "g/m^3"]`. |
| set_anisotropic_yamazaki_loss(ke_x_expression, ke_x_unit, ke_y_expression, ke_y_unit, kh_x_expression, kh_x_unit, kh_y_expression, kh_y_unit, kh_z_expression, kh_z_unit, mass_density_expression, mass_density_unit) | Sets the iron loss model of the material to an `AnisotropicYamazakiLoss` instance with the given parameters. `ke_x_expression: str \| float`, `ke_x_unit: Literal["W/kg/T^2/Hz^2", "mW/kg/T^2/Hz^2", "uW/kg/T^2/Hz^2", "nW/kg/T^2/Hz^2"]`, `ke_y_expression: str \| float`, `ke_y_unit: Literal["W/kg/T^2/Hz^2", "mW/kg/T^2/Hz^2", "uW/kg/T^2/Hz^2", "nW/kg/T^2/Hz^2"]`, `kh_x_expression: str \| float`, `kh_x_unit: Literal["W/kg/T^2/Hz", "mW/kg/T^2/Hz", "uW/kg/T^2/Hz", "nW/kg/T^2/Hz"]`, `kh_y_expression: str \| float`, `kh_y_unit: Literal["W/kg/T^2/Hz", "mW/kg/T^2/Hz", "uW/kg/T^2/Hz", "nW/kg/T^2/Hz"]`, `kh_z_expression: str \| float`, `kh_z_unit: Literal["W/kg/T^2/Hz", "mW/kg/T^2/Hz", "uW/kg/T^2/Hz", "nW/kg/T^2/Hz"]`, `mass_density_expression: str \| float`, `mass_density_unit: Literal["kg/m^3", "kg/dm^3", "kg/cm^3", "g/m^3"]`. |
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
from eMotorSolution.CheckPoints.Materials import LinearPermeability, Non_Magnet_Material, YamazakiLoss

# load an existing project
project = ems.load_project("path/to/your/project.json")

# Print the collection of material names
print(project.materials.collection.keys())

# Add a new non-magnet material
new_material = Non_Magnet_Material(
    name="NewMaterial",
    conductivity_expression= 1e7,
    conductivity_unit="S/m",
    permeability=LinearPermeability(relative_permeability_expression="1.05")
    iron_loss=YamazakiLoss(
        ke_expression=1.5e-4,
        ke_unit="W/kg/T^2/Hz^2",
        kh_expression=3.0e-2,
        kh_unit="W/kg/T^2/Hz",
        mass_density_expression=7600,
        mass_density_unit="kg/m^3"
    )
)

# Optionally, set an iron loss model for another material
another_material = project.materials.collection["SomeExistingMaterial"]
another_material.set_yamazaki_loss(
    ke_expression=2.923e-4,
    ke_unit="W/kg/T^2/Hz^2",
    kh_expression=6.012e-2,
    kh_unit="W/kg/T^2/Hz",
    mass_density_expression=7800,
    mass_density_unit="kg/m^3"
)


# Add the new material to the project's materials collection
project.materials.collection["NewMaterial"] = new_material
```