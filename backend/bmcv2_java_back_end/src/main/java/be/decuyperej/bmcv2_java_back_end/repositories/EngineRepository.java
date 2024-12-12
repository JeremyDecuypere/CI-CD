package be.decuyperej.bmcv2_java_back_end.repositories;

import be.decuyperej.bmcv2_java_back_end.models.Engine;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EngineRepository extends MongoRepository<Engine, String> {



}