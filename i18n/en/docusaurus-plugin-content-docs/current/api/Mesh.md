---
sidebar_position: 8
title: "Mesh"
---

# Mesh

The `mesh` attribute of [`Project`](/docs/api/Project) instance, corresponds to the [Mesh Checkpoint](/docs/docs/mesh) in the user interface. It controls various mesh settings for the simulation. It is an instance of the `MeshData` class, which can be imported from `eMotorSolution.CheckPoints.Mesh.Mesh`.

:::tip[Parameters]
- **algorithm_init**: `Literal["MeshAdapt", "Automatic", "Initial mesh only", "Delaunay", "Frontal-Delaunay", "BAMG", "Frontal-Delaunay for Quads", "Packing of Parallelograms", "Quasi-structured Quad"]` One of the supported mesh algorithms. Default is `MeshAdapt`.
- **recombine**: `bool` Whether to recombine the mesh. Default is `False`.
- **recombinition_algorithm_init**: `Literal[ "simple", "blossom", "simple full-quad", "blossom full-quad"]` One of the supported recombination algorithms.
- **silent**: `bool` Whether to run the mesh generation silently in GUI. Default is `False`.
- **no_hole_mesh**: `bool` Whether to disable hole meshing for topology optimization. Default is `False`.
- **full_mesh**: `bool` Whether to generate a full mesh. Default is `False`.
- **segmentation**: `bool` Whether to enable segmentation for the mesh. Default is `True`.
- **max_element_size_expression**: `str | float` The string mathematical expression or a float value for the maximum element size. 
- **max_element_size_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the maximum element size. Default is `m`.
- **tangential_divisions_expression**: `str | int` The string mathematical expression or a float value for the tangential divisions.
- **radial_divisions_expression**: `str | int` The string mathematical expression or a float value for the radial divisions.
- **stator_core_dist_min_expression**: `str | float` The string mathematical expression or a float value for the minimum stator core distance.
- **stator_core_dist_min_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the minimum stator core distance. Default is `m`.
- **stator_core_dist_max_expression**: `str | float` The string mathematical expression or a float value for the maximum stator core distance.
- **stator_core_dist_max_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the maximum stator core distance. Default is `m`.
- **stator_core_size_min_expression**: `str | float` The string mathematical expression or a float value for the minimum stator core size.
- **stator_core_size_min_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the minimum stator core size. Default is `m`.
- **stator_core_size_max_expression**: `str | float` The string mathematical expression or a float value for the maximum stator core size.
- **stator_core_size_max_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the maximum stator core size. Default is `m`.
- **stator_windings_expression**: `str | float` The string mathematical expression or a float value for the stator windings.
- **stator_windings_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the stator windings. Default is `m`.
- **stator_wedge_expression**: `str | float` The string mathematical expression or a float value for the stator wedge.
- **stator_wedge_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the stator wedge. Default is `m`.
- **stator_shaft_expression**: `str | float` The string mathematical expression or a float value for the stator shaft.
- **stator_shaft_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the stator shaft. Default is `m`.
- **rotor_core_dist_min_expression**: `str | float` The string mathematical expression or a float value for the minimum rotor core distance.
- **rotor_core_dist_min_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the minimum rotor core distance. Default is `m`.
- **rotor_core_dist_max_expression**: `str | float` The string mathematical expression or a float value for the maximum rotor core distance.
- **rotor_core_dist_max_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the maximum rotor core distance. Default is `m`.
- **rotor_core_size_min_expression**: `str | float` The string mathematical expression or a float value for the minimum rotor core size.
- **rotor_core_size_min_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the minimum rotor core size. Default is `m`.
- **rotor_core_size_max_expression**: `str | float` The string mathematical expression or a float value for the maximum rotor core size.
- **rotor_core_size_max_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the maximum rotor core size. Default is `m`.
- **rotor_magnets_expression**: `str | float` The string mathematical expression or a float value for the rotor magnets.
- **rotor_magnets_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the rotor magnets. Default is `m`.
- **rotor_holes_expression**: `str | float` The string mathematical expression or a float value for the rotor holes.
- **rotor_holes_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the rotor holes. Default is `m`.
- **rotor_shaft_expression**: `str | float` The string mathematical expression or a float value for the rotor shaft.
- **rotor_shaft_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the rotor shaft. Default is `m`.
- **rotor_surface_layer_expression**: `str | float` The string mathematical expression or a float value for the rotor surface layer.
- **rotor_surface_layer_unit**: `Literal["m", "dm", "cm", "mm", "in", "ft"]` The unit of the rotor surface layer. Default is `m`.
:::

