---
sidebar_position: 4
---

# Requirements
This section defines the specifications for the developed system’s requirements, which were gathered
through weekly meetings with project supervisors and collaborative brainstorming sessions involving all
group members. Since the project followed an agile methodology, the requirements list was continuously
refined to accommodate evolving objectives and emerging challenges.

The requirements are categorized into two main groups: general pipeline requirements and use case
specific requirements.


## Functional Requirements
The system’s functional requirements are organized into several categories according to the main aspects
of the implementation.


### Data Collection 
- The system should receive the network data via REST API call.
- The system data receiver should support JSON data format.
- The system should use the message bus to integrate the received network data in the pipeline.

### Data Processing
- The system should continuously process the raw network data and extract features.
- The system should clean irrelevant fields from the data.
- The system should use ground truth information to label received data accordingly.
- The system should use the message bus to continuously send the processed data to other pipeline components.


### Data Storage
- The system should store ground truth data in a time series database.
- The system should store raw network data in the corresponding time series database.
- The system should store processed network data in the data warehouse.
- The system should store inference data in the corresponding time series database.

### ML
- The system should apply multiple ML algorithms on training data.
- The system should apply supervised learning techniques using processed data labels.
- The system should test and evaluate all the ML models after training and select the best one to be deployed.
- The system should have a model deployment mechanism.
- The deployed model should perform inference on real-time processed network data.
- The system should automate continuous training, testing, and deployment as new volumes of training data arrive.
- The system should allow manual training via API call.
- The system should return the respective model training information via callback, after manual training request execution


### Data Visualization
- The system should have a dashboard to visualize pipeline network metrics.
- The dashboard should contain relevant information resulting from network data analytics procedures.
- The dashboard should contain model inference results on live network data.

### 5G Integration 
- The system should collect and expose network data, structuring the payload accordingly with respective 5G NFs on API calls.
- The system should be able to subscribe to event streams from 5GC components via standardized interfaces.
- The system should support the injection of synthetic 5G data for model training purposes.
- The system should support high-precision timestamping to ensure data alignment across 5G components.

### Use Case Specific Functional Requirements
- The system should be able to extract features from raw network data.
- The system should have two types of ML algorithms, to train to respectively, identify and classify anomalies.

## Non-Functional Requirements 
The system must meet the following non-functional requirements:

### Compliance & Standards

- The system should comply with 3GPP specifications for 5G data collection and exposure.

### Scalability

- The system must handle increasing volumes of network data without performance loss.
- The architecture should support the deployment of multiple ML models in parallel.

### Performance

- The model inference engine should handle 100 predictions per second with no performance degradation.
- The dashboard should update metrics with a maximum delay of 30 seconds.
- To support real-time analytics, data processing should have minimal latency and a response time below 1 millisecond.

### Security 

- The system must ensure that all data is kept on-premise.

### Maintainability

- The system codebase should follow clean coding principles and modular architecture to ease future updates.
- The system must allow modules to be replaced by others with higher performance, with minimal impact on other modules.
- The system must be easily adaptable for deployment in various network environments.
- The system must follow good MLOps practices, guaranteeing modularity, reproducibility, and full automation of the ML lifecycle.

### Reliability & Availability
- If a component fails the rest of the system must remain operational.
- All data should be persisted in respective databases.

### Interoperability
- The system must be interoperable, providing APIs and adopting standardized ML frameworks.

### Logging and Monitoring
- The system should generate structured logs if errors occur for all pipeline stages.

### Use Case Specific Non-Functional Requirements
- The binary model should reach an F1 score percentage above 90%.
- The classification model should reach an F1 score percentage above 90%.