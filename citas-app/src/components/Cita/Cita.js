import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { format } from 'date-fns';
import Comentario from "../Comentario";
import Tabla from "../Tabla";
import Calendario from "../Calendario";
import clienteAxios from "../../config/axios";
import {Headers} from "@atlaskit/table-tree";

const Citas = () => {

    const [fecha, setFecha] = useState(Date.now());
    const [comments, setValueComments] = useState('');
    const [invalid, setInvalid] = useState(false);
    const [invalidMonths, setInvalidMonths] = useState([]);
    const [citas, setCitas] =useState([]);
    const [consultado, setConsultado] =useState(false);
    const [mensajeError, setMensajeError] =useState('');

    useEffect(() => {
        if (!consultado){
            consultarAPI();
            setConsultado(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = async (e) => {
        let fechaFormat = format(fecha, 'YYYY-MM-DD');
        if (invalidMonths.indexOf(fechaFormat) >= 0) {
            setInvalid(true);
            setMensajeError('La fecha es invalida');
            return;
        }
        if (fecha.trim() === '' || comments.trim() === ''){
            setInvalid(true);
            setMensajeError('Todos los campos son Obligatorios');
            return;
        }

        try {
            const body = {
                fecha: fecha,
                comentario: comments
            };
            await clienteAxios.post('/home/citas', body).then( resp => {
                if(resp.data.code === 404){
                }else{
                    setInvalidMonths([
                        ...invalidMonths,
                        fechaFormat
                    ]);
                    consultarAPI();
                    setInvalid(false);
                }
            });
            setFecha('');
            setValueComments('');
        }catch (e) {
            console.log(e);
        }
    };

    const consultarAPI = async () => {
        try {
            const citas = await clienteAxios.get('/home/citas');
            let fechas = [];
            citas.data.forEach((cita) => {
               fechas.push(format(cita.fecha, 'YYYY-MM-DD'))
            });
            setInvalidMonths(fechas);
            setCitas(citas.data);

        }catch (e) {
            console.log(e);
        }
    };

    const handleChange = (value) => setFecha(value);

    return (
        <>
            <div style={{
                display: 'flex',
                width: '100px',
                height: '50px',
                maxWidth: '100%',
                margin: '0 auto',
                flexDirection: 'column',
                marginTop: '0px',
                textAlign: 'center'
            }}>
                <h1>Citas</h1>
            </div>

            <Comentario handleSubmit={handleSubmit}
                        fecha={fecha}
                        setFecha={setFecha}
                        comments={comments}
                        setValueComments={setValueComments}
                        invalidMonths={invalidMonths}
                        setInvalidMonths={setInvalidMonths}
                        handleChange={handleChange}
                        invalid={invalid}
                        mensajeError={mensajeError}
            />
            {invalid && (<p/>)}

            <Tabla citas={citas}/>

            {invalidMonths && (
                <Calendario  invalidMonths={invalidMonths} />
            )}


        </>
    );
};
export default withRouter(Citas);