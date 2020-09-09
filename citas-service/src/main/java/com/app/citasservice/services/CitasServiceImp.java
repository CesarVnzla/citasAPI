package com.app.citasservice.services;

import com.app.citasservice.models.Cita;
import com.app.citasservice.repository.CitaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CitasServiceImp implements ICitasService {

    @Autowired
    private CitaRepository citaRepository;

    @Override
    public Cita guardar(Cita cita) {
        return citaRepository.save(cita);
    }

    @Override
    public List<Cita> buscarTodas() {
        return citaRepository.findAll();
    }
}
