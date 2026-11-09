---
sidebar_position: 2
title: "Dimension"
---

# 寸法

<p>![dimension](./img/dimension.png)</p>

ステータおよびロータのコア寸法はここで定義します。いずれも半径となります。

- ステータ外径 (Stator Outer Radius)  
- ステータ内径 (Stator Inner Radius)  
- ロータ外径 (Rotor Outer Radius)  
- ロータ内径 (Rotor Inner Radius)  

寸法の制約はモータの構造によって異なります。

### インナーロータ型の場合：

```

Stator Outer Radius > Stator Inner Radius > Rotor Outer Radius > Rotor Inner Radius > 0

```

### アウターロータ型の場合：

```

0 < Stator Outer Radius < Stator Inner Radius < Rotor Outer Radius < Rotor Inner Radius

```

上記の制約が満たされない場合、ログパネルにエラーメッセージを表示され、Machineのチェックポイントに無効のマークがつきます。また，この状態ではジオメトリは生成されません。制約を満たす正しい寸法を入力してください。



