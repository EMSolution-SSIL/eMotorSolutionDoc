---
sidebar_position: 6
title: Efficiency Map
---

# 効率・性能マップ

Efficiency Mapは、PMSMの電流値と電流進角を掃引して電磁界解析を行い、
`ems_motor_nt`で効率、トルク、出力、最小電流、最大効率、MTPVなどの性能を評価する機能です。
v0.7.0では、GUIから解析、性能計算、結果表示、Motor ROMの単一運転点評価まで実行できます。

## 使用前の設定

1. `Stator > Conductor`でコイル抵抗を設定します。
2. ステータおよびロータの積層鋼板材料に鉄損係数を設定します。
3. `Analysis > PMSM > Efficiency Map`を追加します。
4. Motion、Calculation Steps、Current and Phaseを設定します。

鉄損を評価する場合は、`Use full electrical cycle`を有効にしてください。

## 性能計算

`Calculate efficiency map`では、`CalculationAPI`を選択します。

| CalculationAPI | 主な結果 |
| --- | --- |
| `calculate_ntcurve` | トルク・回転速度特性 |
| `calculate_efficiency` | 効率マップ |
| `calculate_pout_limit` | 出力制限曲線 |
| `calculate_min_current` | 最小電流曲線 |
| `calculate_nt_force` | 力関連の結果 |
| `calculate_max_efficiency` | 最大効率運転特性 |
| `calculate_mtpv` | MTPV運転特性 |

APIによって生成される成果物が異なります。CSVがないAPIでも、結果JSONが生成されていれば正常です。

## 結果とPerformance Map

主な成果物は次のとおりです。

| ファイル | 内容 |
| --- | --- |
| `Efficiency_Map_em2bm.json` | dq全格子の挙動モデル |
| `efficiency_map_nt_input.json` | `ems_motor_nt`への入力 |
| `efficiency_map_results.json` | 性能計算結果 |
| `efficiency_map_performance_map.json` | 二次元性能マップと点ごとの詳細 |
| `efficiency_map_plot.csv` | 対応APIで生成される従来形式CSV |

`Plot efficiency map`ではQuantityを選択して性能マップを表示します。JSONの`schemaVersion`の
メジャーバージョンが未対応の場合は読み込みを拒否します。

## Motor ROM単一運転点評価

Speed、Torque、Control Strategy（`AUTO`、`MIN_CURRENT`、`MAX_EFFICIENCY`）を指定して、
単一運転点を評価できます。運転点が制約外の場合は`INFEASIBLE`として結果を返し、実行エラーとは区別します。

## 状態と注意事項

- `OK`: 評価成功
- `INFEASIBLE`: 計算は完了したが制約外
- APIエラー: 入力、成果物、任意損失モデルなどの実行失敗

任意損失モデルは既存の運転点を再探索せず、結果のポスト処理に使用されます。
詳細なPython APIは[PMSM Efficiency Map API](../../api/Analyses/PMSM/PMSM_Efficiency_Map)を参照してください。
