---
sidebar_position: 1
title: "set_machine_type()"
---

# set_machine_type

Set the machine type using the `set_machine_type` method of the [`MachineTypeData`](/docs/api/Machine/type/) class. According to provided values, the rotor configuration is subject to change.

:::tip[Parameters]
- **machine_type**: `str`, The type of the machine. It can be one of the following:
  - `"IPMSM"`: Interior Permanent Magnet Synchronous Machine
  - `"SPMSM"`: Surface Permanent Magnet Synchronous Machine
  - `"SynRM"`: Synchronous Reluctance Machine
:::

## Example Usage
```python
import eMotorSolution as ems

# Load an existing project
project = ems.load_project("path/to/your/project.json")

# Set the machine type to IPMSM
project.machine.type.set_machine_type("IPMSM")
```

