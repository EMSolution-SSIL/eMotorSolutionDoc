---
sidebar_position: 4
title: "set_rotor_inner_radius()"
---

# set_rotor_inner_radius

This method assigns a new value to the inner radius of the rotor with respect to the specified unit.

:::tip[Parameters]
- **expression**: `str` | `float`, The new expression for the inner radius of the rotor.
- **unit**: `str`, The unit for the inner radius of the rotor. Feasible values are `"m"`, `"dm"`, `"cm"`, `"mm"`, `"in"`, `"ft"`. Defaults to `"m"`.
:::

# Example Usage
```python
import eMotorSolution as ems

# Load an existing project
project = ems.load_machine("path/to/your/project.json")

# Set the inner radius of the rotor
project.machine.dimension.set_rotor_inner_radius("134.62", "mm")

# Validate the project
validation_result = project.validate()

if validation_result["status"]:
    project.show()
else:
    print("Validation failed:", validation_result)
```
