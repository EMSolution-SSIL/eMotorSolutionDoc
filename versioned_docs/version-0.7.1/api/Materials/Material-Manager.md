---
sidebar_position: 4
title: "Material Manager"
---

# EMS Material Manager API

The optional integration uses exchange functions from `ems_material.gui.product_exchange`.

Install the released package in Python 3.11 or later:

```powershell
pip install ems-material-manager==0.1.0
```

See the [GitHub Release v0.1.0](https://github.com/EMSolution-SSIL/EMS_MaterialManager/releases/tag/v0.1.0)
or [PyPI package page](https://pypi.org/project/ems-material-manager/0.1.0/) for distribution details.

```python
from ems_material.gui.product_exchange import (
    register_emotorsolution_material,
    remembered_library_root,
    select_emotorsolution_material,
)
```

| Function | Description |
| --- | --- |
| `remembered_library_root()` | Returns the last Material Manager root used as a Preferences fallback. |
| `select_emotorsolution_material(parent)` | Opens the selector and returns a material dictionary or `None`. |
| `register_emotorsolution_material(parent, data)` | Opens the registration workflow for serialized material data. |

Imports are lazy. eMotorSolution can start without the optional package; an import/export request reports the exception in Log Panel.

## Exchange contract

The selected dictionary must have `type` equal to `non_magnet` or `magnet`. The GUI passes `material.to_dict()` to
`register_emotorsolution_material()`, so both material classes use the same serialization as the project file.

`Non_Magnet_Material` and `Magnet_Material` preserve optional provenance under `_ems_material_origin`. The metadata is copied
by `from_dict()` and `to_dict()` and is omitted when no provenance exists.

The explicitly selected root is stored under `Paths/material_manager_root`. A non-empty value must refer to an existing directory.
