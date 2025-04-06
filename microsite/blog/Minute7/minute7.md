---
title: "Minute 7"
date: "2025-03-31"
authors: [rodrigo]
---

# Fase: MS3

## Método
**Presencial**

## Duração
**9:00 - 10:00**

## Supervisores presentes
- Rafael Teixeira ✔️
- Rafael Direito ❌

## Membros presentes
- Rodrigo Abreu ✔️
- Eduardo Lopes ✔️
- João Neto ✔️
- Hugo Ribeiro ✔️
- Jorge Domingues ✔️

## Assuntos discutidos
- Dúvidas e problemas na implementação.

## Resumo
- Nos dados, apresentar só se é ataque ou não é ataque -> tem mais accuracy.
- Com base no csv gerado por eles conseguimos tirar os identificadores.
- NUSW_NB15 groundtruth, com base neste conseguimos identificar qualquer um deles.
- Conseguimos saber quanto cada ataque aconteceu.
- Mesmo ip/porto de ataque: pode atacar ou não atacar, ou atacar de forma diferente. Ver os timestamps do ataque.
- Filtrar por src ip e filtrar com o timestamp. Se não acontecer nada é não ataque.
- Tudo o que estivar naquele csv é ataque. O que não estiver não é ataque.
- Espetar este csv na bd e fazer queries à bd. Ou usar frameworks do python.
- Treinar modelos é dados históricos.
- Não temos groundtruth no live data.
- Conjunto de dados históricos pré-carregados na bd.
- O edu concluiu coisas da implementação.
- nprobe funciona em batch.
- Se ele funciona por conexão temos de ter a certeza que todas as comunicações já comunicaram.
- Tem que se analisar o nprobe.
- Os dados raw são mandados para a timeseries. Num dado momento o processor vais buscar à timeseries quando for preciso processar.
- Usar o scapy.
- A conversão dos dados (bytes dos pacotes) faz-se no Data Receiver. -> diminui o numero de conversões. 
- Meter em pcap no processor, se tiver de ser.
- Quanto menos conversões melhor.
- Ver o tamanho das batches que nós temos.
- Normalização faz-se quando tivermos de carregar para o dataset de treino.
- E vai depender de como estivermos a dividir o dataset.
- Dependendo do algoritmo do modelo, usaremos diferentes tipos de normalização.
- InfluxDB está indexado ao tempo e aproveitaremos para fazer queries com base nisto.
- Data drift obriga o retraining e redployment e do modelo.
- Dados de treino têm sempre ground truth, exceto se for unsupervised learning.

#### Depois do mvp:
- Implementar os standards.
- Service register não vai ser implementado, a menos que terminemos cedo.


## Notas
- Focar em ter um produto funcional no MVP.
- Demo conta muito -> Ter um dashboard com métricas relevantes.
- Estamos atrasados, acelerar nesta iteração.
