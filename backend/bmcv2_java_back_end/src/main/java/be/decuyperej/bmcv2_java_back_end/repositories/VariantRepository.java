package be.decuyperej.bmcv2_java_back_end.repositories;

import be.decuyperej.bmcv2_java_back_end.models.Variant;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VariantRepository extends MongoRepository<Variant, String> {
}
