package be.decuyperej.bmcv2_java_back_end.controllers;
import be.decuyperej.bmcv2_java_back_end.models.Engine;
import be.decuyperej.bmcv2_java_back_end.service.EngineService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/engines")
public class EngineController {
    @Autowired
    private EngineService engineService;

    @GetMapping
    public List<Engine> getAllEngines() {
        return engineService.getAllEngines();
    }

    @GetMapping("/{id}")
    public Engine getEngineById(@NotNull @NotBlank @PathVariable String id) {
        return engineService.getEngineById(id);
    }
}
