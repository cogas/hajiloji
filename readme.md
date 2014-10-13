---
title: readme
layout: article
---
# readme
これは「はじめてのロジバン」です。

以下、編集用のメモ…

- - - - - - 

基本的には、Font matter には次のことを書きます：

```  
layout: post  
title: TITLE  
date: 20xx-xx-xx  
categories: cifnu 3  
prulahi: ../../  
bavlahi: /cifnu/2/
jufralist: 
  - .i mi prami do ― 愛してる。  
keywords: XXX, YYY, ZZZ,   
summary:  
  - これはこうなる  
TFq:  
  - このサイトの略称は「はじパジ」である。  
TFa: "0"  
practice:
 - hash:
     name: 次を和訳しなさい
     value: [".i mi prami do", 
			".oi do darxi mi mu'i ma"] 
 - hash:
     name: 次を和訳しなさい
     value: [".i mi prami do",
			 ".oi do darxi mi mu'i ma"] 

```

- categoriesによってアドレスが決まるので、サブカテゴリ + 章のナンバー にしておく
- prulahi と bavlahi は次のページのアドレスを書く。TOPは"../../"で。
- keywordsはその章のキーワード。
- summary はその章のまとめ。リスト
- TFq/a は○×問題。TF1qはリストで、aは0/1の文字列。0が×、1が○
- practice(A)は章末問題。hash.nameに大問、hash.valueにその問題内容。