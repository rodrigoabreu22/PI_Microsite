---
sidebar_position: 1
---
# Project Context

### Context

#### Networks

As the global demand for seamless connectivity, high-speed data transmission, and real-time services
continues to grow, network infrastructures must evolve to meet increasingly complex performance, scalability, and reliability requirements. These stringent requirements cannot be supported by traditional
static network architectures are no longer sufficient to support the dynamic and heterogeneous demands
of modern digital ecosystems. In this context, the fifth generation of mobile networks (5G) and Beyond-
5G (B5G) networks represent a significant technological leap, introducing capabilities such as ultra-low
latency, massive machine-type communications, and enhanced mobile broadband. However, to fully unlock the potential of these next-generation networks, a shift towards intelligent, data-driven management
and automation is essential.

The complexity of managing modern networks, ranging from physical and virtual infrastructure to
service orchestration, has reached a point where manual configuration and static policies can no longer
guarantee optimal performance. To address this, the integration of Machine Learning (ML) techniques
and Machine Learning Operations (MLOps) into network architectures is emerging as a critical approach.
These technologies enable the network to continuously learn from operational data, predict future states,
and adapt in near-real time, ultimately leading to self-managing and self-optimizing networks.

#### NWDAF

The Network Data Analytics Function (NWDAF) emerges as a pivotal component in the 5GC architecture, introduced
by 3GPP to meet the increasing demands for intelligent and automated network management. NWDAF
is a standardized function designed to collect, analyze, and expose analytics data (both real-time and
historical) to other NFs and external entities. Its primary objective is to enable closed-loop automation
by providing actionable insights that drive autonomous decision-making across the network.

Functionally, NWDAF operates as an analytics engine within the SBA of 5G, supporting multiple use
cases such as anomaly detection, mobility pattern analysis, user experience prediction, and network slice performance monitoring. It interfaces with various NFs, such as the AMF, SMF, and PCF, to gather
network metrics and expose aggregated insights through standardized APIs. This data can be consumed
by internal functions or exposed externally to application functions (AFs) and third-party systems via
the NEF, enabling intelligent orchestration and service optimization.

NWDAF supports both statistical (batch) analytics and event-driven (streaming) analytics, making
it suitable for both long-term trend analysis and real-time operational responses. By leveraging advanced
data analytics and potentially ML models, NWDAF enables the network to detect performance anomalies,
anticipate failures before they impact service quality, and dynamically adapt to traffic changes. This plays
a critical role in supporting predictive maintenance, adaptive QoS provisioning, and the self-optimization
capabilities envisioned for Beyond 5G networks.

Ultimately, NWDAF represents a foundational step toward the automation and intelligence goals of
5G, aligning network operations with MLOps principles by integrating data pipelines, model inference,
and feedback loops within the core infrastructure. Its introduction reflects the industry’s shift toward
AI-driven, data-centric networking, positioning it as a key enabler for future network evolution.

#### MLOPs Pipeline

The ML lifecycle is a continuous, iterative process that spans from initial data preparation to post-
deployment monitoring. It begins with data preparation and exploratory data
analysis (EDA), which are essential for understanding and shaping the dataset. This is followed by
model development and training, where algorithms are iteratively refined and validated. After review
and testing, models are deployed to production environments. Continuous monitoring ensures models
remain effective over time, enabling feedback-driven retraining and improvement. This cyclical structure
supports adaptability and long-term performance in dynamic, data-driven systems.

An MLOps pipeline is a structured and automated framework that manages the end-to-end lifecycle
of ML workflows, from data collection and preprocessing to model training, deployment, monitoring, and
retraining. Its goal is to ensure that ML models are delivered in a reproducible, scalable, and maintainable
way, while supporting continuous integration (CI), continuous deployment (CD), and continuous training
(CT). A mature MLOps pipeline not only accelerates experimentation and iteration cycles but also enforces automation, governance, and traceability, enabling organizations to deploy models into production
with confidence and efficiency.

In the context of this project, MLOps is central to the development of an intelligent, modular, and
scalable architecture that integrates seamlessly with 5G and B5G network components. The pipeline we
designed spans several stages, each of which contributes to the overall goal of enabling predictive and
adaptive network behavior.


### Problem
- Increase in data consuming slows the network.​
- Utilization spikes, can compromise network QoS.​
- Technical problems (latency, packet loss) cause data transmission delays.​
- Simply setting up more network and maintaining it is expensive.​

​
### Goals & Expected Results

The primary objective of this project is to design and implement a scalable and modular data analytics
architecture tailored for 5G networks, with a strong focus on integrating ML and MLOps practices
into the core of network intelligence. This architecture aims to collect and analyze data exposed by
5GC components, enabling data-driven insights, anomaly detection, and automation of network decision-making processes. Central to this effort is the development of a PoC system that demonstrates the
feasibility of using machine learning to detect anomalies and generate insights from 5GC data. The PoC
will validate the system’s ability to process real or simulated data in near real time, trigger relevant alerts
or actions based on ML outputs, and provide meaningful visualizations to operators. This measurable
outcome will help assess how ML-driven analytics can contribute to better network performance, resource
optimization, and service reliability.

To achieve these goals, the project aims to deliver several concrete outcomes. First, a collection
of representative use cases will be defined, highlighting how ML-based intelligence can be leveraged to
identify performance bottlenecks, detect anomalies, and support real-time adaptive optimizations. These
use cases will guide the architectural design and system requirements.

Second, a robust data analytics pipeline will be implemented, ensuring seamless communication between its services (from raw data collection and processing to model training and inference). The architecture will include integration with key 5G components, ensuring compatibility with the SBA and
compliance with 3GPP standards, particularly in the context of NWDAF-like behavior.

Third, the project will involve the development and integration of ML models capable of processing
network data to support classification tasks, such as anomaly detection. These models will be deployed
through an end-to-end MLOps pipeline, supporting retraining and continuous delivery of intelligence to
the network in a reliable and automated manner.

Finally, the architecture will include mechanisms for deployment, monitoring, and visualization, providing a user-friendly interface for network operators to interact with the system and gain insights into the
network’s performance and behavior. Visualization tools will support real-time observability of inference
results.