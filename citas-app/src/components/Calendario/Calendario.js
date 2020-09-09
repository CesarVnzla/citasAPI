import React from "react";
import Calendar from '@atlaskit/calendar';

export default function Calendario(props) {

    const {invalidMonths} = props;
    return (
        <div  style={{
            display: 'flex',
            width: '400px',
            maxWidth: '100%',
            margin: '25px',
            flexDirection: 'column',
            marginTop: '200px',
            float: 'right',

        }}>
            <Calendar
                disabled={invalidMonths}
                defaultPreviouslySelected={''}
                defaultSelected={''}
                defaultMonth={9}
                defaultYear={2020}
                innerProps={{
                    style: {
                        border: '1px solid red',
                        display: 'inline-block',
                    },
                }}
                testId={'calendar'}

            />
        </div>
    );
}