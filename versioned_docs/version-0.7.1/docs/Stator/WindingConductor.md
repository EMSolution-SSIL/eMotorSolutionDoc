---
sidebar_position: 4
title: Winding Conductor
---

# 巻線導体

`Winding Conductor`は、スロットに入る導体の構成、絶縁、導体配置、占積率、相抵抗を定義します。
設定内容は`Slot Packing`とManufacturing BOMで共通に使用されます。

## 基本手順

1. `Stator`を開きます。
2. `Winding Conductor`を選択します。
3. `Coil Style`、導体材料、導体寸法、絶縁、エンド巻線長を設定します。
4. `Slot Packing`で充填状態と相抵抗を確認します。

## Coil Style

- `Stranded`: 丸線の並列素線数と裸線径を指定します。
- `Form-Wound`: 矩形導体の径方向・接線方向の分割、ターン絶縁、内部絶縁を指定します。

## 巻線方式とSlot Packing

| 方式 | 層数 | コイルピッチ |
| --- | ---: | --- |
| `Single` | 1 | 極ピッチに固定 |
| `Distributed` | 2 | 1から極ピッチの範囲 |
| `Concentrated` | 2 | 1に固定 |

Slot Packingでは、導体断面、絶縁、スロットライナー、導体間クリアランスを考慮して占積率を計算します。
結果にはコイル抵抗、エンド巻線長、診断メッセージが含まれます。

## 材料の所有関係

巻線領域の材料は`Winding Conductor > Conductor Material`で管理します。入力形式version `0.5`では
`Stator.Conductor`が正規の所有者で、旧`Stator.Winding.winding_material`は保存時に除去されます。

Python APIは[Winding Conductor and Winding Detail API](../../api/Stator/winding-conductor)を参照してください。
