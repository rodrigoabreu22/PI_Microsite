---
title: "Minute 5"
date: "2025-03-17"
authors: [rodrigo]
---

# Fase: MS3

## Método
**Presencial**

## Duração
**10:00 - 11:00**

## Supervisores presentes
- Rafael Teixeira ✔️
- Rafael Direito ✔️
- Rui Aguiar ✔️

## Membros presentes
- Rodrigo Abreu ✔️
- Eduardo Lopes ✔️
- João Neto ✔️
- Hugo Ribeiro ✔️
- Jorge Domingues ✔️

## Assuntos discutidos
- Primeiros passos da implementação
- Data Producer

## Resumo
- Usámos o **poetry** para dar build ao projeto e fazer a gestão das dependências.
- Orientador Rafael Teixeira explicou-nos como integrar os kubernetes para deployment do projeto, mas não é muito importante. Usar containers docker por agora.
- **Apresentação do producer** -> tem erros, principalmente o facto de tentar pôr os dados numa classe python desde o início, o que não é correto. O dataset tem muitos outliers.
- Tratar dos outliers apenas no **Data Processor**
- Meter **Data Producer** e ***Data Receiver** a comunicar com o **kafka** por agora. Mais tarde, usar as APIs.
- Meter o **Data Producer** a enviar dados periodicamente para o respetivo tópico, para o receiver conseguir obtê-los.
- Influx DB já está dockerized.
- Vamos precisar de um componente na arquitetura que indique aos clientes as possiveis métricas que podem consumir. **Metadados**
- Esse componente pode não ser implememntado, mas tem de estar atualizado.
- Establecer dentro dos possiveis a API para desponibilizar as nossas insishts com o 3gpp.
- Orientador Rafel Direito recomendou um diagrama de sequência para mostrar o fluxo de mensagens entre os componentes.
- Apresentação ter sido corrido mal não é assim tão relevante -> focar no produto final e ter boa documentação.

## Notas
- Sanitizing dos dados com erros.
- Focar nos dados. ML é um bonus.
- *Prometer pouco e entregar muito.* -> Rafael Teixeira
- Diagrama de Sequência ASAP

## Ficheiros relacionados

