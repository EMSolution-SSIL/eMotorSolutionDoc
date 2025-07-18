---
sidebar_position: 1
title: "set_stator_outer_radius()"
---

# set_stator_outer_radius

This method assigns a new value to the outer radius of the stator with respect to the specified unit. 

:::tip[Parameters]
- **expression**: `str` | `float`, The new expression for the outer radius of the stator.
- **unit**: `str`, The unit for the outer radius of the stator. Feasible values are `"m"`, `"dm"`, `"cm"`, `"mm"`, `"in"`, `"ft"`. Defaults to `"m"`.
:::

# Example Usage
```python
import emotorsolution as ems

# Load an existing project
project = ems.load_machine("path/to/your/machine.json")

# Set the outer radius of the stator
project.machine.dimension.set_stator_outer_radius("134.62", "mm")

# Validate the project
validation_result = project.validate()

if validation_result["status"]:
    project.show()
else:
    print("Validation failed:", validation_result)
```
