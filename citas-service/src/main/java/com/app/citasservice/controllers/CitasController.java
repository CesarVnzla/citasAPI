package com.app.citasservice.controllers;

import com.app.citasservice.models.Cita;
import com.app.citasservice.services.ICitasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/home")
public class CitasController {

    @Autowired
    private ICitasService citasService;

    @PostMapping("/citas")
    public Cita guardarCita(@RequestBody Cita cita){
        citasService.guardar(cita);
        return cita;
    }

    @GetMapping("/citas")
    private List<Cita> buscarCitas(){
       return citasService.buscarTodas();
    }


}
