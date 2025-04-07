---
title: "Minute 8"
date: "2025-04-07"
authors: [rodrigo]
---

# Fase: MS3

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
- Apresentação MS3
- Groundtruth
- Estado da implementação
- Próximos passos

## Resumo
### Powerpoint

- Alterar última linha do SoA. -> Apontar a lacuna e o que nós vamos melhorar.
- Arquitetura -> alterar a ligação do chronograph ao service register.
- Alterar diagramando deployment -> Adicionar as novas coisas.
- Alterar foto do pacote JSON -> Dividir em 2 para ficar readable e dar highlight a partes importantes.
- Future work -> Falta falar de ML.
- Demo -> mostrar interface, logs, containers e código.
- Mostrar calendário atualizado (de forma dinâmica).



### Geral

- No processor fazer chunking. 
- Documentar tópicos do kafka.


### Groundtruth

- Match do timestamp com o timestamp do pacote.
- Usar timestamp e ports para verificar o que estava a acontecer.
- Fazer subset dos ataques.
- Timestamps: start time é o inicio da flow e last time o fim. (uma flow inclui vários pacotes)
- Carregar o CSV do groundtruth em memória.
- Se der valores diferentes, não preocupar porque pode ter havido mudanças no código do nProbe.


### ML

- O modelo só treina quando tem dados suficientes. 
- Acumula dados num buffer e depois usa para treino.

## Data Processor

- Meter o pré-processamento das queries da BD do lado do Processor.

## Notas
- Acabar o powerpoint ASAP.
- Atualizar Microsite com as coisas da MS3.



## Ficheiros relacionados

- Arquitetura do MVP
![Arquitetura do MVP](/img/diagrams/arquitetura_mvp.png)

- Arquitetura Final
![Architecture Diagram](/img/diagrams/arquitetura.png)
