---
title: "Minute 1"
date: "2025-02-17"
authors: [rodrigo]
---

# Fase: MS1

## Método
**Presencial**

## Duração
**9:00 - 10:30**

## Supervisores presentes
- Rafael Teixeira ✔️
- Rafael Direito
- Rui Aguiar ✔️

## Membros presentes
- Rodrigo Abreu ✔️
- Eduardo Lopes ✔️
- João Neto ✔️
- Hugo Ribeiro ✔️
- Jorge Domingues ✔️

## Assuntos discutidos
- Dúvidas relacionadas com a implementação
- Arquitetura
- ML
- Tecnologias
- Contextualização das telecomunicações
- Microsite

## Resumo

### Considerações acerca do projeto com o orientador Rafael Teixeira

#### **Dados**
- Uma base de dados time series seria o mais adequado para o problema.
- Os dados terão de ser guardados antes de serem processados e, dependendo do pipeline, mais versões precisarão ser armazenadas.
- Os dados servirão para análise (não relacionado com ML): médias, medianas, máximos, mínimos, desvio padrão, etc.
- Trabalhar desde cedo com data streams, usando um dataset com timestamp para simular data stream.

#### **Data Lake**
- Devemos usar um host local.

#### **ML**
- Evitar que o modelo veja dados do futuro (apenas usá-los para teste) para não enviesar os resultados.
- Fazer pre-processed training.
- Não focar na complexidade do modelo no início.

#### **Tecnologias**
- TensorFlow ou Scikit-Learn podem ser úteis para ML.
- Kafka poderá ser a ferramenta mais adequada para a implementação do publish/subscribe do streaming de dados.
- Precisamos de ferramentas para monitoring.
- Grafana poderá ser útil para analisar os dados.

### Considerações acerca do projeto com o orientador Rui Aguiar

#### **Contextualização**
- Apresentação do panorama das telecomunicações e 5G, especialmente em Portugal (exemplos da Meo, Vodafone, etc).
- Importância do software ser robusto, pois falhas podem impactar milhões de pessoas.

#### **Arquitetura 5G**
- Importante cumprir os standards, embora não seja possível cobrir todos com a API.
- Fundamental a abstração de cada componente.
- Desenvolver o software de forma modular, permitindo a substituição de partes da arquitetura para futuras melhorias.

### **Apresentação do microsite ao orientador Rafael Teixeira**

## Notas
- O primeiro passo é **data engineering**.
- Devemos usar o que já está feito sempre que possível (não reinventar a roda).
- Existem ferramentas de **Auto ML**.
- A complexidade do ML não deve ser a prioridade; focar no restante das implementações primeiro.
- A complexidade do modelo dependerá do tempo disponível no final.
- No momento, **focar na arquitetura** e deixar detalhes da implementação para depois.
