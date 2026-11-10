/**
 * Denil Sunny — Portfolio AI Assistant Knowledge Base
 * Structured data extracted from portfolio content.
 * No fabricated information — all from portfolio pages.
 */

const PORTFOLIO_KB = {

  // ── PERSONAL PROFILE ──────────────────────────────────────────────
  profile: {
    name: "Denil Sunny",
    title: "Embedded Systems Engineer",
    tagline: "Innovating at the intersection of Hardware and Software",
    location: "Kottayam, Kerala, India",
    email: "denilsunny2003@gmail.com",
    phone: "+91-9656657193",
    linkedin: "https://www.linkedin.com/in/denilsunny",
    github: "https://github.com/denilsunny",
    youtube: "https://www.youtube.com/@denilsunny8708",
    bio: "Denil specialises in embedded systems, PCB design, and electronic hardware development — turning ideas into reliable, practical products. His experience spans schematic design, PCB layout, firmware development, sensor integration, and hardware debugging across microcontroller-based systems and IoT applications.",
  },

  // ── TECHNICAL SKILLS ──────────────────────────────────────────────
  skills: {
    core: [
      "Firmware Development",
      "PCB Schematic Design & Layout",
      "Sensor & Peripheral Interfacing",
      "Communication Protocols — I²C, SPI & UART",
      "Hardware Debugging & Testing",
      "IoT & Wireless Communication",
      "FreeRTOS",
      "Git / GitLab",
    ],
    microcontrollers: [
      "ESP32", "ESP32-S3", "Arduino (Uno, Nano)", "Raspberry Pi 4",
      "STM32", "Renesas",
    ],
    protocols: ["I²C", "SPI", "UART", "Wi-Fi", "LoRa", "RFID", "PWM"],
    software: [
      "ESP-IDF", "FreeRTOS", "Arduino IDE", "Python", "OpenCV",
      "TensorFlow Lite", "GRBL", "G-code",
    ],
    pcbTools: ["KiCad"],
    mechanical: ["3D Printing / 3D-Printed Frame Design"],
    languages: ["C", "C++", "Python"],
  },

  // ── WORK EXPERIENCE ───────────────────────────────────────────────
  experience: [
    {
      role: "Technology Designer Intern",
      company: "Webyfy IOT Pvt Ltd",
      duration: "May 2025 – Ongoing (Current)",
      status: "current",
      highlights: [
        "Embedded Firmware: Developed ESP32-S3 firmware using JSON-based serial communication, Wi-Fi, MQTT, and FreeRTOS for telemetry and concurrent sensor-data processing.",
        "PCB Design: Designed electronic schematics and multilayer PCB layouts using KiCad for embedded development boards, sensor interfaces, and IoT hardware.",
        "Advayam Development Platform: Contributed to hardware development and integration across multiple MCU platforms — ESP32-S3, Renesas RA4M1, RP2354B, and Vega THEJAS32.",
        "Data Simulation & Testing: Developed and tested Advayam data-simulation workflows for analog, digital, and PWM signal generation and measurement, including I²C, SPI, and UART interface validation.",
        "Industrial Hardware – Reach Board: Worked on analog and digital sensor-interface circuits — signal conditioning, input protection, electrical isolation, 4–20 mA inputs, relay outputs, pulse counting, and RS-485/Ethernet interfaces.",
        "Hardware Validation & Documentation: Performed sensor testing, PCB assembly, SMD soldering, hardware troubleshooting, technical documentation, and electronic-component inventory management.",
      ],
      technologies: ["ESP32-S3", "KiCad", "FreeRTOS", "MQTT", "Wi-Fi", "Renesas RA4M1", "RP2354B", "Vega THEJAS32", "RS-485", "Ethernet", "I²C", "SPI", "UART", "SMD Soldering", "Multilayer PCB"],
    },
    {
      role: "Embedded Systems Intern",
      company: "Agrowtein Labs Pvt. Ltd.",
      duration: "Oct 2024 – May 2025 (7 months)",
      status: "completed",
      highlights: [
        "Aqualok – Smart Fish Water Quality Monitoring: Developed a real-time fish pond monitoring system using ESP32 and LoRa-based master-slave communication, monitoring pH, dissolved oxygen, ammonia nitrogen, and temperature.",
        "Fish Feeding System: Developed a system to minimise feed waste by accurately controlling the quantity and timing of food dispensed to fish.",
        "Portable Environmental Monitoring Device: Built a compact system to monitor temperature, humidity, and CO₂ levels in real time for optimising mushroom cultivation conditions.",
        "Custom Microcontroller PCB Design: Worked on designing a versatile PCB to host a custom microcontroller for use across various embedded applications.",
        "AI-Based Algae Detection: Developed a custom dataset to train a machine learning model for estimating algae content percentage in water and implemented an automated reduction mechanism.",
      ],
      technologies: ["ESP32", "LoRa", "PCB Design", "Machine Learning", "IoT", "Sensor Integration", "I²C", "SPI", "UART", "Arduino"],
    },
  ],

  // ── EDUCATION ────────────────────────────────────────────────────
  education: [
    {
      degree: "B.Tech — Electronics & Communication Engineering",
      institution: "Amal Jyothi College of Engineering (Autonomous), Kanjirappally",
      year: 2025,
      grade: "CGPA: 8.08",
    },
    {
      degree: "Higher Secondary Education (Class XII)",
      institution: "St. John Nepumcian's Higher Secondary School, Kozhuvanal",
      year: 2021,
      grade: "97.5%",
    },
    {
      degree: "Secondary Education (Class X)",
      institution: "Sacred Heart Convent Senior Secondary School, Chengalam",
      year: 2019,
      grade: "86.8%",
    },
  ],

  // ── ACHIEVEMENTS & CERTIFICATIONS ────────────────────────────────
  achievements: [
    {
      title: "Young Innovators Programme 4.0 (YIP 4.0)",
      issuer: "K-DISC — Kerala Development and Innovation Strategic Council, Govt. of Kerala",
      date: "July 2023",
      description:
        "Recognised as a State and District Level Winner under the theme 'Business Model Innovation & Future Technologies'. Received a cash prize of ₹75,000. The winning project was the Smart Autonomous Trolley Cart.",
      tag: "🏆 State & District Winner",
    },
    {
      title: "Global Waste Management Expo — GEx Kerala '23",
      issuer: "Kerala Suchitwa Mission, LSGD, Government of Kerala",
      date: "Feb 2023",
      description:
        "Awarded for an innovative waste management idea presented at the Students' Hackathon Challenge, conducted at Marine Drive, Kochi.",
      tag: "🌿 Innovation Award",
    },
    {
      title: "Embedded Systems Internship — Agrowtein Labs",
      issuer: "Agrowtein Labs Pvt. Ltd.",
      date: "Oct 2024 – May 2025",
      description: "7-month internship in embedded systems — farm automation hardware/software.",
      tag: "💼 Experience Certificate",
    },
    {
      title: "C Programming For Beginners — Master the C Language",
      issuer: "Udemy",
      date: "Aug 2025",
      description:
        "Completed a comprehensive 25.5-hour course on C programming, covering memory management, pointers, data structures, and low-level programming fundamentals essential for embedded systems development.",
      tag: "🎓 Course Completion",
      verifyUrl: "https://www.udemy.com/certificate/UC-ca392cb4-4deb-46b8-9ade-fd15da50666b/",
    },
  ],

  // ── PROJECTS ─────────────────────────────────────────────────────
  projects: {

    // --- ESP32-S3 Quadcopter ---
    quadcopter: {
      name: "ESP32-S3 Quadcopter",
      slug: "esp32-quadcopter",
      url: "esp32-quadcopter.html",
      tags: "ESP32-S3 · MPU6050 IMU · ESP-IDF · FreeRTOS · PWM",
      summary:
        "A from-scratch quadcopter with custom MOSFET motor drivers, 3D-printed airframe, and ESP-Drone flight firmware — spanning embedded, mechanical, and PCB disciplines in one build.",
      overview:
        "Designed and built a custom quadcopter from scratch using the ESP32-S3 microcontroller. The project integrates custom MOSFET-based motor drivers on a custom PCB, a 3D-printed airframe, and uses the ESP-Drone open-source flight firmware running on ESP-IDF with FreeRTOS.",
      hardware: {
        mainController: "ESP32-S3",
        imu: "MPU6050 6-DoF IMU",
        motorDrivers: "Custom MOSFET motor drivers (designed on custom PCB)",
        frame: "3D-printed airframe",
        motors: "Brushless DC motors",
        communication: "Wi-Fi (via ESP32-S3)",
      },
      software: {
        firmware: "ESP-Drone (open-source flight firmware)",
        rtos: "FreeRTOS",
        sdk: "ESP-IDF",
        control: "PWM motor control",
        joystick: "Joystick UI for wireless control",
      },
      disciplines: ["Embedded Systems", "PCB Design", "Mechanical / 3D Printing"],
      keyFeatures: [
        "Custom MOSFET motor driver PCB",
        "3D-printed airframe design",
        "IMU-based flight stabilisation via MPU6050",
        "Wi-Fi wireless control",
        "Open-source ESP-Drone firmware integration",
      ],
    },

    // --- Smart Autonomous Trolley Cart ---
    trolley: {
      name: "Smart Autonomous Trolley Cart",
      slug: "smart-trolley",
      url: "smart-trolley.html",
      tags: "Raspberry Pi 4 · Pi Camera 2 · TensorFlow Lite · RFID · ESP Module",
      summary:
        "AI-powered hands-free shopping cart that follows its owner using real-time person detection, avoids obstacles autonomously, and checks out items via RFID — all wirelessly.",
      overview:
        "Developed a Smart Autonomous Trolley Cart that integrates embedded systems, computer vision, machine learning, and IoT to automate shopping assistance. The system uses real-time person detection and tracking to follow a designated user while maintaining a safe distance, incorporates obstacle avoidance, and RFID-based automated billing with a connected web platform.",
      awards: "Won YIP 4.0 — State & District Level Winner — Cash prize of ₹75,000",
      hardware: {
        mainProcessor: "Raspberry Pi 4",
        vision: "Pi Camera 2 — real-time video capture",
        aiAccelerator: "Google Coral USB Accelerator (Edge TPU)",
        checkout: "RFID Reader — product identification and billing",
        wireless: "ESP Module — IoT gateway for web platform",
        actuation: "Motor & Motor Driver System for autonomous wheel control",
      },
      software: {
        language: "Python",
        mlFramework: "TensorFlow Lite",
        vision: "OpenCV",
        tracking: "Custom belt-identification mechanism using colour-based filtering",
        pipeline: "TensorFlow Lite model running on Edge TPU for 300×300 frame inference",
      },
      workingPrinciple: [
        "Pi Camera 2 captures continuous real-time video frames",
        "TensorFlow Lite model detects people; colour-based filtering identifies the designated user via their wearable belt",
        "Bounding box position determines horizontal deviation and relative distance",
        "Raspberry Pi generates motor commands — forward/turn/stop — in a closed-loop cycle",
        "RFID reader captures product tags; ESP module sends data to web platform for billing",
      ],
      keyFeatures: [
        "Real-time person detection and tracking",
        "Google Coral Edge TPU acceleration",
        "Custom belt-identification mechanism",
        "Obstacle avoidance",
        "RFID-based automated billing",
        "IoT web platform for bill display",
      ],
    },

    // --- Self-Stabilizing Platform ---
    stabilizing: {
      name: "Self-Stabilizing Platform",
      slug: "self-stabilizing",
      url: "self-stabilizing.html",
      tags: "Arduino Nano · MPU6050 IMU · I²C · Servo Control",
      summary:
        "6-DoF IMU-driven gimbal that uses sensor fusion to compute real-time orientation and commands three servo motors for continuous, disturbance-rejecting balance.",
      overview:
        "Designed and developed a self-stabilizing platform using an Arduino Nano and MPU6050 6-DoF IMU to maintain a level surface despite external tilts and disturbances. The system uses real-time motion sensing, sensor fusion, and closed-loop servo control to automatically correct the platform's orientation.",
      hardware: {
        controller: "Arduino Nano",
        imu: "MPU6050 6-DoF (accelerometer + gyroscope)",
        imuInterface: "I²C protocol",
        actuators: "3× Servo Motors",
        control: "Closed-loop feedback (Roll & Pitch axes)",
      },
      software: {
        fusion: "Sensor fusion combining accelerometer and gyroscope data",
        control: "Real-time closed-loop PWM servo control",
      },
      keyFeatures: [
        "MPU6050 IMU reading over I²C",
        "Sensor fusion combining accelerometer + gyroscope",
        "Real-time roll and pitch correction",
        "3-axis servo actuation",
        "Disturbance-rejecting closed-loop control",
      ],
    },

    // --- CNC Plotter (Final) ---
    cncPlotter: {
      name: "CNC Plotter",
      slug: "cnc-plotter",
      url: "cnc-plotter.html",
      tags: "Arduino · NEMA 17 Steppers · TMC2208 Drivers · GT2 Belt · GRBL · G-code · Servo Pen Lift",
      summary:
        "Custom 2D drawing machine with G-code motion control — translating digital vector paths into precise, mechanically-driven pen strokes. Final prototype uses NEMA 17 steppers, TMC2208 silent drivers, GT2 belt drive, and GRBL firmware.",
      overview:
        "A 3-axis CNC plotter (final version) built with NEMA 17 stepper motors, TMC2208 silent drivers, GT2 belt drive system, and an Arduino running GRBL firmware. Receives G-code to control X/Y/Z axes for precise 2D vector drawing.",
      hardware: {
        controller: "Arduino (GRBL firmware)",
        steppers: "NEMA 17 Stepper Motors",
        drivers: "TMC2208 Silent Stepper Drivers",
        drive: "GT2 Belt Drive System",
        penLift: "Servo Motor (Z-axis pen lift)",
        gcode: "G-code motion control",
      },
    },

    // --- CNC Plotter Prototype 1 ---
    cncProto1: {
      name: "CNC Plotter — Prototype 1",
      slug: "cnc-plotter-proto1",
      url: "cnc-plotter-proto1.html",
      tags: "ESP32 · Wi-Fi · 28BYJ-48 Steppers · ULN2003 · SG90 Servo · G-code",
      summary:
        "Compact 2D drawing machine created by repurposing DVD player linear mechanisms. Receives G-code wirelessly over Wi-Fi via an ESP32 to drive dual 28BYJ-48 steppers and a pen-lift SG90 servo.",
      overview:
        "First CNC plotter prototype built by repurposing DVD player linear motion mechanisms for the X and Y axes. Controlled by an ESP32 that receives G-code wirelessly over Wi-Fi. Uses two 28BYJ-48 stepper motors driven by ULN2003 modules, and an SG90 servo for pen lift.",
      hardware: {
        controller: "ESP32",
        connectivity: "Wi-Fi (G-code reception)",
        steppers: "28BYJ-48 Stepper Motors (×2)",
        drivers: "ULN2003 Stepper Driver Modules",
        penLift: "SG90 Servo",
        mechanicalBase: "Repurposed DVD player linear mechanisms",
      },
      keyDifference:
        "Repurposed DVD player mechanics for X/Y motion; wireless G-code over Wi-Fi via ESP32.",
    },

    // --- CNC Plotter Prototype 2 ---
    cncProto2: {
      name: "CNC Plotter — Prototype 2",
      slug: "cnc-plotter-proto2",
      url: "cnc-plotter-proto2.html",
      tags: "Arduino Uno · 3× 28BYJ-48 Steppers · 3× ULN2003AN · 3D-Printed Frame · 3-Axis G-code",
      summary:
        "Compact 3-axis CNC plotter designed and fabricated with custom 3D-printed structural components. Controlled by an Arduino Uno driving three 28BYJ-48 stepper motors through ULN2003AN modules.",
      overview:
        "Second CNC plotter prototype with a fully custom 3D-printed chassis. Uses an Arduino Uno driving three 28BYJ-48 stepper motors (one per axis) through individual ULN2003AN stepper driver modules for precise X, Y, and Z-axis automated plotting.",
      hardware: {
        controller: "Arduino Uno",
        steppers: "3× 28BYJ-48 Stepper Motors (one per axis)",
        drivers: "3× ULN2003AN Stepper Driver Modules",
        frame: "Custom 3D-printed structural components",
        axes: "3-Axis (X, Y, Z)",
      },
      keyDifference:
        "Full 3D-printed chassis from scratch; three steppers for 3-axis control; wired Arduino Uno (no Wi-Fi).",
    },

    // --- Line Follower & Obstacle Avoider ---
    lineFollower: {
      name: "Line Follower & Obstacle Avoiding Bot",
      slug: null,
      url: null,
      tags: "IR Sensors · Ultrasonic Sensors · Arduino",
      summary:
        "Autonomous robot fusing IR line-sensing and ultrasonic obstacle detection to navigate predefined routes while dynamically avoiding real-time obstructions.",
      hardware: {
        controller: "Arduino",
        sensors: ["IR Sensors (line detection)", "Ultrasonic Sensors (obstacle detection)"],
      },
    },

    // --- Aqualok ---
    aqualok: {
      name: "Aqualok Project",
      slug: null,
      url: null,
      tags: "ESP32 · LoRa",
      summary:
        "IoT fish-farm suite: LoRa water-quality monitoring, automated feeding & AI algae detection.",
      subsystems: [
        "Smart Fish Water Quality Monitoring — real-time fish pond monitoring using ESP32 and LoRa-based master-slave communication",
        "Fish Feeding System — minimising feed waste by accurately controlling quantity and timing of food dispensed",
        "AI-Based Algae Detection — custom ML dataset/model to estimate algae content and reduce levels automatically",
      ],
    },

    // --- Portable Environmental Monitoring Device ---
    envMonitor: {
      name: "Portable Environmental Monitoring Device",
      slug: null,
      url: null,
      tags: "Environmental Sensors · Microcontroller",
      summary:
        "Compact system to monitor temperature, humidity, and CO2 levels in real time, optimised for mushroom cultivation environment conditions.",
    },
  },
};

