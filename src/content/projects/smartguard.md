---
title: "SmartGuard IoT"
description: "A Real-Time Industrial Safety Ecosystem for Worker Vital & Environmental Monitoring."
tags: ["ESP32", "FreeRTOS", "WebSockets", "Flutter", "C++"]
repoLink: "https://github.com/Eyuel763/smart_helmet_monitor"
isFeatured: true
mockups: ["/images/helmet.png"]
---

### Overview
SmartGuard IoT is a comprehensive safety solution designed for high-risk industrial environments using an ESP32-based edge server and a Flutter dashboard.

### Technical Highlights
* **Multi-Core Edge Computing:** Utilized **FreeRTOS** to pin timing-sensitive biometric acquisition (MAX30100) to Core 1, preventing data loss from network overhead on Core 0.
* **Low-Latency Networking:** Engineered a full-duplex **WebSocket** channel (Port 81), achieving sub-second updates compared to traditional HTTP polling.
* **Hardware-Level Diagnostics:** Developed failure-detection algorithms to distinguish between "Safe" readings and hardware failures like disconnected probes.
* **Asynchronous State Management:** Built a reactive Flutter architecture using **Streams** to manage persistent socket connections and auto-reconnection.

### Challenges Overcome
* **Sensor Concurrency:** Solved timing issues where the pulse oximeter would block the main loop by architecting a multi-threaded FreeRTOS task structure.
* **Data Integrity:** Engineered software-based filtering to ignore transient ADC spikes from gas sensors, preventing false alarms.