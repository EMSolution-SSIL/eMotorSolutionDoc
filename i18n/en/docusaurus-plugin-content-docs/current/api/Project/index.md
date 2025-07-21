---
sidebar_position: 3
title: "Project"
---

# Project
The `Project` class is a central component of the eMotorSolution API, representing a project that contains various motor designs and configurations. It provides methods to manage and manipulate these designs effectively.

The `Project` class is inherited from the [dataclasses](https://docs.python.org/3/library/dataclasses.html) module and includes several attributes and methods to facilitate the management of motor designs.

## Methods

| Method | Description |
|---|---|
| [save](/docs/api/Project/save)() | Saves the project to the `Project.path` file. |
| [show](/docs/api/Project/show)(legend, ...) | Shows the machine geometry in matplotlib. |
| validate() | Returns the validation status in dictionary format. |


## Attributes
| Attribute | Description |
|---|---|
| `path` | `str` The file path to the project JSON file. :warning: *read-only* |
| `directory` | `str` The directory where the project is saved. :warning: *read-only* |
| `name` | `str` The name of the project. :warning: *read-only* |
| [`parameters`](/docs/api/Project/parameters) | `dict` The user-defined parameters of the project. |
| [`machine`](/docs/api/Machine) | `MachineData` The machine data of the project, including type and dimensions. |

## Example Usage
```python
import emotorsolution as ems

# load an existing project
project = ems.load_project("path/to/your/project.json")

# Access the project name
print(project.name)
>> "project"

# print the parameters
print(project.parameters)
>> {"param1": "value1", "param2": "value2"}

# Add a new parameter
project.parameters["new_param"] = "new_value"

# Save the project
project.save()
```