// ── CNC Plotter Comparison ────────────────────────────────────────────
PORTFOLIO_KB.cncComparison = `
The three CNC plotter versions differ significantly:
• **Final CNC Plotter**: NEMA 17 steppers, TMC2208 silent drivers, GT2 belt drive, GRBL firmware on Arduino — the most capable and polished version.
• **Prototype 1**: Built from repurposed DVD player linear mechanisms, ESP32 with wireless Wi-Fi G-code reception, 28BYJ-48 steppers + ULN2003, SG90 servo pen lift.
• **Prototype 2**: Fully custom 3D-printed chassis, Arduino Uno, 3× 28BYJ-48 steppers + 3× ULN2003AN for 3-axis (X/Y/Z) control — no wireless.
`;

// ── Q&A RESPONSE ENGINE ───────────────────────────────────────────────
const KB = PORTFOLIO_KB;

/**
 * Find the best matching answer and navigation link for a question.
 * Returns { answer: string, link?: {label, url} }
 */
function queryKnowledgeBase(rawQuestion) {
  const q = rawQuestion.toLowerCase().trim();

  // ── Greetings ──────────────────────────────────────────────────────
  if (/^(hi|hello|hey|howdy|sup|greetings|good (morning|evening|afternoon))[\s!?.]*$/.test(q)) {
    return {
      answer:
        "Hey! 👋 Great to see you here! I'm Denil's AI assistant. Ask me about his projects, skills, experience, or anything else on this portfolio — I'm happy to help!",
    };
  }

  // ── Who is Denil ──────────────────────────────────────────────────
  if (/who is denil|tell me about denil|about denil|introduce/.test(q)) {
    return {
      answer:
        `**Denil Sunny** is an **Embedded Systems Engineer** based in Kottayam, Kerala. He specialises in **embedded systems, PCB design, and electronic hardware development** — turning ideas into reliable, practical products.\n\nHis core expertise covers **firmware development, schematic & PCB layout, sensor integration, and hardware debugging** across microcontroller-based systems and IoT applications. He completed his **B.Tech in Electronics & Communication Engineering** (CGPA 8.08) in 2025.`,
      link: { label: "About Denil →", url: "index.html#about" },
    };
  }

  // ── Contact ───────────────────────────────────────────────────────
  if (/contact|email|phone|reach|linkedin|github|social/.test(q)) {
    return {
      answer:
        `You can reach Denil at:\n• **Email:** denilsunny2003@gmail.com\n• **Phone:** +91-9656657193\n• **LinkedIn:** linkedin.com/in/denilsunny\n• **GitHub:** github.com/denilsunny\n• **Location:** Kottayam, Kerala`,
      link: { label: "Contact Denil →", url: "index.html#contact" },
    };
  }

  // ── Skills ────────────────────────────────────────────────────────
  if (/skill|expertise|proficien|capabilit|what can|what does|specialise|speciali[sz]/.test(q)) {
    return {
      answer:
        `Denil's core technical skills include:\n• **Firmware Development** — ESP32, Arduino, STM32, Renesas\n• **PCB Schematic Design & Layout**\n• **Communication Protocols** — I²C, SPI, UART, Wi-Fi, LoRa\n• **Sensor & Peripheral Interfacing**\n• **IoT & Wireless Communication**\n• **FreeRTOS** real-time operating systems\n• **Tools:** ESP-IDF, Python, OpenCV, TensorFlow Lite, GRBL\n• **Version Control:** Git / GitLab`,
      link: { label: "View Skills →", url: "index.html#about" },
    };
  }

  // ── Microcontrollers ──────────────────────────────────────────────
  if (/microcontroller|mcu|esp32|arduino|raspberry|stm32|renesas|processor/.test(q)) {
    return {
      answer:
        `Denil has hands-on experience with multiple microcontrollers:\n• **ESP32 / ESP32-S3** — used in the Quadcopter, CNC Plotter Proto 1, and Aqualok projects\n• **Arduino (Uno, Nano)** — CNC Plotters, Self-Stabilizing Platform, Line Follower\n• **Raspberry Pi 4** — Smart Autonomous Trolley Cart\n• **STM32** and **Renesas** — through academic and embedded systems exposure`,
      link: { label: "Explore All Projects →", url: "index.html#projects" },
    };
  }

  // ── PCB Design ───────────────────────────────────────────────────
  if (/pcb|schematic|circuit|layout|board design/.test(q)) {
    return {
      answer:
        `Yes, **PCB design** is one of Denil's strongest skills. His experience includes:\n• **Webyfy IOT Pvt Ltd** (current) — Multilayer PCB layouts in **KiCad** for embedded dev boards, sensor interfaces, and industrial IoT hardware (Reach Board)\n• **Agrowtein Labs** — Custom microcontroller carrier PCB design for embedded applications\n• **ESP32-S3 Quadcopter** — Custom MOSFET motor driver PCB\n\nHe covers the full flow: schematic capture → layout → validation → SMD assembly.`,
      link: { label: "View Drone PCB Project →", url: "esp32-quadcopter.html" },
    };
  }

  // ── Communication Protocols ───────────────────────────────────────
  if (/protocol|i2c|spi|uart|communication|serial|lora|wifi|wi-fi|rfid/.test(q)) {
    return {
      answer:
        `Denil has practical experience with multiple communication protocols:\n• **I²C** — used in Self-Stabilizing Platform (MPU6050 sensor), and throughout embedded projects\n• **SPI** — used during internship and embedded projects\n• **UART** — standard serial comms across projects\n• **Wi-Fi** — ESP32 in CNC Plotter Proto 1 and ESP32-S3 Quadcopter control\n• **LoRa** — Aqualok project (master-slave water quality monitoring)\n• **RFID** — Smart Autonomous Trolley Cart (automated checkout)`,
      link: { label: "View Projects →", url: "index.html#projects" },
    };
  }

  // ── Work Experience ───────────────────────────────────────────────
  if (/work|experience|job|internship|agrowtein|webyfy|current role|current.*company|employ|profession|where.*work|working/.test(q)) {

    // Current role — Webyfy
    if (/webyfy|current|ongoing|present|technology designer/.test(q)) {
      const exp = KB.experience[0];
      return {
        answer:
          `Denil is currently working as a **Technology Designer Intern at Webyfy IOT Pvt Ltd** (May 2025 – Ongoing). His responsibilities include:\n• **Embedded Firmware** — ESP32-S3 firmware with JSON serial comms, Wi-Fi, MQTT, and FreeRTOS\n• **PCB Design** — Multilayer schematics & layouts in **KiCad** for IoT hardware\n• **Advayam Platform** — Hardware integration across ESP32-S3, **Renesas RA4M1**, **RP2354B**, and Vega THEJAS32\n• **Data Simulation** — Analog/digital/PWM workflows with I²C, SPI, UART validation\n• **Reach Board** — Industrial sensor interfaces with 4–20 mA inputs, RS-485, relay outputs, isolation\n• **Hardware Validation** — Sensor testing, PCB assembly, SMD soldering & documentation`,
        link: { label: "View Experience →", url: "index.html#about" },
      };
    }

    // Previous role — Agrowtein
    if (/agrowtein|previous|past|fish|aqua|lora|farm/.test(q)) {
      const exp = KB.experience[1];
      return {
        answer:
          `Denil previously worked as an **Embedded Systems Intern at Agrowtein Labs Pvt. Ltd.** (Oct 2024 – May 2025, 7 months). Key contributions:\n• **Aqualok** — real-time fish pond monitoring with ESP32 + LoRa (pH, DO, ammonia, temperature)\n• **Fish Feeding System** — precise automated feed quantity & timing control\n• **Environmental Monitor** — temperature, humidity & CO₂ monitoring for mushroom cultivation\n• **Custom MCU PCB Design** — versatile microcontroller carrier board\n• **AI Algae Detection** — custom ML dataset + model for water algae estimation & automated reduction`,
        link: { label: "View Experience →", url: "index.html#about" },
      };
    }

    // General — both roles
    return {
      answer:
        `Denil has **two industry experiences**:\n\n🟢 **Current — Technology Designer Intern, Webyfy IOT Pvt Ltd** (May 2025 – Ongoing)\nESP32-S3 firmware (MQTT, FreeRTOS, Wi-Fi), multilayer PCB design in KiCad, Advayam platform (Renesas RA4M1, RP2354B, Vega THEJAS32), industrial Reach Board (RS-485, 4–20 mA, relay, isolation), and hardware validation.\n\n✔ **Previous — Embedded Systems Intern, Agrowtein Labs Pvt. Ltd.** (Oct 2024 – May 2025)\nFish pond IoT monitoring (ESP32 + LoRa), fish feeding system, environmental monitor, custom PCB design, and AI-based algae detection.`,
      link: { label: "View Experience →", url: "index.html#about" },
    };
  }

  // ── Education ────────────────────────────────────────────────────
  if (/education|degree|college|university|study|academic|b\.tech|btech|cgpa/.test(q)) {
    return {
      answer:
        `Denil holds a **B.Tech in Electronics & Communication Engineering** (CGPA: 8.08) from **Amal Jyothi College of Engineering (Autonomous), Kanjirappally** — graduated in 2025. He scored **97.5%** in his Class XII from St. John Nepumcian's HSS, Kozhuvanal, and **86.8%** in Class X.`,
      link: { label: "View About Section →", url: "index.html#about" },
    };
  }

  // ── Achievements ─────────────────────────────────────────────────
  if (/achieve|award|recognition|winner|yip|prize|certificate|certif|honour|honor/.test(q)) {
    return {
      answer:
        `Denil's major recognitions include:\n• 🏆 **YIP 4.0 — State & District Winner** — Won ₹75,000 from Kerala Government (K-DISC) for the Smart Autonomous Trolley Cart under "Business Model Innovation & Future Technologies" (July 2023)\n• 🌿 **GEx Kerala '23 Innovation Award** — Students' Hackathon Challenge in Waste Management, by Kerala Suchitwa Mission (Feb 2023)\n• 💼 **Embedded Systems Internship** certificate — Agrowtein Labs (Oct 2024 – Apr 2025)\n• 🎓 **Udemy C Programming Certificate** — 25.5-hour course (Aug 2025)`,
      link: { label: "View Certifications →", url: "index.html#about" },
    };
  }

  // ── All Projects ──────────────────────────────────────────────────
  if (/all project|list project|project[s]?\s*$|what project|his project|portfolio project/.test(q)) {
    return {
      answer:
        `Denil has built the following projects:\n1. **ESP32-S3 Quadcopter** — Custom drone with MOSFET PCB & 3D-printed frame\n2. **Smart Autonomous Trolley Cart** — AI person-tracking shopping cart (YIP 4.0 winner)\n3. **Self-Stabilizing Platform** — IMU gimbal with 3-axis servo control\n4. **CNC Plotter** — Final: NEMA 17, GRBL, GT2 belt\n5. **CNC Plotter Prototype 1** — DVD mechanisms + ESP32 Wi-Fi\n6. **CNC Plotter Prototype 2** — 3D-printed frame, Arduino Uno, 3-axis\n7. **Line Follower & Obstacle Avoider** — IR + Ultrasonic bot\n8. **Aqualok** — IoT fish farm (LoRa monitoring, feeding, AI algae detection)\n9. **Portable Environmental Monitor** — CO2/temp/humidity for mushroom cultivation`,
      link: { label: "Explore All Projects →", url: "index.html#projects" },
    };
  }

  // ── Quadcopter / Drone ───────────────────────────────────────────
  if (/quadcopter|drone|quad|esp32.s3.*drone|drone.*esp32|flying|flight|rotor|motor driver.*drone|drone.*pcb/.test(q)) {
    const p = KB.projects.quadcopter;
    return {
      answer:
        `The **ESP32-S3 Quadcopter** is Denil's most ambitious build — a from-scratch drone spanning embedded, mechanical, and PCB disciplines:\n• **Controller:** ${p.hardware.mainController}\n• **IMU:** ${p.hardware.imu} for flight stabilisation\n• **Motor Drivers:** ${p.hardware.motorDrivers}\n• **Airframe:** ${p.hardware.frame}\n• **Firmware:** ${p.software.firmware} (open-source) on ESP-IDF with FreeRTOS\n• **Control:** Wireless via Wi-Fi joystick UI`,
      link: { label: "Explore Drone Project →", url: p.url },
    };
  }

  // ── Trolley ──────────────────────────────────────────────────────
  if (/trolley|autonomous.*cart|smart cart|shopping|rfid.*cart|person track|follow.*person|yip/.test(q)) {
    const p = KB.projects.trolley;
    return {
      answer:
        `The **Smart Autonomous Trolley Cart** is an AI-powered shopping assistant and Denil's **YIP 4.0 award-winning** project (₹75,000 prize):\n• **Processor:** ${p.hardware.mainProcessor}\n• **Vision:** ${p.hardware.vision}\n• **AI Accelerator:** ${p.hardware.aiAccelerator} (Edge TPU)\n• **ML:** TensorFlow Lite — 300×300 person detection\n• **User Tracking:** Custom belt colour-based identification\n• **Checkout:** ${p.hardware.checkout}\n• **Wireless:** ${p.hardware.wireless}\n\nThe trolley follows the user, avoids obstacles, and auto-bills items via RFID.`,
      link: { label: "Explore Trolley Project →", url: p.url },
    };
  }

  // ── Self-Stabilizing Platform ─────────────────────────────────────
  if (/stabiliz|gimbal|mpu6050|imu|gyroscope|accelerom|servo.*platform|platform.*servo|balance|roll|pitch/.test(q)) {
    const p = KB.projects.stabilizing;
    return {
      answer:
        `The **Self-Stabilizing Platform** is a closed-loop servo-controlled gimbal:\n• **Controller:** ${p.hardware.controller}\n• **IMU:** ${p.hardware.imu} over **I²C** protocol\n• **Sensor Fusion:** Combines accelerometer + gyroscope data for real-time orientation\n• **Actuation:** ${p.hardware.actuators} for roll & pitch correction\n• **Control:** Closed-loop feedback — continuously corrects platform orientation against external disturbances`,
      link: { label: "Explore Stabilizing Platform →", url: p.url },
    };
  }

  // ── CNC Plotter (generic or comparison) ──────────────────────────
  if (/cnc|plotter|g.code|stepper.*motor|drawing machine|vector.*draw/.test(q)) {
    if (/differ|compar|vs|versus|proto|version|between/.test(q)) {
      return {
        answer: KB.cncComparison,
        link: { label: "View CNC Plotter →", url: "cnc-plotter.html" },
      };
    }
    if (/proto.*1|first proto|dvd|wifi.*cnc|esp32.*cnc|cnc.*esp32/.test(q)) {
      const p = KB.projects.cncProto1;
      return {
        answer:
          `**CNC Plotter Prototype 1** is Denil's first CNC machine, built creatively using **repurposed DVD player linear mechanisms** for X/Y motion:\n• **Controller:** ESP32 with **Wi-Fi** for wireless G-code reception\n• **Steppers:** 2× 28BYJ-48 driven by ULN2003 modules\n• **Pen Lift:** SG90 servo (Z-axis)\n• **Input:** G-code sent wirelessly over Wi-Fi`,
        link: { label: "Explore CNC Proto 1 →", url: p.url },
      };
    }
    if (/proto.*2|second proto|3d.print.*cnc|cnc.*3d.print|arduino.*cnc.*uno/.test(q)) {
      const p = KB.projects.cncProto2;
      return {
        answer:
          `**CNC Plotter Prototype 2** features a fully custom **3D-printed chassis** with 3-axis control:\n• **Controller:** Arduino Uno\n• **Steppers:** 3× 28BYJ-48 (one per X/Y/Z axis)\n• **Drivers:** 3× ULN2003AN modules\n• **Frame:** Custom 3D-printed structural components\n• **Control:** 3-axis G-code for automated plotting`,
        link: { label: "Explore CNC Proto 2 →", url: p.url },
      };
    }
    // Final CNC Plotter
    const p = KB.projects.cncPlotter;
    return {
      answer:
        `Denil built **three generations of CNC plotters**. The **final CNC Plotter** is the most capable:\n• **Controller:** Arduino with **GRBL** firmware\n• **Steppers:** NEMA 17 motors\n• **Drivers:** TMC2208 silent stepper drivers\n• **Motion:** GT2 belt drive system\n• **Pen:** Servo pen lift for Z-axis\n\nAll versions translate G-code into precise 2D vector drawings.`,
      link: { label: "Explore CNC Plotter →", url: p.url },
    };
  }

  // ── Aqualok ───────────────────────────────────────────────────────
  if (/aqualok|fish|aqua|water quality|lora.*monitor|algae|feeding system|aquaculture/.test(q)) {
    const p = KB.projects.aqualok;
    return {
      answer:
        `**Aqualok** is Denil's IoT fish-farm automation suite with three subsystems:\n1. **Water Quality Monitoring** — ESP32 + LoRa master-slave network for real-time fish pond monitoring\n2. **Automated Feeding System** — precise control of food quantity and timing to minimise waste\n3. **AI Algae Detection** — custom ML dataset & model to estimate and reduce algae levels automatically`,
      link: { label: "Explore All Projects →", url: "index.html#projects" },
    };
  }

  // ── Line Follower ─────────────────────────────────────────────────
  if (/line follow|obstacle avoid|ir sensor|ultrasonic.*robot/.test(q)) {
    const p = KB.projects.lineFollower;
    return {
      answer:
        `The **Line Follower & Obstacle Avoiding Bot** is an autonomous robot that:\n• Uses **IR sensors** for line detection (following a predefined path)\n• Uses **Ultrasonic sensors** for real-time obstacle detection\n• Runs on an **Arduino** controller\n• Dynamically switches between line-following and obstacle avoidance modes`,
      link: { label: "Explore All Projects →", url: "index.html#projects" },
    };
  }

  // ── MQTT ──────────────────────────────────────────────────────────
  if (/mqtt|message queue|telemetry.*protocol/.test(q)) {
    return {
      answer:
        `Denil has hands-on experience with **MQTT** at Webyfy IOT Pvt Ltd, where he developed **ESP32-S3 firmware using MQTT** for telemetry and concurrent sensor-data processing alongside Wi-Fi, JSON serial communication, and FreeRTOS.`,
      link: { label: "View Experience →", url: "index.html#about" },
    };
  }

  // ── KiCad / PCB Tools ─────────────────────────────────────────────
  if (/kicad|pcb.*tool|pcb.*software|design.*tool|schematic.*tool/.test(q)) {
    return {
      answer:
        `Denil uses **KiCad** as his primary PCB design tool. At Webyfy IOT Pvt Ltd, he designed **electronic schematics and multilayer PCB layouts** for embedded development boards, sensor interfaces, and IoT hardware. PCB design is also a core skill from his Agrowtein Labs internship.`,
      link: { label: "View Experience →", url: "index.html#about" },
    };
  }

  // ── Advayam Platform ──────────────────────────────────────────────
  if (/advayam|vega.*thejas|thejas32|rp2354b|renesas.*ra4m1|ra4m1|data.*simulat/.test(q)) {
    return {
      answer:
        `At **Webyfy IOT Pvt Ltd**, Denil contributed to the **Advayam Development Platform** — a multi-MCU embedded platform. He worked on hardware integration across:\n• **ESP32-S3**\n• **Renesas RA4M1**\n• **RP2354B** (Raspberry Pi microcontroller)\n• **Vega THEJAS32**\n\nHe also developed **Advayam data-simulation workflows** for analog, digital, and PWM signal generation/measurement, including I²C, SPI, and UART interface validation.`,
      link: { label: "View Experience →", url: "index.html#about" },
    };
  }

  // ── Industrial / Reach Board / RS-485 ────────────────────────────
  if (/reach board|rs.?485|industrial|4.?20.*ma|relay|isolation|signal condition|ethernet.*industrial/.test(q)) {
    return {
      answer:
        `At **Webyfy IOT Pvt Ltd**, Denil worked on the **Reach Board** — an industrial hardware project involving advanced sensor interface circuits:\n• **Signal conditioning** and input protection\n• **Electrical isolation** for robust industrial use\n• **4–20 mA analogue inputs**\n• **Relay outputs** and pulse counting\n• **RS-485 / Ethernet** communication interfaces`,
      link: { label: "View Experience →", url: "index.html#about" },
    };
  }

  // ── SMD / Soldering / Assembly ───────────────────────────────────
  if (/smd|soldering|assembly|pcb.*assembly|component.*inventory/.test(q)) {
    return {
      answer:
        `Denil has practical hands-on skills in **PCB assembly and SMD soldering**, performed at **Webyfy IOT Pvt Ltd** during hardware validation. He also carried out sensor testing, hardware troubleshooting, technical documentation, and electronic-component inventory management.`,
      link: { label: "View Experience →", url: "index.html#about" },
    };
  }

  // ── FreeRTOS ──────────────────────────────────────────────────────
  if (/freertos|rtos|real.time os/.test(q)) {
    return {
      answer:
        `Denil has experience with **FreeRTOS** in two contexts:\n• **Webyfy IOT Pvt Ltd** — ESP32-S3 firmware uses FreeRTOS for concurrent sensor-data processing and telemetry tasks (current role)\n• **ESP32-S3 Quadcopter** project — FreeRTOS is used in the ESP-Drone flight firmware running on ESP-IDF\n\nFreeRTOS is listed as one of his core technical skills.`,
      link: { label: "Explore Drone Project →", url: "esp32-quadcopter.html" },
    };
  }

  // ── IoT ───────────────────────────────────────────────────────────
  if (/iot|internet of things|wireless|connected|remote|web platform/.test(q)) {
    return {
      answer:
        `Denil has strong **IoT & Wireless Communication** experience across multiple projects:\n• **Smart Trolley Cart** — ESP module + web platform for RFID billing\n• **CNC Plotter Proto 1** — ESP32 Wi-Fi for wireless G-code reception\n• **Aqualok** — LoRa-based master-slave network for remote fish pond monitoring\n• **Internship at Agrowtein Labs** — real-time IoT deployment for aquaculture & hydroponics automation`,
      link: { label: "Explore All Projects →", url: "index.html#projects" },
    };
  }

  // ── 3D Printing ───────────────────────────────────────────────────
  if (/3d.print|printed.*frame|mechanical.*design/.test(q)) {
    return {
      answer:
        `Denil has used **3D printing** in several projects:\n• **ESP32-S3 Quadcopter** — 3D-printed airframe for the drone body\n• **CNC Plotter Prototype 2** — fully custom 3D-printed structural chassis for the plotter frame`,
      link: { label: "Explore All Projects →", url: "index.html#projects" },
    };
  }

  // ── Python / OpenCV / ML ──────────────────────────────────────────
  if (/python|opencv|machine learning|tensorflow|ml model|edge tpu|coral|ai/.test(q)) {
    return {
      answer:
        `Denil applied **Python, OpenCV, and TensorFlow Lite** in the **Smart Autonomous Trolley Cart** project:\n• TensorFlow Lite model runs on the **Google Coral USB Edge TPU** for fast real-time inference\n• OpenCV processes camera frames from the Pi Camera 2\n• Custom colour-based filtering identifies the designated user via their wearable belt\n• The pipeline runs 300×300 input detection at real-time frame rates on the Raspberry Pi 4`,
      link: { label: "Explore Trolley Project →", url: "smart-trolley.html" },
    };
  }

  // ── Fallback ──────────────────────────────────────────────────────
  return {
    answer:
      `I don't have that specific information in my portfolio yet. You can explore the relevant project page or contact Denil for more details.\n\n💡 Try asking about his **projects, skills, work experience, education, or achievements** — I know all of that!`,
    link: { label: "Contact Denil →", url: "index.html#contact" },
  };
}

// Export for use in chatbot.js
window.PortfolioKB = { queryKnowledgeBase, PORTFOLIO_KB };

