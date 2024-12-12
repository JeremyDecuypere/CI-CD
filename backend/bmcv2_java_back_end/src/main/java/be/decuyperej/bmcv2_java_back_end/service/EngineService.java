package be.decuyperej.bmcv2_java_back_end.service;

import be.decuyperej.bmcv2_java_back_end.models.Engine;
import be.decuyperej.bmcv2_java_back_end.repositories.EngineRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EngineService {
    @Autowired
    private EngineRepository engineRepository;

    public List<Engine> getAllEngines() {
        return engineRepository.findAll();
    }

    public Engine save(@Valid Engine engine){
        return engineRepository.save(engine);
    }

    public Engine getEngineById(String id) {
        return engineRepository.findById(id).orElse(null);
    }

    public void delete(String id){
        engineRepository.deleteById(id);
    }

    public Engine getEngineByEngineCode(String engineCode) {
        return engineRepository.findAll().stream()
                .filter(engine -> engine.getEngineCode().equalsIgnoreCase(engineCode))
                .findFirst()
                .orElse(null);
    }

}
