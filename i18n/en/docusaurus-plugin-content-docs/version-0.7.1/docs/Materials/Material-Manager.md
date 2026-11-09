---
sidebar_position: 4
title: Material Manager
---

# EMS Material Manager

The EMS Material Manager integration imports shared material data into eMotorSolution and registers materials
created or edited in a project back to Material Manager.

The feature requires [`EMS_MaterialManager`](https://github.com/EMSolution-SSIL/EMS_MaterialManager) v0.1.0 and an
accessible Material Manager root directory. Python 3.11 or later is required.

```powershell
pip install ems-material-manager==0.1.0
```

- [GitHub Release v0.1.0](https://github.com/EMSolution-SSIL/EMS_MaterialManager/releases/tag/v0.1.0)
- [PyPI: ems-material-manager 0.1.0](https://pypi.org/project/ems-material-manager/0.1.0/)

## Configure the Material Manager root

1. Open `Preferences`.
2. Check `Paths > Material Manager root`.
3. Use `Browse` to select the Material Manager root directory.

An invalid directory produces `Invalid Material Manager root` and is not saved.

## Import a material

1. Right-click in `Materials`.
2. Select `Import from material manager`.
3. Select a material in the Material Manager selector.

`non_magnet` is deserialized as Non-Magnet Material and `magnet` as Magnet Material.

## Register a material

Select a project material and choose `Export to material manager`. Confirm the data and destination in the registration dialog.
The serialized project material is passed to the exchange workflow.

## Provenance and troubleshooting

Material Manager provenance is stored under `_ems_material_origin` and survives project save/load. Do not use provenance
metadata as a substitute for the material properties.

If the dialog does not open, verify that `EMS_MaterialManager` is installed, the root exists, and the Log Panel does not
report `Material Manager import failed` or `Material Manager export failed`.

See the [Material Manager API](../../api/Materials/Material-Manager) for the exchange contract.
