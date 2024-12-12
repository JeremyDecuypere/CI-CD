package be.decuyperej.bmcv2_java_back_end.service;

import be.decuyperej.bmcv2_java_back_end.models.Engine;
import be.decuyperej.bmcv2_java_back_end.models.Model;
import be.decuyperej.bmcv2_java_back_end.models.Variant;
import be.decuyperej.bmcv2_java_back_end.repositories.EngineRepository;
import be.decuyperej.bmcv2_java_back_end.repositories.ModelRepository;
import be.decuyperej.bmcv2_java_back_end.repositories.VariantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VariantService {
    @Autowired
    private VariantRepository variantRepository;
    @Autowired
    private EngineService engineService;
    @Autowired
    private ModelService modelService;

    public List<Variant> getAllVariants() {
        return variantRepository.findAll();
    }

    public List<Variant> getVariantsByModelId(String modelId){
        return variantRepository.findAll().stream()
                .filter(variant -> modelId.equals(variant.getModelId()))
                .toList();
    }

    public void createVariant(Variant newVariant, Model newModel, Engine newEngine){
        Engine savedEngine;
        Model savedModel;
        for(int engineIndex = 0; engineIndex < engineService.getAllEngines().size(); engineIndex++ ){
            if(engineService.getAllEngines().get(engineIndex).getEngineCode().equalsIgnoreCase(newEngine.getEngineCode())){
                newVariant.setEngineId(engineService.getEngineByEngineCode(newEngine.getEngineCode()).getId());
            }
        }
        for(int modelIndex = 0; modelIndex < modelService.getAllModels().size(); modelIndex++){
            if(modelService.getAllModels().get(modelIndex).getName().substring(0,3).equalsIgnoreCase(newModel.getName().substring(0,3))){
                newVariant.setModelId(modelService.getModelByModelPrefix(newModel.getName().substring(0,3)).getId());
            }
        }
        if(newVariant.getModelId() == null && newVariant.getEngineId() == null){
            savedEngine = engineService.save(newEngine);
            savedModel = modelService.save(newModel);
            newVariant.setEngineId(savedEngine.getId());
            newVariant.setModelId(savedModel.getId());
        }

        if(variantRepository.findAll().stream()
                        .noneMatch(variant -> newVariant.getModelName().equalsIgnoreCase(variant.getModelName())
                                && newVariant.getModelId().equalsIgnoreCase(variant.getModelId())
                                && newVariant.getEngineId().equalsIgnoreCase(variant.getEngineId()))
        ){
            variantRepository.save(newVariant);
        }

    }

    public void delete(String id){
        Optional<Variant> toDelete;
        if(variantRepository.findById(id).isPresent()){
            toDelete = variantRepository.findById(id);
            if(findAllVariantsWithSameEngine(toDelete.get().getEngineId()).size() == 1){
                engineService.delete(toDelete.get().getEngineId());
            }
            if(findAllVariantsWithSameModel(toDelete.get().getModelId()).size() == 1){
                modelService.delete(toDelete.get().getModelId());
            }
        }
        variantRepository.deleteById(id);
    }

    public void update(Variant variant){
        variantRepository.insert(variant);
    }

    private List<Variant> findAllVariantsWithSameEngine(String engineId){
        ArrayList<Variant> foundVariants = new ArrayList<>();
        for(int i =0; i < variantRepository.findAll().size(); i++){
            if(getAllVariants().get(i).getEngineId().equalsIgnoreCase(engineId)){
                foundVariants.add(getAllVariants().get(i));
            }
        }
        return foundVariants;
    }

    private List<Variant> findAllVariantsWithSameModel(String modelId){
        ArrayList<Variant> foundVariants = new ArrayList<>();
        for(int i =0; i < variantRepository.findAll().size(); i++){
            if(getAllVariants().get(i).getModelId().equalsIgnoreCase(modelId)){
                foundVariants.add(getAllVariants().get(i));
            }
        }
        return foundVariants;
    }


}
