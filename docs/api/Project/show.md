---
sidebar_position: 1
title: show()
---

# show
The `show` method of the `Project` class is used to visualize the machine geometry using matplotlib. This method provides a graphical representation of the motor design, allowing users to better understand the spatial relationships and dimensions involved.

## Syntax
```python
Project.show(
    legend: bool = True, 
    legend_loc: str = "upper right", 
    ax: Optional[matplotlib.axes.Axes] = None
)
```

:::tip[Parameters]
- **legend**: `bool`,  Whether to display the legend.
- **legend_loc**: `str`,  The location of the legend.
- **ax**: `Optional[matplotlib.axes.Axes]`,  The axes to plot on. If None, a new figure and axes will be created.
:::


:::tip[Returns]
- **Figure**: The matplotlib figure containing the plot.
- **Axes**: The matplotlib axes containing the plot.
:::

## Example Usage
Here is an example of how to load a project and access its parameters:

```python
import eMotorSolution as ems

# Load an existing project
project = ems.load_project("path/to/your/project.json")

# Show the machine geometry
project.show(legend=True, legend_loc="upper right")
```