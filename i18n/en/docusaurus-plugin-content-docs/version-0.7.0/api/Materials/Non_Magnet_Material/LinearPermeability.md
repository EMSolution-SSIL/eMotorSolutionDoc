---
sidebar_position: 1
title: "LinearPermeability"
---

# LinearPermeability
The `LinearPermeability` class represents the linear permeability of a [non-magnet materials](/docs/api/Materials/Non_Magnet_Material). This class is accessed through the `eMotorSolution.CheckPoints.Materials` module.

:::tip[Parameters]
- **relative_permeability_expression**: `str | float` - The relative permeability of the material, which can be a string mathematical expression or a float value.
:::

## Methods
| Method | Description |
|--------|-------------|
| set_relative_permeability(expression) | Sets the `expression: str \| float` for the relative permeability of the material. |

## Attributes
| Attribute | Description |
|---|---|
| relative_permeability | `float` Returns the evaluated relative permeability of the material. :warning: *read-only* |

## Example Usage
This example demonstrates how to create a `LinearPermeability` instance for a non-magnet material.

```python
import eMotorSolution as ems
from eMotorSolution.CheckPoints.Materials import LinearPermeability, Non_Magnet_Material

# load an existing project
project = ems.load_project("path/to/your/project.json")

# Create a LinearPermeability instance
linear_permeability = LinearPermeability(relative_permeability_expression="1.05")

# Add a new non-magnet material
new_material = Non_Magnet_Material(
    name="NewMaterial",
    conductivity_expression= 1e7,
    conductivity_unit="S/m",
    permeability=linear_permeability
)

# Add the new material to the project's materials collection
project.materials.collection["NewMaterial"] = new_material

```