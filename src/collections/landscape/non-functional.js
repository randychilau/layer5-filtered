import Valcand from '../../assets/images/service-mesh-icons/vulcan.png';
import Linkerd from '../../assets/images/service-mesh-icons/linkerd.png';
import Consul from '../../assets/images/service-mesh-icons/consul.png';
import Cilium from '../../assets/images/service-mesh-icons/cilium.png';
import Istio from '../../assets/images/service-mesh-icons/istio.png';
import GreyMatter from '../../assets/images/service-mesh-icons/greymatter.jpg';
import AspenMesh from '../../assets/images/service-mesh-icons/aspenmesh.png';
import Conduit from '../../assets/images/service-mesh-icons/conduit.png';
import NetworkServiceMesh from '../../assets/images/service-mesh-icons/nsm.png';
import Rotor from '../../assets/images/service-mesh-icons/rotor.png';
import Maistra from '../../assets/images/service-mesh-icons/maistra.png';
import SofaMesh from '../../assets/images/service-mesh-icons/sofamesh.png';
import Octarine from '../../assets/images/service-mesh-icons/Octarine.png';
import TraefikMesh from '../../assets/images/service-mesh-icons/traefik.svg';
import AppMesh from '../../assets/images/service-mesh-icons/App Mesh.png';
import Kuma from '../../assets/images/service-mesh-icons/Kuma.svg';
import Citrix from '../../assets/images/service-mesh-icons/citrix.svg';
import Osm from '../../assets/images/service-mesh-icons/osm.png';


