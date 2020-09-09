package com.app.citasservice.services;

import com.app.citasservice.models.Cita;

import java.util.List;

public interface ICitasService {

    Cita guardar(Cita cita);

    List<Cita> buscarTodas();
}
