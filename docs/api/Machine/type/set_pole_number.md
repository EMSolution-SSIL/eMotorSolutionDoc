---
sidebar_position: 2
title: "set_pole_number()"
---

# set_pole_number

Set the number of poles for the machine using the `set_pole_number` method of the [`MachineTypeData`](/docs/api/Machine/type/) class. This method allows you to specify the number of poles, which can affect the machine's performance characteristics.

:::tip[Parameters]
- **expression**: `int | str`, The number of poles for the machine. It can be provided as an integer or a string representation of an integer.
:::

## Example Usage
```python
import emotorsolution as ems

# Load an existing project
project = ems.load_project("path/to/your/project.json")

# Set the number of poles to 8
project.machine.type.set_pole_number(8)
```
