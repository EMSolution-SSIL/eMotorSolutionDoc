---
sidebar_position: 1
title: InputControl
---

# InputControl

The `MS_InputControl` class is a base class for all analysis types in the eMotorSolution API. It provides a common interface and shared functionality for managing analysis input data, including puring, serialization, the dictionary representation of the `pyemsol` input, etc.

## Methods
| Method | Description |
|--------|-------------|
| update() | Updates the input control based on the project data (e.g., materials, stator winding, rotor speed, etc.). |
| init_network() | Initializes the network settings for the analysis. It may vary based on the type of child class. |
| init_time_functions() | Initializes the time functions for the analysis. It may vary based on the type of child class. |
| save_json() | Saves the analysis data to a JSON file. |
| purge_all() | Purges all the data in the analysis, resetting it to its default state. |

## Attributes
| Attribute | Description |
|---|---|
| `name` | `str` The name of the analysis. |
| `directory` | `str` The directory where the analysis data is saved. :warning: *read-only* |
| `path` | `str` The file path to the analysis JSON file. :warning: *read-only* |
| `input_control` | `dict` The dictionary representation of the `pyemsol` input for the analysis. |

