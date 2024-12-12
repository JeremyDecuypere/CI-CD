package be.decuyperej.bmcv2_java_back_end.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Models")
public class Model {

    @Id
    private String id;
    @NotNull
    private String name;
    @JsonProperty("description")
    @NotNull
    @NotBlank
    private String description;
    @JsonProperty("details")
    @NotNull
    @NotBlank
    private String details;

    public String getId() {
        return id;
    }


    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getDetails() {
        return details;
    }
}
