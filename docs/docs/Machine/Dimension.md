---
sidebar_position: 2
title: "Dimension"
---

# 寸法

<p>![dimension](./img/dimension.png)</p>

ステータおよびロータのコア寸法はここで定義します。

- ステータ外半径 (Stator Outer Radius)  
- ステータ内半径 (Stator Inner Radius)  
- ロータ外半径 (Rotor Outer Radius)  
- ロータ内半径 (Rotor Inner Radius)  

寸法の制約はモータのトポロジー（構造）によって異なります。

### 内部ロータ型の場合：

```

Stator Outer Radius > Stator Inner Radius > Rotor Outer Radius > Rotor Inner Radius > 0

```

### 外部ロータ型の場合：

```

0 < Stator Outer Radius < Stator Inner Radius < Rotor Outer Radius < Rotor Inner Radius

```

上記の制約が満たされない場合、ソフトウェアはログパネルにエラーメッセージを表示し、マシンのチェックポイントが無効としてマークされます。この状態では、ジオメトリは生成されません。制約が満たされるまで、正しい寸法を入力してください。



