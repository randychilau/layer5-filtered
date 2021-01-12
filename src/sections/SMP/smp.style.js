import styled from "styled-components";
import smp_bg from "./smp-hero.png";
import callout from "./callout.png";

const SMPWrapper = styled.section`
    .smp-hero{
        background-image: url(${smp_bg});
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        .hero-text{
            padding: 150px 0 100px 0;
            h1{
                color: ${props => props.theme.white};
                margin-bottom: 30px;
            }
            p{
                color: ${props => props.theme.white};
            }
        }
    }
    .smp-details{
        vertical-align: middle;
        margin: 100px auto;
        h2{
            margin: auto;
            text-align: center;
            width: 80%;
            margin-bottom: 100px;
        }
        h1{
            margin-bottom: 30px;
        }
        
        .features{
            padding-left: 50px;
            table{
                margin-bottom: 30px;
            }
            .icon{
                object-fit: cover;
                padding-right: 20px;
                padding-bottom: 10px;
            }
            .feature{
                font-size: 21px;
                padding-bottom: 20px;
                padding-right: 30px;
            }
        }
        .smp-example{
            width: 100%;
        }
    }
    .use-cases{
        margin-top: 150px;
        .use-case-title{
            width: 90%;
            margin: 50px auto 100px auto;
            text-align: center;
            h1{
                margin-bottom: 20px;
            }
        }
        .use-case-data{
            margin-bottom: 50px;
            h1{
                margin-bottom: 30px;
            }
            img{
                max-height: 500px;
            }
            p{
                padding-right: 30px;
            }
            .use-case-box{
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
    .smp-effects{
        .effects-title{
            margin: 50px auto 50px auto;
            text-align: center;
            h1{
                margin-bottom: 20px;
            }
        }
        .iframe{
            width: 33%;
            height: 400px;
        }
    }
    .cncf-callout{
        margin: 120px auto;
        text-align: center;
        h1, h4{
            margin-bottom: 30px;
        }
    }
    .layer5-callout{
        background-image: url(${callout});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 600px; 
        display: flex;
        justify-content: center;
        align-items: center;
        .callout-text{
            width: 70%;
            margin: auto;
            text-align: center;
            h1{
                margin-bottom: 40px;
                color: ${props => props.theme.white};
            }
        }
    }
    @media only screen and (max-width: 480px) {
        .smp-hero{
            .hero-text{
                padding: 50px 0 50px 0;
            }
        }
        .smp-details{
            margin: 50px auto;
            h2{
                width: 100%;
                margin-bottom: 30px;
            }
            .features{
                padding: 20px 0 0 30px;
                .icon{
                    height: 60px;
                    width: 60px;
                }
                .feature{
                    padding-right: 0;
                }
            }
        }
        .use-cases{
            margin-top: 60px;
            .use-case-title{
                margin: 50px auto 50px auto;
            }
            .use-case-data{
                p{
                    padding-right: 0;
                }
            }
        }
        .layer5-callout{
            .callout-text{
                width: 90%;
            }
        }
        .smp-effects{
            .iframe{
                width: 95%;
                height: 400px;
            }
        }
    }
`;

export default SMPWrapper;