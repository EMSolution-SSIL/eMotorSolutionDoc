---
sidebar_position: 4
title: "YamazakiLoss"
---
# YamazakiLoss

The `YamazakiLoss` class represents the Yamazaki iron loss model for a [non-magnet material](/docs/api/Materials/Non_Magnet_Material). This class is accessed through the `eMotorSolution.CheckPoints.Materials` module.

:::tip[Parameters]
- **ke_expression**: `str | float` - The eddy current loss coefficient, which can be a string mathematical expression or a float value. Default is `2.923e-4`.
- **ke_unit**: `Literal["W/kg/T^2/Hz^2", "mW/kg/T^2/Hz^2", "uW/kg/T^2/Hz^2", "nW/kg/T^2/Hz^2"]` - The unit of the eddy current loss coefficient. Default is `"W/kg/T^2/Hz^2"`.
- **kh_expression**: `str | float` - The hysteresis loss coefficient, which can be a string mathematical expression or a float value. Default is `6.012e-2`.
- **kh_unit**: `Literal["W/kg/T^2/Hz", "mW/kg/T^2/Hz", "uW/kg/T^2/Hz", "nW/kg/T^2/Hz"]` - The unit of the hysteresis loss coefficient. Default is `"W/kg/T^2/Hz"`.
- **mass_density_expression**: `str | float` - The mass density of the material, which can be a string mathematical expression or a float value. Default is `7800`.
- **mass_density_unit**: `Literal["kg/m^3", "kg/dm^3", "kg/cm^3", "g/m^3"]` - The unit of the mass density. Default is `"kg/m^3"`.
:::

## Methods
| Method | Description |
|--------|-------------|
| set_ke(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["W/kg/T^2/Hz^2", "mW/kg/T^2/Hz^2", "uW/kg/T^2/Hz^2", "nW/kg/T^2/Hz^2"]` for the eddy current loss coefficient of the material. |
| set_kh(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["W/kg/T^2/Hz", "mW/kg/T^2/Hz", "uW/kg/T^2/Hz", "nW/kg/T^2/Hz"]` for the hysteresis loss coefficient of the material. |
| set_mass_density(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["kg/m^3", "kg/dm^3", "kg/cm^3", "g/m^3"]` for the mass density of the material. |

## Attributes
| Attribute | Description |
|---|---|
| ke | `float` Returns the evaluated eddy current loss coefficient of the material in `W/kg/T^2/Hz^2`. | :warning: *read-only* |
| kh | `float` Returns the evaluated hysteresis loss coefficient of the material in `W/kg/T^2/Hz`. | :warning: *read-only* |
| mass_density | `float` Returns the evaluated mass density of the material in `kg/m^3`. | :warning: *read-only* |