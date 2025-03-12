---
sidebar_position: 3
---

# Use Cases & Scenario
Here you can find the project Use Cases and a Scenario related to the use case we are going to implement.

## Actors
The target clients for this software are telecommunications companies, particularly those offering 5G network services and seeking to enhance the efficiency and self-optimization of their infrastructure. The primary objective is to provide a system that enables networks to autonomously optimize their performance, minimizing the need for manual intervention while improving overall service quality and user experience. 

To achieve this, we have identified two key actors: 

- **Network or Service Provider** – The primary user of the system, responsible for implementing and managing network optimization processes. 

- **Service Client** – The end-user or customer who benefits indirectly from the improved network performance resulting from the system's optimizations. 

In this model, the network/service provider interacts directly with the system, while service clients experience the benefits of enhanced network efficiency and automation. 

## Use Cases

### UC Diagram
![Use Case Diagram](/img/diagrams/UseCase.png)

In this project we aimed for only one of the identified use cases due to our limited resources and tight schedule, but the other ones may be implemented on future work. 

### Use Case to implement: Anomaly detection and fault prediction
This use case focuses on detecting abnormal patterns in network behavior, predicting potential failures before they occur, and providing actionable insights to prevent service disruptions. 

The system leverages real-time data analytics, machine learning models, and historical network performance trends to identify anomalies and predict faults. 

Priority: **High**

#### Related Scenario
A smart manufacturing facility relies on thousands of IoT sensors to control and monitor operations. These include environmental sensors that track temperature, humidity, and air quality to ensure product quality. 

Suddenly, the system detects a spike in data traffic from temperature sensors, which could indicate a malfunction or cyberattack. If left unchecked, this anomaly could lead to equipment damage or pose safety risks to nearby workers. 

In response, the network monitoring system triggers alerts, prompting real-time actions such as isolating abnormal traffic, and reallocating network resources to ensure continued safe and efficient operations. 
