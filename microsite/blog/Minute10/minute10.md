---
title: "Minute 10"
date: "2025-04-22"
authors: [rodrigo]
---

# Fase: MS4

## Método
**Presencial**

## Duração
**10:00 - 11:00**

## Supervisores presentes
- Rafael Teixeira ✔️
- Rafael Direito ✔️

## Membros presentes
- Rodrigo Abreu ✔️
- Eduardo Lopes ✔️
- João Neto ✔️
- Hugo Ribeiro ✔️
- Jorge Domingues ✔️

## Assuntos discutidos
- APIs 5G
- Componente de Machine Learning

## Resumo

### APIs 5G

- No data relay, temos de comunicar com o NRF para ir buscar um URL para saber onde fazer post dos dados (exposição default da NWDAF)
- Temos de nos registar no NRF
- Inicialmente fazer isto de forma automatica ao dar up à pipeline
- Ver NEF para ir buscar os dados
- Na resposta chega  ter o IP e a port da NF instance
- Ser compliant é passar em testes unitários e de integração.
- Escolher o que nós queremos do payload e usar


### ML 
- Ter um modelo, dar deployment e avaliá-lo.
- Escolher features, escolher modelo e submeter modelo.
- Usar diretamente o csv para termos logo muitos dados.
- Primeiro testes unitários, depois testes de integração.

#### Balancear dados de treino.
- SMOTE
- Gerar dados artificiais negativos para balancear ou cortam positivos.

- Alterar a pipeline para mandar dados mais rapidamente.
- Teste com o groundtruth é no ML Training.
- Para validar o eval é só no modelo em deployment.
- .corr_metrics no pandas -> indica a relação das features entre si.
- correlação 0 entre features é mau -> não conseguimos retirar relação.
- em princípio não precisaremos de mais do que aqueles modelos classificativos (Random Forest, XGBoosting, NN).

#### Model Testing Report:

- PRECISION: Quantidade de instâncias positivas que de facto são positivas.
- São muito usados na saúde porque não geram tantos falsos positivos
- F1: Medida que vamos considerar (balanceada).
- O que se usa hoje em dia é MCC -> Mas vamos usar F1 Score.
- Não vamos usar accuracy -> extremamente biased principalmente no nosso caso.
- Mudar de classificativo para binário para simplificar. Ver só se é ataque ou não ataque.
- Quando conseguirmos ter o binário em condições -> Passar para classificativo.
- weighted avg -> avg de acordo com as classes.
- macro avg -> desconsidera qualquer peso.

## Notas
- Próxima reunião: 30/04 14:00h


## Ficheiros Relacionados

Exemplo de um relatório de testes dos modelos.
```
2025-04-22 00:13:51,510 - INFO - Model training complete.
2025-04-22 00:20:06,972 - INFO - Starting the ML pipeline...
2025-04-22 00:20:06,972 - INFO - Fetching new training data from ClickHouse...
2025-04-22 00:20:07,024 - INFO - Fetched 8210 rows and 46 columns
2025-04-22 00:20:07,024 - INFO - Preprocessing data...
2025-04-22 00:20:07,030 - INFO - Attack labels encoded: [' Fuzzers ', ' Reconnaissance ', 'Benign', 'DoS', 'Exploits', 'Generic']
2025-04-22 00:20:07,031 - INFO - Rows with Label = 1: 39
2025-04-22 00:20:07,031 - INFO - Final dataset shape after preprocessing: (8210, 43)
2025-04-22 00:20:07,031 - INFO - Training and comparing classifiers...
2025-04-22 00:20:07,034 - INFO - Training Random Forest...
2025-04-22 00:20:07,299 - INFO - 
--- Classification Report: Random Forest ---
2025-04-22 00:20:07,303 - INFO - 
              precision    recall  f1-score   support

           1       0.00      0.00      0.00         1
           2       1.00      1.00      1.00      1636
           4       1.00      0.20      0.33         5

    accuracy                           1.00      1642
   macro avg       0.67      0.40      0.44      1642
weighted avg       1.00      1.00      1.00      1642

2025-04-22 00:20:07,303 - INFO - Training Gradient Boosting...
2025-04-22 00:20:14,447 - INFO - 
--- Classification Report: Gradient Boosting ---
2025-04-22 00:20:14,451 - INFO - 
              precision    recall  f1-score   support

           0       0.00      0.00      0.00         0
           1       0.00      0.00      0.00         1
           2       1.00      1.00      1.00      1636
           4       1.00      0.40      0.57         5

    accuracy                           1.00      1642
   macro avg       0.50      0.35      0.39      1642
weighted avg       1.00      1.00      1.00      1642

2025-04-22 00:20:14,451 - INFO - Training MLP (Neural Network)...
2025-04-22 00:20:14,639 - INFO - 
--- Classification Report: MLP (Neural Network) ---
2025-04-22 00:20:14,644 - INFO - 
              precision    recall  f1-score   support

           1       0.00      0.00      0.00         1
           2       1.00      1.00      1.00      1636
           4       0.00      0.00      0.00         5

    accuracy                           1.00      1642
   macro avg       0.33      0.33      0.33      1642
weighted avg       0.99      1.00      0.99      1642

2025-04-22 00:20:14,645 - INFO - Model training complete.
``` 
