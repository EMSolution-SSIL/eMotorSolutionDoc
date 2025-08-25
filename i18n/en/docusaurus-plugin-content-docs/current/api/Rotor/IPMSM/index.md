---
sidebar_position: 1
title: "IPMSM"
---
# IPMSM HoleMagnet
The `hole_magnet` attribute of the [`Project.rotor`](/docs/api/Rotor) corresponds to the [Rotor Hole Magnet CheckPoint](/docs/docs/Rotor/Hole-Magnet) in the GUI. It is an instance of the `IPMSM_HoleMagnetData` class, which can be accessed through `eMotorSolution.CheckPoints.Rotor.IPMSM_HoleMagnet`.

It holds the properties of all rotor hole-magnet pairs in the `collection` list. Adding or removing hole-magnet pairs is simply done by appending or removing items from this list. 

:::tip[Parameters]
- **_collection**: `list` A list of hole-magnet pairs.
:::

# Hole-Magnet Pair
* [Type 51](./Type51)
* [Type 51M](./Type51M)
* [Type 52](./Type52)
* [Type 52C](./Type52C)
* [Type 52D](./Type52D)
* [Type 52R](./Type52R)
* [Type 53](./Type53)
* [Type 54](./Type54)
* [Type 55](./Type55)
* [Type 57](./Type57)
* [Type 58](./Type58)

## Methods
| Method | Description |
|--------|-------------|
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|-----------|-------------|
| collection | `list` Returns the list of hole-magnet pairs. |

## Example Usage
Assuming that the project is an IPMSM one:

```python
import eMotorSolution as ems

from eMotorSolution.CheckPoints.Rotor.IPMSM.IPM_HoleMagnet52R import IPM_HoleMagnet52RData

# Load the project
project = ems.load_project("path/to/your/project.json")

# Print the list of current Hole-Magnets
print(project.rotor.hole_magnet.collection)

# Create a new Hole-Magnet
new_hole_magnet = IPM_HoleMagnet52RData(
    W0_expression=30,
    W0_unit="mm",
    W3_expression=6,
    W3_unit="mm",
    H0_expression=3,
    H0_unit="mm",
    H1_expression=9,
    H1_unit="mm",
    H2_expression=1,
    H2_unit="mm",
    R0_expression=1.8,
    R0_unit="mm",
    R1_expression=0.9,
    R1_unit="mm",
)
# Make sure to set the project data to get hints and proper validation
new_hole_magnet.project_data = project


# Add the new hole magnet to the project
project.rotor.hole_magnet.collection.append(new_hole_magnet)

hints = new_hole_magnet.hints  # Get hint Values
print(hints)

project.show()
```

