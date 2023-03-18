import styled from "styled-components";

export const TableWrapper = styled.div`

overflow-x: auto;

.gatsby-image-wrapper {
	img {
		width: 1.5rem;
		height: 1.5rem;
		margin: auto;
	}
}

table {
    border-spacing: 0;
    width: 100%;
  
    td {
        padding: 0.3rem;
        height: 4rem;
        color: ${props => props.theme.text};
        text-align: center;
		font-size: 0.9rem;
		line-height: .9rem;
        font-weight: 400;
        border-bottom: 1px solid ${props => props.theme.greyDarkToGreyTint};
		height: 4rem;
		.Mark {
			height: 1.5rem;
		}
    }
    th {
        background: ${props => props.theme.greyDarkShades} ;
        color: #ffffff;
        height: 4rem;
		font-weight: 600;
		font-size: 1rem;
		line-height: 1rem;
    }
  
    tr {
		height: 4rem;

		:nth-child(odd) {
			background: ${props => props.theme.greyDarkToWhite};
			td {
				border-right: 1px solid ${props => props.theme.greyDarkToWhite};
			}
		}
		:nth-child(even) {
			background: ${props => props.theme.greyDarkToGreyTint};
			td {
				border-right: 1px solid ${props => props.theme.greyDarkToGreyTint};
			}
		}
		:last-child {
			td {
				border-bottom: 0;
			}
		}
    }
  
    td, th {
		:last-child {
			border-right: 0;
		}
	}
	
	tr {
		&:hover {
			background-color:rgba(0,179,159,0.1);	
		}
	}
  }
`;