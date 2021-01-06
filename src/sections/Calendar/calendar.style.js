import styled from "styled-components";

const CalendarStyleWrapper = styled.div`
    position: relative;
    overflow: hidden;
    text-align: center;
    .calendar-wrapper {
        margin-bottom: 5rem;
    }
    .calendar-grid {
        overflow-x: auto;
    }
    .fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .fc-direction-ltr .fc-button-group > .fc-button:not(:first-child) {
        margin-left: 5px;
        padding-top: 2px;
        padding-bottom: 2px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }
    .fc .fc-button-group > .fc-button {
        background: ${props => props.theme.tertiaryColor};
        padding: 1rem;
        margin: 0px;
        min-width: 2.5rem;
        color: ${props => props.theme.shadowLightColor};

    }
    .fc-direction-ltr .fc-toolbar > * > :not(:first-child) {
        background: ${props => props.theme.secondaryColor};
        min-width: 7.5rem;
        padding: 1rem;
        &:hover{
            color: ${props => props.theme.headingColor};
            background: ${props => props.theme.primaryLightColorTwo}; 
        }

    }
    .fc .fc-button-primary,
    .fc .fc-button-primary:disabled {
        cursor: pointer;
        font-family: inherit;
        text-decoration: none;
        text-transform: capitalize; 
        border: 0; 
        
        padding: 1rem;
        border-radius: 5px;
        -webkit-transition: 450ms all;
        transition: 450ms all;


    }
    .fc-addToCalendar-button.fc-button.fc-button-primary {
        background: ${props => props.theme.highlightColor};
        min-width: 10.625rem;
        &:hover{
            color: ${props => props.theme.black};
            background: ${props => props.theme.highlightColor}; 
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }
    }
    .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
        min-height: auto;
        font-size: 14px;
        background: ${props => props.theme.secondaryColor};
    }
    @media only screen and (max-width: 57rem) {
        .fc.fc-media-screen.fc-direction-ltr.fc-theme-standard {
            width: 57rem;
        }
    }
    .meetings-table-container {
        padding: 1rem;
        height: fit-content;
        margin-bottom: 1.25rem;
        background: ${props => props.theme.white};
    }
    .meetings-table-title {
        margin-bottom: 1rem;
    }
    .meetings-table {
        border-collapse: collapse;
        width: 100%;
        a {
            color: #039be5;
        }
        td, th {
            padding: 15px 5px;
            display: table-cell;
            text-align: center;
            vertical-align: middle;
            border-radius: 2px;
        }
    }
    .meetings-table th {
        background-color: #477e96;
        font-weight: bold;
        color: white;
        border-radius: 0px;
    }
    .meetings-table tr:nth-child(even) {
        background-color: #e8e8e8;
    }
    .meetings-table td.first {
        text-align: right;
        background-color: #647881;
        color: white;
        border-collapse: collapse;
        border: 1px dashed aliceblue;
    }
    .meetings-table td {
        outline: 1px solid #dcdcdc;
        text-align: center;
        padding: 0.625rem;
        column-gap: 5rem;
    }
`;

export default CalendarStyleWrapper;