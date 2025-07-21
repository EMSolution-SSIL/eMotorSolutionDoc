---
sidebar_position: 1
title: "type"
---
# type
The `type` attribute of the [`MachineData`](/docs/api/Machine/) class represents the type of the machine. In the GUI, this is displayed as a [checkpoint](/docs/docs/Machine/Type.md).

It is an instance of the `MachineTypeData` class accessible through the `eMotorSolution.CheckPoints.Machine.Type` module.

:::tip[Parameters]
- **machine_type_init**: `str`, The type data of the machine. defaults to `"IPMSM"`.
- **pole_number_expression**: `str`, The number of poles for the machine. defaults to `"8"`.
- **topology_init**: `str`, The topology of the machine. defaults to `"Internal Rotor"`.
- **machine_name**: `str`, The name of the machine. defaults to `"My Machine"`.
:::


## Methods
| Method | Description |
|--------|-------------|
| [set_machine_type](/docs/api/Machine/type/set_machine_type.md)(machine_type: str) | Sets the machine type to `"IPMSM"`, `"SPMSM"`, or `"SynRM"`. |
| [set_pole_number](/docs/api/Machine/type/set_pole_number.md)(expression: int \| str) | Sets the number of poles for the machine. |
| [set_topology](/docs/api/Machine/type/set_topology.md)(topology: str) | Sets the machine topology to `"Internal Rotor"` or `"External Rotor"`. |
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|-----------|-------------|
| machine_type | `str` The type of the machine (`"IPMSM"`, `"SPMSM"` or `"SynRM"`). :warning: *read-only* |
| pole_number | `int` The number of poles in the machine. :warning: *read-only* |
| topology | `str` The topology of the machine (`"Internal Rotor"` or `"External Rotor"`). :warning: *read-only* |
| machine_name | `str` The name of the machine. |

## Example Usage
Here is an example of how to access and modify some of the attributes and methods of the `MachineTypeData` class:

```python
import emotorsolution as ems

# Load an existing project
project = ems.load_project("path/to/your/project.json")

# Access the machine type
print(project.machine.type.machine_type)
>> "IPMSM"

# Modify the machine type
project.machine.type.set_machine_type("SPMSM")

# Access the machine name
print(project.machine.type.machine_name)
>> "My Machine"

# Modify the machine name
project.machine.type.machine_name = "New Machine Name"

# Access the modified machine name
print(project.machine.type.machine_name)
>> "New Machine Name"
```