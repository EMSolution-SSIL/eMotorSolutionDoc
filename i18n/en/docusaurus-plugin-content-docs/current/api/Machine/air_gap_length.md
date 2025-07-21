---
sidebar_position: 3
title: "air_gap_length"
---

# air_gap_length

The `air_gap_length` attribute of the [`MachineData`](/docs/api/Machine/) class represents the length of the air gap in the machine in meters. For internal rotor machines, this is the difference between the outer radius of the rotor and the inner radius of the stator. For external rotor machines, it is the difference between the inner radius of the rotor and the outer radius of the stator. This is a **read-only** attribute that can be modified directly.

:::danger[Read-Only Property]
The `air_gap_length` attribute is implemented as a Python property and cannot be modified by setting a new value. Any attempt to assign a new value will raise an `AttributeError`.
:::

:::tip[Returns]
- **float**: The length of the air gap in meters.
:::


## Example Usage
Here is an example of how to access the `air_gap_length` attribute after loading a machine:
```python
import emotorsolution as ems

# Load an existing project
project = ems.load_project("path/to/your/project.json")

# Access the air gap length
print(project.machine.air_gap_length)
>> 0.01
```