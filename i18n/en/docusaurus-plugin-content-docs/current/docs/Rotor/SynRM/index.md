---
sidebar_position: 3
title: "SynRM"
---
# SynRM Hole
The `hole` attribute of the [`Project.rotor`](/docs/api/Rotor) corresponds to the [Rotor Hole CheckPoint](/docs/docs/Rotor/Hole) in the GUI. It is an instance of the `SynRM_HoleData` class, which can be accessed through `eMotorSolution.CheckPoints.Rotor.SynRM_Hole`.

It holds the properties of all rotor hole pairs in the `collection` list. Adding or removing hole pairs is simply done by appending or removing items from this list.

:::tip[Parameters]
- **_collection**: `list` A list of hole pairs.
:::

# Hole Pair
* [Type 54](./Type54)
* [Type 61](./Type61)

## Methods
| Method | Description |
|--------|-------------|
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|-----------|-------------|
| collection | `list` Returns the list of hole-magnet pairs. |

## Example Usage
Assuming that the project is an SynRM one:

```python
import eMotorSolution as ems

from eMotorSolution.CheckPoints.Rotor.SynRM.SYN_HoleM61Data import SYN_HoleM61Data

# Load the project
project = ems.load_project("path/to/your/project.json")

# Print the list of current Holes
print(project.rotor.hole.collection)

# Create a new Hole
new_hole = SYN_HoleM61Data(
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
)
# Make sure to set the project data to get hints and proper validation
new_hole.project_data = project


# Add the new hole to the project
project.rotor.hole.collection.append(new_hole)

hints = new_hole.hints  # Get hint Values
print(hints)

project.show()
```

