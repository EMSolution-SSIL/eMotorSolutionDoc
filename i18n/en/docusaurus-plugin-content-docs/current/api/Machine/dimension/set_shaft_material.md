---
sidebar_position: 5
title: "set_shaft_material()"
---

# set_shaft_material

This method assigns a new material to the shaft. The material must be a not-magnetic material already defined in the project.

:::tip[Parameters]
- **material_name**: `str`, The name of the new material for the shaft. Defaults to `"Air"`.
:::

# Example Usage
```python
import eMotorSolution as ems

# Load an existing project
project = ems.load_machine("path/to/your/project.json")

# Set the shaft material
project.machine.dimension.set_shaft_material("Steel 1008")

# Validate
print(project.machine.dimension.validate())
```
