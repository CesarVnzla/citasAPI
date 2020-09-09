import React from "react";
import TableTree, { Cell, Header, Headers, Row, Rows } from '@atlaskit/table-tree';
import { format } from 'date-fns';

export default function Calendario(props) {

    const {citas} = props;
    return (
        <div style={{
            display: 'flex',
            width: '400px',
            maxWidth: '100%',
            margin: '25px',
            flexDirection: 'column',
            marginTop: '200px',
            float: 'left',

        }}>

            {citas.length === 0 && (<p>Agregar citas</p>)}
            {citas.length > 0 && (
            <TableTree>
                <Headers>
                    <Header width={300}>Fecha y Hora</Header>
                    <Header width={200}>Detalle</Header>
                </Headers>
                <Rows

                    items={citas}
                    render={({ fecha, comentario }) => (
                        <Row itemId={fecha} hasChildren={false}>
                            <Cell singleLine>{format(fecha, 'YYYY-MM-DD HH:mm')}</Cell>
                            <Cell>
                                {comentario}
                            </Cell>
                        </Row>
                    )}
                />
            </TableTree>
            )}
        </div>
    );
}