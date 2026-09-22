---
sidebar_position: 4
title: Winding Conductor
---

# Winding Conductor

`Winding Conductor` defines the conductor structure, insulation, packing, fill factor, and phase resistance in stator slots.
The settings are shared by `Slot Packing` and the Manufacturing BOM.

## Basic workflow

1. Open `Stator`.
2. Select `Winding Conductor`.
3. Configure `Coil Style`, conductor material and dimensions, insulation, and end-winding length.
4. Use `Slot Packing` to inspect packing and phase resistance.

## Coil Style

- `Stranded`: configure the number of parallel strands and bare-wire diameter.
- `Form-Wound`: configure rectangular-conductor subdivisions, turn insulation, and internal insulation.

## Winding layout and Slot Packing

| Configuration | Layers | Coil span |
| --- | ---: | --- |
| `Single` | 1 | Fixed to pole pitch |
| `Distributed` | 2 | From 1 to pole pitch |
| `Concentrated` | 2 | Fixed to 1 |

Slot Packing accounts for conductor geometry, insulation, slot liner, and conductor clearances. Results include fill factors,
coil resistance, end-winding length, and diagnostics.

## Material ownership

The conductor material is managed by `Winding Conductor > Conductor Material`. With input format version `0.5`,
`Stator.Conductor` is canonical and the legacy `Stator.Winding.winding_material` is removed on save.

See the [Winding Conductor and Winding Detail API](../../api/Stator/winding-conductor).
