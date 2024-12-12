package be.decuyperej.bmcv2_java_back_end.controllers;
import be.decuyperej.bmcv2_java_back_end.models.Engine;
import be.decuyperej.bmcv2_java_back_end.models.Model;
import be.decuyperej.bmcv2_java_back_end.models.Variant;
import be.decuyperej.bmcv2_java_back_end.models.VariantCreationRequest;
import be.decuyperej.bmcv2_java_back_end.service.VariantService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/variants")
public class VariantController {
    @Autowired
    private VariantService variantService;

    @GetMapping
    public List<Variant> getAllVariants() {
        return variantService.getAllVariants();
    }

    @GetMapping("/{id}")
    public List<Variant> getVariantByModelId(@NotNull @NotBlank @PathVariable String id) {
        return variantService.getVariantsByModelId(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteVariant(@Valid @NotNull @PathVariable String id){
        variantService.delete(id);
    }

    @PutMapping("/update")
    public void updateVariant(@NotNull @Valid @RequestBody Variant updatedVariant){
        variantService.update(updatedVariant);
    }


    @PostMapping("/create")
    public void createVariant(@NotNull @Valid @RequestBody VariantCreationRequest request){
        Variant Variant = request.getVariant();
        Model Model = request.getModel();
        Engine Engine = request.getEngine();
        variantService.createVariant(Variant,Model,Engine);
    }
}
