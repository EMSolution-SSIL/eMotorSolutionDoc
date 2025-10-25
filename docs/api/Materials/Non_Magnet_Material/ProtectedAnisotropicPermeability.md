---
sidebar_position: 3.5
title: "ProtectedAnisotropicPermeability"
---

# ProtectedAnisotropicPermeability
The `ProtectedAnisotropicPermeability` class represents an anisotropic permeability for a [non-magnet material](/docs/api/Materials/Non_Magnet_Material) whose underlying B–H data is provided in encrypted form. This class is accessed through the `eMotorSolution.CheckPoints.Materials` module.

This type of anisotropic permeability is typically provided by eMotorSolution to protect commercially sensitive material data. Users can use instances of this class in simulations and share projects that reference it without exposing the raw x/y B–H curves.

:::tip[Parameters]
- **encrypted_x_data_init**: `string` - A string representing the encrypted anisotropic permeability data in x-direction. The encrypted payload contains the x- and y-direction B–H information in a protected format.
- **encrypted_y_data_init**: `string` - A string representing the encrypted anisotropic permeability data in y-direction. The encrypted payload contains the x- and y-direction B–H information in a protected format.
- **b_unit**: `Literal["T", "mT", "uT", "nT", "pT", "G", "mG", "uG", "nG"]` - The unit of magnetic flux density `b`. Default is `"T"`.
- **h_unit**: `Literal["A/m", "kA/m", "MA/m", "GA/m", "TA/m"]` - The unit of magnetic field strength `h`. Default is `"A/m"`.
:::

## Methods
| Method | Description |
|--------|-------------|
| set_x_y_data(x_data, y_data, b_unit, h_unit) | Sets the encrypted anisotropic permeability payload and associated units. The underlying x/y B–H data remain encrypted and are not exposed to the user. |
