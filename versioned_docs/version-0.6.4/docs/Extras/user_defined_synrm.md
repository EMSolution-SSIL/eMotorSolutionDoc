---
sidebar_position: 5
title: User Defined SynRM
---
# ユーザー定義 同期リラクタンストルクモータ（SynRM）

同期リラクタンストルクモータ（SynRM）は、複数の空孔（スロット）を持つ構造を設計できます。ユーザー定義 SynRM では、2つのパラメータ：`Points` と `Connections` を使用して、形状を構成します。

<p class="ems">![add](./img/user_def_synrm_properties.png)</p>

ユーザー定義 SynRM を選択すると、デフォルトで `Hole Type 61` が作成されます。<span style={{ fontFamily: 'Segoe Fluent Icons', fontSize: '1.0em' }}>&#xE70F;</span> **Edit** ボタンをクリックすると、`Points` および `Connections` をインタラクティブに編集できるダイアログが表示されます。

<p class="ems">![add](./img/user_def_spm_dialog.png)</p>

## Points

`Points` 辞書には、スロット形状を構成する点の座標と、中心線に関係するインデックスが含まれます。テンプレートは以下の通りです：

```python
{
    "points": {
        "point0": [point0_x_coordinate, point0_y_coordinate],
        "point1": [point1_x_coordinate, point1_y_coordinate],
        ...
    },
    "pole_top_index": "point_x",
    "pole_bottom_index": "point_y",
}
````

## Connections

`Connections` 辞書は、`Points` 内の点をどのように接続してスロット形状を構成するかを定義します。テンプレートは以下の通りです：

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
    ]
}
```

接続はスロット形状を閉じるように構成し、接続順は反時計回りにしてください。

## 例

[Script チェックポイント](https://emsolution-ssil.github.io/eMotorSolutionDoc/docs/docs/script) で点や接続を定義することを推奨します。柔軟性が高まり、Python 関数を活用可能です。

以下の例では、2つの穴を持つユーザー定義 SynRM を作成します。

<p class="ems">![add](./img/user_def_synrm_dim.png)</p>

点と接続の定義は以下の通りです：

<p class="ems">![add](./img/user_def_synrm_points.png)</p>

```python
import ems

H0 = 65e-3  # m
H1 = 2e-3   # m
H2 = 5e-3   # m
W0 = 2e-3   # m
W1 = 15e-3  # m
R0 = 0.5e-3 # m
R1 = 3e-3   # m

# 各点の座標を計算
point_a_x = H0 + H1 / 2
point_a_y = W0 / 2

point_b_x = H0
point_b_y = W0 / 2

point_c_x = H0
point_c_y = W0 / 2 + W1 - R1

point_d_x = H0 + H1 + R1
point_d_y = point_c_y + H1 + R1

point_e_x = H0 + H1 + H2
point_e_y = W0 / 2 + W1 + H1

point_f_x = point_e_x + H1 / 2
point_f_y = point_e_y - H1 / 2

point_g_x = point_e_x
point_g_y = point_e_y - H1 / 2

point_h_x = point_e_x
point_h_y = point_e_y - H1

point_k_x = H0 + H1 + R1
point_k_y = point_c_y

point_j_x = point_k_x
point_j_y = point_k_y + R1

point_m_x = H0 + H1
point_m_y = point_c_y

point_n_x = H0 + H1
point_n_y = W0 / 2

point_x_x = H0
point_x_y = 0

# 点の定義
pts = {
    "pole_top_index": "x",
    "pole_bottom_index": "x",
    "points": {
        "a_top": (point_a_x, point_a_y),
        "b_top": (point_b_x, point_b_y),
        "c_top": (point_c_x, point_c_y),
        "d_top": (point_d_x, point_d_y),
        "e_top": (point_e_x, point_e_y),
        "f_top": (point_f_x, point_f_y),
        "g_top": (point_g_x, point_g_y),
        "h_top": (point_h_x, point_h_y),
        "j_top": (point_j_x, point_j_y),
        "k_top": (point_k_x, point_k_y),
        "m_top": (point_m_x, point_m_y),
        "n_top": (point_n_x, point_n_y),
        "a_bottom": (point_a_x, -point_a_y),
        "b_bottom": (point_b_x, -point_b_y),
        "c_bottom": (point_c_x, -point_c_y),
        "d_bottom": (point_d_x, -point_d_y),
        "e_bottom": (point_e_x, -point_e_y),
        "f_bottom": (point_f_x, -point_f_y),
        "g_bottom": (point_g_x, -point_g_y),
        "h_bottom": (point_h_x, -point_h_y),
        "j_bottom": (point_j_x, -point_j_y),
        "k_bottom": (point_k_x, -point_k_y),
        "m_bottom": (point_m_x, -point_m_y),
        "n_bottom": (point_n_x, -point_n_y),
        "x": (point_b_x, point_x_y),
    },
}

# 接続定義
cns = {
    "holes": [
        [
            ("fillet", "a_top", "b_top", "c_top", R0),
            ("arc", "c_top", "k_top", "d_top"),
            ("line", "d_top", "e_top"),
            ("arc", "e_top", "g_top", "f_top"),
            ("arc", "f_top", "g_top", "h_top"),
            ("line", "h_top", "j_top"),
            ("arc", "j_top", "k_top", "m_top"),
            ("fillet", "m_top", "n_top", "a_top", R0),
        ],
        [
            ("fillet", "a_bottom", "b_bottom", "c_bottom", R0),
            ("arc", "c_bottom", "k_bottom", "d_bottom"),
            ("line", "d_bottom", "e_bottom"),
            ("arc", "e_bottom", "g_bottom", "f_bottom"),
            ("arc", "f_bottom", "g_bottom", "h_bottom"),
            ("line", "h_bottom", "j_bottom"),
            ("arc", "j_bottom", "k_bottom", "m_bottom"),
            ("fillet", "m_bottom", "n_bottom", "a_bottom", R0),
        ],
    ]
}

# パラメータの更新
ems.update_parameters(
    {
        "pts": pts,
        "cns": cns,
    }
)
```

<a className="button" target="\_blank" href={ require("/UserDefinedSynRM.zip").default } download>ユーザー定義 SynRM プロジェクトをダウンロード</a>