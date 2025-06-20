---
sidebar_position: 2
title: User Defined Stator Slot
---
# ユーザー定義ステータスロット

ユーザー定義ステータスロットでは、`Points` および `Connections` の2つのパラメータを使用します。これらはステータスロット、ウェッジ、およびさまざまな巻線スタイルの形状を定義する Python の辞書型（dictionary）であり、`Points` 辞書にはスロット形状を構成する点の座標、`Connections` 辞書にはその点同士の接続方法が定義されます。

<p class="ems">![add](./img/user_def_slots_properties.png)</p>

ユーザー定義ステータスロットを選択すると、デフォルトで `SlotType111` が作成されます。<span style={{ fontFamily: 'Segoe Fluent Icons', fontSize: '1.0em' }}>&#xE70F;</span> **Edit** ボタンをクリックすると、`Points` および `Connections` をインタラクティブに編集できるダイアログが表示されます。

<p class="ems">![add](./img/user_def_slots_dialog.png)</p>

## Points

`Points` 辞書には、スロット形状を構成する点の座標と、重要な点のインデックスが含まれます。テンプレートは以下の通りです：

```python
{
    "points": {
        "point0": [point0_x_coordinate, point0_y_coordinate],
        "point1": [point1_x_coordinate, point1_y_coordinate],
        ...
    },
    "opening_top_index": "point_a",
    "opening_bottom_index": "point_b",
    "middle_bottom_index": "point_c",
    "middle_top_index": "point_d",
    "center_index": "point_e",
}
````

<p class="ems">![add](./img/user_def_slots_indices.png)</p>

## Connections

`Connections` 辞書は、`Points` 辞書内の点をどのように接続してスロット形状および各種巻線スタイルを形成するかを定義します。テンプレートは以下の通りです：

```python
{
    "slot": [
      ["connection_type", "parameter1", "parameter2", ...],
      ...
    ],
    "wedge": [
      ["connection_type", "parameter1", "parameter2", ...],
      ...
    ],
    "single_layer_winding": [
      ["connection_type", "parameter1", "parameter2", ...],
      ...
    ],
    "top_winding": [
      ["connection_type", "parameter1", "parameter2", ...],
      ...
    ],
    "bottom_winding": [
      ["connection_type", "parameter1", "parameter2", ...],
      ...
    ],
    "left_winding": [
      ["connection_type", "parameter1", "parameter2", ...],
      ...
    ],
    "right_winding": [
      ["connection_type", "parameter1", "parameter2", ...],
      ...
    ],
}
```

接続はスロットや巻線形状を閉じるように記述し、反時計回りの順序で定義する必要があります。

## 例

スクリプトで点と接続を定義することを推奨します（[Script チェックポイント](https://emsolution-ssil.github.io/eMotorSolutionDoc/docs/docs/script)）。柔軟性が高く、Python 関数の利用も可能です。

以下は、次の形状を持つユーザー定義ステータスロットの例です：

<p class="ems">![add](./img/user_def_slots_dim.png)</p>

<p class="ems">![add](./img/user_def_slots_points.png)</p>

```python
import ems
import numpy as np

stator_inner_radius = 80.95e-3  # m
n_slots = 48

w0 = 2e-3  # m
h0 = 1e-3  # m
h1 = 1e-3  # m
w1 = 5e-3  # m
h2 = 30e-3  # m
r0 = 0.5e-3  # m

p1_y = -w0 / 2
p1_x = np.sqrt(stator_inner_radius**2 - p1_y**2)
p2_x = p1_x + h0
p2_y = p1_y
p3_x = p2_x + h1
p3_y = p2_y - w1 / 2
p4_x = p3_x + h2 / 2
p4_y = p3_y
p5_x = p4_x + h2 / 2
p5_y = p4_y
p6_x = p5_x
p6_y = 0

pts = {
    "points": {
        "1": (p1_x, p1_y),
        "2": (p2_x, p2_y),
        "3": (p3_x, p3_y),
        "4": (p4_x, p4_y),
        "5": (p5_x, p5_y),
        "6": (p6_x, p6_y),
        "7": (p5_x, -p5_y),
        "8": (p4_x, -p4_y),
        "9": (p3_x, -p3_y),
        "10": (p2_x, -p2_y),
        "11": (p1_x, -p1_y),
        "12": (p3_x, 0),
        "13": (p4_x, 0),
    },
    "opening_top_index": "11",
    "opening_bottom_index": "1",
    "middle_bottom_index": "6",
    "middle_top_index": "12",
    "center_index": "13",
}

cns = {
    "slot": [
        ("line", "1", "2"),
        ("line", "2", "3"),
        ("line", "3", "4"),
        ("fillet", "4", "5", "6", r0),
        ("line", "6", "7"),
        ("line", "7", "8"),
        ("line", "8", "9"),
        ("line", "9", "10"),
        ("line", "10", "11"),
        ("line", "11", "1"),
    ],
    "wedge": [
        ("line", "1", "2"),
        ("line", "2", "3"),
        ("line", "3", "12"),
        ("line", "12", "9"),
        ("line", "9", "10"),
        ("line", "10", "11"),
        ("line", "11", "1"),
    ],
    "single_layer_winding": [
        ("line", "3", "4"),
        ("fillet", "4", "5", "6", r0),
        ("line", "6", "7"),
        ("line", "7", "8"),
        ("line", "8", "9"),
        ("line", "9", "12"),
        ("line", "12", "3"),
    ],
    "top_winding": [
        ("line", "3", "4"),
        ("line", "4", "13"),
        ("line", "13", "8"),
        ("line", "8", "9"),
        ("line", "9", "12"),
        ("line", "12", "3"),
    ],
    "bottom_winding": [
        ("fillet", "4", "5", "6", r0),
        ("line", "6", "7"),
        ("line", "7", "8"),
        ("line", "8", "13"),
        ("line", "13", "4"),
    ],
    "left_winding": [
        ("line", "3", "4"),
        ("fillet", "4", "5", "6", r0),
        ("line", "6", "13"),
        ("line", "13", "12"),
        ("line", "12", "3"),
    ],
    "right_winding": [
        ("line", "12", "13"),
        ("line", "13", "6"),
        ("line", "6", "7"),
        ("line", "7", "8"),
        ("line", "8", "9"),
        ("line", "9", "12"),
    ],
}

ems.update_parameters(
    {
        "stator_inner_radius": stator_inner_radius,
        "n_slots": n_slots,
        "pts": pts,
        "cns": cns,
    }
)
```

<a className="button" target="\_blank" href={ require("/UserDefinedSlot.zip").default } download>ユーザー定義スロットプロジェクトをダウンロード</a>