## Methods
| Method | Description |
|--------|-------------|
| set_algorithm(type) | Sets the mesh algorithm `type: Literal["MeshAdapt", "Automatic", "Initial mesh only", "Delaunay", "Frontal-Delaunay", "BAMG", "Frontal-Delaunay for Quads", "Packing of Parallelograms", "Quasi-structured Quad"]`. |
| set_recombination_algorithm(type) | Sets the recombination algorithm `type: Literal[ "simple", "blossom", "simple full-quad", "blossom full-quad"]`. |
| set_max_element_size(value, unit) | Sets the maximum element size with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_tangential_divisions(value) | Sets the tangential divisions with `value: str \| int`. |
| set_radial_divisions(value) | Sets the radial divisions with `value: str \| int`. |
| set_stator_core_dist_min(value, unit) | Sets the minimum stator core distance with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_stator_core_dist_max(value, unit) | Sets the maximum stator core distance with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_stator_core_size_min(value, unit) | Sets the minimum stator core size with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_stator_core_size_max(value, unit) | Sets the maximum stator core size with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_stator_windings(value, unit) | Sets the stator windings with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_stator_wedge(value, unit) | Sets the stator wedge with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_stator_shaft(value, unit) | Sets the stator shaft with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_rotor_core_dist_min(value, unit) | Sets the minimum rotor core distance with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_rotor_core_dist_max(value, unit) | Sets the maximum rotor core distance with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_rotor_core_size_min(value, unit) | Sets the minimum rotor core size with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_rotor_core_size_max(value, unit) | Sets the maximum rotor core size with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_rotor_magnets(value, unit) | Sets the rotor magnets with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_rotor_holes(value, unit) | Sets the rotor holes with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_rotor_shaft(value, unit) | Sets the rotor shaft with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_rotor_surface_layer(value, unit) | Sets the rotor surface layer with `value: str \| float` and `unit: Literal["m", "dm", "cm", "mm", "in", "ft"]`. |
| set_hints() | Sets the hints . |
| run(gmsh_path) | `str` Runs the mesh generation using the specified GMSH path. |
| show() | Displays the generated mesh. |
| validate() | Returns the validation status in dictionary format. |

## Attributes
| Attribute | Description |
|-----------|-------------|
| algorithm | `Literal["MeshAdapt", "Automatic", "Initial mesh only", "Delaunay", "Frontal-Delaunay", "BAMG", "Frontal-Delaunay for Quads", "Packing of Parallelograms", "Quasi-structured Quad"]` Returns the current mesh algorithm. :warning: *read-only* |
| recombine | `bool` Sets or returns whether the mesh is recombined. |
| recombination_algorithm | `Literal[ "simple", "blossom", "simple full-quad", "blossom full-quad"]` Returns the current recombination algorithm. :warning: *read-only* |
| silent | `bool` Sets or returns whether the mesh generation is silent in GUI. |
| no_hole_mesh | `bool` Sets or returns whether hole meshing is disabled for topology optimization. |
| full_mesh | `bool` Sets or returns whether a full mesh is generated. |
| segmentation | `bool` Sets or returns whether segmentation is enabled for the mesh. |
| max_element_size | `float` Returns the evaluated maximum element size in `m`. :warning: *read-only* |
| tangential_divisions | `int` Returns the evaluated tangential divisions. :warning: *read-only* |
| radial_divisions | `int` Returns the evaluated radial divisions. :warning: *read-only* |
| stator_core_dist_min | `float` Returns the evaluated minimum stator core distance in `m`. :warning: *read-only* |
| stator_core_dist_max | `float` Returns the evaluated maximum stator core distance in `m`. :warning: *read-only* |
| stator_core_size_min | `float` Returns the evaluated minimum stator core size in `m`. :warning: *read-only* |
| stator_core_size_max | `float` Returns the evaluated maximum stator core size in `m`. :warning: *read-only* |
| stator_windings | `float` Returns the evaluated stator windings in `m`. :warning: *read-only* |
| stator_wedge | `float` Returns the evaluated stator wedge in `m`. :warning: *read-only* |
| stator_shaft | `float` Returns the evaluated stator shaft in `m`. :warning: *read-only* |
| rotor_core_dist_min | `float` Returns the evaluated minimum rotor core distance in `m`. :warning: *read-only* |
| rotor_core_dist_max | `float` Returns the evaluated maximum rotor core distance in `m`. :warning: *read-only* |
| rotor_core_size_min | `float` Returns the evaluated minimum rotor core size in `m`. :warning: *read-only* |
| rotor_core_size_max | `float` Returns the evaluated maximum rotor core size in `m`. :warning: *read-only* |
| rotor_magnets | `float` Returns the evaluated rotor magnets in `m`. :warning: *read-only* |
| rotor_holes | `float` Returns the evaluated rotor holes in `m`. :warning: *read-only* |
| rotor_shaft | `float` Returns the evaluated rotor shaft in `m`. :warning: *read-only* |
| rotor_surface_layer | `float` Returns the evaluated rotor surface layer in `m`. :warning: *read-only* |
| hints | `dict` Returns the hints for the mesh settings. :warning: *read-only* |

## Example
```python
import eMotorSolution as ems

# Load the project
project = ems.load_project("path/to/your/project.json")

# Access the mesh attributes
print("Mesh Algorithm:", project.mesh.algorithm)
print("Max Element Size:", project.mesh.max_element_size)

project.mesh.run("path/to/gmsh.exe")

project.mesh.show()
```