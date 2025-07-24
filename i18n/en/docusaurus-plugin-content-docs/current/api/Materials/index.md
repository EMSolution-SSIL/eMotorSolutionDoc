---
sidebar_position: 5
title: "Materials"
---
# Materials

The `materials` attribute of the [`Project`](/docs/api/Project/) class corresponds to the [Materials Milestone](/docs/docs/Materials/) in the GUI. It characterizes the materials used in the machine such as the type, properties, and other relevant information.

It is an instance of the `MaterialsData` class, containing all materials in the `collection` attribute, which is a dictionary of [`Non_Magnet_Material`](/docs/api/Materials/Non_Magnet_Material) and [`Magnet_Material`](/docs/api/Materials/Magnet_Material) instances. 
The `MaterialsData` class can be accessed through `eMotorSolution.CheckPoints.Materials.Materials`.
:::tip[Parameters]
- **_collection**: `dict[str, Union[Non_Magnet_Material, Magnet_Material]]` - A dictionary containing the materials used in the machine. The keys are the material names, and the values are instances of [`Non_Magnet_Material`](/docs/api/Materials/Non_Magnet_Material) or [`Magnet_Material`](/docs/api/Materials/Magnet_Material).

:::

## Methods
| Method | Description |
|--------|-------------|
| non_magnet_materials() | `dict[str, Non_Magnet_Material]` Returns a dictionary of non-magnet materials used in the machine. |
| magnet_materials() | `dict[str, Magnet_Material]` Returns a dictionary of magnet materials used in the machine. |
| rename(old_name: str, new_name: str) | Renames a material in the collection. |
| validate() | Returns the validation status in dictionary format. |


## Attributes
| Attribute | Description |
|---|---|
| collection | `dict[str, Union[Non_Magnet_Material, Magnet_Material]]` A dictionary containing all materials used in the machine. The keys are the material names, and the values are instances of [`Non_Magnet_Material`](/docs/api/Materials/Non_Magnet_Material) or [`Magnet_Material`](/docs/api/Materials/Magnet_Material). |

## Example Usage

```python
import eMotorSolution as ems

# load an existing project
project = ems.load_project("path/to/your/project.json")

# Print the collection of materials
print(project.materials.collection)

# Add a new non-magnet material
from eMotorSolution.CheckPoints.Materials import LinearPermeability, Non_Magnet_Material
new_material = Non_Magnet_Material(
    name="NewMaterial",
    conductivity_expression= 1e7,
    conductivity_unit="S/m",
    permeability=LinearPermeability(relative_permeability_expression="1.05")
)

# Add the new material to the project's materials collection
project.materials.collection["NewMaterial"] = new_material

# Print the updated collection of materials
print(project.materials.collection)

# Remove the `NewMaterial`
del project.materials.collection["NewMaterial"]
```
