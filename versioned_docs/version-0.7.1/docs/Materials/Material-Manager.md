---
sidebar_position: 4
title: Material Manager
---

# EMS Material Manager

EMS Material Manager連携を使用すると、共通材料データベースから材料をeMotorSolutionへ取り込み、
プロジェクトで作成・編集した材料をMaterial Managerへ登録できます。

この機能には、[`EMS_MaterialManager`](https://github.com/EMSolution-SSIL/EMS_MaterialManager) v0.1.0と、
アクセス可能なMaterial Manager rootが必要です。Python 3.11以上を使用してください。

```powershell
pip install ems-material-manager==0.1.0
```

- [GitHub Release v0.1.0](https://github.com/EMSolution-SSIL/EMS_MaterialManager/releases/tag/v0.1.0)
- [PyPI: ems-material-manager 0.1.0](https://pypi.org/project/ems-material-manager/0.1.0/)

## Material Manager rootの設定

1. `Preferences`を開きます。
2. `Paths > Material Manager root`を確認します。
3. `Browse`でMaterial Managerのルートフォルダを選択します。

存在しないフォルダを指定した場合は`Invalid Material Manager root`となり、設定は保存されません。

## 材料のインポート

1. `Materials`で右クリックします。
2. `Import from material manager`を選択します。
3. Material Managerの選択画面で材料を選びます。

`non_magnet`はNon-Magnet Material、`magnet`はMagnet Materialとして読み込まれます。

## 材料の登録

プロジェクト材料を選択して`Export to material manager`を実行します。登録画面で内容と保存先を確認してください。
プロジェクトに保存された材料データが交換データとして渡されます。

## 由来情報とトラブルシューティング

Material Manager由来の情報は`_ems_material_origin`に保存され、プロジェクトの保存・読み込み後も保持されます。
材料特性そのものの代わりに由来情報を使用しないでください。

画面が開かない場合は、`EMS_MaterialManager`がインストール済みであること、rootが存在すること、Log Panelの
`Material Manager import failed`または`Material Manager export failed`を確認します。

詳細な交換契約は[Material Manager API](../../api/Materials/Material-Manager)を参照してください。
