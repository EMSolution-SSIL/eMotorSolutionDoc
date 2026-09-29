---
sidebar_position: 3
title: "Winding Conductor and Winding Detail"
---

# Winding Conductor and Winding Detail

`project.stator.conductor` is a `StatorConductorData` instance that defines the conductor assigned to coil regions.
`project.stator.winding` defines phase count, layer configuration, turns, parallel paths, and coil span.

```python
from eMotorSolution.Project import Project
from eMotorSolution.CheckPoints.Stator.winding_detail import compute_winding_detail

project = Project("motor.json")
project.read_props()
result = compute_winding_detail(project)
```

## Data model

The public data classes include `StatorConductorData`, `StrandedConductorData`, `FormWoundConductorData`, and
`WindingDetailSettingsData`. Important properties include `coil_style`, `coil_props`, `conductor_material`,
`insulation`, `insulation_material`, `insulation_thickness`, `endwinding_length`, `coil_resistance_per_phase`,
and `winding_detail`.

`WindingDetailResult` contains packing results, fill factors, resistance breakdown, diagnostics, and material quantities.

```python
from eMotorSolution.CheckPoints.Stator.winding_detail import (
    compute_packing_from_polygon,
    compute_winding_detail,
    plot_slot_packing,
    save_slot_packing_figure,
)
```

`StatorWindingData.set_layer_configuration()` accepts `Single`, `Distributed`, or `Concentrated` and updates the
constrained layer number and coil span. Input format version `0.5` makes `Stator.Conductor` canonical.
