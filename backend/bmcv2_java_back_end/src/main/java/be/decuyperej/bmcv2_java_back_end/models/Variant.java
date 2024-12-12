package be.decuyperej.bmcv2_java_back_end.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Variants")
public class Variant {
    @Id
    private String id;
    private String model_id;
    private String engine_id;
    @JsonProperty("model_name")
    @NotNull
    private String model_name;


    public String getId() {
        return id;
    }

    public String getEngineId() {
        return engine_id;
    }

    public String getModelName() {
        return model_name;
    }

    public String getModelId() {
        return model_id;
    }

    public void setEngineId(String id) {
        engine_id = id;
    }

    public void setModelId(String id){
        model_id = id;
    }
}
