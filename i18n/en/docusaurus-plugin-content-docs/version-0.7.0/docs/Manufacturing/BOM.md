---
sidebar_position: 2
title: Manufacturing BOM
---

# Manufacturing BOM

`Manufacturing > BOM` aggregates material volumes and masses for the main motor components.

## Workflow

1. Set manufacturing properties and densities for materials in `Materials`.
2. Configure the conductor and insulation in `Winding Conductor`.
3. Open `Manufacturing > BOM`.
4. Review component quantities, masses, diagnostics, and material summaries.

## Status values

| Status | Meaning |
| --- | --- |
| `COMPLETE` | Volume and mass were calculated |
| `PARTIAL` | Volume was estimated or calculated with limited conditions |
| `UNAVAILABLE` | Required material or geometry information is missing |
| `NOT_APPLICABLE` | The item is outside the applicable scope |

The current scope covers stator and rotor laminations, magnets, winding conductor, and winding insulation.
Process routing, purchasing forms, yield, and non-electromagnetic assembly parts are outside the scope.

See the [Manufacturing BOM API](../../api/Manufacturing/BOM) for GUI-independent calculation.
