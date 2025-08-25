---
sidebar_position: 7
title: "Rotor"
---
# Rotor

The `rotor` attribute of [`Project`](/docs/api/Project) instance, corresponds to the [Rotor Milestone](/docs/docs/Rotor) in the user interface. It specifies the lamination properties of the rotor and the shape and properties of holes and magnets, depending on the type of the machine.

`Project.rotor` is an instance of `RotorData` class, which can be imported from `eMotorSolution.CheckPoints.Rotor.Rotor`. It contains `lamination`, `hole_magnet`, `slot_magnet`, and `hole` attributes, which are instances of `LaminationData`, `IPMSM_HoleMagnetData`, `SPMSM_SlotMagnetData`, and `SynRM_HoleData` classes, respectively. 
* If the machine type is `IPMSM`, the `hole_magnet` attribute is used to define the properties of the rotor's magnets. 
* If the machine type is `SPMSM`, the `slot_magnet` attribute is used instead. 
* For `SynRM` machines, the `hole` attribute is used to define the rotor's holes.

## Methods
| Method | Description |
|--------|-------------|
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|---|---|
| [lamination](/docs/api/Rotor/lamination) | `LaminationData` An instance of the `LaminationData` class that specifies the lamination properties of the rotor. |
| [hole_magnet](/docs/api/Rotor/IPMSM) | `IPMSM_HoleMagnetData` An instance of the `IPMSM_HoleMagnetData` class that specifies the properties of the rotor's magnets for IPMSM machines. |
| [slot_magnet](/docs/api/Rotor/SPMSM) | `SPMSM_SlotMagnetData` An instance of the `SPMSM_SlotMagnetData` class that specifies the properties of the rotor's magnets for SPMSM machines. |
| [hole](/docs/api/Rotor/SynRM) | `SynRM_HoleData` An instance of the `SynRM_HoleData` class that specifies the properties of the rotor's holes for SynRM machines. |
