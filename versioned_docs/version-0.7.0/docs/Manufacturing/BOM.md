---
sidebar_position: 2
title: Manufacturing BOM
---

# Manufacturing BOM

`Manufacturing > BOM`は、モータの主要材料について体積・質量を集計するManufacturing Bill of Materialsです。

## 使用方法

1. `Materials`で材料のManufacturing情報と密度を設定します。
2. `Winding Conductor`で導体と絶縁を設定します。
3. `Manufacturing > BOM`を開きます。
4. 部品別の数量、質量、診断、材料別集計を確認します。

## 状態

| 状態 | 意味 |
| --- | --- |
| `COMPLETE` | 体積と質量を計算できた項目 |
| `PARTIAL` | 体積を推定または一部条件付きで計算した項目 |
| `UNAVAILABLE` | 材料または形状情報が不足している項目 |
| `NOT_APPLICABLE` | 対象外の項目 |

現在の集計対象は、ステータ・ロータ積層、磁石、巻線導体、巻線絶縁です。工程、購買帳票、歩留まり、
電磁気部品以外の組立部品は対象外です。

GUIなしでの計算は[Manufacturing BOM API](../../api/Manufacturing/BOM)を参照してください。
