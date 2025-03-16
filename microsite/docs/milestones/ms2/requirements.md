---
sidebar_position: 4
---

# Requirements
Here is presented the requirements elicitation methods, functional requirements (divided by the respective components) and non-functional requirements.

## Requirements Elicitation
This process was divided into four parts. The first part consisted of investigating the project's theme and its context to obtain maximum knowledge in the field of **telecommunications and 5G networks**. Next, we had to evaluate the most correct way to relate this to the **data engineering and Machine Learning** part of the project. After that, we explored the **state of the art**, evaluating other research works in the area and gathering important information for **discussion among us**.


## Functional Requirements

### Data Collection 
The system: 
- must collect and store raw data in a time series data base. 
- system should support JSON and CSV data formats. 
- system should perform data pre-processing, including cleaning, normalization, and aggregation to ensure quality and consistency. 

### Model 
The system should:
- train machine learning (ML) models using frameworks such as PyTorch or Scikit-learn. 
- allow model training with stored data. 
- implement automation in model training, supporting continuous re-training based on new data or data drift. 
- validate and test the models using the obtained metrics. 
- support a continuous deployment mechanism to automatically move validated models from the test environment to production. 
- be able to identify the relevant features for anomaly prediction. 
- not allow the use of future data to train the model. 


### Monitoring Dashboard

- Must show anomaly alerts. 
- Must show relevant metrics. 


### External Integration 
The system should:
- provide APIs so that external functions can subscribe to anomaly and failure events. 
- enable compliance with 5G architecture standards. 

## Non-Functional Requirements 

### Scalability 

- The system must efficiently process large volumes of data with a maximum processing latency of 100 milliseconds. 

### Performance 

- To support real-time analytics, data processing should have minimal latency and a response time inferior to 1 millisecond. 
- ML inference APIs should provide responses within 1 millisecond for fast decision-making. 

### Security 

- The system must be GDPR compliant and keep all data on-premise. 

### Maintainability 
The system: 
- should use modular components to allow easy updates and debugging. 
- must allow modules to be replaced by others with higher performance, with minimal impact on other modules. 
- must be easily adaptable for deployment in several network environments. 
- must follow good MLOps practices, guaranteeing modularity, reproducibility and complete automation of the ML lifecycle. 


### Interoperability 

- The system must be interoperable, making available APIs and adopting machine learning frameworks. 