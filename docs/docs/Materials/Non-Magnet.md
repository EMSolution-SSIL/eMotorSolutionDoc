---
sidebar_position: 1
title: 非磁石材料チェックポイント
---

`Non-magnet` 材料は巻線の導電性材料、ステータおよびロータのコア材料、空気、真空などの磁石以外の材料を指します。

新しい`Non-magnet`材料を追加するには、`Materials` マイルストーンを右クリックし、`Add Non-Magnet Material` を選択します。これにより、デフォルトのプロパティを持つ新しい非磁石材料が作成されます。その後、`Properties` パネルから必要に応じて材料のプロパティを変更できます。
<p align="center">![検証](./img/add_material.png)</p>

各材料は、`Materials` マイルストーンで材料を右クリックすることで、`Validate`（検証）、`Rename`（名前変更）、`Export`（抽出）、および`Remove`（削除）が可能です。`Validate` （判定）オプションは、材料のプロパティが有効かどうかを判定し、エラーがある場合はメッセージを表示します。`Rename` （名前変更）オプションを使用すると、名前が設定されていなかった場合に材料の名前を変更できます。`Export`（抽出） オプションは、材料のプロパティを JSON 形式でエクスポートします。これは、材料を別のプロジェクトにインポートするために使用できます。`Remove` （削除）オプションは、プロジェクトから材料を削除します。
<p align="center">![オプション](./img/options.png)</p>

`Non-magnet`材料には3つのタイプがあります：
- **線形 (Linear)**: これは非磁石材料のデフォルトタイプです。一定の透磁率と導電率を持ちます。
- **非線形 (Nonlinear)**: このタイプの非磁石材料は、非線形の透磁率を持ちますが、導電率は一定です。
- **異方性非線形 (Anisotropic Nonlinear)**: 導電率は一定で、方向によって透磁率が異なります。

### 線形タイプ (Linear Type)
線形タイプの非磁石材料は、一定の透磁率と導電率を持ちます。材料のプロパティは、次のパラメータによって定義されます：
- **導電率 (Conductivity)**: 材料の一定の導電率。単位は `S/m`、`S/cm`、`S/mm`、`S/um`、および `S/nm` です。デフォルト値は `0 S/m` です。
- **比透磁率 (Relative Permeability)**: 材料の一定の比透磁率。無次元量であるため、単位はありません。デフォルト値は `1` です。

<p align="center">![線形非磁石](./img/linear_non_magnet.png)</p>

線形タイプの非磁石材料の JSON 形式は次のとおりです：
```json
{
    "type": "non_magnet",
    "name": "Air",
    "_conductivity_expression": "0.0",
    "_conductivity_unit": "S/m",
    "permeability_type": "linear",
    "permeability": {
        "_realative_permeability_expression": "1.0"
    }
}
```

### 非線形タイプ (Nonlinear Type)
非線形非磁石材料は、導電率は一定で、非線形の透磁率を持つ材料に適しています。材料のプロパティは、次のパラメータによって定義されます：
- **導電率 (Conductivity)**: 材料の導電率（定数）。単位は `S/m`、`S/cm`、`S/mm`、`S/um`、および `S/nm` です。デフォルト値は `0 S/m` です。
- **B-H カーブ (B-H Curve)**: 材料の B-H カーブ。B-H カーブは、磁場強度 (H) と磁束密度 (B) の関係を表す非線形関数です。B-H カーブは、`H` と `B` のルックアップテーブルによって定義できます。単位はそれぞれ `A/m` と `T` です。
<p align="center">![validationg](./img/nonlinear_non_magnet.png)</p>
B-H カーブを編集するには、`B-H Curve` セクションの `Edit` ボタンをクリックします。これにより、B-H カーブの点を追加、編集、削除できる新しいウィンドウが開きます。B-H カーブデータを CSV 形式でインポートおよびエクスポートすることもできます。
<p align="center">![validationg](./img/bhcurve.png)</p>

JSON 形式は次のとおりです：
```json
{
    "type": "non_magnet",
    "name": "Steel",
    "_conductivity_expression": "0.0",
    "_conductivity_unit": "S/m",
    "permeability_type": "nonlinear",
    "permeability": {
        "b_unit": "T",
        "h_unit": "A/m",
        "data": [
            [
                0.0,
                0.0
            ],
            [
                1.0,
                1.0
            ],
            [
                2.0,
                1.5
            ]
        ]
    }
}
```

### 異方性非線形タイプ (Anisotropic Nonlinear Type)
異なる方向で非線形の透磁率を持つ材料は、異方性非線形材料と呼ばれます。材料のプロパティは、次のパラメータによって定義されます：
- **導電率 (Conductivity)**: 材料の一定の導電率。単位は `S/m`、`S/cm`、`S/mm`、`S/um`、および `S/nm` です。デフォルト値は `0 S/m` です。
- **B-H カーブ X (B-H Curve X)**: X 方向の材料の B-H カーブ。
- **B-H カーブ Y (B-H Curve Y)**: Y 方向の材料の B-H カーブ。
<p align="center">![validationg](./img/aniso_non_magnet.png)</p>
B-H カーブの変更は、非線形タイプと同様です。

JSON 形式は次のとおりです：
```json
{
    "type": "non_magnet",
    "name": "Steel",
    "_conductivity_expression": "0.0",
    "_conductivity_unit": "S/m",
    "permeability_type": "anisotropic nonlinear",
    "permeability": {
        "b_unit": "T",
        "h_unit": "A/m",
        "x_data": [
            [
                0.0,
                0.0
            ],
            [
                1.0,
                1.0
            ]
        ],
        "y_data": [
            [
                0.0,
                0.0
            ],
            [
                1.0,
                1.0
            ]
        ]
    }
}
```