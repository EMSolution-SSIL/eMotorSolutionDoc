---
sidebar_position: 2
title: "SPMSM"
---
# SPMSM SlotMagnet
The `slot_magnet` attribute of the [`Project.rotor`](/docs/api/Rotor) corresponds to the [Rotor Slot Magnet CheckPoint](/docs/docs/Rotor/Slot-Magnet) in the GUI. It is an instance of the `SPMSM_SlotMagnetData` class, which can be accessed through `eMotorSolution.CheckPoints.Rotor.SPMSM_SlotMagnet`.

In contrast to the IPMSM machines, the SPMSM machines hold only a single slot-magnet pair not a collection. The properties of the slot-magnet pair can be accessed directly from the `slot_magnet_props` attribute.

:::tip[Parameters]
- **slot_magnet_props**: One of the slot-magnet pairs bellow. Default is `Slot M12`.
- **magnet_material_init**: `str` The name of the magnet material. Default is `NdFeB`.
:::

# Slot-Magnet Pair
* [Rectangular Magnet with Polar Top](./SlotM12)
* [Rectangular Magnet with Curve Top](./SlotM13)
* [Polar Magnet](./SlotM11)
* [Polar Magnet with Curve Top](./SlotM14)
* [Rectangular Magnet](./SlotM15)
* [Ring Magnet](./SlotM18)
* [Halbach Array](./SlotM19)

## Methods
| Method | Description |
|--------|-------------|
| set_magnet_material(material_name) | Sets the `material_name: str` for magnet_material. It should be one of the magnet materials in the project's materials collection. |
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|-----------|-------------|
| slot_magnet_props | An instance of the **Slot-Magnet Pairs** above. |
| magnet_material | `str` Returns the name of the magnet material. :warning: *read-only* |
| slot_magnet_type | `str` Get or set the type of the slot magnet. |


## Example Usage
Assuming that the project is a SPMSM one:

```python
import eMotorSolution as ems

from eMotorSolution.CheckPoints.Rotor.SPMSM.SPM_SlotM19 import SPM_SlotM19Data

# Load the project
project = ems.load_project("path/to/your/project.json")

# Print the current Slot-Magnet
print(project.rotor.slot_magnet.slot_magnet_props)

# Assign new Slot-Magnet type
project.rotor.slot_magnet.slot_magnet_type = "Halbach Array"

# Get the current Slot-Magnet properties
halbach_array: SPM_SlotM19Data = project.rotor.slot_magnet.slot_magnet_props

# Assign new properties
halbach_array.set_H0(0.005)
halbach_array.set_W0(20)

project.show()
```

