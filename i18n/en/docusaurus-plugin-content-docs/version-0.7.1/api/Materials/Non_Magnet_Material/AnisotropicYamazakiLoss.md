---
sidebar_position: 5
title: "AnisotropicYamazakiLoss"
---
# AnisotropicYamazakiLoss

The `AnisotropicYamazakiLoss` class represents the anisotropic Yamazaki iron loss model for a [non-magnet material](/docs/api/Materials/Non_Magnet_Material). This class is accessed through the `eMotorSolution.CheckPoints.Materials` module.

:::tip[Parameters]
- **ke_x_expression**: `str | float` - The eddy current loss coefficient in the X direction, which can be a string mathematical expression or a float value. Default is `2.923e-4`.
- **ke_x_unit**: `Literal["W/kg/T^2/Hz^2", "mW/kg/T^2/Hz^2", "uW/kg/T^2/Hz^2", "nW/kg/T^2/Hz^2"]` - The unit of the eddy current loss coefficient in the X direction. Default is `"W/kg/T^2/Hz^2"`.
- **ke_y_expression**: `str | float` - The eddy current loss coefficient in the Y direction, which can be a string mathematical expression or a float value. Default is `6.012e-2`.
- **ke_y_unit**: `Literal["W/kg/T^2/Hz^2", "mW/kg/T^2/Hz^2", "uW/kg/T^2/Hz^2", "nW/kg/T^2/Hz^2"]` - The unit of the eddy current loss coefficient in the Y direction. Default is `"W/kg/T^2/Hz^2"`.
- **kh_x_expression**: `str | float` - The hysteresis loss coefficient in the X direction, which can be a string mathematical expression or a float value. Default is `1.411e-4`.
- **kh_x_unit**: `Literal["W/kg/T^2/Hz", "mW/kg/T^2/Hz", "uW/kg/T^2/Hz", "nW/kg/T^2/Hz"]` - The unit of the hysteresis loss coefficient in the X direction. Default is `"W/kg/T^2/Hz"`.
- **kh_y_expression**: `str | float` - The hysteresis loss coefficient in the Y direction, which can be a string mathematical expression or a float value. Default is `6.012e-2`.
- **kh_y_unit**: `Literal["W/kg/T^2/Hz", "mW/kg/T^2/Hz", "uW/kg/T^2/Hz", "nW/kg/T^2/Hz"]` - The unit of the hysteresis loss coefficient in the Y direction. Default is `"W/kg/T^2/Hz"`.
- **kh_z_expression**: `str | float` - The hysteresis loss coefficient in the Z direction, which can be a string mathematical expression or a float value. Default is `3.006e-2`.
- **kh_z_unit**: `Literal["W/kg/T^2/Hz", "mW/kg/T^2/Hz", "uW/kg/T^2/Hz", "nW/kg/T^2/Hz"]` - The unit of the hysteresis loss coefficient in the Z direction. Default is `"W/kg/T^2/Hz"`.
- **mass_density_expression**: `str | float` - The mass density of the material, which can be a string mathematical expression or a float value. Default is `7800`.
- **mass_density_unit**: `Literal["kg/m^3", "kg/dm^3", "kg/cm^3", "g/m^3"]` - The unit of the mass density. Default is `"kg/m^3"`.
:::

## Methods
| Method | Description |
|--------|-------------|
| set_ke_x(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["W/kg/T^2/Hz^2", "mW/kg/T^2/Hz^2", "uW/kg/T^2/Hz^2", "nW/kg/T^2/Hz^2"]` for the eddy current loss coefficient in the X direction of the material. |
| set_ke_y(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["W/kg/T^2/Hz^2", "mW/kg/T^2/Hz^2", "uW/kg/T^2/Hz^2", "nW/kg/T^2/Hz^2"]` for the eddy current loss coefficient in the Y direction of the material. |
| set_kh_x(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["W/kg/T^2/Hz", "mW/kg/T^2/Hz", "uW/kg/T^2/Hz", "nW/kg/T^2/Hz"]` for the hysteresis loss coefficient in the X direction of the material. |
| set_kh_y(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["W/kg/T^2/Hz", "mW/kg/T^2/Hz", "uW/kg/T^2/Hz", "nW/kg/T^2/Hz"]` for the hysteresis loss coefficient in the Y direction of the material. |
| set_kh_z(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["W/kg/T^2/Hz", "mW/kg/T^2/Hz", "uW/kg/T^2/Hz", "nW/kg/T^2/Hz"]` for the hysteresis loss coefficient in the Z direction of the material. |
| set_mass_density(expression, unit) | Sets the `expression: str \| float` and `unit: Literal["kg/m^3", "kg/dm^3", "kg/cm^3", "g/m^3"]` for the mass density of the material. | 

## Attributes
| Attribute | Description |
|-----------|-------------|
| ke_x_expression | The eddy current loss coefficient in the X direction, represented as a string mathematical expression or a float value. Default is `2.923e-4`. |
| ke_x_unit | The unit of the eddy current loss coefficient in the X direction. Default is `"W/kg/T^2/Hz^2"`. |
| ke_y_expression | The eddy current loss coefficient in the Y direction, represented as a string mathematical expression or a float value. Default is `6.012e-2`. |
| ke_y_unit | The unit of the eddy current loss coefficient in the Y direction. Default is `"W/kg/T^2/Hz^2"`. |
| kh_x_expression | The hysteresis loss coefficient in the X direction, represented as a string mathematical expression or a float value. Default is `1.411e-4`. |
| kh_x_unit | The unit of the hysteresis loss coefficient in the X direction. Default is `"W/kg/T^2/Hz"`. |
| kh_y_expression | The hysteresis loss coefficient in the Y direction, represented as a string mathematical expression or a float value. Default is `6.012e-2`. |
| kh_y_unit | The unit of the hysteresis loss coefficient in the Y direction. Default is `"W/kg/T^2/Hz"`. |
| kh_z_expression | The hysteresis loss coefficient in the Z direction, represented as a string mathematical expression or a float value. Default is `3.006e-2`. |
| kh_z_unit | The unit of the hysteresis loss coefficient in the Z direction. Default is `"W/kg/T^2/Hz"`. |
| mass_density_expression | The mass density of the material, represented as a string mathematical expression or a float value. Default is `7800`. |
| mass_density_unit | The unit of the mass density. Default is `"kg/m^3"`. |