package be.decuyperej.bmcv2_java_back_end.service;

import be.decuyperej.bmcv2_java_back_end.models.Engine;
import be.decuyperej.bmcv2_java_back_end.models.Model;
import be.decuyperej.bmcv2_java_back_end.repositories.ModelRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ModelService {
    @Autowired
    private ModelRepository modelRepository;

    public List<Model> getAllModels() {
        return modelRepository.findAll();
    }

    public void createModel(Model newModel){
        modelRepository.insert(newModel);
    }

    public Model save(@Valid Model model){
        return modelRepository.save(model);
    }

    public Model getModelByModelPrefix(String modelPrefix) {
        return  modelRepository.findAll().stream().filter(model -> model.getName().substring(0,3).equalsIgnoreCase(modelPrefix)).findFirst().orElse(null);
    }


    public Model getModelById(String id) {
        return modelRepository.findById(id).orElse(null);
    }

    public void delete(String modelId) {
        modelRepository.deleteById(modelId);
    }
}
