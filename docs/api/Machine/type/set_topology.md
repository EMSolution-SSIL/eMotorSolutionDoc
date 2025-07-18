---
sidebar_position: 3
title: "set_topology()"
---

# set_topology

Set the rotor position for the machine to be either internal or external using the `set_topology` method of the [`MachineTypeData`](/docs/api/Machine/type/) class. This method may change the rotor configuration and sizes.

:::tip[Parameters]
- **topology**: `str`, The topology of the machine. It can be either `"Internal Rotor"` or `"External Rotor"`.
:::

## Example Usage
```python
import emotorsolution as ems

# Load an existing project
project = ems.load_project("path/to/your/project.json")

# Set the topology to Internal Rotor
project.machine.type.set_topology("Internal Rotor")
```