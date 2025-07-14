---
sidebar_position: 1
title: "Installations"
---

# Installations

The only pre-requisite for using the eMotorSolution API is to have Python 3.9 or higher installed on your system. You can download Python from the official website: [Python Downloads](https://www.python.org/downloads/).

The eMotorSolution API is available as a Python package, which can be installed using pip. To install the package, download the package `.whl` file provided by the eMotorSolution team and run the following command in your terminal:

```bash
pip install path/to/emotorsolution-x.y.z-py3-none-any.whl
```

To verify that the installation was successful, you can run the following command:

```bash
python -c "import emotorsolution; print(emotorsolution.get_version())"
```