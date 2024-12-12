package be.decuyperej.bmcv2_java_back_end.controllers;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import be.decuyperej.bmcv2_java_back_end.service.*;
import be.decuyperej.bmcv2_java_back_end.models.*;

@RestController
@RequestMapping("/api/models")
public class ModelController {
    @Autowired
    private ModelService modelService;

    @GetMapping
    public List<Model> getAllModels() {
        return modelService.getAllModels();
    }


    @GetMapping("/{id}")
    public Model getModelById(@NotNull @NotBlank @PathVariable String id) {
        return modelService.getModelById(id);
    }
}
