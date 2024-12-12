package be.decuyperej.bmcv2_java_back_end.repositories;

import be.decuyperej.bmcv2_java_back_end.models.Model;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ModelRepository extends MongoRepository<Model, String> {
}
