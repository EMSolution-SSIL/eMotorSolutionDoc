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

`eMotorSolution` API comes with some dependencies that should be installed prior to installing the package. They are provided together as a zip file. Download the zip file provided by the eMotorSolution team and extract it to a folder on your local machine. Navigate to that folder in your terminal and run the following command:

```bash
pip install -r requirements.txt
```

It will automatically install all the required dependencies.

To verify that the installation was successful, you can run the following command:

```bash
python -c "import eMotorSolution; print(eMotorSolution.get_version())"
```