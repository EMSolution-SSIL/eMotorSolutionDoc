---
sidebar_position: 6
title: "PMSM Efficiency Map"
---

# PMSM Efficiency Map API

The `PMSM_Efficiency_Map` analysis connects eMotorSolution electromagnetic results to the `ems_motor_nt`
performance APIs and provides result parsing and plotting helpers.

```python
from eMotorSolution.CheckPoints.Analysis.PMSM.Efficiency_Map.PMSM_Efficiency_Map import (
    PMSM_Efficiency_Map,
    default_efficiency_map_input,
    normalize_efficiency_map_input,
    default_motor_rom_settings,
    normalize_motor_rom_settings,
)
```

## Input and calculation methods

- `default_efficiency_map_input()` and `normalize_efficiency_map_input(settings)` manage the normalized `ems_motor_nt` input.
- `default_motor_rom_settings()` and `normalize_motor_rom_settings(settings)` manage Speed, Torque, and Control Strategy.
- `calculate_efficiency_map(process_start_events=None)` runs the selected calculation API.
- `evaluate_motor_rom_points(...)` evaluates one or more operating points.
- `make_iron_loss_post_input_control()` prepares iron-loss post-processing input.

Supported calculation APIs include `calculate_ntcurve`, `calculate_efficiency`, `calculate_pout_limit`,
`calculate_min_current`, `calculate_nt_force`, `calculate_max_efficiency`, and `calculate_mtpv`.

## Custom loss and plot helpers

```python
from eMotorSolution.CheckPoints.Analysis.EfficiencyMapPlot import (
    list_analysis_map_files,
    resolve_analysis_data_path,
    to_analysis_data_relative_path,
    list_performance_map_quantities,
    parse_performance_map_json,
    parse_efficiency_map_csv,
)
```

`resolve_project_loss_model()` and `prepare_efficiency_map_loss_model()` resolve and validate a user-defined
loss callable. Plot helpers keep paths relative to the analysis directory and reject paths outside that directory.

## Results and statuses

The result contract includes `status`, `message`, `output_files`, and `schema_version`.
`status` is `OK` for a successful evaluation and `INFEASIBLE` when the operating point is outside constraints.
Execution failures, missing artifacts, invalid custom-loss callables, and unsupported result schema versions are errors.

The main result files are `efficiency_map_results.json`, `efficiency_map_performance_map.json`, and, when generated,
`efficiency_map_plot.csv`. Consumers must validate the major `schemaVersion` before reading a result.
