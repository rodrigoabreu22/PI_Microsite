---
title: "Minute 12"
date: "2025-05-05"
authors: [rodrigo]
---

# Fase: MS4

## Método
**Presencial**

## Duração
**9:00 - 10:00**

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
- Implementação dos algoritmos de ML

## Resumo

### APIs 5G
- NWDAF é mais que o coletor. Não fazer nada com eles é estranho.
- O santard não te deve impedir.
- Solução para a implementação a ser discutida durante a semana.
- Não temos API no core 5G, é um dashboard.
- Usar de forma programática é impossível.
- Ver APIs do 5G versão alfa.
- Deixar estar o nProbe.
- Essas APIs vão dar para fazer a manutenção dos modelos.


### ML 
- o mesmo topico do consumer do clickhouse é o do ml inference
- Estamos com bons resultados nos modelos.
- Não precisamos de Deep NN (por enquanto não temos justificação para a usar) -> pode não ser necessário usar Keras
- Parar de fazer cold start ou separar o docker de forma a deixar a correr até ao processor e o resto estar separado
- API para fazer post do pickle do melhor modelo (do training para o inference)
- Modelo classificativo deve treinar só com os dados de ataques.
- muito dificil construir um modelo que distingue entre ataque e não ataque e qual o tipo de ataque
- modelo mais eficiente em inferência do que em treino

## Notas
- Mostrar nova arquitetura ao orientador Rafael Direito.
- Preparar o checkpoint 2.

## Ficheiros Relacionados
