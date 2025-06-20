---
sidebar_position: 4
title: User Defined SPM
---
# ユーザー定義 表面埋込型永久磁石（SPM）

表面埋込型永久磁石モータ（SPM）は、複数のスロットを持ち、各スロットに複数の永久磁石を配置することができます。また、各磁石には個別の磁化方向を設定できます。

ユーザー定義のスロット・マグネットでは、3つのパラメータ：`Points`、`Connections`、`Magnetization` を使用して構成されます。

<p class="ems">![add](./img/user_def_spm_properties.png)</p>

ユーザー定義のSPMが選択されると、デフォルトで `SlotM11` が作成されます。<span style={{ fontFamily: 'Segoe Fluent Icons', fontSize: '1.0em' }}>&#xE70F;</span> **Edit** ボタンをクリックすると、`Points`、`Connections`、`Magnetization` をインタラクティブに編集できるダイアログが表示されます。

<p class="ems">![add](./img/user_def_spm_dialog.png)</p>

## Points

`Points` 辞書には、スロットや磁石の形状を定義するための座標と、中心線に関連するインデックスが含まれます。テンプレートは以下の通りです：

```python
{
    "points": {
        "point0": [point0_x_coordinate, point0_y_coordinate],
        "point1": [point1_x_coordinate, point1_y_coordinate],
        ...
    },
    "pole_top_index": "point_x",
    "pole_bottom_index": "point_y",
    "core_radius_index": "point_z",
}
````

## Connections

`Connections` 辞書は、`Points` 内の点をどのように接続してスロットおよび磁石の形状を構成するかを定義します。SPM では通常、1つのスロット-磁石ペアを持ちますが、複雑な設計では複数定義することも可能です。テンプレートは以下の通りです：

```python
{
    "slots": [
        [   # 第1スロット
            ["connection_type", "parameter1", "parameter2", ...],
            ...
        ],
        [   # 第2スロット
            ...
        ],
    ],
    "magnets": [
        [   # 第1磁石
            ...
        ],
        [   # 第2磁石
            ...
        ],
    ]
}
```

接続は形状を閉じる必要があり、定義順は反時計回りとします。

## Magnetization（磁化）

`Magnetization` は、各磁石の磁化方向を定義する辞書のリストです。各磁石には、`cartesian` または `polar` の磁化方式を指定可能です。

* **cartesian（直交座標系）**：始点と終点で磁化方向を定義
* **polar（極座標系）**：中心点によって放射方向の磁化を定義

```python
[
    {
        "coordination": "cartesian",
        "starting_point": "point_x",
        "ending_point": "point_y",
    },
    {
        "coordination": "polar",
        "polar_center_point": [x_coordinate, y_coordinate],
    },
]
```

## 例

[Script チェックポイント](https://emsolution-ssil.github.io/eMotorSolutionDoc/docs/docs/script) で点や接続を定義することを推奨します。これにより柔軟性が増し、Python 関数も使用可能になります。

以下の例では、2つの磁石を持つユーザー定義SPMを作成します。どちらの磁石も x 方向に同じ磁化方向を持ちます。

<p class="ems">![add](./img/user_def_spm_dim.png)</p>

点と接続は以下の通り定義されます：

<p class="ems">![add](./img/user_def_spm_points.png)</p>

```python
import ems
import numpy as np

stator_inner_radius = 80.2e-3  # m
n_poles = 8

h0 = 10e-3  # m
w0 = 40e-3  # m
h1 = 2e-3   # m
h2 = 5e-3   # m

pole_pitch = 2 * np.pi / n_poles

# 各点の座標を計算
pa_x = stator_inner_radius * np.cos(pole_pitch / 2)
pa_y = stator_inner_radius * np.sin(pole_pitch / 2)
pb_x = stator_inner_radius - h0
pb_y = pb_x * np.tan(pole_pitch / 2)
pc_x = pb_x
pc_y =  w0 / 2
pd_x = pc_x - h1
pd_y = pc_y
pe_x = pd_x
pe_y = 0
pf_x = pe_x + h1 + h2
pf_y = 0
pg_x = pf_x
pg_y = pc_y

# 点の定義
pts = {
    "points": {
        "a_top": (pa_x, pa_y),
        "b_top": (pb_x, pb_y),
        "c_top": (pc_x, pc_y),
        "d_top": (pd_x, pd_y),
        "e": (pe_x, pe_y),
        "f": (pf_x, pf_y),
        "g_top": (pg_x, pg_y),
        "a_bottom": (pa_x, -pa_y),
        "b_bottom": (pb_x, -pb_y),
        "c_bottom": (pc_x, -pc_y),
        "d_bottom": (pd_x, -pd_y),
        "g_bottom": (pg_x, -pg_y),
        "center": (0, 0),
    },
    "pole_top_index": "f",
    "pole_bottom_index": "e",
    "core_radius_index": "e",
}

# 接続定義
cns = {
    "slots": [
        [  
            ("line", "a_top", "b_top"),
            ("line", "b_top", "c_top"),
            ("line", "c_top", "d_top"),
            ("line", "d_top", "e"),
            ("line", "e", "d_bottom"),
            ("line", "d_bottom", "c_bottom"),
            ("line", "c_bottom", "b_bottom"),
            ("line", "b_bottom", "a_bottom"),
            ("arc", "a_bottom", "center", "a_top"),
        ]
    ],
    "magnets": [
        [
            ("line", "c_top", "d_top"),
            ("line", "d_top", "e"),
            ("line", "e", "d_bottom"),
            ("line", "d_bottom", "c_bottom"),
            ("line", "c_bottom", "g_bottom"),
            ("line", "g_bottom", "f"),
            ("line", "f", "g_top"),
            ("line", "g_top", "c_top"),
        ]
    ]                  
}

# 磁化方向の定義
mgs = [
    {
        "coordination": "cartesian",
        "starting_point": "e",
        "ending_point": "f",
    },
]  

# パラメータ更新
ems.update_parameters(
    {
        "pts": pts,
        "cns": cns,
        "mgs": mgs,
    }
)
```

<a className="button" target="\_blank" href={ require("/UserDefinedSPM.zip").default } download>ユーザー定義SPMプロジェクトをダウンロード</a>