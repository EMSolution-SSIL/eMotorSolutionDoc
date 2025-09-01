---
sidebar_position: 9
title: "Analyses"
---
# Analyses

The `analyses` attribute of the [`Project`](/docs/api/Project/) class corresponds to the Analysis Milestone in the GUI. It contains the collection of analyses that can be performed on the motor design. All analyses are stored in a dictionary format, where the keys are the names of the analyses, and the values are instances of the [`MS_InputControl`](/docs/api/Analyses/InputControl) class.

:::tip[Parameters]
- **_collection_**: `dict[str, MS_InputControl]` A dictionary containing the analyses data.
:::

## Methods
| Method | Description |
|--------|-------------|
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|---|---|
| `collection` | `dict[str, MS_InputControl]` A dictionary containing the analyses data. |

## Example Usage
### 1. Print the analyses collection of a project
```python
import emotorsolution as ems

# load an existing project
project = ems.load_project("path/to/your/project.json")

# Access the analyses collection
print(project.analyses.collection)
```

### 2. Add a new analysis to the collection
:::danger[Warning]
Although it is possible to add or remove analyses from the `analyses` attribute, it is not recommended to do so directly through the API **yet**. Instead, users should utilize the GUI to manage analyses to ensure data integrity and proper configuration.

In future versions of the API, more robust methods for managing analyses may be introduced.
:::
```python
import emotorsolution as ems
from eMotorSolution.CheckPoints.Analysis.PMSM.Back_EMF.PMSM_Back_EMF import PMSM_Back_EMF

# load an existing project
project = ems.load_project("path/to/your/project.json")

# Create a new Back EMF analysis
back_emf = PMSM_Back_EMF()
back_emf.project_data = project # Link to the project (important to be added immediately after creation)
back_emf.name = "BackEMF2"
back_emf.init_network()
back_emf.init_time_functions()
back_emf.update() # Update the input control based on the project data (e.g., materials, stator winding, rotor speed, etc.)
back_emf.save_json()


project.analyses.collection[back_emf.name] = back_emf

project.save()
```