export const non_functional=[{
    name: "Vulcand",
    opensource: "Yes",
    link: "https://github.com/vulcand/vulcand",
    governance: "Mailgun Inc",
    primary_lang: "Go",
    announce_date: "December 2014",
    ga_1_date: "December 2014",
    commercial: "N/A",
    category: "Service Mesh",
    timeline_order: 1,
    icon: Valcand
}, {
    name: "Linkerd 1.x",
    opensource: "Yes",
    link: "https://linkerd.io/",
    governance: "CNCF",
    primary_lang: "Scala",
    announce_date: "February 2016",
    ga_1_date: "April 2017",
    commercial: "Buoyant",
    category: "Service Mesh",
    timeline_order: 2,
    icon: Linkerd

},
{
    name: "Consul",
    opensource: "Yes",
    link: "https://www.consul.io/mesh.html",
    governance: "HashiCorp",
    primary_lang: "Go",
    announce_date: "June 2016",
    ga_1_date: "June 2018",
    commercial: "Consul Enterprise (HashiCorp)",
    category: "Service Mesh",
    timeline_order: 3,
    icon: Consul
},
{
    name: "Cilium",
    opensource: "Yes",
    link: "https://cilium.io/",
    governance: "Isovalent",
    primary_lang: "Go",
    announce_date: "March 2017",
    ga_1_date: "November 2017",
    commercial: "Isovalent",
    category: "Service Mesh",
    timeline_order: 4,
    icon: Cilium
},
{
    name: "Istio",
    opensource: "Yes",
    link: "https://istio.io",
    governance: "Google, IBM",
    primary_lang: "Go",
    announce_date: "May 2017",
    ga_1_date: "July 2018",
    commercial: "AspenMesh, Layer5",
    category: "Service Mesh",
    timeline_order: 5,
    icon: Istio
},
{
    name: "Mesher",
    opensource: "Yes",
    link: "https://github.com/go-mesh/mesher",
    governance: "Huawei",
    primary_lang: "Go",
    announce_date: "November 2017",
    ga_1_date: "November 2017",
    commercial: "Huawei",
    category: "Service Mesh",
    timeline_order: 6
},
{
    name: "Grey Matter",
    opensource: "No",
    link: "http://deciphernow.com/grey-matter",
    governance: "Decipher Technology Studios",
    primary_lang: "Go",
    announce_date: "November 2017",
    ga_1_date: "February 2019",
    commercial: "Grey Matter",
    category: "Service Mesh",
    timeline_order: 7,
    icon: GreyMatter
},
{
    name: "Aspen Mesh",
    opensource: "Partial",
    link: "https://aspenmesh.io/",
    governance: "F5",
    primary_lang: "Go",
    announce_date: "November 2017",
    ga_1_date: "2019",
    commercial: "Aspen Mesh",
    category: "Service Mesh",
    timeline_order: 8,
    icon: AspenMesh

},
{
    name: "Conduit",
    opensource: "Yes",
    link: "https://conduit.io",
    governance: "CNCF",
    primary_lang: "Rust, Go",
    announce_date: "December 2017",
    ga_1_date: "Sept 2018",
    commercial: "Buoyant",
    category: "Service Mesh",
    timeline_order: 9,
    icon: Conduit
},
{
    name: "Network Service Mesh",
    opensource: "Yes",
    link: "https://github.com/networkservicemesh/networkservicemesh",
    governance: "CNCF",
    primary_lang: "GO",
    announce_date: "April 2018",
    ga_1_date: "August 2019",
    commercial: "?",
    category: "Service Mesh",
    timeline_order: 10,
    icon: NetworkServiceMesh
},
{
    name: "Rotor",
    opensource: "Yes",
    link: "http://github.com/turbinelabs/rotor",
    governance: "Turbine Labs",
    primary_lang: "Go",
    announce_date: "May 2018",
    ga_1_date: "discontinued",
    commercial: "Houston (Turbine Labs)",
    category: "Service Mesh",
    timeline_order: 11,
    icon: Rotor

},
{
    name: "Maistra",
    opensource: "Yes",
    link: "https://www.maistra.io",
    governance: "Red Hat",
    primary_lang: "Go",
    announce_date: "May 2018",
    ga_1_date: "September 2019",
    commercial: "OpenShift Service Mesh (Red Hat)",
    category: "Service Mesh",
    timeline_order: 12,
    icon: Maistra
},
{
    name: "Linkerd 2.x",
    opensource: "Yes",
    link: "https://linkerd.io",
    governance: "CNCF",
    primary_lang: "Rust, Go",
    announce_date: "September 2018",
    ga_1_date: "Sept 2018",
    commercial: "Buoyant",
    category: "Service Mesh",
    timeline_order: 13,
    icon: Linkerd
},
{
    name: "SOFAMesh",
    opensource: "Yes",
    link: "https://github.com/alipay/sofa-mesh",
    governance: "Ant Financial",
    primary_lang: "Go",
    announce_date: "July 2018",
    ga_1_date: "discontinued",
    commercial: "Ant Financial",
    category: "Service Mesh",
    timeline_order: 14,
    icon: SofaMesh
},
{
    name: "Octarine",
    opensource: "No",
    link: "https://www.octarinesec.com/",
    governance: "OctarineSec",
    primary_lang: "Go",
    announce_date: "November 2018",
    ga_1_date: "November 2019",
    commercial: "Octarine",
    category: "Service Mesh",
    timeline_order: 15,
    icon: Octarine

},
{
    name: "Yggdrasil",
    opensource: "Yes",
    link: "https://github.com/uswitch/yggdrasil",
    governance: "uSwitch",
    primary_lang: "Go",
    announce_date: "August 2018",
    ga_1_date: "?",
    commercial: "N/A",
    category: "Service Mesh",
    timeline_order: 16

},
{
    name: "Traefik Mesh",
    opensource: "Yes",
    link: "https://github.com/traefik/mesh",
    governance: "Traefik Labs",
    primary_lang: "Go",
    announce_date: "September 2019",
    ga_1_date: "?",
    commercial: "Traefik Labs",
    category: "Service Mesh",
    timeline_order: 17,
    icon: TraefikMesh

},
{
    name: "App Mesh",
    opensource: "No",
    link: "https://aws.amazon.com/app-mesh/",
    governance: "AWS",
    primary_lang: "?",
    announce_date: "November 2018",
    g_1_date: "2019",
    commercial: "AWS",
    category: "Service Mesh",
    timeline_order: 18,
    icon: AppMesh
},
{
    name: "Kuma",
    opensource: "Yes",
    link: "https://kuma.io/",
    governance: "CNCF",
    primary_lang: "Go",
    announce_date: "September 2019",
    ga_1_date: "?",
    commercial: "Kuma",
    category: "Service Mesh",
    timeline_order: 19,
    icon: Kuma

},
{
    name: "Citrix Service Mesh",
    opensource: "No",
    link: "https://www.citrix.com/en-in/networking/microservices.html",
    governance: "Citrix",
    primary_lang: "C",
    announce_date: "September 2019",
    ga_1_date: "July 2016",
    commercial: "Citrix Systems, Inc.",
    category: "Service Proxy",
    timeline_order: 20,
    icon: Citrix

},
{
    name: "Open Service Mesh",
    opensource: "Yes",
    link: "https://openservicemesh.io/",
    governance: "CNCF",
    primary_lang: "Go",
    announce_date: "August 2020",
    ga_1_date: "?",
    commercial: "Microsoft",
    category: "Service Mesh",
    timeline_order: 21,
    icon: Osm
},
{
    name: "Citrix ADC CPX",
    opensource: "No",
    link: "https://www.citrix.com/en-in/networking/microservices.html",
    governance: "Citrix",
    primary_lang: "C",
    announce_date: "January 2016",
    ga_1_date: "July 2016",
    commercial: "Citrix Systems, Inc.",
    category: "Service Proxy",
},
{
    name: "Envoy",
    opensource: "Yes",
    link: "https://www.envoyproxy.io/",
    governance: "CNCF",
    primary_lang: "C++11",
    announce_date: "September 2016",
    ga_1_date: "September 2016",
    commercial: "Turbine Labs, Datawire",
    category: "Service Proxy"
},
{
    name: "nginMesh",
    opensource: "Yes",
    link: "https://github.com/nginxinc/nginmesh",
    governance: "Nginx",
    primary_lang: "Rust, Go, C",
    announce_date: "September 2017",
    ga_1_date: "discontinued",
    commercial: "Nginx",
    category: "Service Proxy"
},
{
    name: "MOSN",
    opensource: "Yes",
    link: "https://github.com/mosn/mosn",
    governance: "Ant Financial",
    primary_lang: "Go",
    announce_date: "July 2018",
    ga_1_date: "?",
    commercial: "Ant Financial",
    category: "Service Proxy"

},
{
    name: "Citrix ADC",
    opensource: "No",
    link: "https://www.citrix.com/en-in/products/citrix-adc/",
    governance: "Citrix",
    primary_lang: "C",
    announce_date: "January 2016",
    ga_1_date: "July 2016",
    commercial: "Citrix Systems, Inc.",
    category: "API Gateway"

},
{
    name: "Contour",
    opensource: "Yes",
    link: "https://github.com/heptio/contour",
    governance: "Heptio",
    primary_lang: "Go",
    announce_date: "October 2017",
    ga_1_date: "October 2017",
    commercial: "Heptio",
    category: "API Gateway"
},
{
    name: "Ambassador",
    opensource: "Yes",
    link: "https://www.getambassador.io/",
    governance: "Datawire",
    primary_lang: "Python",
    announce_date: "August 2017",
    ga_1_date: "October 2017",
    commercial: "Datawire",
    category: "API Gateway"
},
{
    name: "Kong",
    opensource: "Yes",
    link: "https://github.com/kong/kong",
    governance: "Kong Inc.",
    primary_lang: "Lua",
    announce_date: "April 2015",
    ga_1_date: "December 2018",
    commercial: "Kong Inc.",
    category: "API Gateway"
},
{
    name: "Gloo",
    opensource: "Yes",
    link: "https://gloo.solo.io/",
    governance: "Solo.io Inc.",
    primary_lang: "Go",
    announce_date: "?",
    ga_1_date: "?",
    desc: "An Envoy-powered API Gateway",
    commercial: "Solo.io Inc.",
    category: "API Gateway",
},
{
    name: "OpenResty",
    opensource: "Yes",
    link: "https://openresty.org/en/",
    governance: "OpenResty Inc.",
    primary_lang: "C",
    announce_date: "?",
    ga_1_date: "?",
    commercial: "OpenResy Inc.",
    category: "API Gateway"

},
{
    name: "3scale",
    opensource: "Yes",
    link: "https://github.com/3scale/APIcast",
    governance: "Red Hat",
    primary_lang: "Lua",
    announce_date: "December 2014(?)",
    ga_1_date: "December 2014(?)",
    commercial: "Red Hat",
    category: "API Gateway",
},
{
    name: "HAProxy",
    opensource: "Yes",
    link: "http://www.haproxy.org/",
    governance: "HAProxy",
    primary_lang: "C",
    announce_date: "December 2001",
    ga_1_date: "December 2001",
    commercial: "HAProxy Technologies",
    category: "Service Proxy"
},
{
    name: "Contour",
    opensource: "Yes",
    link: "https://github.com/heptio/contour",
    governance: "Heptio",
    primary_lang: "Go",
    announce_date: "October 2017",
    ga_1_date: "October 2017",
    commercial: "Heptio",
    category: "API Gateway"
},
{
    name: "Citrix ADC",
    opensource: "No",
    link: "https://www.citrix.com/en-in/products/citrix-adc/",
    governance: "Citrix",
    primary_lang: "C",
    announce_date: "January 2001",
    ga_1_date: "July 2001",
    commercial: "Citrix Systems, Inc.",
    category: "Load-Balancers"
},
{
    name: "Kong",
    opensource: "Yes",
    link: "https://github.com/kong/kong",
    governance: "Kong Inc.",
    primary_lang: "Lua",
    announce_date: "April 2015",
    ga_1_date: "?",
    commercial: "Kong Inc.",
    category: "Load-Balancers"
},
{
    name: "Nginx",
    opensource: "Yes",
    link: "http://nginx.org/",
    governance: "Nginx",
    primary_lang: "Go",
    announce_date: "?",
    ga_1_date: "?",
    commercial: "Nginx Plus",
    category: "Load-Balancers"
},
{
    name: "Proxygen",
    opensource: "Yes",
    link: "https://github.com/facebook/proxygen",
    governance: "Facebook",
    primary_lang: "C++",
    announce_date: "November 2014",
    ga_1_date: "November 2014",
    commercial: "N/A",
    category: "Load-Balancers",
},
{
    name: "Traefik",
    opensource: "Yes",
    link: "https://traefik.io/",
    governance: "?",
    primary_lang: "Go",
    announce_date: "?",
    ga_1_date: "?",
    commercial: "?",
    category: "Load-Balancers"
},
{
    name: "Avi Networks(USM)",
    opensource: "No",
    link: "https://avinetworks.com/",
    governance: "AVI Networks",
    primary_lang: "?",
    announce_date: "?",
    ga_1_date: "?",
    commercial: "?",
    category: "Load-Balancers"
}
]