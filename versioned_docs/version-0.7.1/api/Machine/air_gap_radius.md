---
sidebar_position: 4
title: "air_gap_radius"
---

# air_gap_radius

The `air_gap_radius` attribute of the [`MachineData`](/docs/api/Machine/) class represents the radius of the air gap in the machine in meters. For internal rotor machines, this is the average of the outer radius of the rotor and the inner radius of the stator. For external rotor machines, it is the average of the inner radius of the rotor and the outer radius of the stator.
This is a **read-only** attribute that can be modified directly.

:::danger[Read-Only Property]
The `air_gap_radius` attribute is implemented as a Python property and cannot be modified by setting a new value. Any attempt to assign a new value will raise an `AttributeError`.
:::

:::tip[Returns]
- **float**: The radius of the air gap in meters.
:::


## Example Usage
Here is an example of how to access the `air_gap_radius` attribute after loading a machine:
```python
import eMotorSolution as ems

# Load an existing project
project = ems.load_project("path/to/your/project.json")

# Access the air gap radius
print(project.machine.air_gap_radius)
>> 0.01
```