
const data = {
    faqs: [
        {
            question: "Are Layer5's service mesh solutions open source?",
            category: "Layer5",
            answer: ["Yes, all of Layer5's projects are licensed under Apache v2."]
        },
        {
            question: "Is Meshery open source?",
            category: "Meshery",
            answer: ["Yes, all of Layer5's projects are licensed under Apache v2, including Meshery."]
        },
        {
            question: "What value does a service mesh provide?",
            category: "Service Mesh",
            answer: ["Service meshes provide visibility, resiliency, traffic, and security control of distributed application services. Much value is promised here, particularly to the extent that much is given without the need to change your application code."],
            link: "",
            linktext: "",
        },
        // {
        //     question: "What is the difference between a service mesh management, control, and data plane?",
        //     category: "Service Mesh",
        //     answer: "",
        //     answer_2: "",
        //     answer_3: "",
        //     answer_4: "",
        //     answer_5: "",
        //     link: "/blog/service-mesh-planes",
        //     linktext: "Blog: Understanding Service Mesh Planes",
        // },
        {
            question: "What if I deploy one service mesh, like Istio, then need to switch to another service mesh?",
            category: "Service Mesh",
            answer: ["Use of Meshery and the Service Mesh Interface specification help avoid switching costs between service meshes.",
                     "The goal of Service Mesh Interface specifications are to provide an abstract, unified method of interacting with a service mesh.",
                     "See if your service mesh adheres to SMI specifications at the link below."],
            link: "/projects/service-mesh-interface",
            linktext: "Service Mesh Interface",
        },
        {
            question: "What are service mesh standards and why do they matter?",
            category: "Service Mesh",
            answer: ["Three service mesh abstractions have arisen given the high number of service meshes available (see the Service Mesh Landscape)",
                     "Servcie Mesh Performance (SMP) - A standard for capturing and characterizing service mesh performance.",
                     "Service Mesh Interface (SMI) - A standard interface for using common service mesh functionality on Kubernetes.",
                     "Multi-Vendor Service Mesh Interoperation (Hamlet) - A set of API standards for enabling service mesh federation."],
            link: "https://calcotestudios.com/talks/decks/slides-open-infrastructure-summit-2020-its-a-multi-mesh-world.html",
            linktext: "See Open Infrastructure Summit Presentation",
        },
        {
            question: "How does a service mesh help me? in my role?",
            category: "Service Mesh",
            answer: ["Operators don’t necessarily need to involve Developers to change how many times a service should retry before timing out or to run experiments (known as chaos engineering). They are empowered to affect service behavior independently.",
                     "Customer Success (support) teams can handle the revocation of client access without involving Operators.",
                     "Product Owners can use quota management to enforce price plan limitations for quantity-based consumption of particular services.",
                     "Developers can redirect their internal stakeholders to a canary with beta functionality without involving Operators.",
                     "Security Engineers can declaratively define authentication and authorization policies, enforced by the service mesh.",
                     "Network Engineers are empowered with an extraordinarily high degree of application-level control formerly simply unavailable to them."],
            link: "",
            linktext: "",
        },
        // {
        //     question: "Why do I need a service mesh?",
        //     category: "Service Mesh",
        //     answer: "",
        //     answer_2: "",
        //     answer_3: "",
        //     answer_4: "",
        //     answer_5: "",
        //     link: "",
        //     linktext: "",
        // },
        // {
        //     question: "Which service mesh is right for me?",
        //     category: "Service Mesh",
        //     answer: "",
        //     answer_2: "",
        //     answer_3: "",
        //     answer_4: "",
        //     answer_5: "",
        //     link: "/service-mesh-landscape",
        //     linktext: "Service Mesh Landscape",
        // },
        {
            question: "What is a service mesh?",
            category: "Service Mesh",
            answer: ["Service meshes provide intent-based networking for microservices describing desired behavior of the network in the face of constantly changing conditions and network topology. At their core, service meshes provide:",
                     "A services-first network; A developer-driven network;",
                     "A network that is primarily concerned with alleviating application developers from building infrastructure concerns into their application code; A network that empowers operators with the ability to declaratively define network behavior, node identity, and traffic flow through policy;",
                     "A network that enables service owners to control application logic without engaging developers to change its code.",
                     "Value derived from the layer of tooling that service meshes provide is most evident in the land of microservices. The more services, the more value derived from the mesh. In subsequent chapters, I show how service meshes provide value outside of the use of microservices and containers and help modernize existing services (running on virtual or bare metal servers) as well."],
            link: "",
            linktext: "",
        },
        {
            question: "When should I adopting a service mesh?",
            category: "Service Mesh",
            answer: ["There are many service meshes from which to choose as well as a variety of deployment models. Which is right for you and your organization depends on where you are in your maturity curve (Cloud Native skill set), number of services, underlying infrastructure, and how centric technology is to your business. ",
                     "So, should you deploy a service mesh? More and more the answer is “yes”. Service meshes are quickly becoming a ubiquitous layer in modern infrastructures."],
            link: "/when-should-I-use-a-service-mesh",
            linktext: "Factors When considering how strongly you need a service mesh",
        },
        {
            question: "Does Meshery manage service meshes?",
            category: "Meshery",
            answer: ["Yes, as the service management plane, Meshery, provisions and manage the lifecycle of service meshes."],
            link: "/projects/meshery",
            linktext: "Run Meshery",
        },
        {
            question: "Why do I need to authenticate my social account to use Meshery?",
            category: "Meshery",
            answer: ["Create your account - avoid having to reconfigure Meshery each time you deploy it. When you use a social account to authenticate to Meshery, your environment configuration persists from session to session. Meshery sources from Mixer Prometheus adapter and uses Prometheus node-exporter.",
                     "Rank your deployment - results of performance tests are anonymously collected using the Service Mesh Performance, so that Meshery may provide the public service of ranking the speed of your deployment against that of the rest of the world's users."],
            link: "",
            linktext: "",
        },
        {
            question: "Why use Meshery?",
            category: "Meshery",
            answer: ["Meshery is an open source, vendor neutral projects that facilitates testing across meshes.",
                     "Other performance benchmark tools are not packaged into a mesh testing utility, butare only a load-generators unto their own."],
            link: "/projects/service-mesh-performance",
            linktext: "Service Mesh Performance"
        },
        {
            question: "I have already selected and am operating a service mesh. Should I use Meshery?",
            category: "Meshery",
            answer: ["As a management plane, Meshery provides value in a number of ways post-adoption of a service mesh. For example, Meshery analyzes your deployments in evaluation of service mesh best practices and patterns, highlighting where you might be deviating. Meshery's Other ways can be articulated in its set of features spanning:",
                     "Lifecycle Management",
                     "Configuration Management",
                     "Performance Management",
                     "Workload Management"],
            link: "/service-mesh-management/meshery",
            linktext: "Meshery"
        }
    ]

};
export default data;
