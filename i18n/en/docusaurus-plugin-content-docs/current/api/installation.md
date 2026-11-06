---
sidebar_position: 1
title: "Installations"
---

# Installations

Currently the only pre-requisite for using the eMotorSolution API is to have Python 3.11. The recommended approach is to use a conda virtual environment to manage the dependencies. 

## 1. Install CodeMeter Runtime

1. Navigate to the official CodeMeter Runtime download page: [https://www.wibu.com/us/products/codemeter/runtime.html](https://www.wibu.com/us/products/codemeter/runtime.html)
2. Download the appropriate version for your operating system.
3. Install the CodeMeter Runtime by following the instructions on the website.
4. After installation, restart your computer to ensure the CodeMeter Runtime is properly initialized.

## 2. Setting up a Conda Environment
1. Install [Miniconda](https://docs.conda.io/en/latest/miniconda.html) or [Anaconda](https://www.anaconda.com/products/distribution) if you don't have it already.
2. Create a new conda environment with Python 3.11.
    ```bash
    conda create -n emotorsolution python=3.11
    ```
3. Activate the environment.
    ```bash
    conda activate emotorsolution
    ```

## 3. Installing the eMotorSolution API

The eMotorSolution API is distributed as a zip file, `emotorsolution-<version>-API.zip`, provided by the eMotorSolution team. `<version>` is the release number, e.g. `0.7.1.0`. The zip file contains:

```text
emotorsolution-<version>-API.zip
├── emotorsolution-<version>-py3-none-any.whl   # the eMotorSolution API package
└── local_packages/                              # dependencies not available on PyPI
    ├── pyemsol-....whl
    ├── PythonCDT-....whl
    └── ems_motor_nt-....whl
```

1. Make sure the conda environment from step 2 is activated.
    ```bash
    conda activate emotorsolution
    ```
2. Extract the zip file to a folder on your local machine, then navigate to that folder in your terminal (the folder that contains the `.whl` file and the `local_packages` folder).
    ```bash
    cd path/to/emotorsolution-<version>-API
    ```
3. Install the package. Replace `<version>` with the version in your file name.
    ```bash
    pip install --find-links local_packages emotorsolution-<version>-py3-none-any.whl
    ```
    For example, for version `0.7.1.0`:
    ```bash
    pip install --find-links local_packages emotorsolution-0.7.1.0-py3-none-any.whl
    ```
    `--find-links local_packages` lets pip install the bundled dependencies from the `local_packages` folder. The remaining dependencies are downloaded from PyPI, so an internet connection is required.

:::note
The packages in `local_packages` are built for Python 3.11 on Windows (64-bit), so the environment must use Python 3.11. We recommend installing into a new environment. If an older `pyemsol` is already installed in the environment, add `--force-reinstall` to the command above.
:::

To verify that the installation was successful, run:

```bash
python -c "import eMotorSolution; print(eMotorSolution.get_version())"
```

It prints the installed version, e.g. `(0, 7, 1, 0)`.
