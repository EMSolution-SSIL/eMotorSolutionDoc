---
sidebar_position: 3
title: スクリプト(Script)
---

# スクリプトチェックポイント

**スクリプトチェックポイント**および**スクリプトタブ**は、Python 用に設計された柔軟なコーディング環境を提供します。この環境により、ユーザーはプログラムを完全にコントロールできるようになり、以下のことが可能になります：

- パラメータを動的に定義・変更する  
- 計算やカスタム分析を実行する  
- 結果を後処理して有益な洞察を抽出する  
- 最適化機能などを備えた幅広い Python パッケージを活用し、生産性を向上させ、高度な機能を実現する  

この機能は、ワークフローをカスタマイズし特定の目標を達成したいユーザーに最適な、インタラクティブで柔軟な作業スペースです。

Python スクリプトは `project_dir/scripts/` ディレクトリに保存されています。スクリプトタブに表示したいスクリプトを選ぶには、プロパティエディタパネルの `Script Path` フィールドに対象ファイル名を入力してください。ファイルが指定されていない場合は、`main.py` がデフォルトのエントリポイントとして使用されます。

## `ems` モジュール
スクリプト環境では `ems` モジュールが自動的にインポートされます。このモジュールは、プロジェクト環境とのやりとり、パラメータ管理、さまざまな操作を行うための関数やクラスを提供します。

### 関数一覧

- `ems.get_cwd() -> str`: 現在の作業ディレクトリを返します  
- `ems.get_parameters() -> dict`: プロジェクト内で定義されたすべてのパラメータの辞書を返します  
- `ems.update_parameters(params: dict)`: 指定した辞書でパラメータを更新します（新規追加や変更が可能）  
- `ems.pop_parameter(name: str)`: 指定したパラメータを削除します  
- `ems.validate() -> dict`: チェックポイントやマイルストーンを検証し、結果（エラーや警告を含む）を返します  
- `ems.update()`: パラメータや依存関係を再評価してプロジェクト環境を更新します  
- `ems.generate_mesh(stator_path:str, rotor_path:str, silent:bool=False)`: 指定されたステータおよびロータのパスからメッシュを生成します  
- `ems.get_analysis(name:str) -> dict`: 指定された解析名に対応する設定情報を取得します  
- `ems.update_analysis(name:str, input_control:dict)`: 入力制御辞書を使って解析設定を更新します  
- `ems.run_analysis(name:str)`: 指定された解析を実行します  
- `ems.stop()`: 現在の計算を停止します  
- `ems.stop_requested() -> bool`: 停止リクエストがあるかを確認し、あれば `True` を返します  

### 新しいパラメータの追加方法

1. **スクリプトタブを使う方法**  
以下のようにスクリプト内で直接追加：
```python
import ems
par = 10
ems.update_parameters({"par": par})
```

2. **プロパティエディタパネルを使う方法**  
プロパティエディタパネル内の <span style={{ fontFamily: 'Segoe Fluent Icons', fontSize: '1.0em' }}>&#xF8AA;</span> ボタンをクリックしてパラメータを追加。名前と値を入力するポップアップが表示され、対応するコードスニペットもスクリプトタブに自動生成されます。

### パラメータの削除

以下のいずれかで削除可能：

- プロパティエディタで   <span style={{ fontFamily: 'Segoe Fluent Icons', fontSize: '1.0em' }}>&#xE74D;</span> をクリックして削除したいパラメータを選ぶ  
- スクリプト内で次のコードを使用：
```python
ems.pop_parameter("par")
```

### Print と Pretty Print

ログパネルにメッセージを表示するには `print` を使用：
```python
print("Hello World")
```

辞書を整形して表示するには `pprint` モジュールを使用：
```python
pprint({"key": "value"})
```

### 重い計算の停止方法

`ems.stop()` と `ems.stop_requested()` を使って長時間の計算を中断できます。以下はその一例：
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
    sleep(1) # 重い計算処理
```