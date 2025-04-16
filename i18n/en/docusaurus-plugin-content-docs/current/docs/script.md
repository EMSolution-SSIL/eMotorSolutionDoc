---
sidebar_position: 3
title: Script
---
# Script Checkpoint

The **Script Checkpoint** and the **Script Tab** offer a flexible coding environment designed for Python. This environment empowers users to take full control of their program by enabling them to:

- Define and modify parameters dynamically.
- Perform calculations and run custom analyses.
- Post-process results to extract meaningful insights.
- Leverage a wide range of Python packages that provide optimization capabilities and other powerful tools to enhance productivity and achieve advanced functionalities.

This feature is ideal for users who need a customizable and interactive workspace to tailor their workflows and achieve specific objectives.

Python scripts are located in the `project_dir/scripts/` directory. To choose which script appears in the Script tab, enter the desired file name in the `Script Path` field of the Property Editor panel. If you do not specify a file, `main.py` will be used as the default entry point.

## `ems` module
The `ems` module is automatically imported in the script environment. This module provides a set of functions and classes that allow you to interact with the project environment, manage parameters, and perform various operations.

- `ems.get_cwd() -> str`: Returns the current working directory of the project.
- `ems.get_parameters() -> dict`: Returns a dictionary of all parameters defined in the project environment.
- `ems.update_parameters(params: dict)`: Updates the project parameters with the provided dictionary. This function allows you to add or modify parameters dynamically.
- `ems.pop_parameter(name: str)`: Removes the specified parameter from the project environment. This function is useful for cleaning up or removing parameters that are no longer needed.
- `ems.validate() -> dict`: Validates all the checkpoints and milestones in the project. It returns a dictionary containing the validation results, including any errors or warnings encountered during the validation process.
- `ems.update()`: Updates the project environment by re-evaluating all parameters and dependencies. This function ensures that the project is in sync with any changes made to the parameters or other components.
- `ems.generate_mesh(stator_path:str, rotor_path:str, silent:bool=False)`: Generates the mesh for the specified stator and rotor paths. The `silent` parameter controls whether to suppress output messages during the mesh generation process.
- `ems.get_analysis(name:str) -> dict`: Retrieves the analysis settings for the specified analysis name. This function returns a dictionary containing the input control parameters and other relevant information for the analysis.
- `ems.update_analysis(name:str, input_control:dict)`: Updates the specified analysis with the provided input control dictionary. This function allows you to modify the parameters and settings of a specific analysis dynamically.
- `ems.run_analysis(name:str)`: Runs the specified analysis. This function executes the analysis with the current settings and parameters defined in the project environment.
- `ems.stop()`: Stops the current calculation. This function is useful for interrupting long-running calculations or processes.
- `ems.stop_requested() -> bool`: Checks if a stop request has been made. This function returns `True` if a stop request is pending, allowing you to implement mechanisms for gracefully stopping calculations.

## Adding a new parameter
There are two ways to add a new parameter to the project environment:

1. **Using the Script Tab**:  
    Add the parameter programmatically in the script by using the following code snippet:
    ```python
    import ems
    par = 10
    ems.update_parameters({"par": par})
    ```
    This approach allows you to define and update parameters dynamically within your Python script.

1. **Using the Property Editor Panel**:  
    Click on the <span style={{ fontFamily: 'Segoe Fluent Icons', fontSize: '1.0em' }}>&#xF8AA;</span> button inside the Property Editor panel to add a new parameter interactively. This will open a pop-up window where you can enter the parameter name and value. The corresponding code snippet will be automatically generated in the script tab. 

## Removing a parameter
To remove a parameter, you can either delete it from the Property Editor panel by clicking on the <span style={{ fontFamily: 'Segoe Fluent Icons', fontSize: '1.0em' }}>&#xE74D;</span> button and choosing the parameter you want to remove, or you can use the following code snippet in the script tab:
```python
ems.pop_parameter("par")
```

## Print and Pretty Print
To print a message in the log panel, you can use the `print` function. For example:
```python
print("Hello World")
```
This will display the message in the log panel.

To pretty print a dictionary, you can use the `pprint` function from the `pprint` module. For example:
```python
pprint({"key": "value"})
```
This will format the dictionary in a more readable way, making it easier to understand the structure and contents of the data.

## Stopping heavy calculations
To stop heavy calculations, you can use the `ems.stop()` and `ems.stop_requested()` functions. The `ems.stop()` function will stop the current calculation, while the `ems.stop_requested()` function can be used to check if a stop request has been made. You can use these functions to implement a mechanism for stopping long-running calculations gracefully.
```python
import ems
from time import sleep
for i in range(5):
    par += 1
    ems.update_parameters({"par": par})
    print(f"par = {par}")
    if ems.stop_requested():
        print("stop requested")
        ems.stop()
    sleep(1) # heavy computation
```
