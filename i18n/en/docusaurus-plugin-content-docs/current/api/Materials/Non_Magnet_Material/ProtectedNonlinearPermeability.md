---
sidebar_position: 2.5
title: "ProtectedNonlinearPermeability"
---

# ProtectedNonlinearPermeability
The `ProtectedNonlinearPermeability` class represents the nonlinear permeability of a [non-magnet materials](/docs/api/Materials/Non_Magnet_Material) with encrypted data. 
This class is accessed through the `eMotorSolution.CheckPoints.Materials` module.

This types of permeabilities are usually provided by eMotorSolution to keep the commercially sensitive material data confidential. Although users can utilize these permeabilities in their simulations, they are restricted from accessing or modifying the underlying data.

You can also keep confidential B–H curves secret by using this class. By supplying the encrypted_data_init value the underlying B–H data remains hidden while the material can still be used and shared with collaborators or third parties in projects and simulations without exposing the raw curves.


:::tip[Parameters]
- **encrypted_data_init**: `string` - A string representing the encrypted data for the nonlinear permeability.
- **b_unit**: `Literal["T", "mT", "uT", "nT", "pT", "G", "mG", "uG", "nG"]` - The unit of magnetic flux density `b`. Default is `"T"`.
- **h_unit**: `Literal["A/m", "kA/m", "MA/m", "GA/m", "TA/m"]` - The unit of magnetic field strength `h`. Default is `"A/m"`.
:::

## Methods
| Method | Description |
|--------|-------------|
| set_data(data_init, b_unit, h_unit) | Encrypts the `data_init: List[List[float]]`, `b_unit: Literal["T", "mT", "uT", "nT", "pT", "G", "mG", "uG", "nG"]`, and `h_unit: Literal["A/m", "kA/m", "MA/m", "GA/m", "TA/m"]` for the nonlinear permeability of the material. |
