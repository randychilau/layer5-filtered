import styled from "styled-components";


const BlogSideBarWrapper = styled.div`
        .search-box {
            position: relative;
            display: flex;
            input{
                flex-basis: 100%;
                padding: 15px;
                border-radius: 5px;
                border: 1px solid ${props => props.theme.headingColor};

                &:focus{
                    border-color: ${props => props.theme.primaryColor};
                }
            }
            button {
                position: absolute;
                right: 0px;
                top: 0;
                height: 100%;
                min-width: 20px;
                border-radius: 5px;
                background: transparent;
                font-size: 22px;
                color: ${props => props.theme.headingColor}; 
            }
        }


        .sidebar-widgets {
            padding: 0 30px;
        }

        .widgets-title{
            margin-bottom: 20px;
            h3{
                display: inline-block;
                font-size: 21px;
                font-weight: 500;
                line-height: 30px;
                position: relative;
                &:before{
                    position: absolute;
                    top: 50%;
                    right: -80px;
                    content: '';
                    width: 70px;
                    height: 1px; 
                }
            }
            
        }
        
        .sidebar-widgets{
            &+.sidebar-widgets{
                margin-top: 52px;
            }
            ul{
                margin: 0;
                padding: 0;
                list-style: none;
            }
            
            
            &.catagorie{
               
                li{
                    &+li{
                        margin-top: 3px;
                    }
                    a{
                        color: ${props => props.theme.black};
                        display: flex;
                        line-height: 25px;
                        justify-content: space-between;
                        font: 400 16px/35px "Open Sans", sans-serif;
                        em{font-style: normal;}
                        span{
                            border-bottom: 1px solid transparent;
                            transition: all 0.3s linear;
                        }
                        &:hover{
                            span, em{
                                color: ${props => props.theme.secondaryColor}; 
                                border-color: ${props => props.theme.secondaryColor}; 
                            }
                        }
                    }
                }
            }
            &.tags{
                ul{
                    margin-top: -5px;
                    margin-left: -5px;
                    margin-right: -5px;
                }
                li{
                    display: inline-block;
                    a{
                        color: ${props => props.theme.black};
                        margin: 5px;
                        display: block;
                        padding: 6px 18px;
                        border-radius: 3px;
                        background: #F0F0F0;
                        font: 400 13px/26px "Open Sans", sans-serif; 
                        transition: all 0.3s linear;
                        &:hover{
                            background: ${props => props.theme.secondaryColor};
                            color: ${props => props.theme.white};
                        }
                    }
                }
                
            }
        }

    @media only screen and (max-width: 1024px) {
        .sidebar-widgets {
            padding: 0;
        }
       
    }
   
      
       
`;

export default BlogSideBarWrapper;
