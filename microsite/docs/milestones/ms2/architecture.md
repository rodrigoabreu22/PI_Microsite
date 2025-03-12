---
sidebar_position: 5
---

# Architecture

## Diagram

![Architecture Diagram](/img/diagrams/arquitetura.png)

## Components and its interactions
### Event-driven middleware: Kafka 

The primary way to ensure the pipeline’s modules can communicate is the use of an event-driven middleware, where the modules can publish in the appropriate topics. This way, all communication through the middleware is asynchronous. With this approach, every time new data is available to be used by a certain module, it will consume the data in the corresponding topic automatically. 

So, the middleware was implemented using **Kafka**. We chose this technology because it is designed to handle large volumes of data, has low latency, and is highly used in event-driven architectures (architecture shown in the previous figure). Kafka is also excellent for transmitting data in real-time for ML applications such as forecasting and model monitoring. This technology is great for environments where data size growth is high, as it can be scaled horizontally and guarantees message durability (data retention for a defined time). The architecture of this technology also offers great fault tolerance, which is important for our solution, since no message sent between services must be lost.   

### Data processor: Pandas 

The data collected from the network must be processed before being ready to be used to train and test the ML model. That is the purpose of this module. In this stage of the pipeline, data will be cleaned, transformed and grouped together. After this step, the data will be ready to be used in the ML modules. To achieve this result, we will use the technology, Pandas. 

**Pandas** is a Python library that provides high-performance, easy-to-use data structures. This technology has data analysis tools for working with structured data. As such, it is one of the libraries used in data science and machine learning. In this way, Pandas is the ideal technology for processing the data coming from the network and preparing it for use in training models. 

### APIs: FastAPI 

It is important that the pipeline’s modules can communicate with each other. One way of doing it is through well define APIs. Not all modules in an API to communicate with others. Like we said before there is another way for them to communicate and that is through the event-driven middleware. 

**FastAPI** is a modern web framework that is relatively fast and used to build APIs in Python and which automatically produces documentation of the implemented APIs (OpenAPI and Swagger). This framework is simple and easy to use, reducing development and maintenance time. It is also important to note that it is compatible with Pytorch and Scikit-learn, facilitating integration into MLOps pipelines. FastAPI is therefore an efficient and fast way to produce APIs, without wasting time documenting them. 

### Data storage: influxDB and ClickHouse 

It is a requirement of the project that our pipeline stores the data instead of using an external service. So, to accommodate this necessity, we have a data storage module where all data is kept on-premise. This module has a middleware and two databases. The middleware agent is responsible for fetching the data present in the event-driven middleware (Kafka), and deciding in which database it should store the data. This decision is made according to the nature of the data. The raw data fetch from the 5G core network functions is stored in our time series database (influxDB) and the processed data is stored in the data warehouse (ClickHouse). 

- **InfluxDB** is a high-performance, open-source time series database. It is optimized to handle high write rates and real-time analysis, making it ideal for use cases such as IoT sensor data and monitoring. It also has a query language similar to SQL but specified for time series data. In this way, influxDB is an excellent choice to integrate into our pipeline and use as the main source of storage for data received from the network, since this data comes from IoT sensors and there is great importance in maintaining the chronological order of the time record in which it was collected. 

- **ClickHouse** is an open-source column-oriented database that stands out for its high performance as a data warehouse for storing analytical and time series data. It has a query language similar to SQL and is optimized for high-speed queries on large data sets, making it an excellent choice for analyzing large volumes of data. It is also important to mention its efficient storage with advanced compression techniques, which reduce the cost of storage (something crucial when working with large volumes of data). Therefore, ClickHouse is the perfect choice for storing processed data, ready to be used to train the ML model, and data from the model's inference, which is then distributed to data consumers. 

### ML training and inference: Scikit-learn, PyTorch and Keras 

The key component of our pipeline is the ML model. To guarantee that our model is capable of inferring with a certain measure of precision, it’s necessary to have a module where we can train and test the ML model, before deploying it. This is exactly the responsibility of the ML training model. This component uses the processed data stored in the data warehouse to train the model. To better train and test the ML model we decided to use technologies like Scikit-learn and PyTorch. After the validation of the model, it is sent to the inference module, and the inference process is ready to start. The inference can be done automatically with the processed data stored in the data warehouse or by request from the data relay using the inference API. In this step, we use keras to facilitate the inference process. 

**Scikit-learn** is an open-source library for Python built on NumPy, SciPy, and Matplotlib. This library provides many supervised and unsupervised learning algorithms. Unlike other technologies, Scikit-learn is mostly used for classic ML models such as regression, clustering, classification, and pre-processing. Thus, this library is the perfect choice for an initial version of our MLOps pipeline, without having to spend a lot of time back training and inferring the ML model. As the pipeline evolves, this technology will be replaced by others such as PyTorch and Kears, which allow the use of more sophisticated models for deep learning and greater support for training and inference. 

**PyTorch** is an ML framework based on Python and the Torch library, which in turn is an open-source ML library used to create deep neural networks. This makes it one of the most widely used libraries for DL research. This framework is designed to speed up the process between research prototyping and implementation. We chose this technology because of the benefits it provides such as dynamic graph computation, which facilitates the debugging process; a simple-to-use interface and an easy-to-learn and simple-to-program structure. 

**Keras** is a deep learning API developed in Python and capable of running on different frameworks, Pytorch being one of them. This API is high-level, simple, and intuitive for building neural networks. Through it, it is possible to train ML models (together with PyTorch) and make endpoints available for data inference on the same previously trained models. In this way, the process of training and deploying the ML model becomes easier, due to a certain level of abstraction that keras provides. 

### Dashboard interface: Chronograf 

Before trying to integrate the pipeline in the 5G core network, we need to simulate the behavior of a network function that would consume the data produced by our pipeline (process and inference data) so we can validate it. The easiest way to visualize this data is to use a dashboard where we can display all the metrics. Instead of wasting time building a dashboard from scratch, we can use technologies that make the process easier and faster. So, on that note, we decided to use Chronograf developed by InfluxData. 

**Chronograf** is a data visualization and monitoring tool used to analyze various metrics and records obtained in real-time. It offers a complete dashboarding solution for visualizing data. With it, we can easily clone a pre-canned dashboard (over 20 pre-canned dashboards). This saves a lot of development time since you don't have to make a complete interface from scratch with a specialized framework. Chronograf allows us to use Flux or the InfluxQL queries to fetch and analyze data. This tool makes it easy to develop dynamic and customizable interfaces without a great deal of effort and time, making it the perfect choice for simulating the operation of a 5G core network function that consumes the data provided by the pipeline. 