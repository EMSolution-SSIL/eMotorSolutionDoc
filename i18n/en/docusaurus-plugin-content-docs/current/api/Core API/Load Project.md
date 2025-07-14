---
sidebar_position: 1
title: Load Project
---

# Load Project
To load an existing project in the eMotorSolution API, you can use the `load_project` function. This function allows you to access the parameters and configurations of a previously saved project.

It is recommended to generate a project file using the eMotorSolution GUI and then load it using the API for further analysis or modifications.

## Syntax
`
load_project(path: str)
`

:::tip[Parameters]
- **path**: `str`,  The file path to the project JSON file.
:::


:::tip[Returns]
- **Project**: An instance of the `Project` class containing the loaded project data.
:::
    

## Example Usage
Here is an example of how to load a project and access its parameters:

```python
import emotorsolution as ems

# Load an existing project
project = ems.load_project("path/to/your/project.json")

# Access project parameters
print(project)
```
