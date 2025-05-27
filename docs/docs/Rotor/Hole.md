---
sidebar_position: 3
title: SynRM Hole
---
# Hole Checkpoint
# 空隙チェックポイント

このチェックポイントは、モータの種類が **SynRM（同期リアクタンスモータ）** の場合にロータマイルストーンに表示されます。このタイプのモーターでは、複数の空隙を持つことが可能です。各空隙はそれぞれ独立した幾何学的および材料特性を有しています。

新しい空隙を追加するには、プロパティエディターパネル内の **「Add hole」** ボタンをクリックするか、プロジェクトツリー内の **「Hole」** チェックポイントを右クリックして、コンテキストメニューから **「Add hole」** を選択します。

<p>![新しい穴を追加](./img/hole_add.png)</p>

ソフトウェアには、一般的に使用される空隙の形状があらかじめ用意されています。また、**「ユーザー定義」** オプションを選択することで、カスタムの空隙を作成することも可能です。以下の図は、使用可能な空隙の一覧を示しています。

<p>![穴-磁石ペア一覧](./img/hole_selector.png)</p>

空隙の幾何学的および材料特性は、プロパティエディターパネル内のそれぞれのセクションに表示されます。各セクションには以下の機能ボタンがあります：

- <span style={{ fontFamily: 'Segoe Fluent Icons', fontSize: '1.0em' }}>&#xE9CE;</span>：空隙をプレビュー表示
- <span style={{ fontFamily: 'Segoe Fluent Icons', fontSize: '1.0em' }}>&#xEC5B;</span>：ヒント値をログパネルに出力
- <span style={{ fontFamily: 'Segoe Fluent Icons', fontSize: '1.0em' }}>&#xE74D;</span>：該当する空隙の形状を削除
