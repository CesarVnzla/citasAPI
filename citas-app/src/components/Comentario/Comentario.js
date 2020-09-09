import React, { Fragment } from "react";

import Button from '@atlaskit/button';
import Form, { Field, FormFooter } from '@atlaskit/form';
import TextArea from '@atlaskit/textarea';
import { DateTimePicker } from '@atlaskit/datetime-picker';

export default function Comentario(props) {

    const {handleSubmit, comments, setValueComments, handleChange, invalid, mensajeError} = props;

    const fecharDefault = Date.now();


    return (
        <div  style={{
            display: 'flex',
            width: '400px',
            height: '100px',
            maxWidth: '100%',
            margin: '0 auto',
            flexDirection: 'column',
            marginTop: '50px',

        }}>

            <Form onSubmit={handleSubmit}>
                {({ formProps }) => (
                    <form {...formProps}>
                        <Field name="DOB" label="Seleccione la Fecha y hora" defaultValue="" isRequired>
                            {({ fieldProps, error })=> (
                                <Fragment>
                                    <DateTimePicker
                                        onChange={handleChange}
                                        defaultValue={fecharDefault}
                                    />
                                </Fragment>
                            )}
                        </Field>
                        {invalid && (<p>{mensajeError}</p>)}
                        <Field name="example-text" defaultValue=" ">
                            {({ fieldProps }) => (
                                <Fragment>
                                    <TextArea style={{height:'100px'}} placeholder="Comentario..." value={comments} onChange={(e) => setValueComments(e.target.value)} />
                                </Fragment>
                            )}
                        </Field>
                        <FormFooter>
                            <Button type="submit" appearance="primary">
                                Guardar
                            </Button>
                        </FormFooter>
                    </form>

                )}
            </Form>

        </div>
    );
}