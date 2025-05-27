---
sidebar_position: 2
title: IPMSM Hole-Magnet
---
# IPMSM Hole-Magnet

このタイプのチェックポイントは、モータの種類が **IPMSM（埋込磁石型同期モーター）** の場合にロータマイルストーンに表示されます。このタイプのモータでは、複数の埋め込み磁石（あるいは空隙）を持つことが可能です。各埋め込み磁石は、独自の幾何学的および材料特性を有しています。

新しい埋め込み磁石を追加するには、プロパティエディターパネル内の **「Add Hole-Magnet」** ボタンをクリックするか、プロジェクトツリー内の **「Hole-Magnet」** チェックポイントを右クリックして、メニューから **「Add Hole-Magnet」** を選択します。

<p>![新しい穴あき磁石を追加](./img/hole_magnet_add.png)</p>

ソフトウェアには、一般的に使用される埋め込み磁石があらかじめ用意されています。ユーザーは独自の埋め込み磁石を作成することも可能です。以下の図は、使用可能な埋め込み磁石の一覧を示しています。

<p>![磁石-穴ペア一覧](./img/hole_magnet_selector.png)</p>

各埋め込み磁石の幾何学的および材料特性は、プロパティエディターパネル内の各セクションで定義されます。各セクションには以下のボタンが含まれています：

- <span style={{ fontFamily: 'Segoe Fluent Icons', fontSize: '1.0em' }}>&#xE9CE;</span> 形状のプレビューを表示するボタン
- <span style={{ fontFamily: 'Segoe Fluent Icons', fontSize: '1.0em' }}>&#xEC5B;</span> ヒント値をログパネルに出力するボタン
- <span style={{ fontFamily: 'Segoe Fluent Icons', fontSize: '1.0em' }}>&#xE74D;</span> 該当する埋め込み磁石を削除するボタン
