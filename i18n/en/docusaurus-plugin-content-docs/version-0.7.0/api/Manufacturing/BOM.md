---
sidebar_position: 2
title: "Manufacturing BOM API"
---

# Manufacturing BOM API

The Manufacturing BOM API is independent of the GUI and calculates material quantities and masses from a `Project`.

```python
from eMotorSolution.Project import Project
from eMotorSolution.CheckPoints.ManufacturingBOM import compute_manufacturing_bom

project = Project("motor.json")
project.read_props()
bom = compute_manufacturing_bom(project)
```

## Public API

```python
from eMotorSolution.CheckPoints.ManufacturingBOM import (
    BOMCompleteness,
    BOMDiagnostic,
    BOMItem,
    BOMStatus,
    ManufacturingBOMResult,
    MaterialSummary,
    compute_manufacturing_bom,
    save_bom_json,
    save_component_bom_csv,
    save_material_summary_csv,
)
```

- `compute_manufacturing_bom(project)` returns `ManufacturingBOMResult`.
- `BOMItem` represents one component/material quantity.
- `MaterialSummary` aggregates quantities by material.
- `BOMStatus` is `COMPLETE`, `PARTIAL`, `UNAVAILABLE`, or `NOT_APPLICABLE`.
- `ManufacturingBOMResult` exposes `items`, `material_summary`, `completeness`, `known_mass_subtotal_kg`,
  `total_mass_kg`, and `diagnostics`.

A total mass is available only when every applicable required item has a usable material density.
