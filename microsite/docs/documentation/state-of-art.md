---
sidebar_position: 2
---

# State of Art

In recent years, the integration of ML into 5G network operations has attracted significant attention
from both academia and industry. Several works have explored the potential of applying ML to enhance
network intelligence, with a particular focus on the NWDAF, a key enabler of data-driven automation in
5G systems. For example, Mekrache et al. [1] propose combining NWDAF with ML techniques to detect
abnormal traffic in B5G environments, while Nisha et al. [2] introduce a smart data analytics system
that leverages ML algorithms to improve communications in 5G networks. Similarly, Ferreira et al. [3]
present a demonstration system to improve network performance by analyzing function and slice loads.

Although these contributions highlight promising ML-based capabilities for network optimization and
anomaly detection, they do not address the broader lifecycle challenges associated with ML in production
systems. In particular, none of the referenced works explores CI/CD of ML models or strategies for
automatic retraining in response to evolving data patterns. This represents a critical gap, as real-world
deployments require robust MLOps practices to ensure model accuracy and relevance over time. The
absence of mechanisms to detect and mitigate model drift (where the data distribution changes and
affects model performance) further limits the practical applicability of these solutions.

Another key shortcoming across [1], [2], and [3] is the lack of end-to-end architectural considerations
that demonstrate how ML can be operationalized within NWDAF-like systems. While theoretical models
and simulations are well-explored, there remains a gap in proof-of-concept implementations that bridge
the divide between research and real-world deployment of AI-driven NFs.

In terms of feature extraction and data preparation for ML, Sarhan et al. [4] highlight the importance
of standardized and informative network features for intrusion detection. Their work points to nProbe as
an efficient and widely adopted flow exporter capable of generating rich NetFlow/IPFIX features, which
are suitable for ML-based traffic analysis. Despite its potential, existing research does not incorporate
nProbe into a fully operational ML pipeline integrated with NWDAF architectures, leaving open questions
about how such tools can be leveraged in a modular and scalable way.

In summary, while recent literature demonstrates the value of integrating ML into 5G analytics, it
often stops short of addressing the deployment, lifecycle management, and modularization challenges
required for real-world applications. This gap motivates the design of architectures that operationalize
MLOps within NWDAF-compatible systems using technologies like nProbe for data enrichment and
Kafka for real-time event streaming.


#### References

[1]​

A. Mekrache, K. Boutiba, and A. Ksentini, “Combining Network Data Analytics Function and Machine Learning for Abnormal Traffic Detection in Beyond 5G,” GLOBECOM 2023 - 2023 IEEE Global Communications Conference, Dec. 2023, https://doi.org/10.1109/globecom54140.2023.10436766.​

​[2]​

N. Nisha, Lakshman K, and R. Kumar, “A Smart Data Analytics System Generating for 5G N/W System Via ML Based Algorithms for the Better Communications,” Apr. 2024, https://doi.org/10.1109/istems60181.2024.10560068.​

[3]​

Rui Cruz Ferreira et al., “Demo: Enhancing Network Performance based on 5G Network Function and Slice Load Analysis,” Jun. 2023, https://doi.org/10.1109/wowmom57956.2023.00057.​

[4]

Mohanad Sarhan, Siamak Layeghy, and Marius Portmann. Towards a standard feature set for network
intrusion detection system datasets. Mobile Networks and Applications, 27, 2021.