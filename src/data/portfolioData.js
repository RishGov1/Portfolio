export const portfolioData = {
  personal: {
    name: "Rishabh",
    title: "AI Engineer & Computer Science Student",
    headline: "Building Intelligent Systems & High-Performance Software",
    bio: "Computer Science undergraduate specializing in Artificial Intelligence, Computer Vision, and Distributed Systems. Passionate about converting research papers into production-ready software and scaling complex neural network architectures.",
    location: "Bangalore, Karnataka, India",
    email: "rishabhgp@gmail.com",
    github: "https://github.com/RishGov1",
    linkedin: "https://www.linkedin.com/in/rishabh-govindaraj/",
    kaggle: "https://kaggle.com",
    twitter: "https://twitter.com",
    resumeUrl: "https://drive.google.com/file/d/1t6ZpfUKw660PaglmqMOklRVNJ38R3SbJ/view?usp=sharing",
    stats: [
      { label: "AI Models Trained", value: "25+" },
      { label: "Cumulative GPA", value: "8.55" },

      { label: "Research Papers", value: "1" },
    ]
  },

  about: {
    story: "I am a passionate Computer Science student with a strong interest in Artificial Intelligence, Machine Learning, and Web Development. I enjoy building practical and innovative solutions that combine technology with real-world applications. I have experience working with technologies such as Python, C++, React, JavaScript, and various AI/ML frameworks. I am particularly interested in developing intelligent systems using models like BERT and Graph Neural Networks. I also enjoy creating modern, responsive, and user-friendly web applications. Through academic projects and personal projects, I continuously explore new technologies and improve my problem-solving skills. I am always eager to learn, collaborate, and take on challenging projects that help me grow as a developer.",
    highlights: [
      {
        title: "AI & Machine Learning",
        description: "Designing, training, and fine-tuning Transformer models, RAG pipelines, and Vision Transformers for enterprise scale."
      },
      {
        title: "Systems & Engineering",
        description: "Optimizing C++/Python execution, GPU acceleration via CUDA, and architecting distributed microservices."
      },
      {
        title: "Full-Stack Development",
        description: "Building reactive, high-performance web applications with React, Next.js, FastAPI, and sleek user interfaces."
      }
    ],
    values: [
      "Rigorous CS Fundamentals",
      "Production-Grade Clean Code",
      "Research to Reality Execution",
      "Continuous Rapid Learning"
    ]
  },

  skills: {
    categories: [
      {
        name: "Languages",
        id: "languages",
        items: [
          { name: "Python", level: 100, icon: "Code2", color: "#3776AB" },
          { name: "C++", level: 100, icon: "Cpu", color: "#00599C" },
          { name: "JavaScript (ES6+)", level: 92, icon: "FileCode", color: "#F7DF1E" },
          { name: "TypeScript", level: 88, icon: "FileJson", color: "#3178C6" },
          { name: "SQL", level: 95, icon: "Database", color: "#4479A1" },
          { name: "Rust", level: 75, icon: "Terminal", color: "#DEA584" },
          { name: "Java", level: 90, icon: "Coffee", color: "#5382A1" },
          { name: "C", level: 90, icon: "Cpu", color: "#00599C" }
        ]
      },
      {
        name: "AI & Machine Learning",
        id: "aiml",
        items: [
          { name: "PyTorch", level: 95, icon: "BrainCircuit", color: "#EE4C2C" },
          { name: "TensorFlow", level: 85, icon: "Layers", color: "#FF6F00" },
          { name: "OpenCV", level: 90, icon: "Eye", color: "#5C3EE8" },
          { name: "Hugging Face / LLMs", level: 92, icon: "Bot", color: "#FFD21E" },
          { name: "LangChain / LlamaIndex", level: 90, icon: "Workflow", color: "#00A884" },
          { name: "Scikit-Learn", level: 92, icon: "BarChart3", color: "#F7931E" },
          { name: "CUDA & TensorRT", level: 78, icon: "Zap", color: "#76B900" }
        ]
      },
      {
        name: "Web Development",
        id: "web",
        items: [
          { name: "React.js", level: 94, icon: "Atom", color: "#61DAFB" },
          { name: "Next.js", level: 88, icon: "Globe", color: "#000000" },
          { name: "FastAPI", level: 92, icon: "Zap", color: "#059669" },
          { name: "Node.js / Express", level: 86, icon: "Server", color: "#339933" },
          { name: "Tailwind CSS", level: 95, icon: "Palette", color: "#06B6D4" },
          { name: "WebSockets", level: 82, icon: "Radio", color: "#6366F1" }
        ]
      },
      {
        name: "Tools & Infrastructure",
        id: "tools",
        items: [
          { name: "Git & GitHub", level: 95, icon: "GitBranch", color: "#F05032" },
          { name: "Docker & Containers", level: 88, icon: "Container", color: "#2496ED" },
          { name: "Linux / Bash Shell", level: 90, icon: "TerminalSquare", color: "#FCC624" },
          { name: "AWS (S3, EC2, Lambda)", level: 82, icon: "Cloud", color: "#FF9900" },
          { name: "MLflow & WandB", level: 85, icon: "Activity", color: "#00E676" },
          { name: "PostgreSQL & Redis", level: 86, icon: "HardDrive", color: "#336791" },
          { name: "CI/CD Pipelines", level: 80, icon: "RefreshCw", color: "#2088FF" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "mindgraph-ai",
      title: "MindGraph AI: Autonomous RAG Knowledge Graph Generator",
      category: "AI/ML",
      tech: ["PyTorch", "LangChain", "FastAPI", "Pinecone", "React", "Tailwind"],
      shortDesc: "Automated agentic system converting unstructured research PDFs into interactive multi-modal knowledge graphs with semantic querying.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      featured: true,
      github: "https://github.com",
      liveDemo: "https://example.com",
      overview: "MindGraph AI solves the cognitive overload of reviewing complex academic literature by automatically parsing PDFs, extracting entity-relationship triplets using Llama-3, vectorizing chunks into Pinecone, and building dynamic, graph-based knowledge maps.",
      architecture: [
        "PDF ingestion & Chunking via Unstructured & OCR",
        "Dual Retrieval: Vector Embeddings (Pinecone) + Graph Traversal (Neo4j)",
        "LangChain Agentic loop with self-correction & source hallucination check",
        "React + D3.js interactive force-directed graph canvas"
      ],
      highlights: [
        "Reduced literature search latency by 72% for research team",
        "Achieved 94.6% semantic extraction accuracy across 500 benchmark papers",
        "Integrated streaming SSE response with low latency (sub-400ms TTFT)"
      ]
    },
    {
      id: "visiondrive",
      title: "VisionDrive: CUDA-Accelerated Perception Pipeline",
      category: "Systems/CS",
      tech: ["C++", "CUDA", "PyTorch", "OpenCV", "TensorRT", "ROS2"],
      shortDesc: "Real-time 3D object detection & lane tracking engine executing TensorRT optimized YOLOv8 models at 120 FPS on embedded edge hardware.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
      featured: true,
      github: "https://github.com",
      liveDemo: "https://example.com",
      overview: "A high-performance autonomous vehicle vision pipeline built in C++ and CUDA. Performs multi-camera sensor fusion, bird's-eye view projection, and instant obstacle detection with microsecond latency constraint.",
      architecture: [
        "Custom CUDA kernels for parallel image preprocessing & color space conversion",
        "FP16 quantization using NVIDIA TensorRT for 3.4x speedup over CPU baseline",
        "ROS2 node architecture for seamless vehicle control CAN bus integration"
      ],
      highlights: [
        "120 FPS frame rate achieved on NVIDIA Jetson Orin Nano",
        "Sub-8ms total inference latency per stereo camera frame",
        "Used by university Formula Student Driverless team"
      ]
    },
    {
      id: "neurocode",
      title: "NeuroCode: Real-Time Collaborative AI Workspace",
      category: "Full Stack",
      tech: ["React", "TypeScript", "Node.js", "WebSockets", "Monaco Editor", "Tailwind"],
      shortDesc: "Browser-based IDE featuring real-time multiplayer pair programming, AI code generation, AST-aware refactoring, and live code sandbox execution.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      featured: true,
      liveDemo: "https://example.com",
      overview: "NeuroCode combines the power of VS Code's Monaco Editor, Yjs CRDTs for sub-10ms multiplayer document sync, and context-aware LLM code completion for distributed development teams.",
      architecture: [
        "Conflict-free Replicated Data Types (Yjs + WebSockets) for zero-latency multiplayer",
        "Dockerized sandbox containers handling code execution for Python, C++, and JS",
        "Custom tree-sitter AST parser providing localized context prompts to Claude API"
      ],
      highlights: [
        "Supports up to 50 concurrent editors on a single document without desync",
        "Contextual AI code generation trained on repository AST structure",
        "Over 1,200 active monthly user sessions during hackathon launch"
      ]
    },
    {
      id: "quantpulse",
      title: "QuantPulse: High-Frequency Backtesting Engine",
      category: "Systems/CS",
      tech: ["Python", "C++", "FastAPI", "React", "NumPy", "Tailwind"],
      shortDesc: "High-throughput algorithmic trading simulator supporting tick-by-tick order book replay, Monte Carlo risk simulation, and custom strategy backtesting.",
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1000&auto=format&fit=crop",
      featured: false,
      liveDemo: "https://example.com",
      overview: "Built to process multi-gigabyte financial L2 order book data streams. Implements order execution algorithms (TWAP/VWAP) and detailed slippage modeling.",
      architecture: [
        "C++ Core matching engine bindings exposed to Python via Pybind11",
        "Vectorized NumPy strategy backtesting execution running 50k ticks/sec",
        "Interactive React analytics dashboard with dynamic candlestick charts"
      ],
      highlights: [
        "Simulated over 10M historical order book updates under 5 seconds",
        "Calculates Sharpe Ratio, Max Drawdown, and VaR (Value at Risk) in real time"
      ]
    },
    {
      id: "medvision-ai",
      title: "MedVision: Multi-Modal Medical Image Segmenter",
      category: "AI/ML",
      tech: ["PyTorch", "UNet", "TorchVision", "Flask", "React", "OpenCV"],
      shortDesc: "Deep learning clinical assistant utilizing Attention UNet to segment brain tumors from MRI scans with 93.8% Dice Similarity Coefficient.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      featured: false,
      liveDemo: "https://example.com",
      overview: "Trained on the BraTS benchmark dataset, MedVision isolates glioma tumors into sub-regions (edema, non-enhancing core, enhancing tumor) to aid radiologists in early diagnosis.",
      architecture: [
        "Attention-guided 3D UNet with spatial and channel self-attention gates",
        "Mixed precision training (FP16) on NVIDIA RTX GPUs reducing memory footprint by 40%",
        "DICOM medical image viewer interface with cross-sectional slice rendering"
      ],
      highlights: [
        "Achieved top-tier 0.938 Dice Score on BraTS Validation dataset",
        "Presented at University Undergraduate Research Symposium"
      ]
    },
    {
      id: "raft-store",
      title: "RaftStore: Distributed Fault-Tolerant Key-Value DB",
      category: "Systems/CS",
      tech: ["C++", "gRPC", "Protobuf", "Docker", "GoogleTest"],
      shortDesc: "Implementation of the Raft Consensus Algorithm featuring leader election, log replication, cluster membership changes, and persistent storage recovery.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop",
      featured: false,
      liveDemo: "https://example.com",
      overview: "A distributed system built from scratch in C++20. Guarantees strong consistency (linearizability) across node failures and network partitions.",
      architecture: [
        "Asynchronous RPC service handling heartbeat intervals and vote requests via gRPC",
        "Write-Ahead Logging (WAL) engine for durable disk persistence",
        "Chaos testing suite simulating network dropouts, split-brain conditions, and node crashes"
      ],
      highlights: [
        "100% test pass rate across 100+ simulated network failure topologies",
        "Benchmarked throughput of 15,000 requests/sec across a 5-node cluster"
      ]
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Summer Intern - Backend Engineer",
      company: "eShipz.com",
      location: "Bangalore, Karnataka, India",
      period: "May 2026 - June 2026",
      type: "Internship",
      description: "Worked on the backend services of the company. Optimized the API performance and added new features to the platform.",
      bulletPoints: [
        "Developed and integrated Model Context Protocol (MCP) tools to connect front-end user interfaces with backend package logistics systems, improving reliability and responsiveness of shipment tracking workflows.",
        "Collaborated with engineering and product teams to refine MCP-based tool design, ensuring seamless data exchange between logistics services, APIs, and user-facing features.",
        "Optimized data handling and request flows within the MCP toolchain to reduce latency and enhance overall user experience for logistics status updates and delivery notifications."
      ],
      skills: ["Python", "Model Context Protocol", "SQLite", "fastMCP", "Claude Agent SDK"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      specialization: "Artificial Intelligence & Machine Learning",
      institution: "Vellore Institute of Technology, Chennai",
      period: "2024 - 2028 (Expected)",
      gpa: "8.55 / 10",
      coursework: [
        "Data Structures", "Algorithms", "Database Management Systems", "Operating Systems",
        "Competitive Coding", "Computer Networks", "Computer Architecture", "Artificial Intelligence",
        "Machine Learning", "Deep Learning", "Object - Oriented Programming", "Web Development",
        "Software Engineering", "Cloud Architecture",
      ]
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "Certification in Artificial Intelligence and Machine Learning",
      issuer: "Artificial Intelligence Club, Indian Institute of Technology, Madras",
      date: "May 2024",
      badge: "Certificate",
      iconColor: "#F59E0B"
    },
    {
      id: "ach-2",
      title: "Certification in Advanced Model Context Protocol",
      issuer: "Anthropic",
      date: "Aug 2026",
      badge: "Certificate",
      iconColor: "#FF9900"
    },
    {
      id: "ach-3",
      title: "Certification in AI Fluency: Framework and Foundations)",
      issuer: "Anthropic",
      date: "Aug 2026",
      badge: "Certificate",
      iconColor: "#3B82F6"
    },
    {
      id: "ach-4",
      title: "Certification in AI Subagents",
      issuer: "Anthropic",
      date: "Aug 2026",
      badge: "Certificate",
      iconColor: "#10B981"
    }
  ],

};
