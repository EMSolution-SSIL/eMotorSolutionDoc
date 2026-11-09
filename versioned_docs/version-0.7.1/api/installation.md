---
sidebar_position: 1
title: "Installations"
---

# インストール手順

eMotorSolution APIを使用するための前提条件は、Python 3.11のみです。依存パッケージを管理するため、conda仮想環境の使用を推奨します。

## 1. CodeMeter Runtimeのインストール

1. CodeMeter Runtimeダウンロードページにアクセスします：[https://www.wibu.com/us/products/codemeter/runtime.html](https://www.wibu.com/us/products/codemeter/runtime.html)
2. ご使用のOSに対応したバージョンをダウンロードしてください。
3. Webサイト上の指示に従って、CodeMeter Runtimeをインストールしてください。
4. インストール完了後、CodeMeter Runtimeを正しく初期化するため、コンピューターを再起動してください。

## 2. Conda環境のセットアップ

1. [Miniconda](https://docs.conda.io/en/latest/miniconda.html) または [Anaconda](https://www.anaconda.com/products/distribution) がインストールされていない場合は、インストールしてください。
2. Python 3.11で新しいconda環境を作成します。
    ```bash
    conda create -n emotorsolution python=3.11
    ```
3. 作成した環境をアクティベートします。
    ```bash
    conda activate emotorsolution
    ```

## 3. eMotorSolution APIのインストール

eMotorSolution APIは、eMotorSolutionチームから提供されるzipファイル `emotorsolution-<version>-API.zip` として配布されます。`<version>` はリリースのバージョン番号です（例：`0.7.1.0`）。zipファイルには以下が含まれています。

```text
emotorsolution-<version>-API.zip
├── emotorsolution-<version>-py3-none-any.whl   # eMotorSolution APIパッケージ本体
└── local_packages/                              # PyPIで提供されていない依存パッケージ
    ├── pyemsol-....whl
    ├── PythonCDT-....whl
    └── ems_motor_nt-....whl
```

1. ステップ2で作成したconda環境がアクティベートされていることを確認します。
    ```bash
    conda activate emotorsolution
    ```
2. zipファイルを任意のフォルダに展開し、ターミナルでそのフォルダ（`.whl` ファイルと `local_packages` フォルダがあるフォルダ）に移動します。
    ```bash
    cd path/to/emotorsolution-<version>-API
    ```
3. パッケージをインストールします。`<version>` はお手元のファイル名のバージョンに置き換えてください。
    ```bash
    pip install --find-links local_packages emotorsolution-<version>-py3-none-any.whl
    ```
    例えば、バージョン `0.7.1.0` の場合は次のとおりです。
    ```bash
    pip install --find-links local_packages emotorsolution-0.7.1.0-py3-none-any.whl
    ```
    `--find-links local_packages` を指定すると、同梱の依存パッケージが `local_packages` フォルダからインストールされます。その他の依存パッケージはPyPIからダウンロードされるため、インターネット接続が必要です。

:::note
`local_packages` 内のパッケージはWindows（64ビット）のPython 3.11向けにビルドされているため、Python 3.11の環境を使用してください。新しい環境へのインストールを推奨します。環境に古い `pyemsol` がすでにインストールされている場合は、上記のコマンドに `--force-reinstall` を追加してください。
:::

インストールが正常に完了したことを確認するには、次のコマンドを実行します。

```bash
python -c "import eMotorSolution; print(eMotorSolution.get_version())"
```

インストールされたバージョンが表示されます（例：`(0, 7, 1, 0)`）。
